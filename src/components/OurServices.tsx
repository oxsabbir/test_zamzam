import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Steam Press & Precision Fold",
    price: "12 Riyals",
    unit: "Kg",
    description:
      "Expert steam pressing and neat folding to keep you looking distinguished. We work around your timeline for ultimate convenience.",
    highlight: "Free Collection & Delivery Included",
    deliveryTime: "Up to 24 Hours",
  },
  {
    title: "Super Express Wash & Iron",
    price: "35 Riyals",
    unit: "Kg",
    description:
      "Our quickest solution for those in a hurry. Rapid washing, drying, and pressing with a focus on speed and quality.",
    highlight: "Priority Service – Makkah Wide",
    deliveryTime: "Within 1 Hour",
  },
  {
    title: "12-Hour Same-Day Service",
    price: "18 Riyals",
    unit: "Kg",
    description:
      "Efficient same-day care for your daily wardrobe. Your clothes are returned fresh and ready within half a day.",
    highlight: "Free Collection & Delivery Included",
    deliveryTime: "12 Hours",
  },
  {
    title: "24-Hour Reliable Care",
    price: "30 Riyals",
    unit: "Kg",
    description:
      "Our standard high-quality cycle. Thorough cleaning and expert pressing returned to you by the next day.",
    highlight: "Free Collection & Delivery Included",
    deliveryTime: "24 Hours",
  },
  {
    title: "Sacred Ihram Specialized Care",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "We treat your sacred garments with the highest respect, using gentle, fragrance-free processes to maintain purity.",
    highlight: "Pilgrim-Safe & Respectful Care",
    deliveryTime: "Same Day",
  },
  {
    title: "Advanced Stain Treatment",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "Specialized care for challenging spots. Our team uses safe, effective methods to restore your clothes to their best state.",
    highlight: "Expert Stain Removal",
    deliveryTime: "Up to 24 Hours",
  },
];

export default function OurServices() {
  return (
    <section className="py-20  bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-12">
          <h2
            id="areas-heading"
            className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            Comprehensive Textile Care in Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Trust our skilled team for all your garment needs. 
            <br />
            <span>
              We deliver prompt{" "}
              <strong className="text-primary font-semibold">
                collection and delivery
              </strong>{" "}
              to hotels, suites, and residences near the Holy Mosque—making laundry simple.
            </span>
          </p>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-3 gap-8">
          {urgentServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              unit={service.unit}
              description={service.description}
              highlight={service.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
