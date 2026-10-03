import type { FeatureItem, Product, SafiView } from "@/features/products/types";

const site = "https://www.insolify.com/";

export const products: Product[] = [
  {
    id: "safi",
    name: "Safi AI",
    headline: "Intelligent AI for Modern Business",
    description:
      "Safi transforms how businesses operate with cutting-edge artificial intelligence. Automate complex tasks, gain deep insights, and deliver exceptional experiences with our comprehensive AI platform.",
    primaryLabel: "Get Started",
    primaryHref: site,
    secondaryLabel: "Watch Overview",
    secondaryHref: "#how-it-works",
    cardTitle: "Safi AI for modern business",
    excerpt:
      "Automate support, meetings, and fraud checks with one assistant built for finance teams.",
    image: "/image/insolify.webp",
    imagePosition: "70% center",
    preview: {
      title: "AI for Modern Business",
      summary:
        "Customer support, meeting notes, research, and fraud detection in one assistant.",
      linkLabel: "Explore features",
      visual: "network",
    },
  },
  {
    id: "settle",
    name: "Settle Africa",
    headline: "Fast, Flexible Payments Across Africa & Beyond",
    description:
      "Settle Africa delivers cross-border and local payments optimized for African markets — low fees, fast settlements, and compliance built-in.",
    primaryLabel: "Get Started",
    primaryHref: site,
    secondaryLabel: "View Demo",
    secondaryHref: "#how-it-works",
    cardTitle: "Settle Africa for payments",
    excerpt:
      "Cross-border and local payments with low fees, fast settlement, and compliance built in.",
    image: "/image/insolify.webp",
    imagePosition: "center center",
    preview: {
      title: "Payments Built for Africa",
      summary:
        "Support for multi-currency settlements, local rails, reconciliation, and a developer-friendly API for integrations.",
      linkLabel: "Explore features",
      visual: "currency",
    },
  },
  {
    id: "fincore",
    name: "Fincore",
    headline: "Modern Core Banking for the Digital Age",
    description:
      "Fincore powers modern banking with a modular, scalable core banking system. Enable digital channels, manage complex lending, and drive financial inclusion.",
    primaryLabel: "Request Demo",
    primaryHref: "mailto:sales@insolify.com",
    secondaryLabel: "View Modules",
    secondaryHref: "#how-it-works",
    cardTitle: "Fincore for digital banking",
    excerpt:
      "A modular core for accounts, lending, digital channels, and regulatory reporting.",
    image: "/image/insolify.webp",
    imagePosition: "20% center",
    preview: {
      title: "Modular, Scalable Core",
      summary:
        "A comprehensive suite of pre-built, cloud-native modules for accounts, lending, transactions, and regulatory reporting.",
      linkLabel: "Explore Modules",
      visual: "modules",
    },
  },
];

export const safiViews: Record<Exclude<SafiView, "demo">, FeatureItem[]> = {
  apps: [
    {
      title: "Customer Support",
      detail: "AI-powered customer service with 24/7 availability",
      tone: "blue",
      glyph: "support",
    },
    {
      title: "Meeting Assistant",
      detail: "Automated note-taking and action item tracking",
      tone: "gold",
      glyph: "meeting",
    },
    {
      title: "Research Analytics",
      detail: "Deep insights from your business data",
      tone: "gold",
      glyph: "research",
    },
    {
      title: "Fraud Detection",
      detail: "Real-time anomaly detection and prevention",
      tone: "red",
      glyph: "fraud",
    },
  ],
  features: [
    {
      title: "Voice Matching",
      detail: "Biometric voice authentication and verification",
      tone: "blue",
      glyph: "voice",
    },
    {
      title: "Smart Learning",
      detail: "Assistance that improves from every interaction",
      tone: "gold",
      glyph: "learning",
    },
    {
      title: "Multi-Language",
      detail: "Real-time translation across 50+ languages",
      tone: "gold",
      glyph: "language",
    },
    {
      title: "Enterprise Security",
      detail: "Bank-level encryption and compliance controls",
      tone: "red",
      glyph: "security",
    },
  ],
};

export function getProduct(id: Product["id"]) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    throw new Error(`Unknown product: ${id}`);
  }
  return product;
}
