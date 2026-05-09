import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Clients", path: "/clients" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container-narrow section-padding !py-0 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-gold-gradient flex items-center justify-center">
            <span className="font-display font-bold text-primary text-lg">N</span>
          </div>
          <div>
            <span className="font-display text-xl font-bold text-primary-foreground">NWest</span>
            <span className="font-display text-xl font-bold text-gold ml-1">Valuers</span>
            <p className="text-[10px] text-gold-light tracking-widest uppercase -mt-1">Registered & Licensed Valuers</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+254728799167" className="ml-4">
            <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-primary">
              <Phone className="w-3 h-3 mr-2" />
              Call Us
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-gold/20 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-gold bg-navy-light/30"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+254728799167" className="block px-4 py-3">
              <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-primary">
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
