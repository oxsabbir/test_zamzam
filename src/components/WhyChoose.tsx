import { ShieldCheck, Truck, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Fast Pickup Service",
    description:
      "We are very fast in Makkah. We come to your hotel in minutes and wash your clothes exactly how you want them.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Expert Washing",
    description:
      "Every piece of clothing is handled by experts using safe soaps and good machines to keep your clothes clean and fresh.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "FREE Pickup & Delivery",
    description:
      "We provide free collection and delivery across all areas of Makkah. No hidden fees, just great service for our guests.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Clean & Safe Washing",
    description:
      "We care about your health and ritual purity. We wash every customer's clothes separately to keep everything very clean.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Why Choose Makkah Royal Premium Laundry?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of professional care. We provide the best laundry service for everyone in the Holy City.
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
