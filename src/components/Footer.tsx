export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-2.5 h-2.5 bg-accent" />
              <span className="font-mono text-sm font-medium">schema/ai</span>
            </div>
            <p className="font-serif text-3xl md:text-4xl tracking-tight leading-[1.1] max-w-md">
              The fastest way to ship <em className="text-muted-foreground">structured data</em>.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="label mb-3">Product</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#generator" className="hover:text-muted-foreground">Generator</a></li>
              <li><a href="#pricing" className="hover:text-muted-foreground">Pricing</a></li>
              <li><a href="#how" className="hover:text-muted-foreground">How it works</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="label mb-3">Resources</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://schema.org" target="_blank" rel="noopener" className="hover:text-muted-foreground">Schema.org</a></li>
              <li><a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener" className="hover:text-muted-foreground">Rich Results Test</a></li>
              <li><a href="#faq" className="hover:text-muted-foreground">FAQ</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="label mb-3">Stay in the loop</div>
            <form onSubmit={(e) => e.preventDefault()} className="flex border border-border">
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none font-mono placeholder:text-muted-foreground/60"
              />
              <button className="bg-foreground text-background px-3 text-xs font-mono uppercase tracking-wider">→</button>
            </form>
            <p className="font-mono text-[10px] text-muted-foreground mt-2">Monthly. No spam.</p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em]">
          <span>© {year} SchemaAI. All rights reserved.</span>
          <span>Crafted with precision · Made for the web</span>
        </div>
      </div>
    </footer>
  );
};
