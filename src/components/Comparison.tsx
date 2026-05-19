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
    feature: "Response Time",
    us: "Instant",
    others: "2-4 Hours",
  },
  {
    feature: "Operations",
    us: "24/7 Availability",
    others: "Standard Hours",
  },
  {
    feature: "Value Pricing",
    us: "Starting 18 SAR/kg",
    others: "Starting 35 SAR/kg",
  },
  {
    feature: "Multilingual Support",
    us: "English, Arabic, Urdu",
    others: "Limited Support",
  },
  {
    feature: "Collection Fee",
    us: "Always Complimentary",
    others: "Variable Fees",
  },
  {
    feature: "Priority Return",
    us: "Express Options",
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
            The Zamzam Competitive Edge
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover why Zamzam Laundry Service is the preferred choice for pilgrims. We combine superior value, rapid logistics, and meticulous garment care.
          </p>
        </header>
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Zamzam Laundry Service vs. Standard Providers
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center font-bold text-sm sm:text-base text-slate-300">
              <div>Service Features</div>
              <div>Zamzam Service</div>
              <div>Standard Services</div>
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
                Rapid Logistics
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We coordinate collections within minutes, respecting the tight schedules of Hajj and Umrah pilgrims.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Exceptional Value
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Professional cleaning starting at just 18 SAR/kg—providing a premium alternative to high-priced hotel services.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Uninterrupted Service
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Operating 24/7, we are always available to manage your laundry needs, day or night.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Guaranteed Reliability
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We handle every garment with extreme care, ensuring everything is returned in pristine condition.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Effective Communication
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our support team is fluent in English, Arabic, and Urdu, ensuring your specific instructions are perfectly understood.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Trusted Excellence
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Over 12,000 pilgrims have entrusted us with their laundry, a testament to our commitment to quality and hard work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
