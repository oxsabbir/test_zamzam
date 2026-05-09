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
} from "lucide-react"; // Fixed typo from earlier read if needed, but using original symbols
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
    title: "Cleaning Your Ihram",
    content:
      "Your Ihram is important for your worship. We use special fragrance-free washing to keep your Ihram clean and soft.",
    tips: [
      "We wash Ihram sets separately.",
      "We use soap with no smell (fragrance-free).",
      "We dry your Ihram carefully to keep it soft.",
    ],
  },
  {
    icon: <UserIcon className="h-7 w-7 text-primary" />,
    title: "Washing Thobes and Abayas",
    content:
      "Look your best for your prayers. We provide professional washing and ironing for your daily clothes.",
    tips: [
      "Careful cleaning for delicate abayas.",
      "Good washing for your daily thobes.",
      "Professional steam ironing for a clean look.",
    ],
  },
  {
    icon: <ClockIcon className="h-7 w-7 text-primary" />,
    title: "Save Your Time",
    content:
      "We work around your prayer times. Our fast pickup means you can focus on your worship while we do the laundry.",
    tips: [
      "Book in the morning for same-day return.",
      "Use our fast service if you need clothes quickly.",
      "Get fresh clothes before you go to the Haram.",
    ],
  },
  {
    icon: <PackageIcon className="h-7 w-7 text-primary" />,
    title: "Packing Tips",
    content:
      "Travel light to make your journey easier. Choose light and easy fabrics for Makkah's hot weather.",
    tips: [
      "Bring only the clothes you really need.",
      "Use cotton and linen to stay cool.",
      "Save space by using our fast laundry service.",
    ],
  },
  {
    icon: <DollarIcon className="h-7 w-7 text-primary" />,
    title: "Save Your Money",
    content:
      "Save your money for other needs. Our prices are clear and much cheaper than the hotel laundry.",
    tips: [
      "We have simple and fair prices per kg.",
      "Save up to 50% compared to hotel prices.",
      "Regular washing helps you avoid extra fast fees.",
    ],
  },
  {
    icon: <WindIcon className="h-7 w-7 text-primary" />,
    title: "Stay Fresh in the Heat",
    content:
      "Makkah is hot, so you need to change clothes often. We are open 24/7 so you always have clean clothes.",
    tips: [
      "Let your clothes air out after use.",
      "Change your clothes often to stay comfortable.",
      "Book your next pickup before you run out of clean clothes.",
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
            Laundry Guide for Pilgrims
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Focus on your worship while Makkah Royal Premium Laundry does the
            work. Here are some tips for Hajj and Umrah visitors.
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
              Need Help?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Our team knows what pilgrims need. Contact Makkah Royal Premium
              Laundry anytime for help with your clothes.
            </p>
            <Button
              onClick={() => handleWhatsApp(whatsappMessages.faq)}
              className="bg-primary text-white hover:bg-primary/80 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-semibold"
            >
              <WhatsAppIcon className="mr-2" />
              Ask Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
