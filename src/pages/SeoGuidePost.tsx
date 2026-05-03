import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, Copy, ArrowRight, Github, Twitter } from "lucide-react";

// Reusable Code Block
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
      <pre className="p-4 overflow-x-auto bg-zinc-950 dark:bg-black/50">
        <code className="font-mono text-[13px] leading-relaxed text-zinc-50">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default function SeoGuidePost() {
  const sampleCode = `document.title = "SEO Title";

// Always update meta tags!
document.querySelector('meta[name="description"]')
  .setAttribute(
    "content", 
    "Learn SEO in 5 minutes!"
  );`;

  // SEO Update
  useEffect(() => {
    document.title = "The Ultimate SEO Guide for Developers | saurabh.dev";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn how to rank your React websites on Google using basic HTML and Vite.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="col-span-1 lg:col-span-8">
            <header className="mb-12">
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em] mb-4 flex items-center gap-2">
                <span>May 02, 2026</span>
                <span>·</span>
                <span>5 min read</span>
                <span>·</span>
                <span className="text-accent">SEO</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-6">
                The Ultimate SEO Guide for Developers
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Getting your React site to rank on Google is easier than you think. You don't need Next.js to get started.
              </p>
              
              {/* HERO IMAGE */}
              <div className="rounded-lg overflow-hidden border border-border mt-8">
                <img 
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5f1a73f7d88366f2c92ff49696ffd2242172b759.jpg" 
                  alt="SEO Concept Diagram" 
                  className="w-full h-auto object-cover aspect-[16/9] bg-muted m-0"
                  loading="lazy"
                />
              </div>
            </header>

            <article className="prose dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-headings:font-medium prose-headings:tracking-tight prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-primary">
              <h2 id="html" className="mt-12 scroll-mt-24">1. Write Good HTML</h2>
              <p>
                Googlebot loves semantic HTML. Make sure you use proper <code>{"<h1>"}</code> and <code>{"<h2>"}</code> tags. Because we are using Tailwind Typography, this list will look great:
              </p>
              
              {/* SECONDARY IMAGE */}
              <figure className="my-8 not-prose">
                <div className="rounded-md overflow-hidden border border-border">
                  <img 
                    src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b2010075357d15b0ebf9783ed2a91cd36c8beb7f.jpg" 
                    alt="Basic HTML Structure" 
                    className="w-full h-auto object-cover bg-muted block m-0"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-center font-mono text-[11px] text-muted-foreground mt-3">
                  Figure 1: Visualizing proper semantic structure.
                </figcaption>
              </figure>
              
              <ul>
                <li>Use descriptive titles</li>
                <li>Add meta descriptions</li>
                <li>Ensure fast load times</li>
              </ul>

              <h2 id="meta" className="mt-12 scroll-mt-24">2. Update Meta Tags</h2>
              <p>
                React Helmet Async allows you to change the <strong>title</strong> of your page dynamically. If you don't want to use a package, you can just use a `useEffect` hook like this:
              </p>

              <CodeBlock 
                code={sampleCode} 
                language="javascript" 
                filename="seo-utils.js" 
              />

              <h2 id="factors" className="mt-12 scroll-mt-24">3. Table of Importance</h2>
              <p>
                Here is a breakdown of the core vitals you need to focus on for maximum impact:
              </p>

              <div className="overflow-x-auto my-8 border border-border rounded-md not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border">
                    <tr>
                      <th className="px-4 py-3 font-normal border-r border-border">Factor</th>
                      <th className="px-4 py-3 font-normal border-r border-border">Impact Level</th>
                      <th className="px-4 py-3 font-normal">Effort</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground/90">
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 border-r border-border font-medium">Title Tags</td>
                      <td className="px-4 py-3 border-r border-border text-emerald-600 dark:text-emerald-500">Critical</td>
                      <td className="px-4 py-3 font-mono text-xs">Low</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 border-r border-border font-medium">Semantic HTML</td>
                      <td className="px-4 py-3 border-r border-border text-emerald-600 dark:text-emerald-500">High</td>
                      <td className="px-4 py-3 font-mono text-xs">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          {/* RIGHT SIDE: Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-3 lg:col-start-10">
            <div className="sticky top-24 space-y-10">
              
              <div className="border border-border bg-surface/50 p-5 rounded-md">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-4">
                  On this page
                </h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li>
                    <a href="#html" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      1. Write Good HTML
                    </a>
                  </li>
                  <li>
                    <a href="#meta" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      2. Update Meta Tags
                    </a>
                  </li>
                  <li>
                    <a href="#factors" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      3. Table of Importance
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
                  Full-stack developer building micro-SaaS products and sharing the journey. 
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

              <div className="border border-border bg-surface p-5 rounded-md text-center">
                <div className="w-8 h-8 mx-auto bg-primary/10 rounded border border-primary/20 flex items-center justify-center mb-3">
                  <span className="text-primary text-xs">✨</span>
                </div>
                <h3 className="font-medium text-sm mb-2">Try Schema Generator</h3>
                <p className="text-[11px] text-muted-foreground mb-4">
                  Build valid JSON-LD in seconds to boost your SEO.
                </p>
                <Link to="/tools/schema-generator" className="inline-flex items-center justify-center gap-2 w-full text-xs font-mono uppercase tracking-wider bg-foreground text-background py-2 hover:bg-foreground/90 transition-colors">
                  Open Tool <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}