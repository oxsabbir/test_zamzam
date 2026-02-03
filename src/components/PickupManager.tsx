import {
  MessageCircleMoreIcon,
  PhoneCallIcon,
  Clock,
  Globe,
  MapPin,
  Star,
  BadgeCheck,
} from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { managerInfo } from "@/constants";
import { handleCall, handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

export default function PickupManager() {
  return (
    <section
      className="relative py-12 sm:py-20 bg-slate-50 overflow-hidden"
      aria-labelledby="manager-heading"
    >
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-6">
            <BadgeCheck size={16} className="text-green-600" />
            Trusted Customer Support
          </div>
          <h2
            id="manager-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Dedicated Support for a Better Laundry Experience.
            <br className="hidden sm:block" />
            <span className="text-green-600">
              Reliable Care You Can Trust in Makkah.
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience smooth and stress-free laundry service with a dedicated
            support team ready to assist you. From pickup to delivery, we ensure
            clear communication and dependable care at every step.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Profile & Photo */}
              <div className="lg:col-span-5 bg-gradient-to-br from-green-500 to-emerald-700 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6 opacity-90">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <span className="text-xs font-bold tracking-wider uppercase">
                      Online Now in Makkah
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-4xl font-bold mb-4 shadow-lg">
                      {managerInfo.fullName.slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="text-3xl font-bold mb-1">
                      {managerInfo.fullName}
                    </h3>
                    <p className="text-green-100 text-lg">Logistics Manager</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm font-medium text-green-50 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <Globe size={18} /> Speaks Arabic, English, Urdu
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-green-50 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <MapPin size={18} /> Expert in Hotel Zones & Haram Area
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-green-50 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <WhatsAppIcon size={18} /> {managerInfo.whatsApp}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-green-50 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <PhoneCallIcon size={18} /> {managerInfo.phoneNumber}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions & Social Proof */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
                {/* Stats Row */}
                <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 pb-8 border-b border-slate-100">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">2k+</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      Pickups
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 flex items-center gap-1">
                      4.9{" "}
                      <Star
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      Rating
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">15m</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      Avg Response
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="mb-8 bg-slate-50 p-5 rounded-xl border border-slate-100 relative">
                  <div className="text-slate-700 italic text-sm leading-relaxed relative z-10">
                    "{managerInfo.fullName} provided exceptional service. Fast
                    pickup and genuine help made our experience smooth and
                    stress-free."
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {managerInfo.fullName.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {managerInfo.fullName.split(" ")[0]}
                    </div>
                    <div className="text-xs text-slate-400">
                      • Pilgrim from Saudi
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    id="generate_lead_manager"
                    onClick={() =>
                      handleWhatsApp(whatsappMessages.pickup, true)
                    }
                    className="w-full bg-green-500 text-white text-lg font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                  >
                    <WhatsAppIcon
                      size={24}
                      className="group-hover:animate-pulse"
                    />
                    WhatsApp Message
                  </button>

                  <button
                    onClick={handleCall}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white border-2 border-slate-200 font-bold py-4 px-6 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <PhoneCallIcon size={20} />
                    Call Us Now
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                    <Clock size={12} />
                    <span>Usually responds in under 2 minutes</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
