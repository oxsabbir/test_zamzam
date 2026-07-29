import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Landmark,
  Hotel,
  Home,
  Building2,
  Map,
} from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { useState } from "react";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const areas = [
  {
    icon: Landmark,
    title: "Haram District & Clock Tower",
    description:
      "Hotels and residences steps from Masjid al-Haram. We reach your door before you finish your next prayer.",
    accent: "from-amber-400 to-orange-500",
    locations: [
      { name: "Clock Tower Complex", time: "5-8 min" },
      { name: "Al Safwah Royal Orchid", time: "5-10 min" },
      { name: "Fairmont Makkah", time: "7-10 min" },
      { name: "Hilton & DoubleTree by Hilton", time: "5-10 min" },
      { name: "ZamZam Hotel", time: "7-12 min" },
      { name: "Jabal Al Kaaba Area", time: "8-12 min" },
    ],
  },
  {
    icon: Hotel,
    title: "Jabal Omar, Hilton Area & Tariq Al Hijrah",
    description:
      "Premium hotel zone with 24/7 express pickup. Ideal for guests who need quick turnaround.",
    accent: "from-indigo-400 to-violet-500",
    locations: [
      { name: "Jabal Omar Hotels", time: "8-12 min" },
      { name: "Swissotel Makkah", time: "10-15 min" },
      { name: "Dar Al Tawhid", time: "10-15 min" },
      { name: "Anjum Hotel", time: "8-12 min" },
      { name: "Swiss Al Maqam & Swiss Hotel Makkah", time: "10-15 min" },
      { name: "Tariq Al Hijrah Road", time: "10-15 min" },
    ],
  },
  {
    icon: Home,
    title: "Misfalah & Kudai",
    description:
      "Affordable neighborhoods with fast service. Popular with families and long-stay pilgrims.",
    accent: "from-emerald-400 to-teal-500",
    locations: [
      { name: "Misfalah District", time: "12-18 min" },
      { name: "Kudai Hotels & Apartments", time: "15-20 min" },
      { name: "Al Rehab District", time: "15-20 min" },
    ],
  },
  {
    icon: Building2,
    title: "Ajyad & Aziziyah",
    description:
      "Walking-distance pickup from hotels near the Haram. Perfect for guests without transport.",
    accent: "from-sky-400 to-blue-500",
    locations: [
      { name: "Ajyad Area Hotels", time: "5-10 min" },
      { name: "Aziziyah Commercial District", time: "10-15 min" },
      { name: "Al Andalus District", time: "12-18 min" },
    ],
  },
  {
    icon: Map,
    title: "Al Jihad & Outer Districts",
    description:
      "Full coverage across Makkah's wider neighborhoods and newer districts. Same-day service for residential areas.",
    accent: "from-rose-400 to-pink-500",
    locations: [
      { name: "Al Jihad Area", time: "15-20 min" },
      { name: "Hilton Area", time: "10-15 min" },
      { name: "Al Rusaifah", time: "20-25 min" },
      { name: "Al Awali & Maabda", time: "20-30 min" },
      { name: "Tell Al Sheraa", time: "25-30 min" },
    ],
  },
];

const AreaCoverage = () => {
  const [location, setLocation] = useState("");
  const handleCheckArea = () => {
    const message = whatsappMessages.checkPickUpTime.replace(
      "<location>",
      location,
    );
    handleWhatsApp(message, false);
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/15 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">
              Full city coverage
            </span>
          </div>
          <h2
            id="areas-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground tracking-tight"
          >
            We Cover All of <span className="text-primary">Makkah</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            From hotels next to the Haram to residential neighborhoods — our
            drivers reach every corner of the city within minutes.
          </p>
        </div>

        {/* Area Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-14">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl sm:rounded-3xl border border-white/20 bg-white/50 backdrop-blur-xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/70 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br ${area.accent} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${area.accent} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-2.5 mb-5">
                  {area.locations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3"
                    >
                      <div className="flex  bg-green-300 items-center gap-2.5">
                        <MapPin size={14} className="text-primary shrink-0" />
                        <span className="text-sm   font-medium text-foreground">
                          {loc.name}
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full border border-primary/15">
                        <Clock size={12} />
                        {loc.time}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  onClick={() =>
                    handleWhatsApp(
                      `Hi I need laundry service in ${encodeURIComponent(
                        area.title,
                      )}. Could you please share the pickup details and timing? Thank you! `,
                      true,
                    )
                  }
                  id="generate_lead"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-11 rounded-xl transition-all duration-300"
                >
                  Book Pickup
                </Button>
              </div>
            );
          })}
        </div>

        {/* Location Check — Glassmorphic */}
        <div className="max-w-2xl mx-auto rounded-2xl sm:rounded-3xl border border-white/20 bg-white/50 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="relative p-6 sm:p-8 text-center">
            {/* Glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                <MapPin size={26} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                Not Sure About Your Area?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md mx-auto">
                Enter your hotel or location name and we'll confirm pickup
                availability instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  value={location}
                  type="text"
                  minLength={1}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 bg-white/60 backdrop-blur-sm border border-green-300/60 px-4 py-3 rounded-xl text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all"
                  placeholder="Enter your hotel or location"
                />
                <button
                  onClick={handleCheckArea}
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white hover:bg-green-600 font-bold px-6 py-3 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 shrink-0"
                >
                  <WhatsAppIcon size={20} />
                  Check Now
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                Fast Reply · No Obligation · Always Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
