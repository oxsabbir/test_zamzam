import { MessageCircle, Phone, ArrowRight, Users, Clock, Truck, CheckCircle } from "lucide-react";
import { managerInfo } from "@/constants";
import WhatsAppIcon from "./icons/Whatsapp";
import { handleCall, handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import ctaBackground from "@/assets/cta-background.webp";

const stats = [
  { icon: Users, value: "3,000+", label: "Happy Customers", accent: "from-amber-400 to-orange-500" },
  { icon: Clock, value: "20 Min", label: "Average Pickup", accent: "from-emerald-400 to-teal-500" },
  { icon: Truck, value: "Same Day", label: "Standard Delivery", accent: "from-sky-400 to-blue-500" },
  { icon: CheckCircle, value: "Zero Cost", label: "Pickup & Delivery", accent: "from-violet-400 to-purple-500" },
];

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${ctaBackground}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/95" />

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            Message us or give us a call — we'll have a driver at your door in minutes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-14">
          <button
            id="generate_lead"
            onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
            className="flex-1 group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-5 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={24} />
            <span className="text-left">
              <span className="block text-base">WhatsApp Pickup</span>
              <span className="text-xs font-normal text-white/80">Instant response</span>
            </span>
            <ArrowRight size={18} className="ml-auto opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
          </button>
          <button
            onClick={handleCall}
            className="flex-1 group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 text-white font-bold text-lg py-5 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone size={22} />
            <span className="text-left">
              <span className="block text-base">Call Now</span>
              <span className="text-xs font-normal text-white/60">Talk to a person</span>
            </span>
            <ArrowRight size={18} className="ml-auto opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative mx-auto w-fit mb-3">
                  <div className={`absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br ${stat.accent} opacity-25 blur-lg`} />
                  <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${stat.accent} flex items-center justify-center shadow-md`}>
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Left */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <MessageCircle size={16} className="text-green-400 shrink-0" />
                  {managerInfo.whatsApp}
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <Phone size={16} className="text-white/50 shrink-0" />
                  {managerInfo.phoneNumber}
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
                Service
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <Clock size={16} className="text-white/50 shrink-0" />
                  Open 24/7, including holidays
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle size={16} className="text-white/50 shrink-0" />
                  Satisfaction guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
