import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "glass-effect shadow-lg shadow-primary/5" 
        : "bg-background/95 backdrop-blur"
    } border-b border-border/50`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold group">
            <div className="relative">
              <BookOpen className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <Sparkles className="h-3 w-3 text-accent absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Learn With Jain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary smooth-transition relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary smooth-transition relative group">
              Courses
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary smooth-transition relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary smooth-transition relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="smooth-transition hover:scale-105 hover:shadow-md">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="smooth-transition hover:scale-105 hover:shadow-lg hover:shadow-primary/30 glow-on-hover">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <Link to="/" className="text-foreground hover:text-primary smooth-transition py-2">
              Home
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary smooth-transition py-2">
              Courses
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary smooth-transition py-2">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary smooth-transition py-2">
              Contact
            </Link>
            <Link to="/login" className="py-2">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/signup" className="py-2">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
