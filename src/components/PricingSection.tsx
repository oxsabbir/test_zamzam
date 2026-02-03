import { Check, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const pricePlan = {
  basic: {
    title: "Basic",
    price: 12,
    feature: [
      "Regular clothes wash & dry",
      "FREE pickup & delivery",
      "Same day service",
      "Basic pressing included",
      "24/7 availability",
    ],
  },
  premium: {
    title: "Premium",
    price: 18,
    feature: [
      "Everything in Basic",
      "Professional pressing",
      "Stain removal treatment",
      "Fabric conditioner",
      "Plastic packaging",
      "3-hour express option",
    ],
  },
  vip: {
    title: "VIP",
    price: 25,
    feature: [
      "Everything in Premium",
      "Premium detergents",
      "Hand-finished pressing",
      "1-hour emergency service",
      "Special garment care",
      "Delivery scheduling",
    ],
  },
};

export default function PricingSection() {
  const handlePlanBooking = (price: number, plan: string) => {
    const message = whatsappMessages.pricePlan
      .replace("<price>", String(price))
      .replace("<plan>", plan);

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">
            Select the Perfect Plan for Your Needs
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent and affordable pricing to suit every pilgrim's needs.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="w-full lg:w-1/3 flex flex-col p-8 bg-card rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                {pricePlan.basic.title}
              </h3>
              <p className="mt-2">
                <span className="text-4xl font-bold text-primary">
                  {pricePlan.basic.price} SAR
                </span>
                <span className="text-lg text-muted-foreground">/kg</span>
              </p>
            </div>
            <hr className="border-border" />
            <ul className="mt-6 space-y-4 text-muted-foreground flex-grow">
              {pricePlan.basic.feature.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() =>
                  handlePlanBooking(
                    pricePlan.basic.price,
                    pricePlan.basic.title,
                  )
                }
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Choose Basic
              </Button>
            </div>
          </div>

          {/* Premium Plan (Featured) */}
          <div className="w-full lg:w-1/3 flex flex-col p-8 bg-gradient-to-br from-green-500 to-green-600 text-primary-foreground rounded-2xl shadow-2xl relative">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">{pricePlan.premium.title}</h3>
              <p className="mt-2">
                <span className="text-4xl font-bold">
                  {pricePlan.premium.price} SAR
                </span>
                <span className="text-lg opacity-80">/kg</span>
              </p>
            </div>
            <hr className="border-primary-foreground/30" />
            <ul className="mt-6 space-y-4 opacity-90 flex-grow">
              {pricePlan.premium.feature.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() =>
                  handlePlanBooking(
                    pricePlan.premium.price,
                    pricePlan.premium.title,
                  )
                }
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Choose Premium
              </Button>
            </div>
          </div>

          {/* VIP Plan */}
          <div className="w-full lg:w-1/3 flex flex-col p-8 bg-card rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                {pricePlan.vip.title}
              </h3>
              <p className="mt-2">
                <span className="text-4xl font-bold text-primary">
                  {pricePlan.vip.price} SAR
                </span>
                <span className="text-lg text-muted-foreground">/kg</span>
              </p>
            </div>
            <hr className="border-border" />
            <ul className="mt-6 space-y-4 text-muted-foreground flex-grow">
              {pricePlan.vip.feature.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() =>
                  handlePlanBooking(pricePlan.vip.price, pricePlan.vip.title)
                }
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Choose VIP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
