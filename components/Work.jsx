"use client";

import PerspectiveCarousel from "./PerspectiveCarousel";

const PORTFOLIO_ITEMS = [
  {
    src: "https://placehold.co/600x800/1e3a5f/ffffff?text=Meta+Ads",
    title: "Meta Ads Campaign",
    alt: "Social media advertising campaign for ecommerce brand",
  },
  {
    src: "https://placehold.co/600x800/0f3460/ffffff?text=SEO+Results",
    title: "SEO Dashboard",
    alt: "Search engine optimization analytics dashboard",
  },
  {
    src: "https://placehold.co/600x800/533483/ffffff?text=Brand+Identity",
    title: "Brand Identity",
    alt: "Complete brand identity redesign project",
  },
  {
    src: "https://placehold.co/600x800/e94560/ffffff?text=E-commerce",
    title: "E-commerce Site",
    alt: "E-commerce website redesign and development",
  },
  {
    src: "https://placehold.co/600x800/16697a/ffffff?text=Video+Production",
    title: "Video Production",
    alt: "Video advertising production for social media",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB]">
              Our Work
            </p>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
              Campaigns that speak for themselves.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#737373]">
            Swipe through a selection of projects we&apos;ve delivered for
            ambitious brands across Nepal and beyond.
          </p>
        </div>
      </div>

      <div className="h-[500px] w-full sm:h-[600px]">
        <PerspectiveCarousel
          items={PORTFOLIO_ITEMS}
          slideWidth={240}
          rotationStep={45}
          inactiveScale={0.82}
          loop
        />
      </div>
    </section>
  );
}