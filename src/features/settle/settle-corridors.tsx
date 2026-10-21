"use client";

import { useState } from "react";

interface CorridorRoute {
  id: string;
  sourceCity: string;
  sourceCountry: string;
  sourceCurrency: string;
  destCity: string;
  destCountry: string;
  destCurrency: string;
  pair: string;
  averageSpeed: string;
  rails: string[];
  popularFor: string;
}

const routes: CorridorRoute[] = [
  {
    id: "nbo-abv",
    sourceCity: "Nairobi",
    sourceCountry: "Kenya",
    sourceCurrency: "KES",
    destCity: "Abuja",
    destCountry: "Nigeria",
    destCurrency: "NGN",
    pair: "KES → NGN",
    averageSpeed: "< 45 seconds",
    rails: ["M-Pesa", "NIP Instant Bank Transfer"],
    popularFor: "E-commerce trade & contractor payouts",
  },
  {
    id: "los-acc",
    sourceCity: "Lagos",
    sourceCountry: "Nigeria",
    sourceCurrency: "NGN",
    destCity: "Accra",
    destCountry: "Ghana",
    destCurrency: "GHS",
    pair: "NGN → GHS",
    averageSpeed: "< 60 seconds",
    rails: ["MTN MoMo", "Vodafone Cash", "GhIPSS"],
    popularFor: "Cross-border retail & family remittances",
  },
  {
    id: "jnb-kgl",
    sourceCity: "Johannesburg",
    sourceCountry: "South Africa",
    sourceCurrency: "ZAR",
    destCity: "Kigali",
    destCountry: "Rwanda",
    destCurrency: "RWF",
    pair: "ZAR → RWF",
    averageSpeed: "< 2 minutes",
    rails: ["MoMo Rwanda", "Bank of Kigali Instant"],
    popularFor: "Tech contractor payroll & vendor settle",
  },
  {
    id: "kla-nbo",
    sourceCity: "Kampala",
    sourceCountry: "Uganda",
    sourceCurrency: "UGX",
    destCity: "Nairobi",
    destCountry: "Kenya",
    destCurrency: "KES",
    pair: "UGX → KES",
    averageSpeed: "< 30 seconds",
    rails: ["Airtel Money", "M-Pesa Kenya"],
    popularFor: "East African community cross-border trade",
  },
  {
    id: "dar-los",
    sourceCity: "Dar es Salaam",
    sourceCountry: "Tanzania",
    sourceCurrency: "TZS",
    destCity: "Lagos",
    destCountry: "Nigeria",
    destCurrency: "NGN",
    pair: "TZS → NGN",
    averageSpeed: "< 90 seconds",
    rails: ["Tigo Pesa", "Direct NIP Bank Transfer"],
    popularFor: "Agricultural import/export settlements",
  },
  {
    id: "cai-abv",
    sourceCity: "Cairo",
    sourceCountry: "Egypt",
    sourceCurrency: "EGP",
    destCity: "Abuja",
    destCountry: "Nigeria",
    destCurrency: "NGN",
    pair: "EGP → NGN",
    averageSpeed: "< 2 minutes",
    rails: ["InstaPay Egypt", "Central Bank Payout Rails"],
    popularFor: "North-to-West Africa commercial commerce",
  },
];

export function SettleCorridors() {
  const [activeRoute, setActiveRoute] = useState<CorridorRoute>(routes[0]);

  return (
    <section id="corridors" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/30 bg-black/10 px-4 py-1 text-xs font-semibold tracking-wider text-black uppercase dark:text-white">
            Cross-Border Corridors
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            From {activeRoute.sourceCity} to {activeRoute.destCity}, in one flow.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Send in your local currency, and your recipient receives in theirs. No fragmented wire hops, no surprise intermediary charges.
          </p>
        </div>

        {/* Animated Corridor Canvas Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#111111]">
          {/* Top route banner */}
          <div className="flex flex-wrap items-center justify-between border-b border-black/5 bg-neutral-50 px-6 py-4 dark:border-white/5 dark:bg-[#161616]">
            <div className="flex items-center gap-3">
              <span className="flex size-2.5 rounded-full bg-black animate-pulse" />
              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Active Corridor: {activeRoute.sourceCity} ({activeRoute.sourceCurrency}) → {activeRoute.destCity} ({activeRoute.destCurrency})
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-neutral-500 dark:text-neutral-400">
                Speed: <strong className="text-black dark:text-white">{activeRoute.averageSpeed}</strong>
              </span>
              <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">·</span>
              <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400">
                Screened by Safi AI
              </span>
            </div>
          </div>

          {/* SVG Animated Arc */}
          <div className="relative px-6 py-10 sm:px-12 sm:py-14">
            <svg
              viewBox="0 0 800 240"
              className="w-full h-auto"
              role="img"
              aria-label={`Money transfer corridor from ${activeRoute.sourceCity} to ${activeRoute.destCity}`}
            >
              <defs>
                <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#000000" />
                  <stop offset="60%" stopColor="#000000" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid dots in background */}
              <g fill="currentColor" className="text-neutral-200 dark:text-neutral-800">
                <circle cx="120" cy="50" r="2" />
                <circle cx="200" cy="90" r="2" />
                <circle cx="280" cy="40" r="2" />
                <circle cx="360" cy="80" r="2" />
                <circle cx="440" cy="60" r="2" />
                <circle cx="520" cy="110" r="2" />
                <circle cx="600" cy="70" r="2" />
                <circle cx="680" cy="120" r="2" />
              </g>

              {/* Base Arc Path */}
              <path
                d="M 140 150 Q 400 20 660 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="text-neutral-300 dark:text-neutral-700"
              />

              {/* Glowing Dynamic Flow Line */}
              <path
                d="M 140 150 Q 400 20 660 150"
                fill="none"
                stroke="url(#corridorGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="16 12"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="56"
                  to="0"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Traveling particles */}
              <circle r="7" fill="currentColor" filter="url(#glow)">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path="M 140 150 Q 400 20 660 150"
                />
              </circle>
              <circle r="5" fill="currentColor" opacity="0.8">
                <animateMotion
                  dur="2.4s"
                  begin="0.8s"
                  repeatCount="indefinite"
                  path="M 140 150 Q 400 20 660 150"
                />
              </circle>
              <circle r="4" fill="#ffffff" opacity="0.6">
                <animateMotion
                  dur="2.4s"
                  begin="1.6s"
                  repeatCount="indefinite"
                  path="M 140 150 Q 400 20 660 150"
                />
              </circle>

              {/* Origin Hub Circle (Source) */}
              <g>
                <circle cx="140" cy="150" r="16" fill="black" />
                <circle cx="140" cy="150" r="28" fill="none" stroke="currentColor" opacity="0.3">
                  <animate
                    attributeName="r"
                    values="16;36"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Destination Hub Circle */}
              <g>
                <circle cx="660" cy="150" r="16" fill="#ffffff" className="stroke-black dark:stroke-white" strokeWidth="3" />
                <circle cx="660" cy="150" r="28" fill="none" stroke="currentColor" opacity="0.3">
                  <animate
                    attributeName="r"
                    values="16;36"
                    dur="2s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0"
                    dur="2s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Source Labels */}
              <g className="fill-black dark:fill-white font-sans">
                <text x="140" y="195" textAnchor="middle" fontSize="16" fontWeight="700">
                  {activeRoute.sourceCity}
                </text>
                <text x="140" y="215" textAnchor="middle" fontSize="12" className="fill-neutral-500">
                  {activeRoute.sourceCountry} · {activeRoute.sourceCurrency} Sent
                </text>
              </g>

              {/* Destination Labels */}
              <g className="fill-black dark:fill-white font-sans">
                <text x="660" y="195" textAnchor="middle" fontSize="16" fontWeight="700">
                  {activeRoute.destCity}
                </text>
                <text x="660" y="215" textAnchor="middle" fontSize="12" className="fill-neutral-500">
                  {activeRoute.destCountry} · {activeRoute.destCurrency} Received
                </text>
              </g>

              {/* Midpoint badge */}
              <g>
                <rect
                  x="330"
                  y="20"
                  width="140"
                  height="26"
                  rx="13"
                  className="fill-white stroke-neutral-200 dark:fill-[#1e2025] dark:stroke-white/10"
                  strokeWidth="1"
                />
                <text
                  x="400"
                  y="37"
                  textAnchor="middle"
                  fontSize="10.5"
                  fontWeight="600"
                  className="fill-black dark:fill-white"
                >
                  ⚡ Direct Liquidity Rail
                </text>
              </g>
            </svg>

            <p className="mt-4 text-center text-xs text-neutral-400 dark:text-neutral-500">
              Interactive corridor visualization. Rates, local settlement rails, and regulations apply per market.
            </p>
          </div>

          {/* Active Corridor Details Bar */}
          <div className="grid border-t border-black/5 bg-neutral-50/70 p-6 sm:grid-cols-3 sm:gap-6 dark:border-white/5 dark:bg-[#161616]">
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Supported Rails</p>
              <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                {activeRoute.rails.join(" & ")}
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Average Settlement Time</p>
              <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                {activeRoute.averageSpeed} (Direct-to-account)
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Primary Commercial Use</p>
              <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                {activeRoute.popularFor}
              </p>
            </div>
          </div>
        </div>

        {/* Route Selector Grid */}
        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Click to switch corridor routes across Africa
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {routes.map((route) => {
              const isSelected = route.id === activeRoute.id;
              return (
                <button
                  key={route.id}
                  type="button"
                  onClick={() => setActiveRoute(route)}
                  className={`flex flex-col rounded-2xl border p-3.5 text-left transition-all ${
                    isSelected
                      ? "border-[#000000] bg-black/10 dark:bg-white/10 shadow-sm"
                      : "border-black/5 bg-white hover:border-black/20 dark:border-white/20 hover:bg-neutral-50 dark:border-white/10 dark:bg-[#111111] dark:hover:border-black/20 dark:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-black dark:text-white">
                      {route.sourceCity}
                    </span>
                    <span className="text-[10px] text-black">→</span>
                    <span className="text-xs font-bold text-black dark:text-white">
                      {route.destCity}
                    </span>
                  </div>
                  <span className="mt-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    {route.pair}
                  </span>
                  <span className="mt-2 text-[10px] font-medium text-black dark:text-white">
                    {route.averageSpeed}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
