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
import logo_dark from "@/assets/al-baraka-dark.webp";

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
    <footer className="">
      <div className="bg-[#0a120b] text-white pt-20 pb-10">
        {/* Map Section - Full Width Banner Style */}

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <a href="/">
                <img
                  src={logo_dark}
                  alt={`${siteInfo.shortName} Laundry Logo`}
                  className="h-[75px] w-auto object-contain brightness-110"
                />
              </a>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base max-w-sm">
                At {siteInfo.siteTitle}, we provide reliable, fast, and
                high-quality laundry services across the holy city of Makkah.
                Trust us with your garments for a fresh and clean experience.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/5 hover:bg-primary p-3 rounded-full transition-all hover:scale-110 border border-white/5"
                >
                  <Facebook size={18} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/5 hover:bg-primary p-3 rounded-full transition-all hover:scale-110 border border-white/5"
                >
                  <Twitter size={18} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/5 hover:bg-primary p-3 rounded-full transition-all hover:scale-110 border border-white/5"
                >
                  <Instagram size={18} className="text-white" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] border-l-2 border-primary pl-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() =>
                        link.path
                          ? navigate(link.path)
                          : scrollToSection(link.id!)
                      }
                      className="text-zinc-400 hover:text-primary flex items-center group transition-colors text-left text-sm"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-2 group-hover:translate-x-1 transition-transform text-primary/50"
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] border-l-2 border-primary pl-4">
                Our Services
              </h4>
              <ul className="space-y-3">
                {servicesLinks.map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="text-zinc-400 hover:text-primary flex items-center group transition-colors text-left text-sm"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-2 group-hover:translate-x-1 transition-transform text-primary/50"
                      />
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] border-l-2 border-primary pl-4">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm leading-snug">{managerInfo.address}</p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <Phone size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm">
                    {managerInfo.phoneNumber}
                  </p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm truncate">{managerInfo.email}</p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <Clock size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[360px] rounded-3xl relative transition-all duration-700 ease-in-out group border border-white/5 overflow-hidden mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.13523490196707!2d39.820248449322996!3d21.422807396862932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b45652ae21%3A0x2b222b823c26269a!2sHilton%20Hotel%20%26%20Convention%20Jabal%20Omar%20Makkah!5e0!3m2!1sen!2sbd!4v1774447917190!5m2!1sen!2sbd"
              className="w-full h-full opacity-60 rounded-3xl group-hover:opacity-100 border-0 transition-opacity"
              title={`${siteInfo.shortName} Laundry Location`}
            />
          </div>

          <div className="pt-10 border-t border-white/5 text-center">
            <p className="text-zinc-500 text-xs">
              © {currentYear} {siteInfo.siteTitle}. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4 text-[10px] font-bold uppercase tracking-widest">
              <a
                href="/privacy-policy"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
