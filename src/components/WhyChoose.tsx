import { ShieldCheck, Truck, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Rapid Collection Service",
    description:
      "Experience Makkah's fastest turnaround. We arrive at your doorstep in minutes and return your clothes fresh and clean precisely when you need them.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Master Textile Care",
    description:
      "Each garment is handled by experts using advanced techniques and eco-friendly solutions to ensure longevity and a pristine, fresh finish.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Complimentary Transport",
    description:
      "We provide free collection and delivery across all districts of Makkah. No hidden fees, just dedicated service for our valued guests.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Sanitary Processing",
    description:
      "Your health and purity are our priorities. We use individual washing cycles for every customer to ensure the highest standards of hygiene.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Why Trust Bismillah Laundry Mecca?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the difference that expert care and dedication make. We set the standard for professional laundry services in the Holy City.
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
