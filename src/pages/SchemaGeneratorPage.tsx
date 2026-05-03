import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { SchemaGenerator } from "@/components/SchemaGenerator";
import { Footer } from "@/components/Footer";

const SchemaGeneratorPage = () => {
  useEffect(() => {
    document.title = "Schema Generator | Saurabh's Tools";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <SchemaGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default SchemaGeneratorPage;