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

// Note: Keeping original icon imports as they were working
import {
  Shirt as ShirtIcon,
  UserCheck as UserIcon,
  Clock as ClockIcon,
  Package as PackageIcon,
  DollarSign as DollarIcon,
  Wind as WindIcon,
} from "lucide-react";

const guideItems = [
  {
    icon: <ShirtIcon className="h-7 w-7 text-primary" />,
    title: "Dedicated Ihram Care",
    content:
      "Your Ihram is essential for your pilgrimage. We utilize specialized fragrance-free cleaning processes to ensure your Ihram remains pure, clean, and comfortable.",
    tips: [
      "Individual laundering for each Ihram set.",
      "Strict use of scentless, hypoallergenic detergents.",
      "Gentle drying techniques to maintain fabric softness.",
    ],
  },
  {
    icon: <UserIcon className="h-7 w-7 text-primary" />,
    title: "Thobe & Abaya Excellence",
    content:
      "Maintain a distinguished appearance for your daily prayers. We offer professional laundering and meticulous pressing for your traditional attire.",
    tips: [
      "Specialized care for delicate abaya fabrics.",
      "Deep cleaning for everyday thobes.",
      "Expert steam pressing for a crisp, professional finish.",
    ],
  },
  {
    icon: <ClockIcon className="h-7 w-7 text-primary" />,
    title: "Optimize Your Time",
    content:
      "Our services are designed to complement your prayer schedule. With express collection, you can focus on your spiritual obligations while we manage the rest.",
    tips: [
      "Request a morning pickup for same-day completion.",
      "Leverage our express service for urgent requirements.",
      "Always have fresh attire ready for your next visit to the Haram.",
    ],
  },
  {
    icon: <PackageIcon className="h-7 w-7 text-primary" />,
    title: "Efficient Packing Tips",
    content:
      "Traveling light enhances your journey. Opt for breathable, low-maintenance fabrics suitable for Makkah's climate.",
    tips: [
      "Pack only essential, versatile garments.",
      "Prioritize cotton and linen for maximum breathability.",
      "Maximize luggage space by utilizing our rapid laundry service.",
    ],
  },
  {
    icon: <DollarIcon className="h-7 w-7 text-primary" />,
    title: "Budget-Friendly Solutions",
    content:
      "Allocate more of your resources to your spiritual journey. Our transparent pricing offers significant savings over standard hotel laundry rates.",
    tips: [
      "Fair, weight-based pricing for all garments.",
      "Save significantly compared to premium hotel services.",
      "Consistent laundering prevents the need for rush fees.",
    ],
  },
  {
    icon: <WindIcon className="h-7 w-7 text-primary" />,
    title: "Staying Fresh in Makkah",
    content:
      "Makkah's warm climate necessitates frequent changes. Our 24/7 availability ensures you always have access to pristine, clean clothes.",
    tips: [
      "Allow garments to breathe properly after wear.",
      "Change attire regularly for hygiene and comfort.",
      "Schedule your next collection proactively to avoid delays.",
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
            Focus on your spiritual journey while Zamzam Laundry Service handles the
            details. Expert advice for Hajj and Umrah visitors.
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
              Need Further Assistance?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Our specialists understand the unique needs of pilgrims. Connect with
              Zamzam Laundry Service anytime for expert garment care.
            </p>
            <Button
              onClick={() => handleWhatsApp(whatsappMessages.faq)}
              className="bg-primary text-white hover:bg-primary/80 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-semibold"
            >
              <WhatsAppIcon className="mr-2" />
              Inquire via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
