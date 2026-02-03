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
    us: "Swift 15-Minute Pickup",
    others: "Usually 2-4 Hours",
  },
  {
    feature: "Operating Hours",
    us: "Round-the-clock 24/7 service",
    others: "Limited to standard hours",
  },
  {
    feature: "Starting Price",
    us: "As low as 12 SAR/kg",
    others: "Higher, around 25 SAR/kg",
  },
  {
    feature: "Customer Support",
    us: "Multilingual support in English, Arabic, Urdu",
    others: "Single language support",
  },
  {
    feature: "Delivery Charge",
    us: "Completely FREE delivery",
    others: "Extra delivery charges apply",
  },
  {
    feature: "Urgent Orders",
    us: "Ready in 1 Hour",
    others: "Minimum 24-hour wait",
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
            Makkah ZamZam Express Laundry And Others
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover why Makkah ZamZam Express Laundry stands out from other
            services in Makkah, offering unparalleled convenience and value for
            pilgrims.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 min-w-20 bg-green-900/50 text-white"
                  >
                    Our Services
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Other Services
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className="border-b bg-gray-800 border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-white"
                    >
                      {item.feature}
                    </th>
                    <td className="px-6 py-4 text-green-400">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-2" />
                        {item.us}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-red-400">
                      <div className="flex items-center">
                        <X className="w-4 h-4 mr-2" />
                        {item.others}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mt-8 sm:mt-12">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Rapid Pickup & Delivery
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Guaranteed pickup in just 15 minutes, ensuring your laundry is
                handled with unmatched speed and efficiency.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Economical & Transparent
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Start from 12 SAR/kg with free pickup and delivery. Save
                significantly compared to hotel laundry services.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                24/7 Availability
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We're here whenever you need us, day or night, ensuring your
                laundry needs are met around the clock.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Secure & Reliable Service
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Your garments are safe with us, handled by professionals and
                backed by our commitment to quality and money-back guarantee.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Multilingual Support
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our dedicated team offers support in English, Arabic, and Urdu
                for seamless communication and service.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Highly Rated by Pilgrims
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Trusted by over 7,500 pilgrims from 50+ countries with a stellar
                4.9-star rating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
