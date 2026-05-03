import { useState } from "react";
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
    <div className="my-8 border border-border bg-surface rounded-md overflow-hidden">
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
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-[13px] leading-relaxed text-foreground/90">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default function BlogPostTemplate() {
  const sampleCode = `function calculateGrowth(oldMetrics, newMetrics) {
  const diff = newMetrics - oldMetrics;
  const percentage = (diff / oldMetrics) * 100;
  
  return {
    status: percentage > 0 ? 'growth' : 'decline',
    value: percentage.toFixed(2) + '%'
  };
}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        
        {/* GRID LAYOUT: 1 column on mobile, 12 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT SIDE: Main Article Content (Spans 8 columns on desktop) */}
          <div className="col-span-1 lg:col-span-8">
            <header className="mb-12">
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em] mb-4 flex items-center gap-2">
                <span>May 1, 2026</span>
                <span>·</span>
                <span>8 min read</span>
                <span>·</span>
                <span className="text-accent">Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-6">
                The ultimate guide to building scalable React applications.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A comprehensive look at architecture patterns, data fetching, and state management for modern web apps.
              </p>
            </header>

            <article className="prose prose-invert max-w-none">
              <p className="text-base text-foreground/80 leading-loose mb-6">
                When you're first starting out, building a simple React app feels like magic. But as your application grows, you start running into issues. Components become too large, props get drilled down ten levels deep, and your once-snappy app begins to slow down.
              </p>

              <h2 id="implementation" className="text-2xl font-medium mt-12 mb-4 tracking-tight scroll-mt-24">1. The Code Implementation</h2>
              <p className="text-base text-foreground/80 leading-loose mb-4">
                Here is an example of a utility function we use to track user growth. Notice how we handle the percentage calculation securely:
              </p>

              <CodeBlock 
                code={sampleCode} 
                language="javascript" 
                filename="utils/growth.js" 
              />

              <h2 id="metrics" className="text-2xl font-medium mt-12 mb-4 tracking-tight scroll-mt-24">2. Performance Metrics</h2>
              <p className="text-base text-foreground/80 leading-loose mb-6">
                After implementing the new architecture, we saw massive improvements across the board. Here is a breakdown of the core vitals:
              </p>

              <div className="overflow-x-auto my-8 border border-border rounded-md">
                <table className="w-full text-sm text-left">
                  <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border">
                    <tr>
                      <th className="px-4 py-3 font-normal border-r border-border">Metric</th>
                      <th className="px-4 py-3 font-normal border-r border-border">Before</th>
                      <th className="px-4 py-3 font-normal border-r border-border">After</th>
                      <th className="px-4 py-3 font-normal">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground/80">
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 border-r border-border font-medium">First Contentful Paint</td>
                      <td className="px-4 py-3 border-r border-border">1.2s</td>
                      <td className="px-4 py-3 border-r border-border">0.8s</td>
                      <td className="px-4 py-3 text-emerald-500 font-mono text-xs">+33%</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 border-r border-border font-medium">Bundle Size</td>
                      <td className="px-4 py-3 border-r border-border">245kb</td>
                      <td className="px-4 py-3 border-r border-border">112kb</td>
                      <td className="px-4 py-3 text-emerald-500 font-mono text-xs">+54%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="growth" className="text-2xl font-medium mt-12 mb-4 tracking-tight scroll-mt-24">3. User Growth</h2>
              <p className="text-base text-foreground/80 leading-loose mb-6">
                Sometimes data is better visualized. This simple bar chart represents our daily active users over the last 5 months.
              </p>

              <div className="my-8 border border-border bg-surface p-6 rounded-md">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-medium text-sm">Monthly Active Users (MAU)</h3>
                  <span className="font-mono text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">UP 42%</span>
                </div>
                <div className="h-48 flex items-end gap-2 sm:gap-4 mt-4 border-b border-border pb-2">
                  {[30, 45, 40, 65, 85].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer">
                      <div 
                        className="w-full bg-accent/20 group-hover:bg-accent transition-colors rounded-t-sm" 
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT SIDE: Sticky Sidebar (Spans 3 columns on desktop, hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-3 lg:col-start-10">
            {/* sticky top-24 makes it stick right below your header! */}
            <div className="sticky top-24 space-y-10">
              
              {/* Widget 1: On this page */}
              <div className="border border-border bg-surface/50 p-5 rounded-md">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-4">
                  On this page
                </h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li>
                    <a href="#implementation" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      1. The Code Implementation
                    </a>
                  </li>
                  <li>
                    <a href="#metrics" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      2. Performance Metrics
                    </a>
                  </li>
                  <li>
                    <a href="#growth" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      3. User Growth
                    </a>
                  </li>
                </ul>
              </div>

              {/* Widget 2: Author Bio */}
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

              {/* Widget 3: Newsletter or Tool CTA */}
              <div className="border border-border bg-surface p-5 rounded-md text-center">
                <div className="w-8 h-8 mx-auto bg-primary/10 rounded border border-primary/20 flex items-center justify-center mb-3">
                  <span className="text-primary text-xs">✨</span>
                </div>
                <h3 className="font-medium text-sm mb-2">Try Schema Generator</h3>
                <p className="text-[11px] text-muted-foreground mb-4">
                  Build valid JSON-LD in seconds.
                </p>
                <a href="/tools/schema-generator" className="inline-flex items-center justify-center gap-2 w-full text-xs font-mono uppercase tracking-wider bg-foreground text-background py-2 hover:bg-foreground/90 transition-colors">
                  Open Tool <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}