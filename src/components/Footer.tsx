import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Learn With Jain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your complete mathematics learning companion for Class 10, Plus One, and Plus Two.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                Home
              </Link>
              <Link to="/courses" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                All Courses
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <div className="space-y-2">
              <Link to="/plus-two" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                Plus Two Mathematics
              </Link>
              <Link to="/plus-one" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                Plus One Mathematics
              </Link>
              <Link to="/class-10" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                Class 10 Mathematics
              </Link>
              <Link to="/basics" className="block text-sm text-muted-foreground hover:text-primary smooth-transition">
                Basics of Mathematics
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@learnwithjain.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Learn With Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
