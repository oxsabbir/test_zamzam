import { ShieldCheck, Truck, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Express Collection",
    description:
      "We provide the most rapid response in Makkah, arriving at your hotel within minutes to collect and handle your garments with precision.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Specialized Care",
    description:
      "Your garments are managed by seasoned professionals using premium, safe detergents and advanced machinery for a pristine finish.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Complimentary Delivery",
    description:
      "Enjoy transparent, free collection and delivery services across all districts of Makkah. We prioritize value and convenience for every guest.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Hygienic & Pure Cleaning",
    description:
      "We uphold the highest standards of hygiene and ritual purity, ensuring every client's laundry is processed individually and with care.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Why Partner with Zamzam Laundry Service?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience professional excellence and personalized care. We deliver the premier laundry solutions for all visitors to the Holy City.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-border/60 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group bg-card"
            >
              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
