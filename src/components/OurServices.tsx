import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Steam Ironing & Folding",
    price: "12 Riyals",
    unit: "Kg",
    description:
      "Good steam ironing and neat folding to keep you looking great. We pick up at a time that is best for you.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "Up to 24 Hours",
  },
  {
    title: "Super Fast Wash & Iron",
    price: "35 Riyals",
    unit: "Kg",
    description:
      "Our fastest service for people in a hurry. Very quick washing, drying, and ironing with high quality.",
    highlight: "Priority Service – All Over Makkah",
    deliveryTime: "Within 1 Hour",
  },
  {
    title: "Same-Day 12-Hour Service",
    price: "18 Riyals",
    unit: "Kg",
    description:
      "Fast and good care for your daily clothes. Your laundry is returned clean and ready in half a day.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "12 Hours",
  },
  {
    title: "Standard 24-Hour Service",
    price: "30 Riyals",
    unit: "Kg",
    description:
      "Our best standard service. Thorough cleaning and expert ironing returned to you the next day.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "24 Hours",
  },
  {
    title: "Special Ihram Cleaning",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "We wash your sacred Ihram with great respect. We use gentle, fragrance-free soap to keep them pure.",
    highlight: "Safe for Pilgrims & Respectful Care",
    deliveryTime: "Same Day",
  },
  {
    title: "Removing Hard Stains",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "Special care for clothes with hard stains. Our team uses safe and effective ways to clean your clothes.",
    highlight: "Expert Stain Cleaning",
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
            All Your Washing Needs in Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Trust our team with your important clothes. 
            <br />
            <span>
              We provide fast{" "}
              <strong className="text-primary font-semibold">
                pickup and delivery
              </strong>{" "}
              to hotels and houses near the Holy Mosque—making laundry easy for you.
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
