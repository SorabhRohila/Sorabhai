import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, Copy, ArrowRight, Github, Twitter } from "lucide-react";

// Reusable Code Block Component
const CodeBlock = ({ code, language, filename }: { code: string; language: string; filename?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 border border-border bg-surface rounded-md overflow-hidden not-prose">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border border-border" />
            <div className="w-2.5 h-2.5 rounded-full border border-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground ml-2">{filename || language}</span>
        </div>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-zinc-950 dark:bg-black/50 m-0">
        <code className="font-mono text-[13px] leading-relaxed text-zinc-50">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default function AiWebsitesPost() {
  const lovablePrompt = `Create a modern, high-converting website for a local [business type] named [business name] located in [city].

Include:
- Clean and professional design
- Homepage, About, Services, Contact sections
- SEO-friendly content
- Customer reviews section
- Call-to-action buttons (Call Now / Book Now / WhatsApp)
- Mobile-friendly layout

Make it look premium so the business owner feels confident to buy.`;

  // SEO Update
  useEffect(() => {
    document.title = "How to Make ₹15K–₹20K by Creating AI Websites | saurabh.dev";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn a beginner-friendly side hustle: find local businesses, use Lovable AI to build them a website in 20 minutes, and charge ₹15K–₹20K.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Helmet>
        <title>How to Make ₹15K–₹20K by Creating AI Websites | saurabh.dev</title>
        <meta name="description" content="Learn a beginner-friendly side hustle: find local businesses, use Lovable AI to build them a website in 20 minutes, and charge ₹15K–₹20K." />
      </Helmet>

      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="col-span-1 lg:col-span-8">
            <header className="mb-12">
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em] mb-4 flex items-center gap-2">
                <span>May 11, 2026</span>
                <span>·</span>
                <span>4 min read</span>
                <span>·</span>
                <span className="text-accent">SIDE HUSTLE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-6">
                💸 How to Make ₹15K–₹20K by Creating AI Websites (Beginner Friendly)
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                You don't need to be an expert coder to start a web design agency today. Here is the exact blueprint to leverage AI tools and start closing local clients.
              </p>
              
              {/* HERO IMAGE */}
              <div className="rounded-lg overflow-hidden border border-border mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Laptop showing website analytics" 
                  className="w-full h-auto object-cover aspect-[16/9] bg-muted m-0"
                  loading="lazy"
                />
              </div>
            </header>

            <article className="prose dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-headings:font-medium prose-headings:tracking-tight prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-primary">
              
              <h2 id="step-1" className="mt-12 scroll-mt-24">Step 1: Find Businesses Without a Website</h2>
              <p>
                There are thousands of local businesses losing customers every day because they don't have an online presence. Open Google and search for keywords like:
              </p>
              <ul>
                <li>“salon near me”</li>
                <li>“gym in [city]”</li>
                <li>“cafes in [area]”</li>
              </ul>
              <p>
                <strong>👉 Look for businesses that:</strong><br />
                1. Don’t have a website listed on their Google Maps profile.<br />
                2. Have a website, but it looks outdated, broken on mobile, or extremely poor quality.<br />
                <em>These are your ideal clients.</em>
              </p>

              <h2 id="step-2" className="mt-12 scroll-mt-24">Step 2: Collect Their Information</h2>
              <p>
                You don't need to ask them for content right away. Open their Google Business profile and copy everything you can find:
              </p>
              <ul>
                <li>Business name</li>
                <li>Services offered</li>
                <li>Address and operating hours</li>
                <li>Phone number</li>
                <li>Top reviews (for social proof)</li>
                <li>Photos of their shop</li>
              </ul>
              <p>👉 <em>This is all the information you need to build their website.</em></p>

              <h2 id="step-3" className="mt-12 scroll-mt-24">Step 3: Use an AI Website Builder</h2>
              <p>
                Go to an AI website builder like <strong>Lovable</strong>. You are going to use the information you gathered to generate a fully functioning website in seconds.
              </p>
              <p>Paste the business info and use this exact prompt below to generate a high-quality result:</p>

              <CodeBlock 
                code={lovablePrompt} 
                language="prompt" 
                filename="lovable-prompt.txt" 
              />

              <h2 id="step-4" className="mt-12 scroll-mt-24">Step 4: Customize & Polish</h2>
              <p>
                The AI will do 90% of the heavy lifting, but the final 10% is what makes it sell. Take a few minutes to:
              </p>
              <ul>
                <li>Add real images of the business (or high-quality AI/stock images if needed)</li>
                <li>Fix small details or weird text generated by the AI</li>
                <li>Ensure the colors match their shop's branding</li>
              </ul>
              <p>👉 <em>This entire process takes hardly 20–30 minutes.</em></p>

              <h2 id="step-5" className="mt-12 scroll-mt-24">Step 5: Pitch the Business</h2>
              <p>
                Now that you have a beautiful, ready-to-go website, contact the business owner via Call, WhatsApp, or Instagram DMs. 
              </p>
              <p className="bg-surface border border-border p-4 rounded-md italic">
                “Hi [Name], I noticed your business didn't have a website, so I took the liberty of creating one for you to help you get more customers online. Would you like me to send you the link to see it?”
              </p>
              <p>Because you have already built it, they have zero risk in saying "yes" to looking at it.</p>

              <h2 id="step-6" className="mt-12 scroll-mt-24">Step 6: Close the Deal 💰</h2>
              <p>
                Show them the website. Walk them through how it works on mobile. Explain the core benefits: <strong>more leads, higher trust, and better local visibility</strong>.
              </p>
              <p>
                Since the website looks premium and is already finished, you can confidently charge <strong>₹15K–₹20K</strong> easily. Most agencies charge ₹50K+ and take weeks. You deliver instantly.
              </p>

              <hr className="border-border my-12" />

              <div className="p-6 bg-accent/10 border border-accent/20 rounded-md not-prose">
                <h3 className="text-xl font-bold text-foreground mt-0 mb-2 flex items-center gap-2">
                  🚀 Pro Tip:
                </h3>
                <p className="text-foreground/90 m-0">
                  Once you close 2–3 clients in a specific niche (like salons), you can save that exact website template and scale this into a full web design agency, selling the same core structure over and over again!
                </p>
              </div>

            </article>
          </div>

          {/* RIGHT SIDE: Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-3 lg:col-start-10">
            <div className="sticky top-24 space-y-10">
              
              <div className="border border-border bg-surface/50 p-5 rounded-md">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-4">
                  The Blueprint
                </h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li>
                    <a href="#step-1" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      1. Find Businesses
                    </a>
                  </li>
                  <li>
                    <a href="#step-2" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      2. Collect Info
                    </a>
                  </li>
                  <li>
                    <a href="#step-3" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      3. Use AI Builder
                    </a>
                  </li>
                  <li>
                    <a href="#step-4" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      4. Polish Design
                    </a>
                  </li>
                  <li>
                    <a href="#step-5" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      5. Pitch Client
                    </a>
                  </li>
                  <li>
                    <a href="#step-6" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      6. Close the Deal
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border border-border bg-surface/50 p-5 rounded-md">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-serif text-xl mb-4">
                  S
                </div>
                <h3 className="font-medium mb-2">Written by Saurabh</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Building micro-SaaS and sharing actionable side hustle blueprints.
                </p>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}