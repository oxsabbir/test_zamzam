import { Check, X } from "lucide-react";
import { siteInfo } from "@/constants";

const comparisonFeatures = [
  {
    feature: "Pickup & Delivery",
    ours: "Fast & Free Across Makkah",
    others: "Slow or Not Available",
  },
  {
    feature: "24/7 Availability",
    ours: "Yes, Anytime Anywhere",
    others: "Limited Hours",
  },
  {
    feature: "Garment Protection",
    ours: "Expert Cleaning Guarantee",
    others: "Standard Washing",
  },
  {
    feature: "Transparent Pricing",
    ours: "Honest Rates No Extra Costs",
    others: "Hidden Fees",
  },
  {
    feature: "Service Support",
    ours: "Multi-language Support",
    others: "Limited Support",
  },
  {
    feature: "Stain Removal",
    ours: "Special Stain Treatments",
    others: "Standard Wash Only",
  },
];

const Comparison = () => {
  return (
    <section className="py-20 bg-muted/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Why Customers Book With {siteInfo.shortName}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A quick look at the service details people usually compare before
            booking their laundry pickup in Makkah.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border/60 shadow-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-primary text-white p-6 sm:p-8 font-bold text-center">
            <div className="text-left">Feature</div>
            <div>{siteInfo.shortName}</div>
            <div>Other Laundries</div>
          </div>
          <div className="divide-y divide-border/60">
            {comparisonFeatures.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 p-6 sm:p-8 hover:bg-muted/30 transition-colors"
              >
                <div className="font-bold text-foreground flex items-center">
                  {item.feature}
                </div>
                <div className="text-center flex items-center justify-center gap-2 text-primary font-medium">
                  <Check className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.ours}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="hidden sm:inline">{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
