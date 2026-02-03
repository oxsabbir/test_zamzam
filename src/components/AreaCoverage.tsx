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
    title: "Clock Towers & Abraj Al Bait",
    description:
      "Fast and reliable laundry service for hotels and residences surrounding the Clock Towers and Masjid Al-Haram, ideal for pilgrims and visitors.",
    locations: [
      { name: "Abraj Al Bait Hotels", time: "5-10 min" },
      { name: "Clock Tower Residences", time: "5-10 min" },
      { name: "Haram View Hotels", time: "8-12 min" },
    ],
  },
  {
    emoji: "🕋",
    title: "Makkatul Mukarramah (Central Area)",
    description:
      "Comprehensive laundry coverage across central Makkatul Mukarramah, serving residents, pilgrims, and commercial accommodations.",
    locations: [
      { name: "Central Makkah Area", time: "10-20 min" },
      { name: "Commercial Districts", time: "15-25 min" },
      { name: "Residential Zones", time: "15-25 min" },
    ],
  },
  {
    emoji: "🕌",
    title: "Haram Area & Al-Shubaikah",
    description:
      "Dedicated laundry solutions for accommodations near Masjid Al-Haram, offering quick pickup and hygienic care.",
    locations: [
      { name: "Al-Shubaikah District", time: "10-15 min" },
      { name: "Masjid Al-Haram Vicinity", time: "8-12 min" },
      { name: "Ajyad Area Hotels", time: "10-15 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Jabal Omar",
    description:
      "Premium laundry service for Jabal Omar towers and surrounding hotels, with dependable pickup and delivery.",
    locations: [
      { name: "Jabal Omar Towers", time: "10-15 min" },
      { name: "Swissotel Makkah", time: "10-15 min" },
      { name: "Hyatt & Nearby Hotels", time: "12-18 min" },
    ],
  },
  {
    emoji: "🌆",
    title: "Aziziyah & Al Misfalah",
    description:
      "Efficient and affordable laundry care for busy residential and hotel districts with consistent turnaround times.",
    locations: [
      { name: "Aziziyah District", time: "15-20 min" },
      { name: "Al Misfalah Area", time: "15-20 min" },
    ],
  },
  {
    emoji: "🏙️",
    title: "Al Rusaifah & Al Awali",
    description:
      "Reliable laundry coverage for key residential neighborhoods across Makkatul Mukarramah with scheduled delivery.",
    locations: [
      { name: "Al Rusaifah Area", time: "20-30 min" },
      { name: "Al Awali District", time: "20-30 min" },
    ],
  },
  {
    emoji: "🏘️",
    title: "Maabda & Kudai",
    description:
      "Wide laundry service coverage for Maabda and Kudai areas, supporting residents with timely pickup and delivery.",
    locations: [
      { name: "Maabda Area", time: "15-25 min" },
      { name: "Kudai District", time: "15-25 min" },
    ],
  },
  {
    emoji: "🏙️",
    title: "Ajyad & Ibrahim Al Khalil",
    description:
      "High-demand laundry service for hotels and residences along Ajyad and Ibrahim Al Khalil roads.",
    locations: [
      { name: "Ajyad Hotels", time: "10-15 min" },
      { name: "Ibrahim Al Khalil Road", time: "10-20 min" },
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
            Laundry Services Covering All of Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            From major hotels to residential neighborhoods, our laundry pickup
            and delivery service operates across Makkah, bringing reliable and
            hassle-free care directly to your doorstep.
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
                    <Badge className="bg-primary text-white">
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
                  className=" bg-primary"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 rounded-lg bg-card text-card-foreground max-w-2xl mx-auto shadow-xl border border-primary/10 dark:border-gray-700 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-gray-800 dark:to-gray-900">
          <div className="p-4 py-6 sm:p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Unsure About Your Location? Get Instant Pickup Confirmation!
            </h3>
            <div className="space-y-4 ">
              <input
                value={location}
                type="text"
                minLength={1}
                onChange={(e) => setLocation(e.target.value)}
                className="flex h-12 w-full rounded-lg border text-lg p-6 my-2 border-gray-300 bg-white  text-gray-900 outline-primary placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:border-primary"
                placeholder="Enter your hotel/location name"
              />
              <button
                onClick={handleCheckArea}
                className="w-full bg-primary text-white text-lg font-bold py-3 px-6 rounded-xl shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
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
