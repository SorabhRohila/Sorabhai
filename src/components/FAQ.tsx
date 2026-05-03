const FAQS = [
  { q: "Is the schema actually valid?", a: "Yes. Output follows Schema.org and Google's structured data guidelines. We recommend running it through Google's Rich Results Test for final validation — there's a one-click button right after generation." },
  { q: "Do I need to sign up?", a: "No. The first 3 generations per day are free, no account, no credit card. Sign up only if you need unlimited generations or API access." },
  { q: "Which schema types are supported?", a: "Article, Product, FAQ, and LocalBusiness today. Event, Recipe, HowTo, and Course are shipping next month." },
  { q: "Can I use this for client work?", a: "Yes. The Agency plan includes white-label exports, API access, and a team workspace built for that workflow." },
  { q: "Where does my data go?", a: "URLs and text are sent to our AI provider for parsing and discarded immediately after. We don't store the content of your generations on Free or Pro." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="label mb-3">§ 05 — FAQ</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Common<br />questions.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="border-t border-border">
              {FAQS.map((f, i) => (
                <details key={i} className="group border-b border-border py-5">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <span className="text-base md:text-lg font-medium tracking-tight">{f.q}</span>
                    <span className="font-mono text-xs text-muted-foreground group-open:rotate-45 transition-transform pt-1.5">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
