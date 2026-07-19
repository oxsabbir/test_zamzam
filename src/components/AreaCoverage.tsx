import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, MessageCircleMore } from "lucide-react";
import { Input } from "./ui/input";
import WhatsAppIcon from "./icons/Whatsapp";
import { useState } from "react";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const areas = [
  {
    emoji: "🕌",
    title: "Haram District & Clock Tower",
    description:
      "Hotels and residences steps from Masjid al-Haram. We reach your door before you finish your next prayer.",
    locations: [
      { name: "Clock Tower Complex", time: "5-8 min" },
      { name: "Al Safwah Royal Orchid", time: "5-10 min" },
      { name: "Fairmont Makkah", time: "7-10 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Jabal Omar & Surrounding Hotels",
    description:
      "Premium hotel zone with 24/7 express pickup. Ideal for guests who need quick turnaround.",
    locations: [
      { name: "Jabal Omar Hotels", time: "8-12 min" },
      { name: "Swissotel Makkah", time: "10-15 min" },
      { name: "Dar Al Tawhid", time: "10-15 min" },
    ],
  },
  {
    emoji: "🌆",
    title: "Misfalah & Kudai",
    description:
      "Affordable neighborhoods with fast service. Popular with families and long-stay pilgrims.",
    locations: [
      { name: "Misfalah District", time: "12-18 min" },
      { name: "Kudai Hotels & Apartments", time: "15-20 min" },
      { name: "Al Rehab District", time: "15-20 min" },
    ],
  },
  {
    emoji: "🏢",
    title: "Ajyad & Aziziyah",
    description:
      "Walking-distance pickup from hotels near the Haram. Perfect for guests without transport.",
    locations: [
      { name: "Ajyad Area Hotels", time: "5-10 min" },
      { name: "Aziziyah Commercial District", time: "10-15 min" },
      { name: "Al Andalus District", time: "12-18 min" },
    ],
  },
  {
    emoji: "🏘️",
    title: "Outer Districts & Residences",
    description:
      "Full coverage across Makkah's wider neighborhoods. Same-day service for residential areas.",
    locations: [
      { name: "Al Rusaifah", time: "20-25 min" },
      { name: "Al Awali & Maabda", time: "20-30 min" },
      { name: "Tell Al Sheraa", time: "25-30 min" },
    ],
  },
];

const AreaCoverage = () => {
  const [location, setLocation] = useState("");
  const handleCheckArea = () => {
    const message = whatsappMessages.checkPickUpTime.replace(
      "<location>",
      location,
    );

    handleWhatsApp(message, false);
  };

  return (
    <section className="py-20  bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-12">
          <h2
            id="areas-heading"
            className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            We Cover All of Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            From hotels next to the Haram to residential neighborhoods — our
            drivers reach every corner of the city within minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-card flex flex-col  rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl sm:text-5xl">{area.emoji}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                {area.locations.map((location, idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap items-center justify-between gap-2 bg-muted/50 rounded-lg p-3"
                  >
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {location.name}
                    </span>
                    <Badge className="bg-success text-white">
                      ⏰ {location.time} Pickup
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="text-center mt-auto pt-6">
                <Button
                  onClick={() =>
                    handleWhatsApp(
                      `Hi I need laundry service in ${encodeURIComponent(
                        area.title,
                      )}. Could you please share the pickup details and timing? Thank you! `,
                      true,
                    )
                  }
                  id="generate_lead"
                  className=" bg-success"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-card text-card-foreground max-w-2xl mx-auto shadow-xl border-2 border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="p-4 py-6 sm:p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-5 text-primary">
              Unsure About Your Location? Get Instant Pickup Confirmation!
            </h3>
            <div className="space-y-4 ">
              <input
                value={location}
                type="text"
                minLength={1}
                onChange={(e) => setLocation(e.target.value)}
                className="flex w-full border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 sm:h-14 text-base border-2 focus:border-accent rounded-xl"
                placeholder="Enter your hotel/location name"
              />
              <button
                onClick={handleCheckArea}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none  bg-green-500 text-white hover:bg-green-600 shadow-primary px-4 py-2 w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl"
              >
                <WhatsAppIcon size={24} />
                Check My Pickup Time - FREE
              </button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              ✅ Fast Reply | ✅ No Obligation | ✅ Always Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
