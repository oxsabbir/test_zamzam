import { handleWhatsApp } from "@/lib/utils";
import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";
import {
  Shirt,
  UserCheck,
  Clock,
  Package,
  DollarSign,
  Wind,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";

const guideItems = [
  {
    icon: <Shirt className="h-7 w-7 text-primary" />,
    title: "Washing Ihram the Right Way",
    content:
      "Ihram garments need special handling. Fragrance-free detergent, gentle cycles, and air drying keep them pure and intact.",
    tips: [
      "Always wash ihram separately — never mix with other laundry.",
      "Use only mild, scent-free detergent to preserve purity.",
      "Dry flat in shade to avoid fabric damage from direct sun.",
    ],
  },
  {
    icon: <UserCheck className="h-7 w-7 text-primary" />,
    title: "Caring for Abayas & Thobes",
    content:
      "Daily wear like abayas and thobes needs proper cleaning to keep the fabric looking sharp. Professional pressing helps maintain a crisp finish.",
    tips: [
      "Dry clean embroidered or embellished abayas to protect detailing.",
      "Use a gentle cycle for thobes to prevent shrinkage.",
      "Steam or press after every wash for a clean, polished look.",
    ],
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Timing Your Laundry Around Prayers",
    content:
      "Laundry pickup works best when scheduled around your daily routine. Early drop-offs mean faster turnaround.",
    tips: [
      "Drop off in the morning for same-day evening delivery.",
      "Use express service when you need clothes before a specific prayer.",
      "Schedule pickups between Fajr and Dhuhr for fastest service.",
    ],
  },
  {
    icon: <Package className="h-7 w-7 text-primary" />,
    title: "Pack Light, Wash Smart",
    content:
      "Bringing fewer clothes and using laundry service saves luggage space and keeps you travelling light through your stay.",
    tips: [
      "Pack 3-4 outfits max and rotate through laundry cycles.",
      "Choose quick-dry fabrics that wash easily.",
      "Leave bulky jackets and blankets for professional cleaning on arrival.",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: "Save Money on Laundry",
    content:
      "Professional laundry costs far less than hotel washing services. Per-kilo pricing means you only pay for what you bring in.",
    tips: [
      "Hotel laundry can cost 3-5x more than local services.",
      "Combine loads with family or friends to save time.",
      "Ask about fixed rates for ihram and shoe cleaning.",
    ],
  },
  {
    icon: <Wind className="h-7 w-7 text-primary" />,
    title: "Keeping Clothes Fresh in the Heat",
    content:
      "Makkah's warm climate means sweat and odors build up fast. Regular washing and airing out keeps you comfortable all day.",
    tips: [
      "Air out garments on the balcony between wears.",
      "Change daily — the heat demands fresh clothes.",
      "Book a pickup every 2-3 days to stay on top of laundry.",
    ],
  },
];

export default function PilgrimGuide() {
  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-br from-white to-primary/5"
      aria-labelledby="guide-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-10 sm:mb-16">
          <h2
            id="guide-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Laundry Tips for Your Stay
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Focus on your prayers and your journey — we'll take care of the
            laundry. Here are some practical tips to stay fresh in Makkah.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {guideItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-sm overflow-hidden border border-primary/10 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              {/* Card Header */}
              <div className="bg-primary/5 p-6 border-b border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-5">{item.content}</p>
                <ul className="space-y-3">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-card border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
              Need Help With Something Specific?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Message us on WhatsApp and we'll guide you on the best way to
              handle any garment or laundry situation.
            </p>
            <Button
              onClick={() => handleWhatsApp(whatsappMessages.faq)}
              className="bg-primary text-white hover:bg-primary/80 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-semibold"
            >
              <WhatsAppIcon className="mr-2" />
              Ask a Question on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
