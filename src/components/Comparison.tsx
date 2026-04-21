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
    feature: "Operating Hours",
    us: "Around the Clock (24/7)",
    others: "Limited Hours",
  },
  {
    feature: "Starting Price",
    us: "From 20 SAR/kg",
    others: "From 35 SAR/kg",
  },
  {
    feature: "Customer Support",
    us: "Multi-language (En, Ar, Ur)",
    others: "Primarily Arabic",
  },
  {
    feature: "Delivery Charge",
    us: "Always Free",
    others: "Often Extra",
  },
  {
    feature: "Urgent Orders",
    us: "Ready in 1 Hour",
    others: "24-Hour Minimum",
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
            The ZamZam Insaf Difference: A Clear Choice
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our service excels against standard Makkah laundry options,
            providing unmatched value for pilgrims near Haram.
          </p>
        </header>
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            ZamZam Insaf vs. The Rest
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center font-bold text-sm sm:text-base text-slate-300">
              <div>Feature</div>
              <div>ZamZam Insaf</div>
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
                Unmatched Speed
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Guaranteed 15-minute pickup. We operate on your schedule, not
                ours. Ideal for time-sensitive needs.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Affordable Excellence
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Transparent pricing from 20 SAR/kg and completely free
                pickup/delivery, offering savings up to 50% over hotels.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Always Open
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Laundry emergencies don't wait. That's why we're here for you
                24/7, even at 3 AM.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Total Peace of Mind
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                With digital tracking and professional handling, your garments
                are secure. Backed by our money-back guarantee.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                We Speak Your Language
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our team is fluent in English, Arabic, and Urdu to ensure clear
                and easy communication.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Proven & Trusted
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Serving over 7,500 pilgrims from 50+ countries. Our 4.9-star
                rating speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
