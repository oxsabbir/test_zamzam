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
    title: "Sacred Ihram Maintenance",
    content:
      "Your Ihram represents purity. We use specialized, fragrance-free cleaning methods to respect your state of Ihram while ensuring deep cleanliness and fabric softness.",
    tips: [
      "Dedicated separate washing for Ihram sets.",
      "Strictly fragrance-free, skin-friendly detergents.",
      "Professional air-drying to preserve fabric texture.",
    ],
  },
  {
    icon: <UserCheck className="h-7 w-7 text-primary" />,
    title: "Abaya & Thobe Preservation",
    content:
      "Keep your traditional attire looking distinguished. Our professional pressing and care ensure you look your best for every prayer and gathering.",
    tips: [
      "Precision dry cleaning for delicate or embroidered abayas.",
      "Optimized machine washing for daily thobes.",
      "Crisp, professional steam pressing for a sharp finish.",
    ],
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Optimizing Your Time",
    content:
      "We coordinate around the five daily prayers. Our rapid collection service ensures your laundry is handled without interrupting your spiritual schedule.",
    tips: [
      "Morning pickups are ideal for same-day delivery.",
      "Select express options for urgent garment needs.",
      "Refresh your wardrobe before major spiritual milestones.",
    ],
  },
  {
    icon: <Package className="h-7 w-7 text-primary" />,
    title: "Smart Packing Advice",
    content:
      "Traveling light makes your journey easier. Choose high-quality, breathable fabrics that perform well in Makkah's unique climate.",
    tips: [
      "Focus on versatile, essential pieces for your stay.",
      "Prioritize breathable cotton and linen materials.",
      "Keep your luggage light by utilizing our fast laundry.",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: "Smart Budgeting",
    content:
      "Save your Riyals for what truly matters. Our transparent weight-based pricing is significantly more affordable than premium hotel services.",
    tips: [
      "Fair and transparent per-kilogram rates.",
      "Save up to 50% compared to hotel laundry fees.",
      "Regular laundry cycles help avoid rush surcharges.",
    ],
  },
  {
    icon: <Wind className="h-7 w-7 text-primary" />,
    title: "Staying Fresh in the Heat",
    content:
      "The warm climate requires regular garment changes. Our 24/7 availability ensures you always have a fresh, clean set of clothes ready.",
    tips: [
      "Air out your garments between uses whenever possible.",
      "Cycle your wardrobe frequently to maintain comfort.",
      "Schedule your next pickup before your supply runs low.",
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
            Spiritual Journey Laundry Guide
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Focus on your devotion while Bismillah Laundry Mecca handles the work. We've compiled these expert tips for our Hajj and Umrah visitors.
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
              Need Specific Advice?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Our team understands the unique needs of pilgrims. Contact Bismillah Laundry Mecca anytime for guidance on fabric care or scheduling.
            </p>
            <Button
              onClick={() => handleWhatsApp(whatsappMessages.faq)}
              className="bg-primary text-white hover:bg-primary/80 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-semibold"
            >
              <WhatsAppIcon className="mr-2" />
              Get Expert Advice on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
