import {
  Check,
  Clock,
  Languages,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteInfo } from "@/constants";
import featureImage from "@/assets/feature-laundry.webp";

const comparisonFeatures = [
  {
    feature: "Pickup & Delivery",
    ours: "Free across Makkah",
    others: "Limited or extra cost",
    icon: Truck,
  },
  {
    feature: "24/7 Service",
    ours: "Always available",
    others: "Limited hours",
    icon: Clock,
  },
  {
    feature: "Garment Handling",
    ours: "Professional care",
    others: "Basic washing",
    icon: ShieldCheck,
  },
  {
    feature: "Pricing",
    ours: "Clear per-KG rates",
    others: "Hidden charges",
    icon: PackageCheck,
  },
  {
    feature: "Language Support",
    ours: "Arabic, English, Urdu",
    others: "Limited",
    icon: Languages,
  },
  {
    feature: "Stain Treatment",
    ours: "Included",
    others: "Extra or not offered",
    icon: Sparkles,
  },
];

const summaryCards = [
  {
    value: "24/7",
    label: "Open every day",
  },
  {
    value: "Free",
    label: "Pickup & delivery",
  },
  {
    value: "3",
    label: "Support languages",
  },
];

const Comparison = () => {
  return (
    <section
      className="py-16 sm:py-20 bg-[linear-gradient(180deg,hsl(var(--muted)/0.42),hsl(var(--background)))]"
      aria-labelledby="comparison-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <Badge className="mb-4 border-none bg-primary/10 px-4 py-1 text-primary hover:bg-primary/20">
                Service Comparison
              </Badge>
              <h2
                id="comparison-heading"
                className="text-3xl sm:text-5xl font-black tracking-tight text-foreground"
              >
                Why Book With {siteInfo.shortName}
              </h2>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                A clearer look at the details that matter when choosing laundry
                pickup, cleaning, and delivery in Makkah.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-primary/10 bg-card p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-black text-primary">
                    {card.value}
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-primary/10 bg-card shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
            <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="border-b border-primary/10 relative lg:border-b-0 lg:border-r">
                <div className="mb-7 absolute top-5 left-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                  <ShieldCheck
                    className="h-7 w-7 shadow-md"
                    aria-hidden="true"
                  />
                </div>

                <img
                  src={featureImage}
                  alt="Feature Image"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="hidden md:block">
                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">
                      Comparison between {siteInfo.shortName} and other laundry
                      services
                    </caption>
                    <thead>
                      <tr className="border-b border-border/70">
                        <th className="pb-4 text-sm font-black text-muted-foreground">
                          Feature
                        </th>
                        <th className="pb-4 text-sm font-black text-primary">
                          {siteInfo.shortName}
                        </th>
                        <th className="pb-4 text-sm font-black text-muted-foreground">
                          Other Laundries
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((item) => {
                        const Icon = item.icon;
                        return (
                          <tr
                            key={item.feature}
                            className="border-b border-border/60 last:border-b-0"
                          >
                            <th scope="row" className="py-5 pr-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                                  <Icon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </div>
                                <span className="font-black text-foreground">
                                  {item.feature}
                                </span>
                              </div>
                            </th>
                            <td className="py-5 pr-4">
                              <div className="flex items-center gap-2 font-bold text-foreground">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                  <Check
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                  />
                                </span>
                                {item.ours}
                              </div>
                            </td>
                            <td className="py-5">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                                  <X className="h-4 w-4" aria-hidden="true" />
                                </span>
                                {item.others}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="grid gap-4 md:hidden">
                  {comparisonFeatures.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article
                        key={item.feature}
                        className="rounded-xl border border-border/70 bg-background p-4"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <h3 className="font-black text-foreground">
                            {item.feature}
                          </h3>
                        </div>

                        <div className="grid gap-3">
                          <div className="rounded-lg border border-primary/10 bg-primary/5 p-3">
                            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                              {siteInfo.shortName}
                            </p>
                            <div className="flex items-center gap-2 font-bold text-foreground">
                              <Check className="h-4 w-4 text-primary" />
                              {item.ours}
                            </div>
                          </div>
                          <div className="rounded-lg border border-border/70 bg-muted/30 p-3">
                            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                              Other Laundries
                            </p>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <X className="h-4 w-4 text-red-500" />
                              {item.others}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
