import { Phone, MessageCircle, Clock, CheckCircle, ArrowRight, MapPin, Truck, Star } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { managerInfo } from "@/constants";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const features = [
  {
    icon: Clock,
    title: "20-Min Pickup",
    description: "We reach your location in 20 minutes or less, guaranteed.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: Truck,
    title: "Same-Day Back",
    description: "Most orders delivered clean and pressed the same day.",
    accent: "from-sky-400 to-blue-500",
  },
];

const PickupManager = () => {
  return (
    <section id="pickup" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/20 bg-white/50 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-12">
            {/* Left — Contact Info */}
            <div className="lg:col-span-5 relative p-8 sm:p-10 text-white flex flex-col justify-between overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-950" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-8">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Available 24/7</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 leading-[1.1]">
                  Need a Pickup?
                  <br />
                  <span className="text-primary-300">Talk to us!</span>
                </h2>
                <p className="text-primary-100/80 text-base sm:text-lg leading-relaxed mb-10">
                  Send a message or give us a call. We'll be at your doorstep in minutes — day or night.
                </p>

                {/* Contact items */}
                <div className="space-y-5">
                  <a href={`tel:${managerInfo.onlyNumber.phoneNumber}`} className="flex items-center gap-4 group">
                    <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Call Directly</p>
                      <p className="text-lg font-bold">{managerInfo.phoneNumber}</p>
                    </div>
                  </a>
                  <a href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-all duration-300">
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest">WhatsApp</p>
                      <p className="text-lg font-bold">{managerInfo.whatsApp}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/15 p-3 rounded-xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Location</p>
                      <p className="text-lg font-bold">Makkah, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={18} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-white/60">
                    3,000+ Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Features + CTA */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              {/* Feature cards */}
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {features.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title} className="group rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl p-6 hover:bg-white/70 hover:shadow-lg transition-all duration-300">
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feat.accent} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`} />
                        <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feat.accent} flex items-center justify-center shadow-md`}>
                          <Icon size={22} className="text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1.5">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-8">
                <button
                  onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
                  className="w-full group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white text-lg font-bold py-5 px-6 rounded-2xl shadow-xl shadow-green-500/25 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <WhatsAppIcon size={24} />
                  Book Instant Pickup
                  <ArrowRight size={20} className="ml-auto opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                </button>
                <a
                  href={`tel:${managerInfo.onlyNumber.phoneNumber}`}
                  className="w-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 text-lg font-bold py-5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  24/7 Availability
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  No Minimum Order
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Same-Day Delivery
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
