import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Steam Pressing & Folding",
    price: "12 Riyals",
    unit: "Kg",
    description:
      "Premium steam pressing and precise folding to ensure you look your best. We schedule collections at your convenience.",
    highlight: "Complimentary Pickup & Delivery",
    deliveryTime: "Up to 24 Hours",
  },
  {
    title: "Express Wash & Iron",
    price: "35 Riyals",
    unit: "Kg",
    description:
      "Our premier rapid service for those on a tight schedule. High-speed washing, drying, and pressing with uncompromising quality.",
    highlight: "Priority Service Across Makkah",
    deliveryTime: "Within 1 Hour",
  },
  {
    title: "12-Hour Same-Day Return",
    price: "18 Riyals",
    unit: "Kg",
    description:
      "Efficient and professional care for your everyday attire. Your garments are returned spotless within half a day.",
    highlight: "Complimentary Pickup & Delivery",
    deliveryTime: "12 Hours",
  },
  {
    title: "Standard 24-Hour Care",
    price: "30 Riyals",
    unit: "Kg",
    description:
      "Our most popular comprehensive service. Deep cleaning and expert pressing, returned to you by the next day.",
    highlight: "Complimentary Pickup & Delivery",
    deliveryTime: "24 Hours",
  },
  {
    title: "Sacred Ihram Cleaning",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "We handle your Ihram with the highest level of reverence. Using specialized fragrance-free soaps to maintain purity.",
    highlight: "Dedicated Care for Pilgrims",
    deliveryTime: "Same Day",
  },
  {
    title: "Advanced Stain Removal",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "Expert treatment for challenging stains. Our specialists utilize safe, effective techniques to restore your garments.",
    highlight: "Professional Stain Treatment",
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
            Comprehensive Laundry Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Entrust your finest garments to our expert hands.
            <br />
            <span>
              We offer rapid{" "}
              <strong className="text-primary font-semibold">
                collection and delivery
              </strong>{" "}
              to all hotels and residences near Masjid al-Haram, ensuring a hassle-free experience.
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
