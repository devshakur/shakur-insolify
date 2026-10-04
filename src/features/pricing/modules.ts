import type { PricingCurrency, PricingPlan, PricingProductId } from "@/features/pricing/plans";

export type PricingModule = {
  id: string;
  name: string;
  description: string;
  yearly: number;
  setup: number;
  included?: boolean;
  popular?: boolean;
  tags: string[];
};

export const productModules: Record<PricingProductId, PricingModule[]> = {
  fincore: [
    {
      id: "core-banking",
      name: "Core Banking",
      description:
        "Teller operations, customer management, accounts, loans, ledger, compliance & reporting.",
      yearly: 1_000_000,
      setup: 1_000_000,
      included: true,
      tags: [
        "Teller Operations",
        "Customer Management",
        "Account Products",
        "Loans Management",
        "Compliance & Security",
      ],
    },
    {
      id: "cards-module",
      name: "Cards Module",
      description:
        "Full card lifecycle — issuance, blocking, monitoring, and switch integrations.",
      yearly: 2_000_000,
      setup: 2_000_000,
      popular: true,
      tags: ["Card Issuance", "Card Blocking", "Real-Time Monitoring", "Switch Integration"],
    },
    {
      id: "interbanking",
      name: "InterBanking",
      description: "Interbank settlements via NIBSS & Interswitch with real-time transfers.",
      yearly: 2_000_000,
      setup: 2_000_000,
      popular: true,
      tags: ["NIBSS & Interswitch", "Real-Time Transfers", "Transaction Monitoring", "Auto Reconciliation"],
    },
    {
      id: "virtual-banking",
      name: "Virtual Banking",
      description: "Virtual accounts & cards for digital transactions and fintech integrations.",
      yearly: 2_000_000,
      setup: 2_000_000,
      tags: ["Virtual Account Creation", "Virtual Card Issuance", "Wallet Management", "API Integration"],
    },
    {
      id: "pos-module",
      name: "POS Module",
      description: "Terminal management, switch integration, live dashboards & analytics.",
      yearly: 2_000_000,
      setup: 5_000_000,
      tags: ["POS Terminal Onboarding", "Switch Integration", "Live Dashboard", "Terminal Monitoring"],
    },
    {
      id: "ussd-banking",
      name: "USSD Banking",
      description: "Banking on any mobile phone without internet via GSM networks.",
      yearly: 2_000_000,
      setup: 2_000_000,
      tags: ["Custom ShortCode", "USSD Menu Design", "Transaction Routing", "Security & Sessions"],
    },
    {
      id: "internet-banking",
      name: "Internet Banking",
      description: "Secure web portal for corporate & retail customers.",
      yearly: 2_000_000,
      setup: 3_000_000,
      tags: ["Corporate Access", "Bulk Transactions", "Approval Workflows", "2FA"],
    },
    {
      id: "website-module",
      name: "Website Module",
      description: "Professionally designed website tailored to your institution.",
      yearly: 2_000_000,
      setup: 2_000_000,
      tags: ["Landing Page", "Product Showcase", "Blog Integration", "Custom Branding"],
    },
    {
      id: "international-banking",
      name: "International Banking",
      description: "Cross-border payments, FX reconciliation, multi-currency accounts.",
      yearly: 15_000_000,
      setup: 15_000_000,
      tags: [
        "Multi-Currency Accounts",
        "Cross-Border Settlements",
        "SWIFT Integration",
        "FX Reconciliation",
      ],
    },
    {
      id: "mobile-banking",
      name: "Mobile Banking",
      description: "Fully branded mobile app for Android & iOS connected to Fincore.",
      yearly: 5_000_000,
      setup: 5_000_000,
      popular: true,
      tags: ["Custom Branding", "Push Notifications", "Fund Transfers", "Card Management"],
    },
    {
      id: "agency-banking",
      name: "Agency Banking",
      description: "Extend reach through field agents and POS operators.",
      yearly: 5_000_000,
      setup: 5_000_000,
      tags: ["Agent Onboarding", "Field Agent App", "POS & Cash Collection", "Commission Tracking"],
    },
    {
      id: "data-migration",
      name: "Data Migration",
      description: "Migrate from legacy systems with data cleansing & validation.",
      yearly: 2_000_000,
      setup: 2_000_000,
      tags: ["Data Cleansing", "Format Alignment", "Migration Execution", "Post-Migration Testing"],
    },
  ],
  safi: [
    {
      id: "ai-platform",
      name: "AI Platform",
      description: "The core assistant for support, research, and everyday institutional work.",
      yearly: 29,
      setup: 0,
      included: true,
      tags: ["Conversations", "API Access", "Email Support", "Core Workflows"],
    },
    {
      id: "advanced-ai",
      name: "Advanced AI",
      description: "Deeper reasoning, richer workflows, and higher-volume automation.",
      yearly: 70,
      setup: 0,
      popular: true,
      tags: ["Priority Support", "Advanced Reasoning", "Higher Limits", "Team Workflows"],
    },
    {
      id: "analytics-dashboard",
      name: "Analytics Dashboard",
      description: "Track usage, outcomes, and conversation performance in one view.",
      yearly: 69,
      setup: 0,
      tags: ["Usage Insights", "Outcome Reports", "Live Metrics", "Export"],
    },
    {
      id: "custom-integrations",
      name: "Custom Integrations",
      description: "Connect Safi to the tools and systems your team already uses.",
      yearly: 79,
      setup: 0,
      tags: ["CRM", "Core Banking", "Webhooks", "SSO"],
    },
    {
      id: "multi-language",
      name: "Multi-Language",
      description: "Serve customers and staff across languages with real-time translation.",
      yearly: 49,
      setup: 0,
      tags: ["9+ Languages", "Live Translation", "Localized Replies", "Language Routing"],
    },
    {
      id: "enterprise-security",
      name: "Enterprise Security",
      description: "Controls, audit trails, and compliance-ready deployment.",
      yearly: 69,
      setup: 0,
      tags: ["Encryption", "Audit Logs", "Access Controls", "Compliance"],
    },
    {
      id: "dedicated-model",
      name: "Dedicated Model",
      description: "A model tuned to your institution’s data, tone, and policies.",
      yearly: 79,
      setup: 500,
      tags: ["Custom Training", "Private Model", "SLA", "Dedicated Support"],
    },
  ],
  settle: [
    {
      id: "transfer-platform",
      name: "Transfer Platform",
      description: "Send and receive transfers on Settle rails across African markets.",
      yearly: 99,
      setup: 0,
      included: true,
      tags: ["Local Rails", "Payouts", "Collections", "Reconciliation"],
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      description: "Bank-to-bank payouts and collections with settlement tracking.",
      yearly: 49,
      setup: 0,
      popular: true,
      tags: ["NIP", "Account Validation", "Bulk Payouts", "Status Webhooks"],
    },
    {
      id: "mobile-money",
      name: "Mobile Money",
      description: "Wallet rails across African mobile-money networks.",
      yearly: 39,
      setup: 0,
      popular: true,
      tags: ["Wallet Payouts", "Collections", "Network Coverage", "Receipts"],
    },
    {
      id: "cash-pickup",
      name: "Cash Pickup",
      description: "Cash-out points for recipients who need to collect in person.",
      yearly: 69,
      setup: 0,
      tags: ["Agent Locations", "Pickup Codes", "ID Checks", "Notifications"],
    },
    {
      id: "airtime-top-up",
      name: "Airtime Top-up",
      description: "Airtime and data top-ups at scale for customers and agents.",
      yearly: 49,
      setup: 0,
      tags: ["Airtime", "Data Bundles", "Bulk Orders", "Callback Status"],
    },
    {
      id: "business-api",
      name: "Business API",
      description: "Integrate payouts and collections directly into your product.",
      yearly: 79,
      setup: 200,
      tags: ["REST API", "Webhooks", "Sandbox", "API Keys"],
    },
  ],
};

export function getProductModules(productId: PricingProductId) {
  return productModules[productId];
}

export function includedModuleIds(productId: PricingProductId) {
  return productModules[productId].filter((module) => module.included).map((module) => module.id);
}

export function moduleIdsForPlan(productId: PricingProductId, plan: PricingPlan) {
  const included = includedModuleIds(productId);
  const matched = productModules[productId]
    .filter((module) => plan.features.includes(module.name))
    .map((module) => module.id);
  return Array.from(new Set([...included, ...matched]));
}

export function planMatchesSelection(
  productId: PricingProductId,
  plan: PricingPlan,
  selectedIds: string[],
) {
  const expected = moduleIdsForPlan(productId, plan);
  if (expected.length !== selectedIds.length) return false;
  return expected.every((id) => selectedIds.includes(id));
}

export function summarizeEstimate(
  productId: PricingProductId,
  selectedIds: string[],
): { modules: PricingModule[]; yearly: number; setup: number; currency: PricingCurrency } {
  const modules = productModules[productId].filter((module) => selectedIds.includes(module.id));
  return {
    modules,
    yearly: modules.reduce((total, module) => total + module.yearly, 0),
    setup: modules.reduce((total, module) => total + module.setup, 0),
    currency: productId === "fincore" ? "NGN" : "USD",
  };
}
