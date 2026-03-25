import { MapPin, CheckCircle, Info, Truck } from "lucide-react";
import { Badge } from "./ui/badge";
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
  return (
    <section id="coverage" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
            Service Coverage
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            We Serve All of Makkah
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Makkah Al Baraka Laundry provides the most extensive coverage in the holy city. 
            No matter where you are, we'll reach you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {coverageAreas.map((area, index) => (
            <div
              key={index}
              className={`p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-2xl group ${
                area.featured
                  ? "bg-card border-primary shadow-xl ring-1 ring-primary/20"
                  : "bg-background border-border/60 hover:border-primary/30"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${
                  area.featured ? "bg-primary text-white" : "bg-primary/10 text-primary"
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">Pickup Time</p>
                  <p className="text-sm font-black text-primary">{area.time}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {area.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                {area.description}
              </p>
              
              <div className="flex items-center gap-2 text-xs font-bold text-primary/80">
                <CheckCircle className="w-4 h-4" />
                Available 24/7
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-primary rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Truck className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">Don't See Your Area?</h3>
              <p className="text-blue-50/90 font-medium leading-relaxed mb-6">
                Don't worry! We serve almost every corner of Makkah. Message us on WhatsApp 
                and we'll confirm if we can pick up from your exact location.
              </p>
              <button 
                onClick={() => handleWhatsApp(whatsappMessages.checkPickUpTime, true)}
                className="w-full bg-white text-primary text-lg font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                Check My Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
