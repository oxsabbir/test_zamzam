import {
  Phone,
  Clock,
  CheckCircle,
  ChevronRight,
  MapPin,
  Truck,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { managerInfo } from "@/constants";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const contactCards = [
  {
    label: "Call Directly",
    value: managerInfo.phoneNumber,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: managerInfo.whatsApp,
    icon: WhatsAppIcon,
  },
  {
    label: "Service Area",
    value: "Makkah, Saudi Arabia",
    icon: MapPin,
  },
];

const serviceCards = [
  {
    title: "Quick Collection",
    description:
      "We coordinate pickup windows based on your area and selected service.",
    icon: Clock,
  },
  {
    title: "Careful Handling",
    description:
      "Garments are collected, tracked, cleaned, and returned neatly packed.",
    icon: ShieldCheck,
  },
  {
    title: "Simple Return",
    description:
      "Delivery is arranged back to your hotel, apartment, or residence.",
    icon: Truck,
  },
];

const PickupManager = () => {
  return (
    <section
      id="pickup"
      className="py-16 sm:py-20 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.45))] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-primary/10 bg-card shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-b border-primary/10 bg-[linear-gradient(145deg,hsl(var(--primary-50)),#ffffff_58%,hsl(var(--primary-100)))] p-7 text-foreground sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  Available 24/7
                  </div>

                  <h2 className="max-w-md text-3xl font-black leading-[1.08] tracking-tight sm:text-[2.6rem]">
                    Premium pickup support, ready when you are.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    WhatsApp or call us to schedule a pickup for hotels,
                    apartments, and residences across Makkah.
                  </p>
                </div>

                <div className="mt-9 space-y-3">
                  {contactCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.label}
                        className="rounded-lg border border-primary/10 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-colors hover:bg-white"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              {card.label}
                            </p>
                            <p className="text-base font-bold sm:text-lg">
                              {card.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-lg border border-primary/10 bg-white/75 p-5 shadow-sm backdrop-blur-md">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex text-amber-500" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      Trusted across Makkah
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Friendly support, flexible pickup windows, and clear
                    updates from booking to delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#ffffff,#f8faf9)] p-7 sm:p-10 lg:p-12">
              <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                  Booking Support
                </p>
                <h3 className="text-3xl font-black tracking-tight text-foreground leading-tight sm:text-4xl">
                  Book your laundry pickup in under a minute.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Message us for the fastest response, or call directly if you
                  want to confirm timing right away.
                </p>
              </div>

              <div className="mb-8 grid gap-4 lg:grid-cols-3">
                {serviceCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="rounded-lg border border-border/70 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5f1e8] text-amber-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-lg font-black text-foreground">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-lg border border-border/70 bg-background p-4 shadow-sm sm:p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    id="generate_lead"
                    onClick={() =>
                      handleWhatsApp(whatsappMessages.pickup, true)
                    }
                    className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-4 text-base font-bold text-white shadow-[0_16px_32px_rgba(52,103,57,0.2)] transition-all hover:bg-primary/90 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <WhatsAppIcon size={22} />
                    Request Pickup
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <a
                    href={`tel:${managerInfo.onlyNumber.phoneNumber}`}
                    className="flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 py-4 text-base font-bold text-foreground transition-colors hover:border-primary/30 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    Call Now
                  </a>
                </div>

                <div className="mt-5 grid gap-3 border-t border-border/70 pt-5 sm:grid-cols-3">
                  {["24/7 Service", "Flexible Options", "Clear Communication"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-amber-200/70 bg-amber-50/70 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-amber-700 shadow-sm">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-black text-foreground">
                      Need help choosing a service?
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Send your item list or a photo on WhatsApp and the team
                      will guide you through the right pickup option.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupManager;
