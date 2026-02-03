import { MessageCircleMore, PhoneCallIcon, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { managerInfo } from "@/constants";
import WhatsAppIcon from "./icons/Whatsapp";
import { handleCall, handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import ctaBackground from "@/assets/cta-background.webp";

export default function FinalCTA() {
  return (
    <section
      style={{
        background: `url("${ctaBackground}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-10 sm:py-16 relative bg-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-black/80 "></div>
      <div className="relative container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Fresh, Clean Laundry with Fast 15-Minute Pickup
          </h2>
          <p className="text-base sm:text-xl text-primary-foreground/95 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Trusted by thousands of pilgrims and residents for quick, hygienic,
            and reliable laundry care across Makkah.
            <span className="text-accent font-bold">
              {" "}
              Clean garments are just minutes away from your doorstep.
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10  mb-6 sm:mb-8">
            <button
              id="generate_lead"
              onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none bg-gradient-accent text-accent-foreground hover:opacity-90 duration-300 w-full text-base sm:text-xl px-6 py-4 sm:py-6 h-auto rounded-xl bg-[#03be48]  text-white hover:bg-orange-500 font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            >
              <WhatsAppIcon size={32} />
              <div className="text-left ml-2">
                <div>WhatsApp Pickup</div>
                <div className="text-xs sm:text-sm opacity-90">
                  Response in 30 seconds
                </div>
              </div>
            </button>
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none bg-gradient-accent text-accent-foreground hover:opacity-90 duration-300 w-full text-base sm:text-xl px-6 py-4 sm:py-6 h-auto rounded-xl bg-blue-500 text-white hover:bg-slate-500 font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            >
              <PhoneCallIcon size={32} />
              <div className="text-left ml-2">
                <div>Call Now</div>
                <div className="text-xs sm:text-sm opacity-90">
                  Instant quote available
                </div>
              </div>
            </button>
          </div>
          <div className="rounded-lg border shadow-sm bg-black/30 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground mb-6 sm:mb-8">
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-accent border-b border-accent/60 pb-2">
                    Contact Details
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex items-center justify-center sm:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-circle w-4 h-4 mr-2 text-green-400"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                      </svg>
                      <span>WhatsApp: {managerInfo.whatsApp}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone w-4 h-4 mr-2 text-blue-400"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>Call: {managerInfo.phoneNumber}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin w-4 h-4 mr-2 text-red-400"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>All Makkah Areas Covered</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-accent border-b border-accent/60 pb-2">
                    Service Hours
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex items-center justify-center sm:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-clock w-4 h-4 mr-2 text-yellow-400"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>24/7 Emergency Service</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap w-4 h-4 mr-2 text-orange-400"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                      <span>15 Min Pickup Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shield w-4 h-4 mr-2 text-purple-400"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                      <span>100% Satisfaction Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-6 shadow-sm bg-black/30 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground mb-6 sm:mb-8">
            <div className="flex items-center flex-col gap-2 justify-center mb-3">
              <div className="animate-pulse bg-red-500 rounded-lg p-3 mr-3">
                <Zap className=" text-white" size={24} />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-primary-foreground">
                Don't Wait - Clean Clothes in 15 Minutes!
              </h3>
            </div>
            <p className="text-sm sm:text-base text-primary-foreground/90 mb-4">
              Other services make you wait hours. We guarantee 15-minute pickup
              or your service is
              <span className="text-accent font-bold"> completely FREE!</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-primary-foreground/10 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-xl font-bold text-accent">
                  10,000+
                </div>
                <div className="text-xs text-white sm:text-sm">
                  Satisfied Customers
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-xl font-bold text-accent">
                  15 Min
                </div>
                <div className="text-xs text-white sm:text-sm">
                  Pickup Promise
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-xl font-bold text-accent">
                  24/7
                </div>
                <div className="text-xs text-white sm:text-sm">
                  Always Available
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-xl font-bold text-accent">
                  FREE
                </div>
                <div className="text-xs text-white sm:text-sm">
                  Pickup &amp; Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
