import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <BookOpen className="h-6 w-6" />
            <span>Learn With Jain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary smooth-transition">
              Home
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary smooth-transition">
              Courses
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary smooth-transition">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary smooth-transition">
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline" className="smooth-transition">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="smooth-transition">Sign Up</Button>
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
