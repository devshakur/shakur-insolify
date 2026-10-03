export const productIds = ["safi", "settle", "fincore"] as const;

export type ProductId = (typeof productIds)[number];

export type SafiView = "apps" | "features" | "demo";

export type FeatureItem = {
  title: string;
  detail: string;
  tone: "blue" | "gold" | "red";
  glyph: "support" | "meeting" | "research" | "fraud" | "voice" | "learning" | "language" | "security";
};

export type ProductPreview = {
  title: string;
  summary: string;
  linkLabel: string;
  visual: "network" | "currency" | "modules";
};

export type Product = {
  id: ProductId;
  name: string;
  headline: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  cardTitle: string;
  excerpt: string;
  image: string;
  imagePosition: string;
  preview: ProductPreview;
};
