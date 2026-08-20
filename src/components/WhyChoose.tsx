import { ShieldCheck, Truck, Clock, Sparkles } from "lucide-react";
import { siteInfo } from "@/constants";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Fast Pickup & Delivery",
    description:
      "Same-day turnaround available. We collect and return your laundry on your schedule, not ours.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Quality Cleaning",
    description:
      "Modern equipment, professional detergents, and trained staff. Every item handled with care.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Free Pickup & Delivery",
    description:
      "We come to you anywhere in Makkah. No transport fees, no minimum order requirements.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Hygienic Process",
    description:
      "Individual handling per order. Sanitized equipment and strict quality checks on every load.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Why Choose {siteInfo.siteTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by pilgrims, families, and hotel guests across Makkah for
            reliable laundry service with no surprises.
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
