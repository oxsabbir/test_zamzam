import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Makkah Al Baraka Laundry provided an incredibly fast and reliable service. My clothes were picked up, cleaned, and delivered in just a few hours. A true blessing for anyone on a tight schedule in Makkah!",
    author: "Abdullah Mansour",
    location: "Hotel Manager, Makkah",
  },
  {
    text:
      "I was worried about cleaning my premium abayas and Ihram, but Makkah Al Baraka handled them perfectly. The clothes came back fresh and impeccably clean. Their attention to detail is outstanding.",
    author: "Sarah Al-Otaibi",
    location: "Makkah Resident",
  },
  {
    text:
      "Managing a large household means a lot of laundry. Makkah Al Baraka Laundry made it effortless with their free pickup and fast delivery. Highly recommended for families in the city!",
    author: "Mohammed Al-Zahrani",
    location: "Business Owner, Jeddah",
  },
  {
    text:
      "The 24/7 service is a game-changer. I needed my thobes pressed late at night, and Makkah Al Baraka was responsive and efficient. They exceeded all my expectations.",
    author: "Fahad Bin Khalid",
    location: "Makkah Resident",
  },
  {
    text:
      "The premium service from Makkah Al Baraka is worth it. My formal wear was returned beautifully folded and smelling fresh. The quality is far better than any other service I’ve used.",
    author: "Lujain Al-Harbi",
    location: "Guest House Owner, Makkah",
  },
  {
    text:
      "I trusted Makkah Al Baraka with my high-quality formal thobes, and they did an amazing job. The pressing was perfect, and the fabric was handled with great care. A five-star experience!",
    author: "Sultan Al-Amri",
    location: "Riyadh (Frequent Visitor)",
  },
  {
    text:
      "Affordable, fast, and very convenient. Booking through WhatsApp was easy, and the free pickup and delivery made everything simple. Makkah Al Baraka is the best choice near the Haram.",
    author: "Amal Al-Dossari",
    location: "Makkah Resident",
  },
  {
    text:
      "Cleaning heavy blankets and linens was effortless with Makkah Al Baraka. They picked them up from our residence and returned them fresh and clean the next day. Excellent service.",
    author: "Waleed Al-Sudairi",
    location: "Makkah Resident",
  },
  {
    text:
      "I spilled coffee on my favorite thobe, but Makkah Al Baraka’s stain removal service saved it completely. The fabric looks as good as new. Truly professional work.",
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
            Happy Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers say about our professional laundry services
            in Makkah.
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
