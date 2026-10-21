import type { ProductId } from "@/features/products/types";

export function ProductMark({ id }: { id: ProductId }) {
  if (id === "safi") return <DropletIcon />;
  if (id === "settle") return <LoopIcon />;
  return <NodesIcon />;
}

export function DropletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path
        d="M9 1.6c2.2 2.8 4.2 5.2 4.2 8.1a4.2 4.2 0 1 1-8.4 0c0-2.9 2-5.3 4.2-8.1Z"
        fill="#000000"
      />
      <path
        d="M9 8.2c1.2 1.1 2 2.1 2 3.3a2 2 0 1 1-4 0c0-1.2.8-2.2 2-3.3Z"
        fill="#000000"
      />
    </svg>
  );
}

export function LoopIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M6.2 4.2A5 5 0 0 1 13.6 7"
        stroke="#E2B857"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12.2 4.2h2.2V6.4" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M11.8 13.8A5 5 0 0 1 4.4 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M5.8 13.8H3.6V11.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function NodesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M5 9h8M9 5v8" stroke="#000000" strokeWidth="1.4" />
      <circle cx="5" cy="9" r="1.7" fill="#FFFFFF" />
      <circle cx="13" cy="9" r="1.7" fill="#FFFFFF" />
      <circle cx="9" cy="4.5" r="1.5" stroke="#000000" />
      <circle cx="9" cy="13.5" r="1.5" stroke="#000000" />
    </svg>
  );
}

const toneClass = {
  blue: "bg-[#f2f2f4] text-[#111] dark:bg-[#2a2a30] dark:text-white",
  gold: "bg-[#f2f2f4] text-[#111] dark:bg-[#2a2a30] dark:text-white",
  red: "bg-[#f2f2f4] text-[#111] dark:bg-[#2a2a30] dark:text-white",
} as const;

export function GlyphIcon({
  name,
  tone,
}: {
  name: "support" | "meeting" | "research" | "fraud" | "voice" | "learning" | "language" | "security";
  tone: keyof typeof toneClass;
}) {
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${toneClass[tone]}`}>
      <Glyph name={name} />
    </span>
  );
}

function Glyph({
  name,
}: {
  name: "support" | "meeting" | "research" | "fraud" | "voice" | "learning" | "language" | "security";
}) {
  if (name === "support" || name === "voice") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3 7.5a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2" y="7.5" width="2.4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="11.6" y="7.5" width="2.4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }
  if (name === "meeting" || name === "learning") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 5.2V8l2 1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "research" || name === "language") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3 12.5 6 7l2.2 3.2L11 6l2 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 2.2 13 4.2v4.1c0 3-2.1 4.8-5 5.5-2.9-.7-5-2.5-5-5.5V4.2L8 2.2Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}