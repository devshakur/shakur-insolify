

"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowRight, Layers, Shield, Globe, Cloud } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "fincore",
    icon: Layers,
    title: "Fincore Engine",
    description:
      "Modular core banking platform with 12 integrated engines for accounts, lending, and multi-channel delivery.",
    href: "/fincore",
  },
  {
    id: "safi",
    icon: Shield,
    title: "Safi AI",
    description:
      "Autonomous AI that catches fraud before settlement and powers intelligent customer support across channels.",
    href: "/safi",
  },
  {
    id: "settle",
    icon: Globe,
    title: "Settle Africa",
    description:
      "Instant Pan-African settlement rails with zero friction across 54 African markets and all local channels.",
    href: "/settle",
  },
  {id: "skynet",
    icon: Cloud,
    title: "Skynet",
    description:
      "Cloud compute, GPU infrastructure, and provisioning for modern Digital services.",
    href: "/skynet",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;
type Product = (typeof products)[number];

export function InsolifyProductShowcase() {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? 0 : 28;
  const [deck, setDeck] = useState<Product[]>(() => [...products]);
  const [isCycling, setIsCycling] = useState(false);

  function rotateDeck() {
    setDeck((current) => {
      const [top, ...rest] = current;
      return top ? [...rest, top] : current;
    });
  }

  function cycleCard() {
    if (isCycling) return;
    if (reduceMotion) {
      rotateDeck();
      return;
    }
    setIsCycling(true);
  }

  function completeCycle() {
    rotateDeck();
    setIsCycling(false);
  }

  return (
    <section className="bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: rise }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-black/60 uppercase dark:text-white/60">
              Platform Overview
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for scale,
              <br />
              engineered for Africa.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-black/70 dark:text-white/70">
            Explore our unified core banking, intelligent fraud prevention, and
            Pan-African settlement ecosystem.
          </p>
        </motion.div>

        {/* Mobile stacked card deck */}
        <div className="md:hidden">
          <div className="relative mx-auto h-84 w-full max-w-sm px-2">
            {deck.map((product, index) => (
              <SwipeableProductCard
                key={product.id}
                product={product}
                index={index}
                total={deck.length}
                isTop={index === 0}
                isCycling={isCycling}
                onSwipe={cycleCard}
                onCycleComplete={completeCycle}
              />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {products.map((product) => (
              <button
                key={product.id}
                type="button"
                disabled={isCycling}
                aria-label={`Show ${product.title}`}
                onClick={() => {
                  const target = deck.findIndex((item) => item.id === product.id);
                  if (target > 0) {
                    setDeck((current) => [
                      ...current.slice(target),
                      ...current.slice(0, target),
                    ]);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  deck[0]?.id === product.id
                    ? "w-6 bg-black dark:bg-white"
                    : "w-1.5 bg-black/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-[10px] text-black/40 dark:text-white/40">
            Swipe or tap the card to explore the next product
          </p>
        </div>

        {/* Desktop cards grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-4">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: rise }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease,
                }}
                className="group flex flex-col rounded-3xl border border-black/10 bg-black/4 p-8 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-black/30 hover:bg-black/6 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/4 dark:hover:border-white/30 dark:hover:bg-white/8 dark:hover:shadow-[0_22px_60px_-30px_rgba(255,255,255,0.18)]"
              >
                {/* Icon Badge */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white shadow-md transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 dark:bg-white dark:text-black">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mb-6 grow text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {product.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black underline decoration-black/0 underline-offset-4 transition-all duration-300 hover:decoration-black dark:text-white dark:decoration-white/0 dark:hover:decoration-white"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SwipeableProductCard({
  product,
  index,
  total,
  isTop,
  isCycling,
  onSwipe,
  onCycleComplete,
}: {
  product: Product;
  index: number;
  total: number;
  isTop: boolean;
  isCycling: boolean;
  onSwipe: () => void;
  onCycleComplete: () => void;
}) {
  const dragX = useMotionValue(0);
  const dragRotation = useTransform(dragX, [-200, 200], [-15, 15]);
  const visualIndex = isCycling
    ? isTop
      ? total - 1
      : index - 1
    : index;
  const Icon = product.icon;

  return (
    <motion.article
      style={{
        zIndex: isCycling && isTop ? 0 : total - visualIndex,
      }}
      initial={{ scale: 0.9, y: 28, opacity: 0 }}
      animate={{
        x: isCycling && isTop ? 42 : 0,
        y: visualIndex * 12,
        scale: 1 - visualIndex * 0.045,
        opacity: 1 - visualIndex * 0.18,
        rotate: isCycling && isTop ? 4 : 0,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      onAnimationComplete={() => {
        if (isTop && isCycling) onCycleComplete();
      }}
      className="absolute inset-x-2 top-0"
    >
      <motion.div
        style={{
          x: isTop ? dragX : 0,
          rotate: isTop ? dragRotation : 0,
        }}
        drag={isTop && !isCycling ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.6}
        onDragEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 80) onSwipe();
        }}
        onClick={() => {
          if (isTop && !isCycling) onSwipe();
        }}
        className={`cursor-grab rounded-3xl border p-6 shadow-xl active:cursor-grabbing ${
          isTop
            ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
            : "border-black/10 bg-[#f4f4f6] text-black dark:border-white/10 dark:bg-[#171717] dark:text-white"
        }`}
      >
        <div
          className={`mb-5 inline-flex size-14 items-center justify-center rounded-2xl ${
            isTop
              ? "bg-white text-black dark:bg-black dark:text-white"
              : "bg-black text-white dark:bg-white dark:text-black"
          }`}
        >
          <Icon className="size-7" strokeWidth={1.5} />
        </div>

        <p
          className={`mb-2 text-[10px] font-semibold tracking-[0.18em] uppercase ${
            isTop
              ? "text-white/55 dark:text-black/55"
              : "text-black/45 dark:text-white/45"
          }`}
        >
          0{index + 1} / 0{total}
        </p>
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            isTop
              ? "text-white/70 dark:text-black/70"
              : "text-black/60 dark:text-white/60"
          }`}
        >
          {product.description}
        </p>

        <Link
          href={product.href}
          onClick={(event) => event.stopPropagation()}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
        >
          Learn More
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </motion.article>
  );
}
