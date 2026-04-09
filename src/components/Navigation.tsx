import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import logo_light from "@/assets/al-baraka-logo.webp";
import logo_dark from "@/assets/al-baraka-dark.webp";

import { motion } from "motion/react";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import { managerInfo, siteInfo } from "@/constants";
import { useNavigate, useResolvedPath } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const pathname = useResolvedPath("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, url?: string) => {
    if (url) {
      navigate(url);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
      setIsOpen(false);
    } else {
      if (pathname.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const elementExist = document.getElementById(sectionId);
          if (elementExist) {
            scrollToSection(sectionId);
          }
        }, 300);
      }
    }
  };

  const menuItems = [
    { label: "Services", id: "services" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "contact", url: "/about" },
    { label: "Contact", id: "contact", url: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="py-4">
              <div className="w-fit h-[60px] md:h-[80px]">
                <a href="/">
                  <img
                    src={isScrolled ? logo_light : logo_dark}
                    alt={`${siteInfo.shortName} Laundry logo`}
                    width={200}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id, item?.url)}
                className={`hover:text-primary hover:bg-primary/10 transition-all font-medium ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              id="generate_lead"
              onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
              className="ml-2 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <WhatsAppIcon size={18} className="mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none  shadow-primary p-1 text-base sm:text-lg font-bold rounded-xl">
                <Menu
                  size={24}
                  className={`${
                    isScrolled ? "text-foreground" : "text-background"
                  }`}
                />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-background border-l border-border"
            >
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Logo */}
                <div className="py-1.5">
                  <div className="w-fit h-[60px]">
                    <a href="/">
                      <img
                        src={isScrolled ? logo_light : logo_dark}
                        alt={`${siteInfo.shortName} Laundry logo`}
                        width={200}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.id, item?.url)}
                        className="w-full justify-start text-lg font-medium hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Button
                    onClick={() =>
                      handleWhatsApp(whatsappMessages.pickup, true)
                    }
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg text-base h-12"
                  >
                    <WhatsAppIcon size={20} className="mr-2" />
                    Book Now on WhatsApp
                  </Button>
                </motion.div>

                {/* Quick Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pt-6 border-t border-border text-sm text-muted-foreground"
                >
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      24/7 Service Available
                    </p>
                    <p>📞 {managerInfo.whatsApp}</p>
                    <p>⏱️ Fast Pickup Time</p>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
