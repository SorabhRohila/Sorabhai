import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ArrowRight, Code, FileJson, Sparkles } from "lucide-react";

// Mock data for your tools
const tools = [
  {
    title: "Schema Generator",
    description: "AI-powered structured data generator for better SEO.",
    link: "/tools/schema-generator",
    icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
  },
  {
    title: "JSON Formatter",
    description: "Format, validate, and beautify your JSON payloads.",
    link: "/tools/json-formatter",
    icon: <FileJson className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />,
  },
  {
    title: "CodeQuest UI",
    description: "Gamified learning components and snippets.",
    link: "/tools/codequest",
    icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />,
  }
];

// Your actual 4 latest blog posts!
const recentPosts = [
  {
    title: "How to Make ₹15K–₹25K by Creating Websites for Dentists",
    date: "May 11, 2026",
    excerpt: "Dentists are high-ticket clients. Here is the exact blueprint to build them premium websites in 30 minutes using AI and charge ₹25,000.",
    slug: "/blog/dentist-websites",
  },
  {
    title: "How to Make ₹15K–₹20K by Creating AI Websites",
    date: "May 11, 2026",
    excerpt: "You don't need to be an expert coder. Learn the beginner-friendly side hustle to leverage AI tools and start closing local business clients.",
    slug: "/blog/ai-websites",
  },
  {
    title: "3 Websites to Find Proven US Startup Ideas You Can Start in India",
    date: "May 11, 2026",
    excerpt: "Smart founders copy what already works. Discover how to find proven US startup ideas and adapt them for the fast-growing Indian market.",
    slug: "/blog/startup-ideas",
  },
  {
    title: "The Ultimate SEO Guide for Developers",
    date: "May 02, 2026",
    excerpt: "Getting your React site to rank on Google is easier than you think. You don't need Next.js to get started.",
    slug: "/blog/seo-guide",
  }
];

const Index = () => {
  useEffect(() => {
    // Updated to your new brand name!
    document.title = "Unvault | Developer, Maker & Content Creator";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* My Tools Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-border">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-[2rem] font-medium tracking-[-0.025em]">My Tools</h2>
            <Link to="/tools" className="text-[10px] sm:text-xs uppercase tracking-wider font-mono text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <Link 
                key={index} 
                to={tool.link}
                className="group p-5 sm:p-6 border border-border bg-surface hover:bg-muted/50 transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                   <div className="p-2 sm:p-2.5 border border-border bg-background rounded-sm">
                    {tool.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-base sm:text-lg font-medium mb-2">{tool.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-border">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-[2rem] font-medium tracking-[-0.025em]">Latest Writing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="group p-6 sm:p-8 border border-border bg-surface hover:border-foreground/20 transition-colors flex flex-col h-full">
                <div className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-[0.12em] mb-3 sm:mb-4">
                  {post.date}
                </div>
                <Link to={post.slug} className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.025em] mb-2 sm:mb-3 group-hover:underline decoration-1 underline-offset-4">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {post.excerpt}
                  </p>
                </Link>
                <Link to={post.slug} className="text-[10px] sm:text-xs uppercase tracking-wider font-mono hover:text-muted-foreground transition-colors mt-auto inline-block">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;