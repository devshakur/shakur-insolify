
import { Hero } from "@/components/hero";
import { PlatformPreview } from "@/features/products/platform-preview";
import { ProblemSolutions } from "@/features/products/problem-solutions";
import { ProductFigures } from "@/features/products/product-figures";
import { FeaturedProducts } from "@/features/products/featured-products";
import { FincoreCapabilities } from "@/features/products/fincore-capabilities";
import { ImpactStories } from "@/features/products/impact-stories";
import { InsideInsolify } from "@/features/products/inside-insolify";
import { PowerfulFeatures } from "@/features/products/powerful-features";
import { SystemDiagram } from "@/features/products/system-diagram";
import { SiteFooter } from "@/components/site-footer";
import { TrustedBrands } from "@/features/products/trusted-brands";



export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]">
      <main>
        <Hero />
        <ProductFigures />
        <TrustedBrands />
        <ProblemSolutions />
        <FeaturedProducts />
        <FincoreCapabilities />
        <PowerfulFeatures />
        <SystemDiagram />
        <PlatformPreview />
        <ImpactStories />
        <InsideInsolify />
      </main>
      <SiteFooter />
    </div>
  );
}
