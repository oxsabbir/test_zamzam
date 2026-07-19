import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";
import { Zap, Rocket, Clock, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Zap,
    time: "1 Hour",
    title: "Emergency Service",
    description: "For urgent situations — cleaned, pressed, and ready before you know it.",
    badge: "FASTEST",
    accent: "from-amber-400 to-red-500",
    btnClass: "bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white shadow-lg shadow-red-500/25",
    featured: true,
  },
  {
    icon: Rocket,
    time: "24 Hours",
    title: "Express Service",
    description: "Between prayers — quick turnaround for your daily needs.",
    badge: null,
    accent: "from-emerald-400 to-teal-500",
    btnClass: "bg-primary text-white hover:bg-primary/90",
    featured: false,
  },
  {
    icon: Clock,
    time: "12 Hours",
    title: "Same Day Service",
    description: "Standard turnaround — drop off and get it back the same day.",
    badge: null,
    accent: "from-sky-400 to-blue-500",
    btnClass: "bg-primary text-white hover:bg-primary/90",
    featured: false,
  },
];

export default function UrgentService() {
  const handleBooking = (hourDetails: string, service: string) => {
    const message = whatsappMessages.booking
      .replace("<bookingHour>", hourDetails)
      .replace("<bookingService>", service);
    handleWhatsApp(message, true);
  };

  return (
    <section
      className="relative py-12 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/20 to-orange-50/30"
      aria-labelledby="emergency-times-heading"
    >
      {/* Subtle background blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-3 sm:px-4">
        <header className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/15 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">
              Makkah's Fastest Laundry
            </span>
          </div>
          <h2
            id="emergency-times-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground tracking-tight"
          >
            Need It Done Fast?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick a turnaround time that works for you. From one-hour emergencies
            to same-day standard — we've got you covered.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.time}
                className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${
                  svc.featured
                    ? "border-amber-300/40 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:scale-[1.03] sm:-mt-2 sm:-mb-2"
                    : "border-white/20 bg-white/60 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                }`}
              >
                {/* Featured glow */}
                {svc.featured && (
                  <>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-red-500 rounded-full" />
                    <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-amber-500 to-red-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-red-500/20">
                      {svc.badge}
                    </div>
                  </>
                )}

                <div className="p-6 sm:p-7 text-center">

                  {/* Icon */}
                  <div className="relative mb-5 mx-auto w-fit">
                    <div
                      className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.accent} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.accent} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="text-3xl sm:text-4xl font-black text-foreground mb-1">
                    {svc.time}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Button */}
                  <button
                    id="generate_lead"
                    onClick={() => handleBooking(svc.time, svc.title)}
                    className={`w-full font-bold text-sm h-12 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${svc.btnClass}`}
                  >
                    Book Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
