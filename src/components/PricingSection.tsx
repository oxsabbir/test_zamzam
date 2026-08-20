import { useMemo, useState } from "react";
import { Clock, Search, Send, Shirt, Sparkles, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { whatsappMessages } from "@/constants/messages";
import {
  kiloPricing,
  laundryPriceItems,
  priceCategories,
  quickPriceHighlights,
  type GarmentService,
  type LaundryPriceItem,
  type PriceCategory,
  type ServiceSpeed,
} from "@/constants/pricing";
import { handleWhatsApp } from "@/lib/utils";

const serviceLabels: Record<GarmentService, string> = {
  washIron: "Wash + Iron",
  ironOnly: "Iron Only",
};

const speedLabels: Record<ServiceSpeed, string> = {
  normal: "Normal",
  urgent: "Urgent",
};

const formatPrice = (price: number | null, unit = "item") =>
  price === null ? "—" : `${price} SAR${unit === "kg" ? " / KG" : ""}`;

const priceClassName = (price: number | null) =>
  price === null
    ? "text-muted-foreground"
    : "font-black text-primary tabular-nums";

const getSelectedPrice = (
  item: LaundryPriceItem,
  service: GarmentService,
  speed: ServiceSpeed,
) => item.services[service][speed];

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState<PriceCategory>("mens");
  const [activeService, setActiveService] = useState<GarmentService>("washIron");
  const [activeSpeed, setActiveSpeed] = useState<ServiceSpeed>("normal");
  const [query, setQuery] = useState("");

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return laundryPriceItems.filter((item) => {
      const matchesCategory =
        normalizedQuery.length > 0 || item.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.arabicName.includes(query.trim());

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const handleBooking = () => {
    const message = whatsappMessages.package
      .replace("<package>", "Laundry Pricing")
      .replace("<price>", "the selected price list");

    handleWhatsApp(message, true);
  };

  return (
    <section
      id="laundry-pricing"
      className="py-16 sm:py-20 bg-[linear-gradient(180deg,rgba(52,103,57,0.05),rgba(255,255,255,0)_34%,rgba(52,103,57,0.04))]"
      aria-labelledby="laundry-pricing-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10">
            <Badge className="mb-4 border-none bg-primary/10 px-4 py-1 text-primary hover:bg-primary/20">
              Price List
            </Badge>
            <div className="grid gap-5 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <h2
                  id="laundry-pricing-heading"
                  className="text-3xl sm:text-5xl font-black tracking-tight text-foreground"
                >
                  Laundry Pricing
                </h2>
                <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Simple and transparent pricing for washing and ironing
                  services. Garment prices are per item, and weight-based
                  laundry is priced per kilogram.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/15 bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-foreground">
                      Open Every Day, 24 Hours
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Service available all days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div aria-labelledby="quick-prices-heading" className="mb-8">
            <h3
              id="quick-prices-heading"
              className="mb-4 text-xl font-black text-foreground"
            >
              Starting Prices
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {quickPriceHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm"
                >
                  <p className="text-sm font-bold text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xl font-black text-primary">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            aria-labelledby="weight-pricing-heading"
            className="mb-10 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[linear-gradient(135deg,rgba(52,103,57,0.12),rgba(255,255,255,0.55))] p-6 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Weight className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3
                  id="weight-pricing-heading"
                  className="text-2xl sm:text-3xl font-black tracking-tight text-foreground"
                >
                  Laundry by Weight
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Kilo pricing follows a separate model and is always shown per
                  kilogram.
                </p>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-6">
                {(
                  [
                    ["Wash + Iron", kiloPricing.services.washIron],
                    ["Wash Only", kiloPricing.services.washOnly],
                    ["Iron Only", kiloPricing.services.ironOnly],
                  ] as const
                ).map(([label, prices]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border/70 bg-background p-5"
                  >
                    <h4 className="mb-4 text-base font-black text-foreground">
                      {label}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold uppercase text-muted-foreground">
                          Normal
                        </p>
                        <p className="text-2xl font-black text-primary">
                          {formatPrice(prices.normal, "kg")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase text-muted-foreground">
                          Urgent
                        </p>
                        <p className="text-2xl font-black text-primary">
                          {formatPrice(prices.urgent, "kg")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-border/70 bg-card p-4 shadow-sm sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search item or Arabic name"
                  aria-label="Search laundry price items"
                  className="h-11 rounded-xl pl-10"
                />
              </div>

              <div
                className="flex rounded-xl border border-border/70 bg-muted/40 p-1"
                aria-label="Choose garment service"
              >
                {(["washIron", "ironOnly"] as GarmentService[]).map(
                  (service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setActiveService(service)}
                      className={`min-h-10 rounded-lg px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        activeService === service
                          ? "bg-primary text-white shadow-sm"
                          : "text-foreground hover:bg-background"
                      }`}
                    >
                      {serviceLabels[service]}
                    </button>
                  ),
                )}
              </div>

              <div
                className="flex rounded-xl border border-border/70 bg-muted/40 p-1"
                aria-label="Choose service speed"
              >
                {(["normal", "urgent"] as ServiceSpeed[]).map((speed) => (
                  <button
                    key={speed}
                    type="button"
                    onClick={() => setActiveSpeed(speed)}
                    className={`min-h-10 rounded-lg px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      activeSpeed === speed
                        ? "bg-primary text-white shadow-sm"
                        : "text-foreground hover:bg-background"
                    }`}
                  >
                    {speedLabels[speed]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <nav
            className="mb-7 flex gap-2 overflow-x-auto pb-2"
            aria-label="Pricing categories"
          >
            {priceCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  activeCategory === category.id
                    ? "border-primary bg-primary text-white"
                    : "border-border/70 bg-card text-foreground hover:border-primary/40"
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>

          {priceCategories.map((category) => {
            const isActive = category.id === activeCategory;
            const categoryItems = isActive ? visibleItems : [];
            const heading = query.trim()
              ? "Search Results"
              : category.label;
            const description = query.trim()
              ? "Matching item prices across all categories."
              : category.description;

            if (!isActive) return null;

            return (
              <div key={category.id} aria-labelledby={`${category.id}-heading`}>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3
                      id={`${category.id}-heading`}
                      className="text-2xl font-black text-foreground"
                    >
                      {heading}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-muted-foreground">
                    Prices shown per item
                  </p>
                </div>

                <div className="hidden overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm md:block">
                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">
                      Complete {category.label} laundry price comparison
                    </caption>
                    <thead className="bg-muted/70">
                      <tr>
                        <th scope="col" className="px-5 py-4 text-sm font-black">
                          Item
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-right text-sm font-black"
                        >
                          Normal Wash + Iron
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-right text-sm font-black"
                        >
                          Urgent Wash + Iron
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-right text-sm font-black"
                        >
                          Normal Iron Only
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-right text-sm font-black"
                        >
                          Urgent Iron Only
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-t border-border/70 transition hover:bg-muted/30"
                        >
                          <th scope="row" className="px-5 py-4">
                            <span className="block font-black text-foreground">
                              {item.name}
                            </span>
                            <span
                              className="block text-sm text-muted-foreground"
                              dir="rtl"
                              lang="ar"
                            >
                              {item.arabicName}
                            </span>
                          </th>
                          <td
                            className={`px-5 py-4 text-right ${
                              activeService === "washIron" &&
                              activeSpeed === "normal"
                                ? "bg-primary/5"
                                : ""
                            } ${priceClassName(
                              item.services.washIron.normal,
                            )}`}
                          >
                            {formatPrice(item.services.washIron.normal)}
                          </td>
                          <td
                            className={`px-5 py-4 text-right ${
                              activeService === "washIron" &&
                              activeSpeed === "urgent"
                                ? "bg-primary/5"
                                : ""
                            } ${priceClassName(
                              item.services.washIron.urgent,
                            )}`}
                          >
                            {formatPrice(item.services.washIron.urgent)}
                          </td>
                          <td
                            className={`px-5 py-4 text-right ${
                              activeService === "ironOnly" &&
                              activeSpeed === "normal"
                                ? "bg-primary/5"
                                : ""
                            } ${priceClassName(
                              item.services.ironOnly.normal,
                            )}`}
                          >
                            {formatPrice(item.services.ironOnly.normal)}
                          </td>
                          <td
                            className={`px-5 py-4 text-right ${
                              activeService === "ironOnly" &&
                              activeSpeed === "urgent"
                                ? "bg-primary/5"
                                : ""
                            } ${priceClassName(
                              item.services.ironOnly.urgent,
                            )}`}
                          >
                            {formatPrice(item.services.ironOnly.urgent)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid gap-4 md:hidden">
                  {categoryItems.map((item) => {
                    const selectedPrice = getSelectedPrice(
                      item,
                      activeService,
                      activeSpeed,
                    );

                    return (
                      <article
                        key={item.id}
                        className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
                      >
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-xl font-black text-foreground">
                              {item.name}
                            </h4>
                            <p
                              className="mt-1 text-base text-muted-foreground"
                              dir="rtl"
                              lang="ar"
                            >
                              {item.arabicName}
                            </p>
                          </div>
                          <div className="rounded-xl bg-primary/10 px-3 py-2 text-right">
                            <p className="text-[10px] font-bold uppercase text-primary">
                              Selected
                            </p>
                            <p className={priceClassName(selectedPrice)}>
                              {formatPrice(selectedPrice)}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <MobileServiceBlock
                            label="Wash + Iron"
                            normal={item.services.washIron.normal}
                            urgent={item.services.washIron.urgent}
                          />
                          <MobileServiceBlock
                            label="Iron Only"
                            normal={item.services.ironOnly.normal}
                            urgent={item.services.ironOnly.urgent}
                          />
                        </div>
                      </article>
                    );
                  })}
                </div>

                {categoryItems.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
                    <p className="font-bold text-foreground">
                      No price items match your search.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Try another English or Arabic item name.
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          <div className="mt-10 rounded-2xl border border-primary/15 bg-card p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Shirt className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground">
                    Ready to send your laundry?
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
                    Share your items on WhatsApp and the team will confirm
                    pickup details.
                  </p>
                </div>
              </div>
              <Button
                id="generate_lead"
                onClick={handleBooking}
                className="h-12 rounded-xl bg-primary px-6 font-black text-white hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                Book on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileServiceBlock({
  label,
  normal,
  urgent,
}: {
  label: string;
  normal: number | null;
  urgent: number | null;
}) {
  const unavailable = normal === null && urgent === null;

  return (
    <div className="rounded-xl border border-border/70 bg-muted/30 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
        <h5 className="font-black text-foreground">{label}</h5>
      </div>
      {unavailable ? (
        <p className="text-sm font-bold text-muted-foreground">
          Not available
        </p>
      ) : (
        <dl className="grid grid-cols-2 gap-3">
          <div>
            <dt className="text-xs font-bold uppercase text-muted-foreground">
              Normal
            </dt>
            <dd className={priceClassName(normal)}>{formatPrice(normal)}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase text-muted-foreground">
              Urgent
            </dt>
            <dd className={priceClassName(urgent)}>{formatPrice(urgent)}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}
