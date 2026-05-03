import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SAMPLE = `{
  "@context": "https://saurabh.dev",
  "@type": "Developer",
  "name": "Saurabh",
  "skills": [
    "Next.js",
    "React",
    "Supabase",
    "SaaS"
  ],
  "mission": "Building scalable digital platforms",
  "status": "Shipping fast 🚀"
}`;

export const Hero = () => {
  const [typed, setTyped] = useState("");
  
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(SAMPLE.slice(0, i));
      if (i >= SAMPLE.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, []);

  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

  return (
    <section className="border-b border-border overflow-hidden">
      {/* Adjusted padding for mobile (px-4 pt-10) vs desktop (sm:px-6 pt-14) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-20">
        
        {/* Top meta line: Changed to flex-col on mobile so text doesn't overlap */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-[0.12em] pb-4 sm:pb-6 border-b border-border">
          <span>Issue №1 — {today}</span>
          <span className="hidden md:inline">SaaS · Micro-Tools · Content</span>
          <span>Status · Building</span>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 mt-8 sm:mt-12">
          {/* Left Side Content */}
          <div className="col-span-12 lg:col-span-7 animate-fade-up">
            <div className="label mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Full-Stack Developer & Maker
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium tracking-[-0.025em] leading-[1.05] sm:leading-[1.02]">
              Building digital tools<br />
              for the modern<br />
              <span className="accent-mark">web ecosystem.</span>
            </h1>
            
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Hi, I'm Saurabh. I build micro-SaaS products, write about software architecture, and create tools for developers and creators.
            </p>
            
            {/* Buttons: Added w-full for mobile to make them easy to tap */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
              <Link to="/tools/schema-generator" className="btn-primary w-full sm:w-auto text-center justify-center">
                View my tools →
              </Link>
              <a href="#blog" className="btn-ghost w-full sm:w-auto text-center justify-center text-xs uppercase tracking-wider">
                read latest post
              </a>
            </div>
            
            {/* Stats: Changed to 2 columns on mobile, 3 on desktop */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-6 max-w-md">
              <Stat k="4+" v="tools shipped" />
              <Stat k="10k+" v="lines of code" />
              <Stat className="col-span-2 sm:col-span-1" k="100%" v="caffeine fueled" />
            </div>
          </div>

          {/* Right Side Code Preview */}
          <div className="col-span-12 lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="border border-border bg-surface rounded-md sm:rounded-none overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full border border-border" />
                <div className="w-2.5 h-2.5 rounded-full border border-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-mono text-[10px] sm:text-[11px] text-muted-foreground ml-2 truncate">profile.json</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-muted-foreground/60 ml-auto hidden sm:inline">200 OK</span>
              </div>
              {/* Made text slightly smaller on mobile to prevent horizontal scrolling */}
              <pre className="font-mono text-[10px] sm:text-[12px] leading-[1.6] sm:leading-[1.7] p-4 sm:p-5 text-foreground/85 overflow-x-auto min-h-[220px] sm:min-h-[280px]">
                <code>{typed}<span className="animate-blink">▍</span></code>
              </pre>
            </div>
            <div className="mt-3 font-mono text-[9px] sm:text-[10px] text-muted-foreground flex justify-between px-1">
              <span>// Live dev profile</span>
              <span>saurabh/about</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Added an optional className prop to handle the odd layout out on mobile
const Stat = ({ k, v, className = "" }: { k: string; v: string, className?: string }) => (
  <div className={className}>
    <div className="font-serif text-xl sm:text-2xl">{k}</div>
    <div className="label mt-1 text-[10px] sm:text-xs">{v}</div>
  </div>
);