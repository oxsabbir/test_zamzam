import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Makkah Royal Premium Laundry is very good. They picked up my clothes and returned them very fast. It is very helpful for everyone visiting Makkah!",
    author: "Abdullah Mansour",
    location: "Hotel Manager, Makkah",
  },
  {
    text:
      "I was worried about my expensive abayas and Ihram, but they washed them very carefully. Everything was returned very clean and fresh.",
    author: "Sarah Al-Otaibi",
    location: "Makkah Resident",
  },
  {
    text:
      "It is hard to wash clothes for a large family, but this laundry service made it very easy. They came for free pickup and returned them quickly.",
    author: "Mohammed Al-Zahrani",
    location: "Business Owner, Jeddah",
  },
  {
    text:
      "The 24/7 service is very good. I needed my clothes ironed for a meeting late at night, and they helped me immediately. I recommend them!",
    author: "Fahad Bin Khalid",
    location: "Makkah Resident",
  },
  {
    text:
      "The quality here is the best. My clothes smell very nice and are folded perfectly. I will not use any other laundry service.",
    author: "Lujain Al-Harbi",
    location: "Guest House Owner, Makkah",
  },
  {
    text:
      "I sent my best thobes to Makkah Royal Premium Laundry, and they did a great job. The ironing was perfect, and the fabric was not damaged.",
    author: "Sultan Al-Amri",
    location: "Riyadh (Frequent Visitor)",
  },
  {
    text:
      "Fast, cheap, and very easy. Booking on WhatsApp was simple, and the free delivery was great. The best laundry near the Haram!",
    author: "Amal Al-Dossari",
    location: "Makkah Resident",
  },
  {
    text:
      "Washing big blankets was very easy with this service. They handled everything well and returned them clean the next day.",
    author: "Waleed Al-Sudairi",
    location: "Makkah Resident",
  },
  {
    text:
      "They removed a hard stain from my favorite dress. The team here is very skilled at cleaning. I am very impressed!",
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read stories from pilgrims and residents who trust us with their laundry.
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
