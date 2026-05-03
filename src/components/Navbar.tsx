import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; // Assuming you have this from your attachments!

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    // Sticky positioning ensures it stays at the top when scrolling
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-accent" />
            <span className="font-mono text-sm font-medium tracking-tight hover:text-muted-foreground transition-colors">
              saurabh.dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/tools/schema-generator" className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              Tools
            </Link>
            <a href="/#blog" className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            
            <div className="w-px h-4 bg-border mx-2" /> {/* Divider */}
            
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle (Hamburger) */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-muted-foreground transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background absolute w-full left-0 animate-fade-in">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-2">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block px-4 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-muted/50 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/tools/schema-generator" 
              onClick={closeMenu}
              className="block px-4 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-muted/50 rounded-md transition-colors"
            >
              Tools
            </Link>
            <a 
              href="/#blog" 
              onClick={closeMenu}
              className="block px-4 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-muted/50 rounded-md transition-colors"
            >
              Blog
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};