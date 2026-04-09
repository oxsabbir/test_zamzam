import { Phone, Clock, CheckCircle, ChevronRight, MapPin, Truck } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { managerInfo } from "@/constants";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const PickupManager = () => {
  return (
    <section id="pickup" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Contact Info Side */}
            <div className="lg:col-span-5 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_34%),linear-gradient(145deg,hsl(var(--primary-700)),hsl(var(--primary-500))_55%,hsl(var(--accent)))] p-7 sm:p-10 text-white flex flex-col justify-between">
              <div className="absolute -top-20 -right-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-black/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                  <div className="w-2 h-2 bg-primary-300 rounded-full animate-pulse"></div>
                  Available 24/7
                </div>

                <h2 className="max-w-md text-3xl sm:text-[2.6rem] font-black leading-[1.08] tracking-tight mb-4">
                  Arrange pickup in minutes with a cleaner, faster process.
                </h2>
                <p className="max-w-md text-sm sm:text-base text-white/82 leading-relaxed mb-8">
                  We help guests and residents book pickups, confirm timing,
                  and choose the right service for their garments.
                </p>

                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/14 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/14">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/16">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
                          Call Directly
                        </p>
                        <p className="text-lg font-bold">{managerInfo.phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/14 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/14">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/16">
                        <WhatsAppIcon size={22} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
                          WhatsApp
                        </p>
                        <p className="text-lg font-bold">{managerInfo.whatsApp}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/14 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/14">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/16">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
                          Service Area
                        </p>
                        <p className="text-base font-bold">Makkah, Saudi Arabia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 rounded-[1.5rem] border border-white/14 bg-white/10 p-5 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-white/90">Trusted every day in Makkah</p>
                </div>
                <p className="text-sm text-white/72 leading-relaxed">
                  Friendly support, practical pickup windows, and clear updates
                  from booking to delivery.
                </p>
              </div>
            </div>

            {/* Actions Side */}
            <div className="lg:col-span-7 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-8 sm:p-10 lg:p-12">
              <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
                  Booking Support
                </p>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-tight">
                  Choose the quickest way to arrange your laundry pickup.
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Message us for the fastest response, or call directly if you
                  want to confirm timing right away.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 mb-8">
                <div className="rounded-[2rem] border border-primary/10 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Quick Collection</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We coordinate pickup windows as quickly as possible based
                    on your area and service type.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-primary/10 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Simple Return</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Your cleaned garments are returned neatly packed to your
                    hotel, apartment, or residence.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
                  className="flex w-full items-center justify-center gap-2 rounded-[1.5rem] bg-gradient-to-r from-primary to-primary-600 px-6 py-5 text-base sm:text-lg font-bold text-white shadow-[0_18px_40px_rgba(52,103,57,0.22)] transition-all hover:brightness-105 active:scale-[0.99] group"
                >
                  <WhatsAppIcon size={24} />
                  Request Pickup on WhatsApp
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`tel:${managerInfo.onlyNumber.phoneNumber}`}
                  className="flex w-full items-center justify-center gap-2 rounded-[1.5rem] border border-primary/15 bg-primary/5 px-6 py-5 text-base sm:text-lg font-bold text-primary transition-colors hover:bg-primary/10"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[1.5rem] border border-border/60 bg-background/80 px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  24/7 Service
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Flexible Options
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Clear Communication
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
