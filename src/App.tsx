import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 
import { ThemeProvider } from "@/components/ThemeProvider";


import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SchemaGeneratorPage from "./pages/SchemaGeneratorPage"; 
import SeoGuidePost from "./pages/SeoGuidePost"; 

// 1. ADD YOUR TEMPLATE IMPORT BACK
import BlogPostTemplate from "./pages/BlogPostTemplate"; 
import StartupIdeasPost from "./pages/StartupIdeasPost";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider> 
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools/schema-generator" element={<SchemaGeneratorPage />} />
            <Route path="/blog/seo-guide" element={<SeoGuidePost />} />
            
            {/* 2. ADD YOUR TEMPLATE ROUTE BACK */}
            <Route path="/blog/template" element={<BlogPostTemplate />} />
            <Route path="/blog/startup-ideas" element={<StartupIdeasPost />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;