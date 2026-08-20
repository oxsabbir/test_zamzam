export type PriceCategory = "mens" | "womens" | "household" | "special";
export type GarmentService = "washIron" | "ironOnly";
export type ServiceSpeed = "normal" | "urgent";

export interface PricePair {
  normal: number | null;
  urgent: number | null;
}

export interface LaundryPriceItem {
  id: string;
  name: string;
  arabicName: string;
  category: PriceCategory;
  unit: "item";
  services: {
    washIron: PricePair;
    ironOnly: PricePair;
  };
}

export interface KiloPricing {
  unit: "kg";
  services: {
    washIron: PricePair;
    washOnly: PricePair;
    ironOnly: PricePair;
  };
}

export const priceCategories: Array<{
  id: PriceCategory;
  label: string;
  description: string;
}> = [
  {
    id: "mens",
    label: "Men's Clothing",
    description: "Daily garments and formal pieces priced per item.",
  },
  {
    id: "womens",
    label: "Women's Clothing",
    description: "Women's garments and everyday clothing priced per item.",
  },
  {
    id: "household",
    label: "Household & Bedding",
    description: "Home textiles, bedding, and small household items.",
  },
  {
    id: "special",
    label: "Special / Religious Items",
    description: "Religious and specialty items with their own item pricing.",
  },
];

export const kiloPricing: KiloPricing = {
  unit: "kg",
  services: {
    washIron: { normal: 25, urgent: 35 },
    washOnly: { normal: 20, urgent: 25 },
    ironOnly: { normal: 10, urgent: 15 },
  },
};

export const laundryPriceItems: LaundryPriceItem[] = [
  {
    id: "thobe",
    name: "Thobe",
    arabicName: "ثوب",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 12, urgent: 20 },
      ironOnly: { normal: 5, urgent: 8 },
    },
  },
  {
    id: "thobe-collar",
    name: "Thobe Collar",
    arabicName: "ثوب ملون",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 15, urgent: 25 },
      ironOnly: { normal: 8, urgent: 10 },
    },
  },
  {
    id: "ihram",
    name: "Ihram",
    arabicName: "إحرام",
    category: "special",
    unit: "item",
    services: {
      washIron: { normal: 15, urgent: 30 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "ghutra",
    name: "Ghutra",
    arabicName: "غترة",
    category: "special",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 15 },
      ironOnly: { normal: 5, urgent: 6 },
    },
  },
  {
    id: "shammagh",
    name: "Shammagh",
    arabicName: "شماغ",
    category: "special",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 15 },
      ironOnly: { normal: 5, urgent: 6 },
    },
  },
  {
    id: "sarwal-t",
    name: "Sarwal T.",
    arabicName: "سروال طويل",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 6, urgent: 10 },
      ironOnly: { normal: 5, urgent: 6 },
    },
  },
  {
    id: "sarwal-s",
    name: "Sarwal S.",
    arabicName: "سروال قصير",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 5, urgent: 6 },
      ironOnly: { normal: 2, urgent: 4 },
    },
  },
  {
    id: "pant",
    name: "Pant",
    arabicName: "بنطلون",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 10, urgent: 15 },
      ironOnly: { normal: 3, urgent: 5 },
    },
  },
  {
    id: "shirt",
    name: "Shirt",
    arabicName: "قميص",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 12 },
      ironOnly: { normal: 4, urgent: 6 },
    },
  },
  {
    id: "coat-pant",
    name: "Coat/Pant",
    arabicName: "بدلة",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 35, urgent: 40 },
      ironOnly: { normal: 15, urgent: 20 },
    },
  },
  {
    id: "pak-dr",
    name: "Pak. Dr.",
    arabicName: "بدلة باكستانية",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 15, urgent: 20 },
      ironOnly: { normal: 5, urgent: 8 },
    },
  },
  {
    id: "dupatta",
    name: "Dupatta",
    arabicName: "وشاح",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 3, urgent: 5 },
      ironOnly: { normal: 2, urgent: 4 },
    },
  },
  {
    id: "face-cover",
    name: "Face Cover",
    arabicName: "نقاب",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 3, urgent: 5 },
      ironOnly: { normal: 2, urgent: 3 },
    },
  },
  {
    id: "t-shirt",
    name: "T-Shirt",
    arabicName: "نصف كم",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 5, urgent: 10 },
      ironOnly: { normal: 3, urgent: 5 },
    },
  },
  {
    id: "child-clothes",
    name: "Child Clothes",
    arabicName: "ملابس الأطفال",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 4, urgent: 8 },
      ironOnly: { normal: 3, urgent: 5 },
    },
  },
  {
    id: "lungy-wazer",
    name: "Lungy / Wazer",
    arabicName: "نجدي",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 15 },
      ironOnly: { normal: 4, urgent: 5 },
    },
  },
  {
    id: "towel",
    name: "Towel",
    arabicName: "منشفة",
    category: "household",
    unit: "item",
    services: {
      washIron: { normal: 10, urgent: 15 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "blanket",
    name: "Blanket",
    arabicName: "بطانية",
    category: "household",
    unit: "item",
    services: {
      washIron: { normal: 15, urgent: 25 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "panjabi",
    name: "Panjabi",
    arabicName: "بنجابي",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 16 },
      ironOnly: { normal: 5, urgent: 8 },
    },
  },
  {
    id: "dress-ls",
    name: "Dress L.S.",
    arabicName: "فستان",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 15, urgent: 25 },
      ironOnly: { normal: 8, urgent: 15 },
    },
  },
  {
    id: "pant-ls",
    name: "Pant L.S.",
    arabicName: "بنطلون نسائي",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 10 },
      ironOnly: { normal: 5, urgent: 8 },
    },
  },
  {
    id: "blouse",
    name: "Blouse",
    arabicName: "بلوزة",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 10, urgent: 15 },
      ironOnly: { normal: 5, urgent: 8 },
    },
  },
  {
    id: "skirt",
    name: "Skirt",
    arabicName: "تنورة",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 12, urgent: 15 },
      ironOnly: { normal: 8, urgent: 10 },
    },
  },
  {
    id: "abaya",
    name: "Abaya",
    arabicName: "عباية",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 15, urgent: 30 },
      ironOnly: { normal: 10, urgent: 15 },
    },
  },
  {
    id: "s-hijab",
    name: "S. Hijab",
    arabicName: "نقاب",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 5, urgent: 10 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "hijab",
    name: "Hijab",
    arabicName: "حجاب",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 15 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "tarha",
    name: "Tarha",
    arabicName: "طرحة",
    category: "womens",
    unit: "item",
    services: {
      washIron: { normal: 5, urgent: 8 },
      ironOnly: { normal: 3, urgent: 4 },
    },
  },
  {
    id: "jacket",
    name: "Jacket",
    arabicName: "جاكيت",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 20, urgent: 30 },
      ironOnly: { normal: 10, urgent: 15 },
    },
  },
  {
    id: "u-wear",
    name: "U.Wear",
    arabicName: "ملابس داخلية",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 4, urgent: 6 },
      ironOnly: { normal: 2, urgent: 3 },
    },
  },
  {
    id: "fanila",
    name: "Fanila",
    arabicName: "فانيلة",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 4, urgent: 6 },
      ironOnly: { normal: 2, urgent: 3 },
    },
  },
  {
    id: "t-bate-sb",
    name: "T. Bate S.B.",
    arabicName: "قطعة قماش",
    category: "household",
    unit: "item",
    services: {
      washIron: { normal: 5, urgent: 10 },
      ironOnly: { normal: 3, urgent: 5 },
    },
  },
  {
    id: "bed-sheet",
    name: "Bed Sheet",
    arabicName: "شرشف",
    category: "household",
    unit: "item",
    services: {
      washIron: { normal: 10, urgent: 20 },
      ironOnly: { normal: 5, urgent: 10 },
    },
  },
  {
    id: "ehram-ls",
    name: "Ehram L.S.",
    arabicName: "إحرام",
    category: "special",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 12 },
      ironOnly: { normal: 5, urgent: 8 },
    },
  },
  {
    id: "taqyah",
    name: "Taqyah",
    arabicName: "طاقية",
    category: "special",
    unit: "item",
    services: {
      washIron: { normal: 3, urgent: 5 },
      ironOnly: { normal: 2, urgent: 3 },
    },
  },
  {
    id: "p-cover",
    name: "P.Cover",
    arabicName: "كيس مخدة",
    category: "household",
    unit: "item",
    services: {
      washIron: { normal: 8, urgent: 15 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "socks",
    name: "Socks",
    arabicName: "جوارب",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 2, urgent: 3 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "sajjada",
    name: "Sajjada",
    arabicName: "سجادة",
    category: "special",
    unit: "item",
    services: {
      washIron: { normal: 10, urgent: 15 },
      ironOnly: { normal: null, urgent: null },
    },
  },
  {
    id: "wool-fanila",
    name: "Wool Fanila",
    arabicName: "فنيلة صوف",
    category: "mens",
    unit: "item",
    services: {
      washIron: { normal: 5, urgent: 10 },
      ironOnly: { normal: null, urgent: null },
    },
  },
];

export const quickPriceHighlights = [
  { label: "Thobe", detail: "from 12 SAR / item" },
  { label: "Ihram", detail: "from 15 SAR / item" },
  { label: "Ghutra", detail: "from 8 SAR / item" },
  { label: "Shirt", detail: "from 8 SAR / item" },
  { label: "Laundry by KG", detail: "from 25 SAR / KG" },
];
