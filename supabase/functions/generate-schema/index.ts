import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SCHEMA_PROMPTS: Record<string, string> = {
  Article: "Generate JSON-LD schema of @type 'Article' with headline, author, datePublished, image, publisher, description, mainEntityOfPage.",
  Product: "Generate JSON-LD schema of @type 'Product' with name, image, description, brand, offers (price, priceCurrency, availability), aggregateRating if inferable.",
  FAQ: "Generate JSON-LD schema of @type 'FAQPage' with a mainEntity array of Question/Answer pairs extracted from the content.",
  LocalBusiness: "Generate JSON-LD schema of @type 'LocalBusiness' with name, address, telephone, openingHours, geo, image, priceRange.",
};

async function fetchUrlContent(url: string): Promise<string> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 SchemaAI Bot" } });
    const html = await res.text();
    // Strip scripts/styles, collapse whitespace, take first ~8000 chars
    const cleaned = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 8000);
    return cleaned;
  } catch (e) {
    throw new Error(`Failed to fetch URL: ${e instanceof Error ? e.message : "unknown"}`);
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { input, mode, schemaType } = await req.json();
    if (!input || typeof input !== "string") {
      return new Response(JSON.stringify({ error: "Missing input" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const content = mode === "url" ? await fetchUrlContent(input.trim()) : input.slice(0, 8000);
    const typeKey = (schemaType || "Article") as keyof typeof SCHEMA_PROMPTS;
    const typeInstruction = SCHEMA_PROMPTS[typeKey] || SCHEMA_PROMPTS.Article;

    const systemPrompt = `You are SchemaAI, an expert at generating valid Schema.org JSON-LD markup for SEO. 
Always return ONLY valid minified JSON-LD (no markdown fences, no commentary). 
The root must include "@context": "https://schema.org". 
Infer values from the supplied content. If a field is unknown, omit it rather than inventing.`;

    const userPrompt = `${typeInstruction}\n\nSource ${mode === "url" ? "URL content" : "text"}:\n"""${content}"""\n\nReturn ONLY the JSON-LD object.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (response.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (response.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }), {
        status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!response.ok) {
      const t = await response.text();
      console.error("AI gateway error", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    let raw = data.choices?.[0]?.message?.content ?? "";
    // Strip code fences if present
    raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Attempt to extract first JSON object
      const m = raw.match(/\{[\s\S]*\}/);
      if (m) {
        try { parsed = JSON.parse(m[0]); } catch { parsed = { raw }; }
      } else {
        parsed = { raw };
      }
    }

    return new Response(JSON.stringify({ schema: parsed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-schema error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
