import { MessageCircle, Truck, Sparkles, ShoppingBag } from "lucide-react";
import { siteInfo } from "@/constants";

const steps = [
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "1. Send WhatsApp",
    description:
      "Message us your location and we confirm pickup within minutes. Available across all Makkah areas.",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "2. We Pick Up",
    description:
      "Our team arrives at your hotel, apartment, or residence to collect your laundry on time.",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "3. We Clean",
    description:
      "Every garment is washed, dried, and pressed using professional equipment and quality detergents.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "4. We Deliver",
    description:
      "Clean, fresh clothes delivered back to your door — on schedule, anywhere in Makkah.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book in seconds, get your laundry picked up, cleaned, and delivered
            — without leaving your hotel or home.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card p-10 rounded-3xl border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="mb-8 bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 mx-auto shadow-inner">
                  <div className="text-primary group-hover:text-white transition-colors duration-500">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 text-foreground text-center group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
