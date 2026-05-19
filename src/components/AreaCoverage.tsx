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
    title: "Masjid al-Haram & Abraj Al-Bait",
    description:
      "Specialized laundry services for pilgrims staying in the immediate vicinity of the Holy Mosque. We manage your garments with care while you focus on your spiritual journey.",
    locations: [
      { name: "Clock Tower Hotels", time: "5-10 min" },
      { name: "Al Safwah Towers", time: "5-10 min" },
      { name: "Hilton Makkah", time: "8-12 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Jabal Omar & Central Districts",
    description:
      "Premium cleaning solutions tailored for Makkah's leading luxury hotels. We offer around-the-clock collection for your total convenience.",
    locations: [
      { name: "Jabal Omar Towers", time: "10-15 min" },
      { name: "Swissotel Makkah", time: "10-15 min" },
      { name: "Aziziyah District", time: "12-18 min" },
    ],
  },

  {
    emoji: "🌆",
    title: "Kudai, Misfalah & Visitor Hubs",
    description:
      "Reliable and cost-effective laundry solutions for popular visitor areas. We ensure rapid turnaround and exceptional value for every guest.",
    locations: [
      { name: "Kudai Area Hotels", time: "15-20 min" },
      { name: "Misfalah District", time: "15-20 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Extended Stay & Boutique Hotels",
    description:
      "Customized care for long-term guests and boutique hotel residents. Maintaining the freshness and longevity of your wardrobe.",
    locations: [
      { name: "Hilton Suites Makkah", time: "10-20 min" },
      { name: "Nearby Hotels & Residences", time: "15-25 min" },
    ],
  },
  {
    emoji: "🏘️",
    title: "Residential Makkah & Al Awali",
    description:
      "Extending our professional services to all residential neighborhoods. Enjoy door-to-door collection and delivery throughout the city.",
    locations: [
      { name: "Maabda Area", time: "15-25 min" },
      { name: "Al Rusaifah & Al Awali", time: "20-30 min" },
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
            City-Wide Service Across Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Whether you are residing in a luxury hotel near the Haram or a private residence in the city, our team is ready to assist you anywhere.
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
                    <Badge className="bg-primary text-primary-foreground">
                      ⏰ {location.time} Pickup
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="text-center mt-auto pt-6">
                <Button
                  onClick={() =>
                    handleWhatsApp(
                      `Hello! I need laundry pickup in ${encodeURIComponent(
                        area.title,
                      )}. Please tell me when you can come. Thank you! `,
                      true,
                    )
                  }
                  id="generate_lead"
                  className="bg-primary hover:bg-primary/90"
                >
                  Schedule Pickup
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-card text-card-foreground max-w-2xl mx-auto shadow-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-accent/10">
          <div className="p-4 py-6 sm:p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-5 text-primary">
              Not on our list? Inquire here!
            </h3>
            <div className="space-y-4 ">
              <input
                value={location}
                type="text"
                minLength={1}
                onChange={(e) => setLocation(e.target.value)}
                className="flex w-full border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 sm:h-14 text-base border-2 focus:border-primary rounded-xl"
                placeholder="Enter your hotel name or locality"
              />
              <button
                onClick={handleCheckArea}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-4 py-2 w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl"
              >
                <WhatsAppIcon size={24} />
                Verify Pickup Time - FREE
              </button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              ✅ Instant Response | ✅ No-Obligation Inquiry | ✅ 24/7 Operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
