export type FeatureCard = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
};

export const featureCards: FeatureCard[] = [
  {
    id: "lightning-fast",
    title: "Lightning Fast",
    excerpt: "Get instant responses with our optimized AI engine designed for speed and accuracy.",
    image: "/image/feature-lightning.jpg",
  },
  {
    id: "smart-learning",
    title: "Smart Learning",
    excerpt: "Our AI learns from interactions to provide increasingly personalized assistance.",
    image: "/image/feature-learning.jpg",
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security",
    excerpt: "Bank-level encryption and compliance with industry standards to protect your data.",
    image: "/image/feature-security.jpg",
  },
  {
    id: "multi-language",
    title: "Multi-Language",
    excerpt: "Communicate in 50+ languages with real-time translation capabilities.",
    image: "/image/feature-language.jpg",
  },
  {
    id: "seamless-integration",
    title: "Seamless Integration",
    excerpt: "Connect with your existing tools and workflows effortlessly.",
    image: "/image/feature-integration.jpg",
  },
  {
    id: "advanced-analytics",
    title: "Advanced Analytics",
    excerpt: "Gain insights into conversations and usage patterns with detailed reports.",
    image: "/image/feature-analytics.jpg",
  },
];
