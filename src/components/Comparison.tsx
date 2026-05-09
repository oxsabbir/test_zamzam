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
    us: "15 Minutes",
    others: "2-4 Hours",
  },
  {
    feature: "Open Hours",
    us: "24/7 (Always Open)",
    others: "Limited Hours",
  },
  {
    feature: "Starting Price",
    us: "From 18 SAR/kg",
    others: "From 35 SAR/kg",
  },
  {
    feature: "Help Support",
    us: "English, Arabic, Urdu",
    others: "Only Arabic",
  },
  {
    feature: "Pickup Fee",
    us: "Always Free",
    others: "Extra Charge",
  },
  {
    feature: "Fast Orders",
    us: "Ready in 1 Hour",
    others: "24-Hour Wait",
  },
];

const Comparison = () => {
  return (
    <section className="py-8 sm:py-16" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-3 sm:px-4">
        <header className="text-center mb-8 sm:mb-12">
          <h2
            id="benefits-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Why Choose Us Over Others?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            See why we are the best choice for you. We offer better prices, faster service, and great care for every pilgrim.
          </p>
        </header>
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Makkah Royal Premium Laundry vs. Other Services
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center font-bold text-sm sm:text-base text-slate-300">
              <div>What You Get</div>
              <div>Makkah Royal</div>
              <div>Other Services</div>
            </div>
            {comparisonData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 sm:gap-4 items-center text-center border-t border-slate-600 pt-4"
              >
                <div className="text-sm font-semibold text-left text-slate-100">
                  {item.feature}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-green-400 font-bold text-xs sm:text-sm">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Very Fast
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We come for pickup in just 15 minutes. We know you are busy with Hajj or Umrah.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Best Prices
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                High quality service starting at only 18 SAR/kg. Much cheaper than hotel laundry.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Always Open 24/7
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We are here for you day and night. Any time you need us, we are ready to help.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Safe and Reliable
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We take good care of your clothes. We make sure everything is returned to you perfectly.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Good Communication
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Talk to us in English, Arabic, or Urdu. We follow your instructions exactly.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Top Quality Service
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                More than 12,000 pilgrims trust us. Our great rating shows our hard work and quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
