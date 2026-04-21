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
    title: "WhatsApp Us",
    description:
      "Send a message with your location. We'll confirm pickup time (usually 15 minutes).",
    time: "30 seconds",
  },
  {
    number: "2",
    icon: Truck,
    image: pickup,
    title: "We Pickup & Clean",
    description:
      "Our professional team collects your clothes and processes them with care.",
    time: "15 min pickup",
  },
  {
    number: "3",
    icon: Sparkles,
    image: delivery,
    title: "Fresh Delivery",
    description:
      "Your clothes return clean, pressed, and ready to wear. Pay on delivery.",
    time: "Same day back",
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
            How Zamzam Insaf Laundry Works
          </h2>
          <p className="text-base sm:text-xl font-medium mb-1 text-muted-foreground max-w-3xl mx-auto">
            Experience hassle-free laundry in Makkah.
            <br />
            <span className="text-primary  mt-2">
              Fresh, clean clothes, delivered quickly.
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
            Try Our Service Risk-Free!
          </h3>
          <p className="md:text-xl text-lg mb-6 opacity-95">
            Not satisfied? We'll redo your laundry for FREE or refund 100% of
            your money.
            <br />
            <span className="font-bold">That's our promise to you!</span>
          </p>
          <Button
            size="lg"
            id="generate_lead"
            onClick={handleStart}
            className="bg-success hover:bg-success/90 text-white md:text-lg px-4 py-3 text-base md:px-8 md:py-6"
          >
            Start Your First Order - FREE Pickup
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
