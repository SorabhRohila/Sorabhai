import { useState } from "react";
import { Link2, FileText, ArrowRight, Copy, Download, ExternalLink, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Mode = "url" | "text";
type SchemaType = "Article" | "Product" | "FAQ" | "LocalBusiness";

const SCHEMA_TYPES: { key: SchemaType; label: string; n: string }[] = [
  { key: "Article", label: "Article", n: "01" },
  { key: "Product", label: "Product", n: "02" },
  { key: "FAQ", label: "FAQ", n: "03" },
  { key: "LocalBusiness", label: "Local Biz", n: "04" },
];

const STEPS = ["analyzing content", "extracting data", "generating schema"];

function syntaxHighlight(json: string) {
  return json
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?)/g,
      (m) => {
        let cls = "text-emerald-600 dark:text-emerald-400";
        if (/^"/.test(m)) cls = /:$/.test(m) ? "text-foreground font-medium" : "text-amber-700 dark:text-amber-300";
        else if (/true|false/.test(m)) cls = "text-fuchsia-700 dark:text-fuchsia-400";
        else if (/null/.test(m)) cls = "text-rose-700 dark:text-rose-400";
        return `<span class="${cls}">${m}</span>`;
      });
}

export const SchemaGenerator = () => {
  const [mode, setMode] = useState<Mode>("url");
  const [schemaType, setSchemaType] = useState<SchemaType>("Article");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const runSteps = () => {
    setStep(0);
    const a = setTimeout(() => setStep(1), 800);
    const b = setTimeout(() => setStep(2), 1700);
    return () => { clearTimeout(a); clearTimeout(b); };
  };

  const generate = async () => {
    if (!input.trim()) return toast.error(mode === "url" ? "Enter a URL" : "Paste some text");
    if (mode === "url" && !/^https?:\/\//i.test(input.trim())) return toast.error("URL must start with http(s)://");

    setLoading(true);
    setResult(null);
    const cleanup = runSteps();

    try {
      const { data, error } = await supabase.functions.invoke("generate-schema", {
        body: { input: input.trim(), mode, schemaType },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(JSON.stringify(data.schema, null, 2));
      toast.success("Schema generated");
    } catch (e: any) {
      const msg = e?.message || "Failed to generate";
      if (msg.toLowerCase().includes("rate")) toast.error("Rate limit hit — try again shortly");
      else if (msg.toLowerCase().includes("credit")) toast.error("AI credits exhausted");
      else toast.error(msg);
    } finally {
      cleanup();
      setLoading(false);
    }
  };

  const copy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success("Copied");
    setTimeout(() => setCopied(false), 1600);
  };

  const download = () => {
    if (!result) return;
    const blob = new Blob([`<script type="application/ld+json">\n${result}\n</script>`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `schema-${schemaType.toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="generator" className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-4">
            <div className="label mb-3">§ 02 — Generator</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Paste it in.<br />Ship it out.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:pt-12">
            <p className="text-muted-foreground max-w-lg">
              Choose a source and a schema type. We do the rest. Output is valid JSON-LD ready to drop into your <span className="font-mono text-foreground text-sm">&lt;head&gt;</span>.
            </p>
          </div>
        </div>

        {/* Generator panel */}
        <div className="border border-border bg-card">
          {/* Top control bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 border-b border-border">
            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => setMode("url")}
                className={`px-3 py-1.5 flex items-center gap-1.5 transition-colors ${
                  mode === "url" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Link2 className="w-3 h-3" /> URL
              </button>
              <button
                onClick={() => setMode("text")}
                className={`px-3 py-1.5 flex items-center gap-1.5 transition-colors ${
                  mode === "text" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <FileText className="w-3 h-3" /> Text
              </button>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {SCHEMA_TYPES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setSchemaType(t.key)}
                  className={`px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider border transition-colors ${
                    schemaType === t.key
                      ? "border-foreground bg-foreground text-background"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  <span className="opacity-60 mr-1">{t.n}</span>{t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-5 border-b border-border">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-muted-foreground pt-3 select-none hidden sm:inline">$</span>
              {mode === "url" ? (
                <input
                  type="url"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="https://your-site.com/article"
                  onKeyDown={(e) => e.key === "Enter" && generate()}
                  className="flex-1 bg-transparent font-mono text-sm md:text-base outline-none py-2.5 placeholder:text-muted-foreground/60"
                />
              ) : (
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste your article, product description, or content here..."
                  rows={5}
                  className="flex-1 bg-transparent font-mono text-sm outline-none py-2 resize-none placeholder:text-muted-foreground/60"
                />
              )}
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 bg-surface">
            <div className="font-mono text-[11px] text-muted-foreground">
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  {STEPS[step]}<span className="animate-blink">_</span>
                </span>
              ) : (
                <span>★ free · 3 generations / day · no signup</span>
              )}
            </div>
            <button
              onClick={generate}
              disabled={loading}
              className="btn-primary !py-2 !px-4 disabled:opacity-60"
            >
              {loading ? "Generating..." : <>Generate <ArrowRight className="w-3.5 h-3.5" /></>}
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6 border border-border bg-card animate-fade-up">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-border">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                schema-{schemaType.toLowerCase()}.jsonld
                <span className="text-muted-foreground/60">· {(new Blob([result]).size / 1024).toFixed(2)}kb</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={copy} className="btn-ghost !py-1.5 !px-2.5 !text-[11px] uppercase tracking-wider">
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <button onClick={download} className="btn-ghost !py-1.5 !px-2.5 !text-[11px] uppercase tracking-wider">
                  <Download className="w-3 h-3" /> Download
                </button>
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-1.5 !px-2.5 !text-[11px] uppercase tracking-wider"
                >
                  <ExternalLink className="w-3 h-3" /> Test
                </a>
              </div>
            </div>
            <pre
              className="font-mono text-[12.5px] leading-[1.7] p-5 overflow-auto max-h-[520px]"
              dangerouslySetInnerHTML={{ __html: syntaxHighlight(result) }}
            />
          </div>
        )}
      </div>
    </section>
  );
};
