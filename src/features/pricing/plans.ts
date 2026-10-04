export const pricingProductIds = ["fincore", "safi", "settle"] as const;

export type PricingProductId = (typeof pricingProductIds)[number];
export type PricingCurrency = "NGN" | "USD";

export type PricingPlan = {
  id: "starter" | "growth" | "complete";
  name: string;
  description: string;
  yearly: number;
  setup: number;
  cta: string;
  href: string;
  features: string[];
  recommended?: boolean;
};

export type ProductPricing = {
  id: PricingProductId;
  name: string;
  currency: PricingCurrency;
  blurb: string;
  plans: PricingPlan[];
};

const ctaHref = "https://dash.insolify.com";

export const productPricing: ProductPricing[] = [
  {
    id: "fincore",
    name: "Fincore",
    currency: "NGN",
    blurb:
      "Yearly Fincore plans designed to help you go live faster and scale with the modules your institution needs.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "The Fincore base platform, everything you need to go live.",
        yearly: 1_000_000,
        setup: 1_000_000,
        cta: "Start with Starter",
        href: ctaHref,
        features: ["Core Banking"],
      },
      {
        id: "growth",
        name: "Growth",
        description: "Base platform plus the modules most customers add first.",
        yearly: 10_000_000,
        setup: 10_000_000,
        cta: "Start with Growth",
        href: ctaHref,
        recommended: true,
        features: ["Core Banking", "Cards Module", "InterBanking", "Mobile Banking"],
      },
      {
        id: "complete",
        name: "Complete",
        description: "Every available module, full platform capability.",
        yearly: 42_000_000,
        setup: 46_000_000,
        cta: "Get started",
        href: ctaHref,
        features: [
          "Core Banking",
          "Cards Module",
          "InterBanking",
          "Virtual Banking",
          "POS Module",
          "USSD Banking",
          "Internet Banking",
          "Website Module",
          "International Banking",
          "Mobile Banking",
          "Agency Banking",
          "Data Migration",
        ],
      },
    ],
  },
  {
    id: "safi",
    name: "Safi AI",
    currency: "USD",
    blurb:
      "Yearly Safi AI plans designed to help you automate work faster and add the intelligence your team needs.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "The Safi AI base platform, everything you need to go live.",
        yearly: 29,
        setup: 0,
        cta: "Start with Starter",
        href: ctaHref,
        features: ["AI Platform"],
      },
      {
        id: "growth",
        name: "Growth",
        description: "Base platform plus the modules most customers add first.",
        yearly: 99,
        setup: 0,
        cta: "Start with Growth",
        href: ctaHref,
        recommended: true,
        features: ["AI Platform", "Advanced AI"],
      },
      {
        id: "complete",
        name: "Complete",
        description: "Every available module, full platform capability.",
        yearly: 444,
        setup: 500,
        cta: "Get started",
        href: ctaHref,
        features: [
          "AI Platform",
          "Advanced AI",
          "Analytics Dashboard",
          "Custom Integrations",
          "Multi-Language",
          "Enterprise Security",
          "Dedicated Model",
        ],
      },
    ],
  },
  {
    id: "settle",
    name: "Settle Africa",
    currency: "USD",
    blurb:
      "Yearly Settle Africa plans designed to help you move money faster and scale across the rails you need.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "The Settle Africa base platform, everything you need to go live.",
        yearly: 99,
        setup: 0,
        cta: "Start with Starter",
        href: ctaHref,
        features: ["Transfer Platform"],
      },
      {
        id: "growth",
        name: "Growth",
        description: "Base platform plus the modules most customers add first.",
        yearly: 187,
        setup: 0,
        cta: "Start with Growth",
        href: ctaHref,
        recommended: true,
        features: ["Transfer Platform", "Bank Transfer", "Mobile Money"],
      },
      {
        id: "complete",
        name: "Complete",
        description: "Every available module, full platform capability.",
        yearly: 384,
        setup: 200,
        cta: "Get started",
        href: ctaHref,
        features: [
          "Transfer Platform",
          "Bank Transfer",
          "Mobile Money",
          "Cash Pickup",
          "Airtime Top-up",
          "Business API",
        ],
      },
    ],
  },
];

export function getProductPricing(id: PricingProductId) {
  return productPricing.find((product) => product.id === id) ?? productPricing[0];
}

export function formatPrice(amount: number, currency: PricingCurrency) {
  if (currency === "NGN") {
    return `₦${amount.toLocaleString("en-NG")}`;
  }
  return `$${amount.toLocaleString("en-US")}`;
}
