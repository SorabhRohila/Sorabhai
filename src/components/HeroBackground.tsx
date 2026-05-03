import { useEffect, useRef } from "react";

export const HeroBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute inset-0 opacity-60 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,30%), hsl(265 89% 55% / 0.25), transparent 60%)",
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px]" />
    </div>
  );
};
