import { handleWhatsApp } from "@/lib/utils";
import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";
import { siteInfo } from "@/constants";
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
    title: "Proper Ihram Care",
    content:
      "Ihram garments require gentle and respectful care. Washing with fragrance-free detergents and proper drying helps maintain purity and fabric quality.",
    tips: [
      "Wash Ihram separately using a gentle cycle.",
      "Use mild, fragrance-free detergent only.",
      "Air dry in a shaded area to protect the fabric.",
    ],
  },
  {
    icon: <UserCheck className="h-7 w-7 text-primary" />,
    title: "Abaya & Thobe Maintenance",
    content:
      "Traditional garments benefit from professional cleaning and pressing to maintain appearance, comfort, and fabric strength.",
    tips: [
      "Dry clean delicate or embroidered abayas.",
      "Machine wash thobes using suitable fabric settings.",
      "Use professional pressing for a clean finish.",
    ],
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Planning Laundry Around Your Schedule",
    content:
      "Laundry services in Makkah are designed to fit around prayer times and daily routines, allowing you to manage your time efficiently.",
    tips: [
      "Schedule pickups early in the day for faster service.",
      "Use express options for urgent requirements.",
      "Plan laundry before long visits to the Haram.",
    ],
  },
  {
    icon: <Package className="h-7 w-7 text-primary" />,
    title: "Packing Smart for Your Stay",
    content:
      "Packing wisely helps reduce laundry load and stress. Lightweight, breathable fabrics are easier to clean and dry quickly.",
    tips: [
      "Carry a limited number of essential garments.",
      "Choose breathable and easy-care fabrics.",
      "Avoid overpacking heavy clothing items.",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: "Managing Laundry Costs",
    content:
      "Understanding laundry pricing helps you plan better. Professional laundry services offer better value compared to hotel laundry options.",
    tips: [
      "Laundry pricing is usually based on weight.",
      "Professional services are more affordable than hotel laundry.",
      "Plan regular laundry to avoid urgent charges.",
    ],
  },
  {
    icon: <Wind className="h-7 w-7 text-primary" />,
    title: "Keeping Clothes Fresh in Makkah",
    content:
      "Frequent washing and proper airing help keep clothes fresh in Makkah’s warm climate. Timely laundry service ensures comfort throughout your stay.",
    tips: [
      "Air garments between uses when possible.",
      "Change clothes regularly due to heat.",
      "Arrange laundry pickups before busy schedules.",
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
            Essential Laundry Guide for Pilgrims
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let {siteInfo.siteTitle} handle the work, so you can focus on your spiritual
            journey. Here are some essential tips for Hajj & Umrah.
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
              Have More Questions?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Our team understands the unique needs of pilgrims. WhatsApp {siteInfo.shortName} 
              anytime for personalized laundry advice.
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
