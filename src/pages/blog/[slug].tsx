import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Github, Twitter, ArrowRight, Check, Copy } from "lucide-react";

// Our custom CodeBlock component (same as before!)
const CodeBlock = ({ children }: { children?: React.ReactNode }) => {
  const [copied, setCopied] = useState(false);
  
  // Extracting the text from MDX children
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (node && typeof node === 'object' && 'props' in node) return extractText((node.props as any).children);
    return '';
  };
  
  const code = extractText(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
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
          <span className="font-mono text-[11px] text-muted-foreground ml-2">code</span>
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

// 1. THIS IS THE MAGIC! We map markdown elements to your custom Tailwind styles
const components = {
  h1: (props: any) => <h1 className="text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-6 mt-2" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-medium mt-12 mb-4 tracking-tight scroll-mt-24" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium mt-8 mb-4 tracking-tight" {...props} />,
  p: (props: any) => <p className="text-base text-foreground/80 leading-loose mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-base text-foreground/80 leading-loose" {...props} />,
  li: (props: any) => <li className="text-base text-foreground/80 leading-loose" {...props} />,
  blockquote: (props: any) => <blockquote className="my-10 pl-4 sm:pl-6 border-l-2 border-accent italic text-lg sm:text-xl text-foreground/70 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline decoration-1 underline-offset-4" {...props} />,
  strong: (props: any) => <strong className="font-medium text-foreground" {...props} />,
  pre: (props: any) => <CodeBlock {...props} />,
  code: (props: any) => <code className="font-mono text-[13px] bg-surface px-1.5 py-0.5 rounded text-primary border border-border" {...props} />,
  
  // NEW: Beautiful Table Styling!
  table: (props: any) => (
    <div className="overflow-x-auto my-8 border border-border rounded-md">
      <table className="w-full text-sm text-left" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-border text-foreground/80" {...props} />,
  tr: (props: any) => <tr className="hover:bg-muted/30 transition-colors" {...props} />,
  th: (props: any) => <th className="px-4 py-3 font-normal border-r border-border last:border-0" {...props} />,
  td: (props: any) => <td className="px-4 py-3 border-r border-border last:border-0" {...props} />,
};

const mdxModules = import.meta.glob('../../content/*.mdx');

export default function BlogPostPage() {
  const { slug } = useParams();
  const [PostContent, setPostContent] = useState<React.ElementType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const filePath = `../../content/${slug}.mdx`;
      if (mdxModules[filePath]) {
        const module = await mdxModules[filePath]();
        // @ts-ignore
        setPostContent(() => module.default);
      } else {
        setPostContent(null);
      }
      setLoading(false);
    }
    loadPost();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!PostContent) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="col-span-1 lg:col-span-8">
            <header className="mb-12 border-b border-border pb-8">
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em] mb-4 flex items-center gap-2">
                <span>May 1, 2026</span>
                <span>·</span>
                <span>Writing</span>
              </div>
            </header>

            {/* 2. We wrap PostContent inside MDXProvider and pass it our custom components! */}
            <article className="max-w-none">
              <MDXProvider components={components}>
                <PostContent />
              </MDXProvider>
            </article>
          </div>

          <div className="hidden lg:block lg:col-span-3 lg:col-start-10 sticky top-24">
            <div className="space-y-10">
              <div className="border border-border bg-surface/50 p-5 rounded-md">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-serif text-xl mb-4">
                  S
                </div>
                <h3 className="font-medium mb-2">Written by Saurabh</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Full-stack developer building micro-SaaS products and sharing the journey. 
                </p>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-4 h-4" /></a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
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