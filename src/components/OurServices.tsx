import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Press / Ironing / Folding",
    price: "12 Riyals",
    unit: "Kg",
    description:
      "Professional pressing, ironing, and folding service with delivery within 24 hours or as arranged with you.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "Up to 24 Hours",
  },
  {
    title: "Urgent Wash, Dry & Iron",
    price: "30 Riyals",
    unit: "Kg",
    description:
      "Fast wash, dry, and press/ironing with folding or hanger option. Quick delivery available across Makkah.",
    highlight: "Urgent Service – Around Makkah Only",
    deliveryTime: "Within 1 Hour",
  },
  {
    title: "12 Hours Wash & Delivery",
    price: "18 Riyals",
    unit: "Kg",
    description:
      "Thorough wash, dry, press/ironing, and folding or hanger service delivered back to you within 12 hours.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "12 Hours",
  },
  {
    title: "24 Hours Wash & Delivery",
    price: "25 Riyals",
    unit: "Kg",
    description:
      "Complete wash, dry, press/ironing, and folding or hanger service with guaranteed delivery within 24 hours.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "24 Hours",
  },
  {
    title: "Premium Ihram Care",
    price: "18 Riyals",
    unit: "Kg",
    description:
      "Gentle, fragrance-free washing and care for Ihram garments — preserving both purity and fabric integrity.",
    highlight: "Pilgrim-Safe & Gentle Care",
    deliveryTime: "Same Day",
  },
  {
    title: "Stain Removal Service",
    price: "18 Riyals",
    unit: "Kg",
    description:
      "Targeted stain treatment for stubborn marks, handled carefully to protect fabric and restore cleanliness.",
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
            Our Laundry Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Professional washing, dry cleaning, ironing, and express service
            with free pickup and delivery across Makkah.
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
