const STEPS = [
  { n: "01", title: "Drop a URL or text", desc: "Any article, product page, FAQ block, or business listing. No setup." },
  { n: "02", title: "We read the content", desc: "Our model parses entities, relationships, and structure in seconds." },
  { n: "03", title: "Copy your JSON-LD", desc: "Validated against Schema.org. Paste into your <head> and ship." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <div className="label mb-3">§ 03 — Process</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Three steps.<br />
              <span className="font-serif italic text-muted-foreground">Nothing more.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border-t border-border">
          {STEPS.map((s) => (
            <div key={s.n} className="border-b md:border-b-0 md:border-r border-border last:border-r-0 py-8 md:p-8 group">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em]">step {s.n}</span>
                <span className="font-serif text-5xl text-muted-foreground/30 group-hover:text-accent transition-colors">{s.n}</span>
              </div>
              <h3 className="text-xl font-medium mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
