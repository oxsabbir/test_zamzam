import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Zamzam Laundry Service provides exceptional quality. Their collection process was seamless, and the turnaround time was incredibly fast. A vital service for anyone visiting Makkah!",
    author: "Abdullah Mansour",
    location: "Hotel Manager, Makkah",
  },
  {
    text:
      "I was naturally concerned about my premium abayas and Ihram, but the team handled them with meticulous care. Every item was returned pristine and smelling wonderful.",
    author: "Sarah Al-Otaibi",
    location: "Makkah Resident",
  },
  {
    text:
      "Managing laundry for a large family during Umrah can be challenging, but this service made it effortless. Prompt collection and rapid delivery saved us so much time.",
    author: "Mohammed Al-Zahrani",
    location: "Business Owner, Jeddah",
  },
  {
    text:
      "The 24/7 availability is a game-changer. I needed urgent pressing for an unexpected late-night meeting, and they delivered perfectly. Highly recommended!",
    author: "Fahad Bin Khalid",
    location: "Makkah Resident",
  },
  {
    text:
      "The cleaning standards here are unmatched. My garments are always perfectly folded and look brand new. I wouldn't trust any other provider in Makkah.",
    author: "Lujain Al-Harbi",
    location: "Guest House Owner, Makkah",
  },
  {
    text:
      "I sent my finest thobes to Zamzam Laundry Service, and the results were flawless. The steam pressing was expert, and the fabric was treated with great respect.",
    author: "Sultan Al-Amri",
    location: "Riyadh (Frequent Visitor)",
  },
  {
    text:
      "Efficient, affordable, and incredibly convenient. The WhatsApp booking was straightforward, and the free delivery is a huge plus. Definitely the best near the Haram!",
    author: "Amal Al-Dossari",
    location: "Makkah Resident",
  },
  {
    text:
      "Laundering large bedding items was completely hassle-free. They managed the entire process professionally and returned everything clean by the following day.",
    author: "Waleed Al-Sudairi",
    location: "Makkah Resident",
  },
  {
    text:
      "They successfully removed a difficult stain from a cherished dress. The expertise and skill of the cleaning team are truly impressive. I'm very satisfied!",
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
            Discover why pilgrims and residents alike trust Zamzam Laundry Service for their garment care needs.
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
