import { Check } from "lucide-react";

const PLANS = [
  {
    n: "01",
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Perfect for trying it out.",
    features: ["3 generations / day", "All schema types", "Copy & download", "No signup needed"],
    cta: "Start free",
    highlight: false,
  },
  {
    n: "02",
    name: "Pro",
    price: "₹999",
    period: "/ month",
    desc: "For creators & marketers.",
    features: ["Unlimited generations", "Bulk URL upload (100)", "Auto schema suggestions", "Priority AI model", "Email support"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    n: "03",
    name: "Agency",
    price: "₹2,999",
    period: "/ month",
    desc: "Scale with API access.",
    features: ["Everything in Pro", "API access (10k req/mo)", "White-label exports", "Team workspace", "Priority support"],
    cta: "Contact sales",
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <div className="label mb-3">§ 04 — Pricing</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Pay for what<br />you actually use.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:pt-12">
            <p className="text-muted-foreground max-w-md">
              Three plans. No hidden tiers. Start free, upgrade when you outgrow it, cancel from your dashboard in two clicks.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-border">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`border-r border-b border-border p-8 flex flex-col ${
                p.highlight ? "bg-foreground text-background relative" : "bg-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
              )}
              <div className="flex items-baseline justify-between mb-6">
                <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                  plan {p.n}
                </span>
                {p.highlight && (
                  <span className="font-mono text-[10px] uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5">
                    most popular
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{p.name}</h3>
              <p className={`text-sm mt-1 ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <div className="mt-8 flex items-baseline gap-1.5">
                <span className="font-serif text-5xl">{p.price}</span>
                <span className={`text-xs ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>{p.period}</span>
              </div>
              <ul className="mt-8 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-3.5 h-3.5 mt-1 flex-shrink-0 ${p.highlight ? "text-accent" : "text-foreground"}`} strokeWidth={2.5} />
                    <span className={p.highlight ? "text-background/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 text-sm font-medium transition-colors ${
                  p.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {p.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
