import { useState } from "react";
import { MapPin, CheckCircle, Info, Truck, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

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
    const finalMessage = whatsappMessages.checkPickUpTime.replace("*<location>*", location || "Makkah Area");
    handleWhatsApp(finalMessage, true);
  };

  return (
    <section id="coverage" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-400/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1 font-bold">
            Service Coverage
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tight leading-tight">
            We Serve All of Makkah
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Makkah Al Baraka Laundry provides the most extensive and reliable coverage across the holy city. 
            Fast pickup, wherever you are.
          </p>

          {/* Featured Search/Check Tool */}
          <div className="max-w-2xl mx-auto p-2 bg-white rounded-3xl shadow-2xl shadow-primary/5 border border-primary/10">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <Input 
                  placeholder="Enter your hotel or area name..."
                  className="bg-transparent border-none h-14 pl-12 rounded-2xl placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0 text-base sm:text-lg font-medium"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCheckLocation()}
                />
              </div>
              <button 
                onClick={handleCheckLocation}
                className="bg-primary text-white text-lg font-bold py-3 px-8 rounded-2xl shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shrink-0"
              >
                Check Pickup Time
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            Check instant availability for any hotel or residence in Makkah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {coverageAreas.map((area, index) => (
            <div
              key={index}
              className={`p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group flex flex-col justify-between ${
                area.featured
                  ? "bg-card border-2 border-primary/20 shadow-2xl shadow-primary/5"
                  : "bg-background border border-border/40 shadow-sm hover:border-primary/20"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${
                    area.featured ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-primary/10 text-primary"
                  }`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mb-1">Avg. Pickup</p>
                    <div className="flex items-center justify-end gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      <p className="text-sm font-black text-primary">{area.time}</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {area.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
                  {area.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs font-bold text-primary/80">
                  <CheckCircle className="w-4 h-4" />
                  Available 24/7
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Truck className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Replacement */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-700 rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/30 group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div className="w-24 h-24 rounded-[2rem] bg-white/20 backdrop-blur-xl flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-xl border border-white/20">
              <Truck className="w-12 h-12" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight leading-tight">
                Anywhere in Makkah,<br /> We Reach You.
              </h3>
              <p className="text-primary-50/90 text-lg font-medium leading-relaxed mb-0 opacity-90">
                Our fleet is strategically positioned across the city to ensure the fastest response times for pilgrims and residents alike. No area is too far for Makkah Al Baraka.
              </p>
            </div>
            <button 
              onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
              className="bg-white text-primary text-xl font-black py-5 px-10 rounded-[1.5rem] shadow-2xl transition-all duration-300 hover:bg-primary-50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shrink-0"
            >
              Order Pickup Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
