import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gold-gradient flex items-center justify-center">
                <span className="font-display font-bold text-primary text-sm">NWL</span>
              </div>
              <span className="font-display text-lg font-bold">NWest <span className="text-gold">Valuers</span></span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Registered, Licensed, Gazetted & Practising Valuers & Estate Agents serving Kenya and East Africa.
            </p>
            <p className="text-xs text-gold mt-4">Professional Indemnity Cover: Kshs. 1 Billion</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Key Projects", path: "/projects" },
                { label: "Our Team", path: "/team" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-gold mb-4">Services</h4>
            <div className="space-y-2">
              {["Property Valuation", "Estate Agency", "Investment Appraisal", "Property Management", "Feasibility Studies"].map((s) => (
                <p key={s} className="text-sm text-primary-foreground/70">{s}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold mb-4">Head Office</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Kenya House Complex, 2nd Floor, Koinange Street, Nairobi</span>
              </div>
              <a href="tel:+254728799167" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                +254 728 799 167
              </a>
              <a href="mailto:nwestvaluerslt@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                nwestvaluerslt@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} NWest Valuers Ltd. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-primary-foreground/50">
            <span>Valuers Act Cap 532</span>
            <span>|</span>
            <span>Estate Agents Act Cap 533</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
