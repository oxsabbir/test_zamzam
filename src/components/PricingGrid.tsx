import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const pricingItems = [
  {
    emoji: "👕",
    title: "Normal Wash",
    subtitle: "Standard wash, dry & press per kilogram",
    price: "20 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "⚡",
    title: "Urgent Wash",
    subtitle: "Fast-track service — ready in hours",
    price: "25 SAR/kg",
    time: "Express",
  },
  {
    emoji: "👕",
    title: "Everyday Wear",
    subtitle: "T-shirts, pants, casual outfits",
    price: "20 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "👔",
    title: "Formal Wear",
    subtitle: "Suits, dress shirts, blouses",
    price: "20 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "🧥",
    title: "Heavy Items",
    subtitle: "Blankets, jackets, curtains",
    price: "25 SAR/kg",
    time: "Next day",
  },
  {
    emoji: "👟",
    title: "Shoe Cleaning",
    subtitle: "Sneakers, sandals, formal shoes",
    price: "20 SAR/pair",
    time: "4 hours",
  },
];

const PricingGrid = () => {
  const handleOrder = (packageName: string, price: string) => {
    const message = whatsappMessages.package
      .replace("<package>", packageName)
      .replace("<price>", price);

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-20 bg-muted/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Per-Item Pricing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Pay only for what you need. Clear rates with no surprises.
            <span className="text-primary ml-1 font-semibold">
              Starting from 10 SAR!
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingItems.map((item, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group ${
                item.title === "Ihram Garments" ||
                item.title === "Everyday Wear"
                  ? "card-pulse-effect"
                  : ""
              }`}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <CardTitle className="text-2xl text-gray-700 mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base ">
                  {item.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {item.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ready in {item.time}
                  </div>
                </div>
                <Button
                  id="generate_lead"
                  onClick={() => handleOrder(item.title, item.price)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;
