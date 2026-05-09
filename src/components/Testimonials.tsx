import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Bismillah Laundry Makkah provided a truly efficient and reliable service. My clothes were picked up and returned in record time. It's a game-changer for anyone visiting Makkah!",
    author: "Abdullah Mansour",
    location: "Hotel Manager, Makkah",
  },
  {
    text:
      "I was hesitant about sending my expensive abayas and Ihram out, but Bismillah Laundry Makkah handled them with such care. Everything came back fresh and spotless.",
    author: "Sarah Al-Otaibi",
    location: "Makkah Resident",
  },
  {
    text:
      "Managing laundry for a large family is tough, but Bismillah Laundry Makkah made it so easy. Their free collection and fast turnaround saved us so much stress.",
    author: "Mohammed Al-Zahrani",
    location: "Business Owner, Jeddah",
  },
  {
    text:
      "The 24/7 service is a lifesaver. I needed my thobes pressed for a late-night meeting, and they were there to help immediately. Highly recommended!",
    author: "Fahad Bin Khalid",
    location: "Makkah Resident",
  },
  {
    text:
      "The quality at Bismillah Laundry Makkah is unmatched. My clothes came back smelling wonderful and perfectly folded. I won't use any other service.",
    author: "Lujain Al-Harbi",
    location: "Guest House Owner, Makkah",
  },
  {
    text:
      "I sent my best formal thobes to Bismillah Laundry Makkah, and the results were spectacular. The pressing was sharp, and the fabric was handled perfectly.",
    author: "Sultan Al-Amri",
    location: "Riyadh (Frequent Visitor)",
  },
  {
    text:
      "Affordable, fast, and very convenient. WhatsApp booking was effortless, and the free delivery made it even better. The best choice near the Haram!",
    author: "Amal Al-Dossari",
    location: "Makkah Resident",
  },
  {
    text:
      "Cleaning bulky linens was a breeze with Bismillah Laundry Makkah. They handled everything professionally and returned them fresh the next day.",
    author: "Waleed Al-Sudairi",
    location: "Makkah Resident",
  },
  {
    text:
      "They managed to remove a tough stain from my favorite garment. Bismillah Laundry Makkah's stain removal team is truly skilled. Very impressive!",
    author: "Nourah Al-Saud",
    location: "Local Resident, Makkah",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Client Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read the stories of pilgrims and residents who trust Bismillah Laundry Makkah for their premium fabric care.
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
