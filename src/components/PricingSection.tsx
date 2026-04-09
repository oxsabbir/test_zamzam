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
    <section className="py-16 sm:py-20 bg-[linear-gradient(180deg,rgba(52,103,57,0.04),rgba(255,255,255,0))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-10 sm:mb-14">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <Badge className="mb-4 border-none bg-primary/10 px-4 py-1 text-primary hover:bg-primary/20">
                Service Options
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-black mb-4 text-foreground tracking-tight leading-tight">
                Laundry Packages for Different Timelines
              </h2>
              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Choose from standard, express, and urgent turnaround packages
                with clear per-kilogram pricing and pickup details shown up
                front.
              </p>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-card p-5 sm:p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-muted/50 p-4 text-center">
                  <div className="text-2xl font-black text-foreground">6</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    Packages
                  </div>
                </div>
                <div className="rounded-2xl bg-muted/50 p-4 text-center">
                  <div className="text-2xl font-black text-foreground">1h</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    Fastest
                  </div>
                </div>
                <div className="rounded-2xl bg-muted/50 p-4 text-center">
                  <div className="text-2xl font-black text-foreground">19+</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    SAR / Kg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto mb-12 sm:mb-16">
          {laundryPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.08)] ${
                pkg.featured
                  ? "border-primary/25 shadow-[0_20px_50px_rgba(52,103,57,0.12)]"
                  : "border-border/60 shadow-sm hover:border-primary/20"
              }`}
            >
              <div
                className={`h-2 w-full ${
                  pkg.type === "Urgent"
                    ? "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"
                    : "bg-gradient-to-r from-primary-400 via-primary to-accent"
                }`}
              />

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge
                        className={`px-3 py-1 font-bold ${
                          pkg.type === "Urgent"
                            ? "bg-orange-500 text-white hover:bg-orange-600"
                            : "bg-primary text-white hover:bg-primary/90"
                        }`}
                      >
                        {pkg.type}
                      </Badge>
                      {pkg.featured && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                          Most Balanced
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-foreground">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {pkg.type === "Urgent"
                        ? "Priority turnaround for tighter schedules."
                        : "Reliable everyday cleaning with a practical return window."}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-muted/50 px-4 py-3 text-right">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-4xl font-black text-primary">
                        {pkg.price}
                      </span>
                      <span className="text-sm font-bold text-muted-foreground">
                        SAR
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/80">
                      Per Kg
                    </span>
                  </div>
                </div>

                <div className="mb-6 grid gap-3">
                  <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                          Delivery Time
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          {pkg.deliveryTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                          Pickup & Delivery
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          {pkg.pickup}
                        </p>
                      </div>
                    </div>
                  </div>

                  {pkg.note && (
                    <div className="flex items-start gap-2 rounded-2xl border border-orange-200 bg-orange-50/80 p-3">
                      <Info className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-xs font-medium text-orange-700 leading-tight">
                        {pkg.note}
                      </span>
                    </div>
                  )}
                </div>

                <Button
                  id="generate_lead"
                  onClick={() =>
                    handleBooking(pkg.price, pkg.title, pkg.deliveryTime)
                  }
                  className={`mt-auto h-14 w-full rounded-2xl text-sm font-black uppercase tracking-[0.18em] transition-all duration-300 ${
                    pkg.featured
                      ? "bg-primary text-white hover:bg-primary/90 shadow-[0_18px_30px_rgba(52,103,57,0.2)]"
                      : "bg-muted text-foreground hover:bg-primary hover:text-white"
                  }`}
                >
                  Choose {pkg.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-[2rem] border border-primary/15 bg-card shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.6fr]">
              <div className="bg-[linear-gradient(135deg,rgba(52,103,57,0.08),rgba(255,255,255,0.4))] p-7 sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                  <CheckCircle className="h-4 w-4" />
                  Extra Service
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-3">
                  {ironingService.title}
                </h3>
                <p className="max-w-xl text-muted-foreground mb-5 leading-relaxed">
                  Neat pressing and ironing for garments that need a sharper,
                  ready-to-wear finish.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    {ironingService.deliveryTime}
                  </div>
                  <div className="flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium">
                    <Truck className="mr-2 h-4 w-4 text-primary" />
                    Pickup {ironingService.pickup}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center border-t border-border/60 bg-background p-7 sm:p-8 lg:border-l lg:border-t-0">
                <div className="rounded-[1.75rem] border border-primary/10 bg-muted/30 p-6 text-center">
                  <div className="mb-1 text-4xl font-black text-primary">
                    {ironingService.price}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    SAR / KG
                  </div>
                  <Button
                    onClick={() =>
                      handleBooking(
                        ironingService.price,
                        "Ironing Only",
                        ironingService.deliveryTime,
                      )
                    }
                    className="mt-5 h-12 w-full rounded-2xl bg-primary text-white hover:bg-primary/90"
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
