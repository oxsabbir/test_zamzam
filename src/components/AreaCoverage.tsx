import { useState } from "react";
import { MapPin, CheckCircle, Info, Truck, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";
import { siteInfo } from "@/constants";

const coverageAreas = [
  {
    name: "Masjid al-Haram Area",
    time: "5-10 mins",
    description: "All hotels near the holy mosque including Clock Tower.",
    featured: true,
  },
  {
    name: "Jabal Omar",
    time: "8-12 mins",
    description: "Conrad, Hilton, Marriott and all surrounding hotels.",
    featured: false,
  },
  {
    name: "Aziziyah District",
    time: "15-20 mins",
    description: "Complete coverage of North and South Aziziyah.",
    featured: false,
  },
  {
    name: "Misfalah & Kudai",
    time: "10-15 mins",
    description: "Fast pickup for all residences and pilgrim hotels.",
    featured: false,
  },
  {
    name: "Shisha & Mahbas Al-Jin",
    time: "12-18 mins",
    description: "Reliable service for these busy pilgrim hubs.",
    featured: false,
  },
  {
    name: "Al Naseem & Al Awali",
    time: "20-25 mins",
    description: "Residential areas coverage with scheduled pickups.",
    featured: false,
  },
];

const AreaCoverage = () => {
  const [location, setLocation] = useState("");

  const handleCheckLocation = () => {
    const finalMessage = whatsappMessages.checkPickUpTime.replace(
      "*<location>*",
      location || "Makkah Area",
    );
    handleWhatsApp(finalMessage, true);
  };

  return (
    <section id="coverage" className="py-16 sm:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1 font-bold">
            Service Coverage
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black mb-5 text-foreground tracking-tight">
            Pickup Coverage Across Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {siteInfo.siteTitle} reaches hotels, apartments, and residential
            neighborhoods across the city with dependable collection windows.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Popular Pickup Zones
              </h3>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                Clean, simple coverage cards with typical pickup times by area.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Truck className="w-4 h-4" />
              Citywide support
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <div
                key={index}
                className={`group rounded-[2rem] border bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  area.featured
                    ? "border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card"
                    : "border-border/60 hover:border-primary/20"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      area.featured
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      Avg. Pickup
                    </p>
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm font-bold text-primary">
                      <Clock className="w-4 h-4" />
                      {area.time}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h4 className="text-xl font-bold text-foreground">
                      {area.name}
                    </h4>
                    {area.featured && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                        Fastest zone
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-5">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Available daily
                  </div>
                  <button
                    onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                  >
                    Book Pickup
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-primary/10 bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Check Your Custom Location
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      If your hotel, tower, or neighborhood is not listed
                      above, send us the exact location and we will confirm
                      availability for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                </div>
                <Input
                  placeholder="Type your hotel, building, or area..."
                  className="h-12 rounded-2xl border-border/70 bg-background pl-11 text-sm sm:text-base"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCheckLocation()}
                />
              </div>
              <button
                onClick={handleCheckLocation}
                className="rounded-2xl bg-primary px-6 py-3 text-sm sm:text-base font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                Check Availability
              </button>
            </div>

            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              Ask about pickup timing for any hotel or residence in Makkah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
