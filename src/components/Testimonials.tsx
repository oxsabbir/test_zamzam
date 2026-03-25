import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Makkah Al Baraka Laundry provided an incredibly fast and reliable service. My clothes were picked up, cleaned, and delivered in just a few hours. A true blessing for any pilgrim on a tight schedule!",
    author: "Fatima Ahmed",
    location: "Saudi Arabia",
  },
  {
    text:
      "I was worried about cleaning my abayas and Ihram, but Makkah Al Baraka Laundry handled them perfectly. The clothes came back fresh and impeccably clean. Their attention to detail is outstanding.",
    author: "Zainab Khan",
    location: "Pakistan",
  },
  {
    text:
      "With a big family, laundry can be a challenge. Makkah Al Baraka Laundry made it effortless. Their multi-language support and free pickup saved us time and effort. Highly recommended for families!",
    author: "Ibrahim Yusuf",
    location: "Indonesia",
  },
  {
    text:
      "The 24/7 service is a game-changer. We needed laundry done late at night, and Makkah Al Baraka Laundry was responsive and efficient. They exceeded all our expectations.",
    author: "Suleiman Ali",
    location: "Egypt",
  },
  {
    text:
      "The premium service from Makkah Al Baraka Laundry is worth it. My clothes were returned beautifully folded and smelling fresh. The quality is far better than any hotel service I’ve used.",
    author: "Ayesha Malik",
    location: "United Kingdom",
  },
  {
    text:
      "I trusted Makkah Al Baraka Laundry with my husband’s formal thobes, and they did an amazing job. The pressing was perfect, and the fabric was handled with great care. A five-star experience!",
    author: "Maryam Hassan",
    location: "Jordan",
  },
  {
    text:
      "Affordable, fast, and very convenient. Booking through WhatsApp was easy, and the free pickup and delivery made everything simple. Makkah Al Baraka Laundry is the best choice near the Haram.",
    author: "Mustafa Kamal",
    location: "Turkey",
  },
  {
    text:
      "Cleaning heavy blankets was effortless with Makkah Al Baraka Laundry. They picked them up from our hotel and returned them fresh and clean the next day. Excellent service and great value.",
    author: "Khaled Saeed",
    location: "Kuwait",
  },
  {
    text:
      "I spilled coffee on my favorite thobe, but Makkah Al Baraka Laundry’s stain removal service saved it completely. The fabric looks as good as new. Truly professional work.",
    author: "Omar Farooq",
    location: "India",
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
