const LOGOS = ["Acme", "Northwind", "Globex", "Initech", "Umbrella", "Stark", "Hooli"];

export const SocialProof = () => {
  return (
    <section className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="label flex-shrink-0">
            Trusted by 1,000+ teams →
          </div>
          <div className="flex-1 flex flex-wrap items-center gap-x-10 gap-y-3 opacity-60">
            {LOGOS.map((l) => (
              <span key={l} className="font-serif text-xl tracking-tight">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
