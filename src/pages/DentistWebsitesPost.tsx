import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, Copy, ArrowRight, Github, Twitter, ExternalLink } from "lucide-react";

// Reusable Code Block Component
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
      <pre className="p-4 overflow-x-auto bg-zinc-950 dark:bg-black/50 m-0">
        <code className="font-mono text-[13px] leading-relaxed text-zinc-50">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default function DentistWebsitesPost() {
  const aiPrompt = `Create a modern, clean, and trustworthy website for a dental clinic named [clinic name] located in [city].

Include:
- Professional and calming design (white/blue theme)
- Homepage, About Us, Services, Contact pages
- Detailed services (teeth cleaning, root canal, braces, implants, whitening)
- Doctor profile section
- Patient testimonials
- Online appointment booking section
- Google Maps integration
- Call-to-action buttons (Book Appointment / Call Now / WhatsApp)
- SEO-friendly content targeting local patients
- Mobile-friendly responsive design

Make the website look premium and trustworthy so patients feel confident booking appointments.`;

  // SEO Update
  useEffect(() => {
    document.title = "How to Make ₹15K–₹25K by Creating Websites for Dentists | saurabh.dev";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn how to find high-paying dental clients and use AI website builders to create premium clinic websites in 30 minutes.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Helmet>
        <title>How to Make ₹15K–₹25K by Creating Websites for Dentists | saurabh.dev</title>
        <meta name="description" content="Learn how to find high-paying dental clients and use AI website builders to create premium clinic websites in 30 minutes." />
      </Helmet>

      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="col-span-1 lg:col-span-8">
            <header className="mb-12">
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em] mb-4 flex items-center gap-2">
                <span>May 11, 2026</span>
                <span>·</span>
                <span>5 min read</span>
                <span>·</span>
                <span className="text-accent">AGENCY / AI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-6">
                🦷 How to Make ₹15K–₹25K by Creating Websites for Dentists Using AI
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Dentists are high-ticket clients who desperately need online trust to get bookings. Here is the exact blueprint to build them premium websites in 30 minutes using AI and easily charge ₹25,000.
              </p>
              
              {/* HERO IMAGE */}
              <div className="rounded-lg overflow-hidden border border-border mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-auto object-cover aspect-[16/9] bg-muted m-0"
                  loading="lazy"
                />
              </div>
            </header>

            <article className="prose dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-headings:font-medium prose-headings:tracking-tight prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-primary">
              
              <h2 id="step-1" className="mt-12 scroll-mt-24">Step 1: Find Dentists Without a Good Website</h2>
              <p>
                Dentists rely heavily on local search. When someone has a toothache, they don't ask around; they search Google. Go to Google Maps and search:
              </p>
              <ul>
                <li>“dentist near me”</li>
                <li>“dental clinic in [city]”</li>
                <li>“root canal specialist [area]”</li>
              </ul>
              <p>
                <strong>👉 Look for clinics that:</strong><br />
                1. Have no website linked on their Google profile.<br />
                2. Have a website that looks like it was built in 2010, takes 10 seconds to load, or isn't mobile-friendly.<br />
                <em>Because dental procedures are expensive, these are high-paying clients who instantly understand the ROI of a good website.</em>
              </p>

              <h2 id="step-2" className="mt-12 scroll-mt-24">Step 2: Collect Their Details</h2>
              <p>
                Do the research for them. Open their Google Business profile and copy:
              </p>
              <ul>
                <li>Clinic name and Doctor's name</li>
                <li>Services (cleaning, braces, implants, root canals, etc.)</li>
                <li>Address and operating hours</li>
                <li>Phone number</li>
                <li>Top 5 positive reviews (crucial for healthcare trust)</li>
                <li>Photos of the clinic interior</li>
              </ul>
              <p>👉 <em>This data becomes the core content of the website you are about to generate.</em></p>

              <h2 id="step-3" className="mt-12 scroll-mt-24">Step 3: Use DesignArena AI</h2>
              <p>
                Go to <a href="https://designarena.ai?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">DesignArena AI</a>, a powerful AI website builder that creates stunning, structured layouts.
              </p>
              <p>Paste the clinic's details into the AI prompt box along with this exact instruction to get a premium healthcare layout:</p>

              <CodeBlock 
                code={aiPrompt} 
                language="prompt" 
                filename="dental-ai-prompt.txt" 
              />

              <h2 id="step-4" className="mt-12 scroll-mt-24">Step 4: Customize & Polish</h2>
              <p>
                The AI will generate the structure, but you need to make it look like a ₹25,000 website. Take 20-30 minutes to:
              </p>
              <ul>
                <li>Ensure the color palette is calming (typically clean whites, soft blues, or teals).</li>
                <li>Add high-quality dental images if they don't have good clinic photos.</li>
                <li>Make sure the "Book Appointment" and WhatsApp buttons are highly visible on mobile devices.</li>
              </ul>

              <h2 id="step-5" className="mt-12 scroll-mt-24">Step 5: Pitch the Dentist</h2>
              <p>
                Dentists are busy. The best way to pitch them is to show, not tell. Reach out via WhatsApp, Instagram, or a quick phone call to the receptionist.
              </p>
              <p className="bg-surface border border-border p-4 rounded-md italic">
                “Hi Dr. [Name], I was looking for a clinic in [Area] and noticed your website needed an update. I actually went ahead and created a professional, modern website for your clinic that makes it much easier for patients to book appointments. Would you like me to send you the private link to see it?”
              </p>

              <h2 id="step-6" className="mt-12 scroll-mt-24">Step 6: Close the Deal 💰</h2>
              <p>
                When they see a beautiful website with their own name and reviews already on it, the sale is 90% done. 
              </p>
              <p>
                Highlight the main benefits: <strong>More patient bookings, a better online presence, and higher trust.</strong> Because one dental implant patient can bring them ₹30,000+, charging them <strong>₹15K–₹25K</strong> for the website is an absolute no-brainer for them.
              </p>

              <hr className="border-border my-12" />

              <div className="p-6 bg-accent/10 border border-accent/20 rounded-md not-prose">
                <h3 className="text-xl font-bold text-foreground mt-0 mb-2 flex items-center gap-2">
                  🚀 Pro Tip: The Healthcare Premium
                </h3>
                <p className="text-foreground/90 m-0">
                  Dentists value trust, branding, and professionalism more than almost any other local business. Because they run high-ticket businesses, they are significantly easier to close at higher prices than small cafes or local shops.
                </p>
              </div>

            </article>
          </div>

          {/* RIGHT SIDE: Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-3 lg:col-start-10">
            <div className="sticky top-24 space-y-10">
              
              <div className="border border-border bg-surface/50 p-5 rounded-md">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-4">
                  The Blueprint
                </h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li>
                    <a href="#step-1" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      1. Find Dental Clinics
                    </a>
                  </li>
                  <li>
                    <a href="#step-2" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      2. Collect Info
                    </a>
                  </li>
                  <li>
                    <a href="#step-3" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      3. Use DesignArena AI
                    </a>
                  </li>
                  <li>
                    <a href="#step-4" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      4. Polish Design
                    </a>
                  </li>
                  <li>
                    <a href="#step-5" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      5. Pitch the Doctor
                    </a>
                  </li>
                  <li>
                    <a href="#step-6" className="hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4">
                      6. Close the Deal
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
                  Building micro-SaaS and sharing actionable side hustle blueprints.
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

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}