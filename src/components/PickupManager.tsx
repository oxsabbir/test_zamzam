import {
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin,
  Truck,
  Star,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { managerInfo } from "@/constants";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import pickupImage from "@/assets/nasir-cta.webp";

const features = [
  {
    icon: Clock,
    title: "20-Min Pickup",
    description:
      "A rider comes to your hotel, apartment, or Haram-area stay fast.",
    value: "20 min",
  },
  {
    icon: Truck,
    title: "Same-Day Back",
    description:
      "Clean, pressed, and delivered back with careful garment handling.",
    value: "Same day",
  },
];

const PickupManager = () => {
  return (
    <section
      id="pickup"
      className="relative overflow-hidden bg-primary-50 py-16 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-primary-950 shadow-2xl shadow-primary/20 sm:min-h-[520px]">
            <img
              src={pickupImage}
              alt="Laundry pickup and delivery service in Makkah"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width="900"
              height="1100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-primary-950/10" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="text-sm font-bold">Available 24/7</span>
                  </div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-2xl font-black leading-tight sm:text-3xl">
                  Premium pickup care across Makkah.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Trusted by 3,000+ customers for fast hotel, apartment, and
                  Haram-area laundry service.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[1.75rem] border border-primary-200/70 bg-white p-6 shadow-xl shadow-primary/10 sm:p-8 lg:p-10">
            <div className="mb-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary">
                <ShieldCheck size={15} />
                Doorstep Laundry Manager
              </div>
              <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Need a pickup?
                <span className="block text-primary">Nasir handles it.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Message us on WhatsApp or call directly. We collect, wash,
                press, and deliver without pickup fees or complicated booking.
              </p>
            </div>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="rounded-2xl border border-primary-100 bg-primary-50/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:bg-white hover:shadow-soft"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                        <Icon size={21} />
                      </span>
                      <span className="text-sm font-black text-primary">
                        {feat.value}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-foreground">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mb-8 grid gap-3 rounded-2xl border border-border bg-muted/60 p-4 grid-cols-1">
              <a
                href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-white p-3 transition-all duration-300 hover:bg-green-600 hover:text-white"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                  <WhatsAppIcon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase text-muted-foreground transition-colors duration-300 group-hover:text-white/60">
                    WhatsApp
                  </span>
                  <span className="block truncate text-sm font-black">
                    {managerInfo.whatsApp}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-xl bg-white p-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase text-muted-foreground">
                    Location
                  </span>
                  <span className="block truncate text-sm font-black">
                    Makkah, Saudi Arabia
                  </span>
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
              <button
                onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-5 text-base font-black text-white shadow-xl shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-green-400 hover:to-emerald-500 hover:shadow-2xl hover:shadow-green-500/30 sm:text-lg"
              >
                <WhatsAppIcon size={24} />
                <span>Book Instant Pickup</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <a
                href={`tel:${managerInfo.onlyNumber.phoneNumber}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary-200 bg-primary-50 px-5 py-5 text-base font-black text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white sm:text-lg"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                No minimum order
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Free pickup & delivery
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Same-day options
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupManager;
