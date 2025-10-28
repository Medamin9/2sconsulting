import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-2sc.jpg";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="2S Consulting" className="h-14 w-auto" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Avec 2S Consulting, transformez votre idée en projet concret, sans
              perdre de temps dans les formalités.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Tunisie - France
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:contact@2sconsulting.tn"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  contact@2sconsulting.tn
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+21612345678"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +216 12 345 678
                </a>
              </li>
            </ul>
          </div>
           {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Organismes officiels</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-primary-foreground/80">APII</li>
            <li className="text-primary-foreground/80">CEPEX</li>
            <li className="text-primary-foreground/80">CNSS</li>
            <li className="text-primary-foreground/80">Nous trouver: </li>
            <li className="text-blue-600 flex space-x-4 cursor-pointer">
              <FaFacebook /> <AiFillInstagram /> <SiLinkedin />{" "}
            </li>
          </ul>
        </div>
        </div>
       

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 2S Consulting. Tous droits réservés.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Site conçu par <span className="font-semibold">WE TEKUP</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
