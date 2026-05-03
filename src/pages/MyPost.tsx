import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function MyPost() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Update these tags for your specific post */}
      <Helmet>
        <title>My Awesome Post | saurabh.dev</title>
        <meta name="description" content="This is what Google will show in search results." />
      </Helmet>

      <Navbar />
      
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16 w-full">
        
        {/* THE PROSE CLASS IS NOW WORKING! */}
        <article className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none">
          
          {/* ---> PASTE YOUR HTML RIGHT HERE <--- */}
          <h1>My Awesome Post Title</h1>
          <p>This is my raw HTML content. It will automatically look beautiful because of the new plugin we just installed!</p>
          
        </article>

      </main>

      <Footer />
    </div>
  );
}