import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Shirt,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { managerInfo } from "@/constants";
import WhatsAppIcon from "./icons/Whatsapp";
import { handleCall, handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import ctaBackground from "@/assets/cta-background.webp";

const stats = [
  {
    icon: Clock,
    value: "20",
    suffix: "min",
    label: "Typical pickup window",
  },
  {
    icon: Truck,
    value: "0",
    suffix: "SAR",
    label: "Pickup and delivery fee",
  },
  {
    icon: Sparkles,
    value: "Same",
    suffix: "day",
    label: "Wash, press, and return",
  },
];

const trustPoints = [
  "Hotel and apartment pickup",
  "No minimum order",
  "24/7 WhatsApp support",
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-16 text-white sm:py-24">
      <img
        src={ctaBackground}
        alt="Premium laundry service in Makkah"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        loading="lazy"
        width="1920"
        height="1080"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/92 to-gray-950/95" />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-stretch lg:gap-8">
          <div className="flex min-h-[520px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md sm:p-8 lg:p-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary-300">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                Makkah laundry pickup
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Your laundry is handled before your day gets busy.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Send your location, hand over the clothes, and get everything
                delivered back fresh, pressed, and ready to wear.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-lg shadow-black/10">
                      <Icon size={21} />
                    </div>
                    <div className="text-3xl font-black leading-none">
                      {stat.value}
                      <span className="ml-1 text-base font-bold text-primary-300">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white p-6 text-foreground shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-primary">
                  Ready now
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                  Book pickup with Nasir
                </h3>
              </div>
              <div className="hidden rounded-2xl bg-primary-50 p-4 text-primary sm:block">
                <Shirt size={30} />
              </div>
            </div>

            <div className="mb-8 rounded-2xl border border-primary-100 bg-primary-50 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={17} className="fill-current" />
                  ))}
                </div>
                <span className="text-sm font-black text-primary">
                  3,000+ happy customers
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A dependable local pickup team for pilgrims, hotel guests, and
                residents across Makkah.
              </p>
            </div>

            <div className="mb-8 space-y-3">
              <button
                id="generate_lead"
                onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-5 text-base font-black text-white shadow-xl shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-green-400 hover:to-emerald-500 hover:shadow-2xl hover:shadow-green-500/30 sm:text-lg"
              >
                <WhatsAppIcon size={24} />
                <span>WhatsApp Pickup</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={handleCall}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-primary-200 bg-primary-50 px-5 py-5 text-base font-black text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white sm:text-lg"
              >
                <Phone size={21} />
                Call Now
              </button>
            </div>

            <div className="mb-8 grid gap-3">
              <div className="flex items-center gap-3 rounded-xl bg-muted/70 p-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
                  <MessageCircle size={18} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="block text-sm font-black">
                    {managerInfo.whatsApp}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-muted/70 p-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase text-muted-foreground">
                    Service Area
                  </span>
                  <span className="block text-sm font-black">
                    Makkah, Saudi Arabia
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
              {trustPoints.map((point) => (
                <span key={point} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
