import { Phone, MessageCircle, Clock, CheckCircle, ChevronRight, MapPin, Truck } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { managerInfo } from "@/constants";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const PickupManager = () => {
  return (
    <section id="pickup" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Contact Info Side */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 w-fit px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-md mb-8 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                  Available 24/7
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-[1.1]">
                  Need a Pickup? <br />
                  <span className="text-blue-200">Talk to us!</span>
                </h2>
                <p className="text-blue-50 text-lg font-medium leading-relaxed mb-10 opacity-90">
                  Our professional team is ready to assist you. Contact us directly for rapid response across Makkah.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Call Directly</p>
                      <p className="text-xl font-bold">{managerInfo.phoneNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-all">
                      <WhatsAppIcon size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">WhatsApp</p>
                      <p className="text-xl font-bold">{managerInfo.whatsApp}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Location</p>
                      <p className="text-lg font-bold">Makkah, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-blue-100">
                    12,000+ Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* Actions Side */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-center bg-background/50 backdrop-blur-sm">
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Clock className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Fastest Pickup</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We arrive at your location within minutes of your request.
                  </p>
                </div>
                <div className="space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Truck className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Free Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Always free collection and delivery for all your laundry.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
                  className="w-full bg-green-600 text-white text-lg font-bold py-5 px-6 rounded-2xl shadow-xl shadow-green-600/20 hover:bg-green-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  <WhatsAppIcon size={24} />
                  Book Instant Pickup
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href={`tel:${managerInfo.onlyNumber.phoneNumber}`}
                  className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 text-lg font-bold py-5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 border border-blue-100"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  24/7 Service
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Premium Quality
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Trusted Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupManager;
