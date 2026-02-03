import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { managerInfo } from "@/constants";

const testimonials = [
  {
    name: "Yusuf Ahmed",
    location: "Jabal Omar Hyatt Regency, Makkah",
    country: "Nigeria",
    rating: 5,
    service: "Urgent Wash & Iron",
    review:
      "Makkah ZamZam Express Laundry provided an incredibly fast and reliable service. My clothes were picked up, cleaned, and delivered in just a few hours. A true blessing for any pilgrim on a tight schedule!",
    avatar: "YA",
    flag: "🇳🇬",
  },
  {
    name: "Amina Khan",
    location: "Makkah Clock Royal Tower",
    country: "India",
    rating: 5,
    service: "Ihram & Abaya Cleaning",
    review:
      "I was worried about cleaning my abayas and Ihram, but Makkah ZamZam Express Laundry handled them perfectly. The clothes came back fresh and impeccably clean. Their attention to detail is outstanding.",
    avatar: "AK",
    flag: "🇮🇳",
  },
  {
    name: "Ibrahim Al-Farsi",
    location: "Al-Ghufran Safwah Hotel, Makkah",
    country: "Oman",
    rating: 5,
    service: "Family Laundry Service",
    review:
      "With a big family, laundry can be a challenge. Makkah ZamZam Express Laundry made it effortless. Their multi-language support and free pickup saved us time and effort. Highly recommended for families!",
    avatar: "IA",
    flag: "🇴🇲",
  },
  {
    name: "Siti Nurhaliza",
    location: "Movenpick Hotel & Residences, Makkah",
    country: "Malaysia",
    rating: 5,
    service: "Express Service",
    review:
      "The 24/7 service is a game-changer. We needed laundry done late at night, and Makkah ZamZam Express Laundry was responsive and efficient. They exceeded all our expectations.",
    avatar: "SN",
    flag: "🇲🇾",
  },
  {
    name: "Ali Reza",
    location: "Raffles Makkah Palace",
    country: "Iran",
    rating: 5,
    service: "Premium Wash & Fold",
    review:
      "The premium service from Makkah ZamZam Express Laundry is worth it. My clothes were returned beautifully folded and smelling fresh. The quality is far better than any hotel service I’ve used.",
    avatar: "AR",
    flag: "🇮🇷",
  },
  {
    name: "Fatima Al-Jamil",
    location: "Swissotel Al Maqam Makkah",
    country: "Jordan",
    rating: 5,
    service: "Thobe & Formal Wear",
    review:
      "I trusted Makkah ZamZam Express Laundry with my husband’s formal thobes, and they did an amazing job. The pressing was perfect, and the fabric was handled with great care. A five-star experience!",
    avatar: "FA",
    flag: "🇯🇴",
  },
  {
    name: "Mustafa Abdullah",
    location: "Conrad Makkah",
    country: "Turkey",
    rating: 5,
    service: "Regular Wash",
    review:
      "Affordable, fast, and very convenient. Booking through WhatsApp was easy, and the free pickup and delivery made everything simple. Makkah ZamZam Express Laundry is the best choice near the Haram.",
    avatar: "MA",
    flag: "🇹🇷",
  },
  {
    name: "Nadia Begum",
    location: "Pullman ZamZam Makkah",
    country: "Bangladesh",
    rating: 5,
    service: "Blanket & Heavy Items",
    review:
      "Cleaning heavy blankets was effortless with Makkah ZamZam Express Laundry. They picked them up from our hotel and returned them fresh and clean the next day. Excellent service and great value.",
    avatar: "NB",
    flag: "🇧🇩",
  },
  {
    name: "Mohammed Salah",
    location: "Fairmont Makkah Clock Royal Tower",
    country: "Egypt",
    rating: 5,
    service: "Stain Removal",
    review:
      "I spilled coffee on my favorite thobe, but Makkah ZamZam Express Laundry’s stain removal service saved it completely. The fabric looks as good as new. Truly professional work.",
    avatar: "MS",
    flag: "🇪🇬",
  },
];

const Testimonials = () => {
  const plugin = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Words from Our Valued Customers
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted by thousands of pilgrims and residents from across the world
            for reliable, hygienic, and timely laundry services in Makkah.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(10,000+ reviews)</span>
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/20"
              >
                <div className="mb-3">
                  <div className="flex text-yellow-400  mb-2">
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic mb-3">
                    {review.review}
                  </p>
                </div>
                <div className="border-t pt-3">
                  <div className="font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {review.flag} {review.location}
                  </div>
                  {/* <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mt-1 text-xs bg-primary/10 text-primary">
                    {review.service}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-foreground font-semibold mb-4">
            Join thousands of satisfied customers who trust us with their
            laundry!
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hi! I want to book your 5-star laundry service.",
              );
              window.open(
                `https://wa.me/${managerInfo.onlyNumber.whatsApp}?text=${message}`,
                "_blank",
              );
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get Your 5-Star Service Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
