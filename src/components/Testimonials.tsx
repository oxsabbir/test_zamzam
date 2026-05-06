import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Bismillah Laundry Mecca delivered an amazingly swift and dependable experience. They collected, washed, and returned my garments within hours. It's a lifesaver for those with busy plans in the city!",
    author: "Abdullah Mansour",
    location: "Hotel Manager, Mecca",
  },
  {
    text:
      "I was concerned about my high-quality abayas and Ihram, but Bismillah Laundry Mecca took care of them flawlessly. The items were returned pristine and fresh. Their precision is truly impressive.",
    author: "Sarah Al-Otaibi",
    location: "Mecca Resident",
  },
  {
    text:
      "With a big family, laundry piles up fast. Bismillah Laundry Mecca took the stress away with their complimentary collection and rapid service. A must-use for local residents!",
    author: "Mohammed Al-Zahrani",
    location: "Business Owner, Jeddah",
  },
  {
    text:
      "The 24/7 availability is incredible. I needed my thobes pressed late at night, and Bismillah Laundry Mecca was there to help immediately. They really went above and beyond.",
    author: "Fahad Bin Khalid",
    location: "Mecca Resident",
  },
  {
    text:
      "The premium options at Bismillah Laundry Mecca are definitely worth it. My formal clothes came back perfectly folded and smelling wonderful. The quality beats any other service I've tried.",
    author: "Lujain Al-Harbi",
    location: "Guest House Owner, Mecca",
  },
  {
    text:
      "I entrusted Bismillah Laundry Mecca with my finest formal thobes, and they did a spectacular job. The pressing was sharp, and the material was handled with extreme care. A top-tier experience!",
    author: "Sultan Al-Amri",
    location: "Riyadh (Frequent Visitor)",
  },
  {
    text:
      "Budget-friendly, quick, and very easy to use. Ordering via WhatsApp was a breeze, and the free pickup and delivery made it so convenient. Bismillah Laundry Mecca is the top choice near the Haram.",
    author: "Amal Al-Dossari",
    location: "Mecca Resident",
  },
  {
    text:
      "Washing heavy duvets and linens was simple with Bismillah Laundry Mecca. They collected them from my home and returned them fresh the following day. Outstanding work.",
    author: "Waleed Al-Sudairi",
    location: "Mecca Resident",
  },
  {
    text:
      "I had a coffee stain on my favorite thobe, but the stain removal team at Bismillah Laundry Mecca cleared it right up. It looks brand new again. Highly professional service.",
    author: "Nourah Al-Saud",
    location: "Local Resident, Mecca",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Our Happy Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what our users have to say about the expert cleaning
            solutions at Bismillah Laundry Mecca.
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
