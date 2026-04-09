import { CheckCircle, Clock, Truck, Info } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";
import { Badge } from "./ui/badge";

const laundryPackages = [
  {
    id: 1,
    title: "Standard Care",
    type: "Normal",
    deliveryTime: "12 Hours",
    price: 19,
    pickup: "Included",
    featured: false,
  },
  {
    id: 2,
    title: "Eco Wash",
    type: "Normal",
    deliveryTime: "10 Hours",
    price: 24,
    pickup: "Included",
    featured: false,
  },
  {
    id: 3,
    title: "Premium Clean",
    type: "Normal",
    deliveryTime: "8 Hours",
    price: 29,
    pickup: "Included",
    featured: true,
  },
  {
    id: 4,
    title: "Express",
    type: "Urgent",
    deliveryTime: "5 Hours",
    price: 32,
    pickup: "SAR 15 Extra",
    featured: false,
  },
  {
    id: 5,
    title: "Flash",
    type: "Urgent",
    deliveryTime: "3 Hours",
    price: 38,
    pickup: "SAR 15 Extra",
    featured: false,
  },
  {
    id: 6,
    title: "Instant*",
    type: "Urgent",
    deliveryTime: "1 Hour*",
    price: 45,
    pickup: "SAR 15 Extra",
    featured: false,
    note: "*Subject to availability in Makkah central area",
  },
];

const ironingService = {
  title: "Professional Ironing",
  price: 14,
  deliveryTime: "Within 4 Hours",
  pickup: "Included",
};

export default function PricingSection() {
  const handleBooking = (price: number, plan: string, time: string) => {
    const message = whatsappMessages.package
      .replace("<package>", `${plan} (${time})`)
      .replace("<price>", `${price} SAR/KG`);

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
            Service Options
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Laundry Packages for Different Timelines
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from everyday, express, and rush turnaround packages with
            straightforward per-kilogram pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {laundryPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group flex flex-col rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                pkg.featured
                  ? "bg-card border-primary shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-primary/20 scale-[1.03]"
                  : "bg-background border-border/60 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary/30"
              }`}
            >
              <div className={`p-6 rounded-t-[22px] ${
                pkg.type === "Urgent" 
                  ? "bg-gradient-to-br from-red-50 to-orange-50/50" 
                  : "bg-gradient-to-br from-primary/5 to-transparent"
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge 
                      className={`mb-2 font-bold px-3 ${
                        pkg.type === "Urgent" 
                          ? "bg-red-500 hover:bg-red-600 text-white" 
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      {pkg.type}
                    </Badge>
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">{pkg.title}</h3>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-black text-primary">{pkg.price}</span>
                      <span className="text-sm font-bold text-muted-foreground ml-1">SAR</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Per Kg</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center group/item">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 transition-colors group-hover/item:bg-primary/20">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Delivery Time</p>
                      <p className="text-sm font-bold text-foreground">{pkg.deliveryTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center group/item">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 transition-colors group-hover/item:bg-primary/20">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Pickup & Delivery</p>
                      <p className="text-sm font-bold text-foreground">{pkg.pickup}</p>
                    </div>
                  </div>

                  {pkg.note && (
                    <div className="flex items-start gap-2 bg-orange-50/80 border border-orange-100 p-3 rounded-xl">
                      <Info className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-xs font-medium text-orange-700 leading-tight">{pkg.note}</span>
                    </div>
                  )}
                </div>

                <Button
                  id="generate_lead"
                  onClick={() => handleBooking(pkg.price, pkg.title, pkg.deliveryTime)}
                  className={`w-full font-black text-sm uppercase tracking-widest h-14 rounded-2xl transition-all duration-300 ${
                    pkg.featured 
                      ? "bg-primary text-white hover:bg-primary/90 shadow-[0_10px_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_15px_25px_rgba(var(--primary-rgb),0.4)]" 
                      : "bg-muted text-foreground hover:bg-primary hover:text-white"
                  }`}
                >
                  Choose {pkg.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 shadow-inner relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle className="text-primary w-6 h-6" />
                    {ironingService.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Neat pressing and ironing for garments that need a sharper,
                    ready-to-wear finish.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center text-sm font-medium bg-background/80 px-3 py-1.5 rounded-full border">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {ironingService.deliveryTime}
                    </div>
                    <div className="flex items-center text-sm font-medium bg-background/80 px-3 py-1.5 rounded-full border">
                      <Truck className="w-4 h-4 mr-2 text-primary" />
                      Pickup {ironingService.pickup}
                    </div>
                  </div>
                </div>
                <div className="text-center bg-background rounded-2xl p-6 shadow-sm border border-primary/10 min-w-[160px]">
                  <div className="text-4xl font-black text-primary mb-1">
                    {ironingService.price}
                  </div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    SAR / KG
                  </div>
                  <Button
                    onClick={() => handleBooking(ironingService.price, "Ironing Only", ironingService.deliveryTime)}
                    className="mt-4 w-full bg-primary text-white"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
