import { Zap, DollarSign, Clock, Shield, Languages, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Service",
    description: "15-minute pickup guarantee. We're on our way when you need us, not hours later.",
  },
  {
    icon: DollarSign,
    title: "Best Prices in Makkah",
    description: "From just 20 SAR/kg with FREE pickup & delivery. Save up to 50% compared to hotel prices.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Laundry needs can arise anytime. We're the only 24/7 service in Makkah, ready for you day or night.",
  },
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "Your garments are tracked, insured, and handled with care by our professional team. Satisfaction guaranteed.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Our team is fluent in Arabic, English, and Urdu, ensuring clear communication.",
  },
  {
    icon: Users,
    title: "7500+ Happy Pilgrims",
    description: "Trusted by over 7,500 pilgrims from 50+ countries. Our 4.9-star rating speaks for itself.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Makkah ZamZam Express Laundry?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of our dedicated laundry service for pilgrims.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-border group hover:border-primary"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
