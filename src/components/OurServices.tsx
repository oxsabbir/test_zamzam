import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Press / Ironing / Folding",
    price: "12 Riyals",
    unit: "Kg",
    description:
      "Professional pressing, ironing, and folding service with delivery within 24 hours or as per client’s request.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "Up to 24 Hours",
  },
  {
    title: "Urgent Wash, Dry & Iron",
    price: "35 Riyals",
    unit: "Kg",
    description:
      "Urgent wash, dry, and press/ironing service with folding or hanger option. Fast delivery available across Makkah.",
    highlight: "Urgent Service – Around Makkah Only",
    deliveryTime: "Within 1 Hour",
  },
  {
    title: "12 Hours Wash & Delivery",
    price: "18 Riyals",
    unit: "Kg",
    description:
      "Normal wash, dry, press/ironing, and folding or hanger service with delivery within 12 hours.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "12 Hours",
  },
  {
    title: "24 Hours Wash & Delivery",
    price: "30 Riyals",
    unit: "Kg",
    description:
      "Wash, dry, press/ironing, and folding or hanger service with express delivery within 24 hours.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "24 Hours",
  },
  {
    title: "Premium Ihram Care",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "Specialized washing and care for Ihram garments using gentle processes to maintain purity and fabric quality.",
    highlight: "Pilgrim-Safe & Gentle Care",
    deliveryTime: "Same Day",
  },
  {
    title: "Stain Removal Service",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "Advanced stain treatment for tough spots, handled carefully to protect fabric and restore cleanliness.",
    highlight: "Deep Cleaning Expertise",
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
            Laundry Services Across Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            We provide reliable and professional laundry services throughout
            Makkah.
            <br />
            <span>
              Enjoy fast{" "}
              <strong className="text-primary font-semibold">
                pickup and delivery
              </strong>{" "}
              for hotels, apartments, and areas near Masjid Al-Haram—making
              laundry simple and stress-free.
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
