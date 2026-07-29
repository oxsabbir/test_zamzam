import {
  Award,
  Check,
  Clock,
  DollarSign,
  Minus,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const comparisonData = [
  { feature: "Pickup Time", us: "20 Minutes", others: "3–5 Hours" },
  {
    feature: "Operating Hours",
    us: "24/7 Including Holidays",
    others: "Weekdays Only",
  },
  { feature: "Starting Price", us: "From 20 SAR/kg", others: "From 35 SAR/kg" },
  { feature: "Customer Support", us: "En, Ar, Ur, Hi", others: "Arabic Only" },
  {
    feature: "Delivery Charge",
    us: "Free on All Orders",
    others: "Minimum Order Required",
  },
  { feature: "Turnaround", us: "Same Day Standard", others: "24–48 Hours" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Pickup",
    description:
      "We reach your door in 20 minutes or less. Book on WhatsApp and we're already on our way.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description:
      "Starting at just 20 SAR/kg with zero hidden fees. Free pickup and delivery on every order, no minimums.",
  },
  {
    icon: Clock,
    title: "Always Open",
    description:
      "Day or night, we're available 365 days a year. Late-night pickup? Early morning delivery? We've got you.",
  },
  {
    icon: Shield,
    title: "Garment Safety",
    description:
      "Every item is tracked from pickup to delivery. Not happy with the result? We'll re-clean it free of charge.",
  },
  {
    icon: Users,
    title: "Multilingual Team",
    description:
      "Speak to us in English, Arabic, Urdu, or Hindi. We make ordering simple no matter where you're from.",
  },
  {
    icon: Award,
    title: "Trusted by Thousands",
    description:
      "Over 3,000 happy customers across Makkah. Rated 4.8 stars on Google — our work speaks for itself.",
  },
];

const Comparison = () => {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      aria-labelledby="benefits-heading"
    >
      {/* Ambient light */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px]" />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Why us over the rest
            </span>
          </div>
          <h2
            id="benefits-heading"
            className="text-balance text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl"
          >
            Why Book With{" "}
            <span className="text-primary">Zamzam Laundry Nasir?</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Faster pickup, lower prices, and real human support — here's how we
            stack up against other laundry services in Makkah.
          </p>
        </header>

        {/* Comparison panel */}
        <div className="relative mb-10 overflow-hidden rounded-3xl  p-1 sm:mb-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25" />
          <div className="relative rounded-[1.35rem]  bg-gradient-to-r from-slate-900 to-slate-700 p-5 sm:p-8 lg:p-10">
            <div className="mb-7 text-center sm:mb-9">
              <h3 className="text-xl font-bold text-primary-foreground sm:text-2xl">
                Zamzam Laundry Nasir <span className="text-gold">vs.</span>{" "}
                Others
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
                Side by side
              </p>
            </div>

            {/* Column headers — desktop only */}
            <div className="hidden grid-cols-[1.2fr_1fr_1fr] gap-4 border-b border-white/10 pb-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 sm:grid">
              <div>Feature</div>
              <div className="text-center">Zamzam Laundry Nasir</div>
              <div className="text-center">Other Services</div>
            </div>

            <ul className="divide-y divide-white/10">
              {comparisonData.map((item) => (
                <li
                  key={item.feature}
                  className="grid gap-3 py-4 sm:grid-cols-[1.2fr_1fr_1fr] sm:items-center sm:gap-4 sm:py-5"
                >
                  <p className="min-w-0 text-sm font-semibold text-primary-foreground sm:text-base">
                    {item.feature}
                  </p>

                  <div className="flex items-center gap-2.5 rounded-xl border border-success/25 bg-success/10 px-3 py-2 sm:justify-center sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/25">
                      <Check
                        size={12}
                        strokeWidth={3}
                        className="text-success"
                      />
                    </span>
                    <span className="min-w-0 text-sm font-semibold text-success">
                      {item.us}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 px-3 sm:justify-center sm:px-0">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10">
                      <Minus
                        size={12}
                        strokeWidth={3}
                        className="text-primary-foreground/45"
                      />
                    </span>
                    <span className="min-w-0 text-sm text-primary-foreground/50 line-through decoration-primary-foreground/25">
                      {item.others}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
