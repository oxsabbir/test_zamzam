import { Star } from "lucide-react";
import { siteInfo } from "@/constants";

const testimonials = [
  {
    text:
      `Quick pickup, clean washing, and delivered right on time. ${siteInfo.siteTitle} made things easy during our stay near the Haram.`,
    author: "Abdullah Mansour",
    location: "Hotel Manager, Jabal Omar",
  },
  {
    text:
      `My abayas and Ihram came back spotless. ${siteInfo.shortName} handled everything carefully. I will use them again on my next visit.`,
    author: "Sarah Al-Otaibi",
    location: "Makkah Resident",
  },
  {
    text:
      `With a big family, laundry adds up fast. ${siteInfo.siteTitle} picked up and delivered the same day. Very convenient and affordable.`,
    author: "Mohammed Al-Zahrani",
    location: "Jeddah (Visiting Makkah)",
  },
  {
    text:
      `Needed thobes pressed late at night. ${siteInfo.shortName} picked them up and returned them fresh the next morning. Impressed.`,
    author: "Fahad Bin Khalid",
    location: "Makkah Resident",
  },
  {
    text:
      `Better quality than hotel laundry at half the price. My formal wear came back neatly pressed and packed. Highly recommend.`,
    author: "Lujain Al-Harbi",
    location: "Guest House Owner, Aziziyah",
  },
  {
    text:
      `I send my family's laundry to ${siteInfo.shortName} every week. Consistent quality and they always deliver on time. Reliable service.`,
    author: "Sultan Al-Amri",
    location: "Riyadh (Frequent Visitor)",
  },
  {
    text:
      `Booked through WhatsApp, got a pickup within 30 minutes. Prices are fair and the clothes came back clean and fresh. Good service.`,
    author: "Amal Al-Dossari",
    location: "Makkah Resident",
  },
  {
    text:
      `Heavy blankets and bed sheets — no problem. ${siteInfo.shortName} picked them up and returned everything fresh the next day.`,
    author: "Waleed Al-Sudairi",
    location: "Makkah Resident",
  },
  {
    text:
      `Coffee stain on my white thobe — thought it was ruined. ${siteInfo.shortName} removed it completely. Professional work.`,
    author: "Nourah Al-Saud",
    location: "Makkah Resident",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by pilgrims, hotel guests, and families across Makkah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-primary">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
