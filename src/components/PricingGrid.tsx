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
    title: "Casual Attire",
    subtitle: "Everyday shirts, trousers, and leisurewear",
    price: "18 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "👔",
    title: "Formal & Executive",
    subtitle: "Business suits, crisp shirts, and occasion wear",
    price: "22 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "🕋",
    title: "Sacred Ihram Set",
    subtitle: "Meticulous, fragrance-free care for your sacred wear",
    price: "12 SAR/piece",
    time: "24 hours",
  },
  {
    emoji: "🧥",
    title: "Bulky & Household",
    subtitle: "Heavy coats, comforters, and home linens",
    price: "28 SAR/kg",
    time: "Next day",
  },
  {
    emoji: "👟",
    title: "Footwear Refresh",
    subtitle: "Deep cleaning for sneakers, dress shoes, and more",
    price: "25 SAR/pair",
    time: "4 hours",
  },
  {
    emoji: "🔧",
    title: "Stitching & Repair",
    subtitle: "Quick fixes, hemming, and garment adjustments",
    price: "From 12 SAR",
    time: "Same day",
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
            Bismillah Laundry Mecca Rate Card
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Exceptional fabric care at rates that respect your budget. Professional cleaning from just 
            <span className="text-primary ml-1 font-semibold">18 SAR/kg!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingItems.map((item, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group ${
                item.title === "Ihram Clothes" ||
                item.title === "Regular Clothes"
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
