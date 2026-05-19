import { Zap, Clock, Quote, CircleDollarSign, Star } from "lucide-react";
import heroImage from "@/assets/hero-royal-premium.webp";
import WhatsAppIcon from "./icons/Whatsapp";
import { useEffect, useState } from "react";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import FloatingCTA from "./FloatingCTA";

const HeroNew = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Quick";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-primary-950 to-gray-900 min-h-screen flex items-center pt-16"
    >
      <FloatingCTA />

      <img
        src={heroImage}
        alt="Zamzam Laundry Service - Premium laundry care and rapid pickup for Makkah pilgrims"
        className="absolute inset-0 w-full h-full object-cover opacity-30 "
        loading="eager"
        width="1920"
        height="1080"
      />
      <div className="relative container mx-auto px-3 py-6 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 sm:mb-6 bg-primary-500 text-white text-xs sm:text-base px-3 sm:px-4 py-2 animate-pulse">
            <Zap size={20} className="mr-1" />
            ELITE CLEANING STANDARDS
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground mb-3 sm:mb-6 leading-tight">
            <span className="block text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 text-primary-300">
              Zamzam Laundry <br /> Service
            </span>
            <span className="text-primary-300 inline-block">
              Premium Garment Care
            </span>{" "}
            – Flawless & On Time
          </h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 mb-4 sm:mb-8">
            <div className="flex items-center flex-col gap-3 justify-center mb-2 sm:mb-3">
              <div className="flex text-yellow-400 text-sm sm:text-xl">
                <Star
                  size={18}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                />
                <Star
                  size={18}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                />
                <Star
                  size={18}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                />
                <Star
                  size={18}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                />
                <Star
                  size={18}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                />
              </div>
              <span className="text-primary-foreground ml-2 font-bold text-sm sm:text-base">
                Preferred by 12,000+ Satisfied Visitors
              </span>
            </div>
            <p className="text-sm sm:text-xl text-primary-foreground/95 font-medium mb-3 sm:mb-4 px-2">
              “Exceptional quality and incredible speed! They collected my laundry and
              returned everything spotless in record time.
              <span className="text-primary-300 font-bold">
                {" "}
                Zamzam Laundry Service
              </span>{" "}
              is truly the finest in Makkah!”
            </p>
            <div className="grid grid-cols-2  sm:grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-primary-400/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-primary-300">
                  From 18 SAR
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Per Kilogram
                </div>
              </div>
              <div className="bg-primary-400/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-primary-300">
                  Express Pickup
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Professional Wash
                </div>
              </div>
              <div className="bg-primary-400/20 col-span-full sm:col-span-1 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-primary-300">
                  FREE
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Collection & Delivery
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4 px-2">
            <button
              id="generate_lead"
              onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none  bg-primary-600 text-white hover:bg-primary-700 hover:shadow-xl transition-all w-full text-base sm:text-xl px-6 py-4 sm:py-6 h-auto rounded-xl font-bold shadow-lg"
            >
              <WhatsAppIcon size={24} />
              Request Free WhatsApp Collection
            </button>

            <div className="text-primary-foreground/90 flex flex-wrap pt-4 items-center justify-center gap-4 text-xs sm:text-base">
              <span className="flex items-center gap-2">
                <Clock size={18} /> Available 24/7
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <Quote size={18} /> Transparent Pricing
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <CircleDollarSign size={18} />
                Expert Fabric Handling
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
