import { MessageCircle, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import phone from "@/assets/phone.webp";
import delivery from "@/assets/delivery.webp";
import pickup from "@/assets/pickup.webp";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    image: phone,
    title: "Request via WhatsApp",
    description:
      "Simply share your location with us on WhatsApp. We'll arrange a pickup time that fits your schedule.",
    time: "Real-time Support",
  },
  {
    number: "2",
    icon: Truck,
    image: pickup,
    title: "Professional Pickup",
    description:
      "Our team arrives at your doorstep to collect your items, ensuring they are handled with expert care.",
    time: "Fast Collection",
  },
  {
    number: "3",
    icon: Sparkles,
    image: delivery,
    title: "Express Delivery",
    description:
      "Your clothes are returned fresh, clean, and perfectly folded. Pay conveniently upon delivery.",
    time: "On-time Arrival",
  },
];

const HowItWorks = () => {
  const handleStart = () => {
    handleWhatsApp(whatsappMessages.firstOrder, true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            How We Handle Your Laundry
          </h2>
          <p className="text-base sm:text-xl font-medium mb-1 text-muted-foreground max-w-3xl mx-auto">
            Experience a seamless laundry process in Makkah.
            <br />
            <span className="text-primary  mt-2">
              Exceptional quality delivered straight to your doorstep.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-0.5 bg-primary/30 z-0" />
                )}

                <div className="relative z-10 bg-card rounded-2xl pb-8 shadow-lg hover:shadow-xl transition-all border-2 border-primary/20 hover:border-primary">
                  <div>
                    <div className=" relative">
                      <img
                        src={step.image}
                        alt={`how-it-work-step-${index + 1}-image`}
                        width={350}
                        height={180}
                        className="object-cover w-full h-[260px] rounded-t-xl"
                      />
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary font-bold text-lg text-white rounded-full flex items-center  justify-center">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 pt-5">
                    <div className="text-center mt-4 relative flex items-center flex-col">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-primary/90 text-white px-4 py-2 rounded-full font-semibold">
                        ⚡ {step.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Box */}
        <div className="bg-gradient-to-br from-gray-900 via-indigo-500 to-gray-900 text-white rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className=" text-2xl md:text-3xl font-bold mb-4">
            Our Quality Guarantee
          </h3>
          <p className="md:text-xl text-lg mb-6 opacity-95">
            Your satisfaction is our priority. If you aren't completely happy with the results, we'll re-wash for free or offer a full refund.
            <br />
            <span className="font-bold">We stand behind our service!</span>
          </p>
          <Button
            size="lg"
            id="generate_lead"
            onClick={handleStart}
            className="bg-success hover:bg-success/90 text-white md:text-lg px-4 py-3 text-base md:px-8 md:py-6"
          >
            Get Started - Free First Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
