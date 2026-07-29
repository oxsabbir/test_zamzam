import { Clock, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";
import { Badge } from "./ui/badge";

const extraPackages = [
  {
    id: 1,
    title: "Quick Wash",
    type: "Normal",
    deliveryTime: "12 Hours",
    price: 20,
    pickup: "Included",
  },
  {
    id: 2,
    title: "Daily Care",
    type: "Urgent",
    deliveryTime: "8 Hours",
    price: 25,
    pickup: "Included",
  },
  {
    id: 3,
    title: "Express Clean",
    type: "Super Urgent",
    deliveryTime: "5 Hours",
    price: 30,
    pickup: "Included",
  },
];

export default function PricingSection() {
  const handleBooking = (price: number, plan: string, time: string) => {
    const message = whatsappMessages.package
      .replace("<package>", `${plan} (${time})`)
      .replace("<price>", `${price} SAR/KG`);
    handleWhatsApp(message, true);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-emerald-50/40 to-teal-50/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
            Simple Pricing
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Laundry Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wash, dry, and press by the kilogram. Pick a turnaround time that
            fits your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
          {extraPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col rounded-3xl border border-border/60 bg-background shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`p-6 rounded-t-[22px] ${
                  pkg.type === "Urgent"
                    ? "bg-gradient-to-br from-red-50 to-orange-50/50"
                    : "bg-gradient-to-br from-primary/5 to-transparent"
                }`}
              >
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
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                      {pkg.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-black text-primary">
                        {pkg.price}
                      </span>
                      <span className="text-sm font-bold text-muted-foreground ml-1">
                        SAR
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                      Per Kilogram
                    </span>
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
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                        Delivery Time
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {pkg.deliveryTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center group/item">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 transition-colors group-hover/item:bg-primary/20">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                        Pickup & Delivery
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {pkg.pickup}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  id="generate_lead"
                  onClick={() =>
                    handleBooking(pkg.price, pkg.title, pkg.deliveryTime)
                  }
                  className={`w-full font-black text-sm uppercase tracking-widest h-14 rounded-2xl transition-all duration-300 ${
                    pkg.type === "Urgent"
                      ? "bg-primary text-white hover:bg-primary/80"
                      : "bg-muted text-foreground hover:bg-primary hover:text-white"
                  }`}
                >
                  Choose {pkg.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
