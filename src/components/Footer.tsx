import { siteInfo, managerInfo } from "@/constants";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "How It Works", id: "how-it-works" },
    { label: "About Us", path: "/about" },
  ];

  const servicesLinks = [
    { label: "Regular Laundry", id: "pricing" },
    { label: "Dry Cleaning", id: "services" },
    { label: "Ihram Care", id: "pricing" },
    { label: "Ironing & Pressing", id: "pricing" },
    { label: "Express Delivery", id: "services" },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {siteInfo.siteTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Makkah Al Baraka Laundry, we provide reliable, fast, and high-quality laundry services across the holy city of Makkah. Trust us with your garments for a fresh and clean experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all hover:scale-110"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all hover:scale-110"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all hover:scale-110"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest border-l-4 border-primary pl-4">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => link.path ? navigate(link.path) : scrollToSection(link.id!)}
                    className="text-muted-foreground hover:text-primary flex items-center group transition-colors text-left"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest border-l-4 border-primary pl-4">
              Our Services
            </h4>
            <ul className="space-y-4">
              {servicesLinks.map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => scrollToSection(service.id)}
                    className="text-muted-foreground hover:text-primary flex items-center group transition-colors text-left"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 group-hover:translate-x-1 transition-transform"
                    />
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest border-l-4 border-primary pl-4">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <p className="text-muted-foreground">{managerInfo.address}</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <p className="text-muted-foreground">
                  {managerInfo.phoneNumber}
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <p className="text-muted-foreground">{managerInfo.email}</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock size={20} />
                </div>
                <p className="text-muted-foreground">Open 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {siteInfo.siteTitle}. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-xs font-medium uppercase tracking-widest">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
