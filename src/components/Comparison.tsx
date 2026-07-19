import {
  Award,
  Check,
  Clock,
  DollarSign,
  Shield,
  Users,
  X,
  Zap,
} from "lucide-react";

const comparisonData = [
  {
    feature: "Pickup Time",
    us: "20 Minutes",
    others: "3-5 Hours",
  },
  {
    feature: "Operating Hours",
    us: "24/7 Including Holidays",
    others: "Weekdays Only",
  },
  {
    feature: "Starting Price",
    us: "From 15 SAR/kg",
    others: "From 30 SAR/kg",
  },
  {
    feature: "Customer Support",
    us: "En, Ar, Ur, Hi",
    others: "Arabic Only",
  },
  {
    feature: "Delivery Charge",
    us: "Free on All Orders",
    others: "Minimum Order Required",
  },
  {
    feature: "Turnaround",
    us: "Same Day Standard",
    others: "24-48 Hours",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Pickup",
    description:
      "We reach your door in 20 minutes or less. Book on WhatsApp and we're already on our way.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description:
      "Starting at just 15 SAR/kg with zero hidden fees. Free pickup and delivery on every order, no minimums.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    icon: Clock,
    title: "Always Open",
    description:
      "Day or night, we're available 365 days a year. Late-night pickup? Early morning delivery? We've got you.",
    accent: "from-sky-400 to-blue-500",
  },
  {
    icon: Shield,
    title: "Garment Safety",
    description:
      "Every item is tracked from pickup to delivery. Not happy with the result? We'll re-clean it free of charge.",
    accent: "from-indigo-400 to-violet-500",
  },
  {
    icon: Users,
    title: "Multilingual Team",
    description:
      "Speak to us in English, Arabic, Urdu, or Hindi. We make ordering simple no matter where you're from.",
    accent: "from-purple-400 to-fuchsia-500",
  },
  {
    icon: Award,
    title: "Trusted by Thousands",
    description:
      "Over 3,000 happy customers across Makkah. Rated 4.8 stars on Google — our work speaks for itself.",
    accent: "from-rose-400 to-pink-500",
  },
];

const Comparison = () => {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Background blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">
              Why us over the rest
            </span>
          </div>
          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground tracking-tight"
          >
            Why Book With{" "}
            <span className="text-primary">Zamzam Laundry Nasir?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Faster pickup, lower prices, and real human support — here's how we
            stack up against other laundry services in Makkah.
          </p>
        </header>

        {/* Comparison Table — Blue-Purple Gradient */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 p-4 sm:p-8 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Zamzam Laundry Nasir vs. Others
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center font-bold text-sm sm:text-base text-white/70">
              <div>Feature</div>
              <div>Zamzam Laundry Nasir</div>
              <div>Other Services</div>
            </div>
            {comparisonData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 sm:gap-4 items-center text-center border-t border-white/15 pt-4"
              >
                <div className="text-sm font-semibold text-left text-white">
                  {item.feature}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-green-300 font-bold text-xs sm:text-sm">
                  <Check size={16} className="shrink-0" />
                  <span>{item.us}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-red-400 font-semibold text-xs sm:text-sm">
                  <X size={16} className="shrink-0" />
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:bg-white/70 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon with gradient glow */}
                <div className="relative mb-5">
                  <div
                    className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                  />
                  <div
                    className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
