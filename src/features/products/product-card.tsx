"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProductMark } from "@/features/products/icons";
import type { Product } from "@/features/products/types";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
  onSecondary?: () => void;
  onSelect?: () => void;
};

export function ProductCard({ product, featured = false, onSecondary, onSelect }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative flex flex-col justify-center"
    >
      <div className="mb-5 flex items-center gap-2 text-sm text-[#16181D] dark:text-white">
        {onSelect ? (
          <button
            type="button"
            onClick={onSelect}
            className="inline-flex items-center gap-2 rounded-full text-left"
          >
            <ProductMark id={product.id} />
            <span className="font-medium">{product.name}</span>
          </button>
        ) : (
          <span className="inline-flex items-center gap-2">
            <ProductMark id={product.id} />
            <span className="font-medium">{product.name}</span>
          </span>
        )}
      </div>
      <h3
        className={`font-semibold tracking-tight text-[#16181D] dark:text-white ${
          featured ? "text-3xl leading-tight sm:text-4xl" : "text-2xl leading-snug"
        }`}
      >
        {product.headline}
      </h3>
      <p className={`mt-4 leading-6 text-[#6B7280] dark:text-[#9CA3AF] ${featured ? "max-w-md text-sm sm:text-[15px]" : "text-sm"}`}>
        {product.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={product.primaryHref}
          className="inline-flex h-11 items-center rounded-full bg-[#111] px-5 text-sm font-medium text-white transition hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#f3f3f3]"
        >
          {product.primaryLabel}
        </Link>
        {onSecondary ? (
          <button
            type="button"
            onClick={onSecondary}
            className="inline-flex h-11 items-center rounded-full border border-black/10 bg-white/70 px-5 text-sm text-[#16181D] backdrop-blur-md transition hover:border-[#E2B857]/60 hover:shadow-[0_0_24px_rgba(212,175,55,0.18)] dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            {product.secondaryLabel}
          </button>
        ) : (
          <Link
            href={product.secondaryHref}
            className="inline-flex h-11 items-center rounded-full border border-black/10 bg-white/70 px-5 text-sm text-[#16181D] backdrop-blur-md transition hover:border-[#E2B857]/60 hover:shadow-[0_0_24px_rgba(212,175,55,0.18)] dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            {product.secondaryLabel}
          </Link>
        )}
      </div>
    </motion.article>
  );
}
