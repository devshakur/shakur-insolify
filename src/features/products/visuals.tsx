export function NetworkVisual() {
  return (
    <svg viewBox="0 0 280 180" className="h-full w-full" aria-hidden>
      <path
        d="M30 90c20-30 50-48 84-48 28 0 40 14 62 14 24 0 40-18 68-10"
        fill="none"
        stroke="#E2B857"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      <path
        d="M48 120c30-8 48-28 78-22 22 4 34 22 62 18 24-4 40 8 70 2"
        fill="none"
        stroke="#D4AF37"
        strokeOpacity="0.7"
        strokeWidth="1.4"
      />
      {[
        [48, 118],
        [126, 98],
        [188, 116],
        [236, 108],
        [90, 70],
        [160, 56],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="8" fill="#E2B857" fillOpacity="0.16" />
          <circle cx={x} cy={y} r="2.4" fill="#F6E3A4" />
        </g>
      ))}
    </svg>
  );
}

export function CurrencyVisual() {
  return (
    <div className="relative h-24 w-full" aria-hidden>
      <span className="absolute top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#E2B857]/40 bg-[#1c1a14] text-sm font-semibold text-[#E2B857] shadow-[0_0_24px_rgba(212,175,55,0.25)]">
        $
      </span>
      <span className="absolute top-2 left-16 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#F3F0E7] text-sm font-semibold text-[#16181D] dark:border-white/15 dark:bg-[#22252c] dark:text-white">
        €
      </span>
      <span className="absolute top-8 left-24 flex h-12 w-12 items-center justify-center rounded-full border border-[#E2B857]/30 bg-[#14160c] text-sm font-semibold text-[#F6E3A4]">
        ₦
      </span>
    </div>
  );
}

export function ModulesVisual() {
  return (
    <div className="grid grid-cols-3 gap-2" aria-hidden>
      {["Accounts", "Lending", "Payments", "Wallets", "Reports", "API"].map((label) => (
        <span
          key={label}
          className="rounded-lg border border-[#E6E2D6] bg-[#F8F6F1] px-2 py-2 text-center text-[10px] tracking-wide text-[#B8860B] uppercase dark:border-[#2A2D35] dark:bg-[#12141a] dark:text-[#E2B857]"
        >
          {label}
        </span>
      ))}
    </div>
  );
}
