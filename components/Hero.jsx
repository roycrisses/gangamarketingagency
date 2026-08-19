import { getWhatsAppContactUrl } from "@/utils/whatsapp";

const BADGES = ["Meta Ads Specialists", "Based in Nepal", "Full-Funnel Growth"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(216,255,63,0.10), transparent 40%), radial-gradient(circle at 85% 15%, rgba(216,255,63,0.06), transparent 45%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
        <div className="flex flex-wrap gap-2">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted"
            >
              <span className="text-accent">[+]</span> {badge}
            </span>
          ))}
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          We grow brands with{" "}
          <span className="text-accent">paid media</span> that actually
          converts.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Ganga Marketing Agency builds full-funnel campaigns across Meta Ads,
          SEO, social, and web — engineered around one metric: revenue. No
          vanity reports, no wasted budget.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={getWhatsAppContactUrl(
              "Hello Ganga Marketing Agency! I'd like a free strategy call for my business."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-all hover:shadow-[0_0_40px_rgba(216,255,63,0.35)]"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            Explore Services
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-muted">
          +977 970-080-4395 · gangamarketingagency.com.np
        </p>
      </div>
    </section>
  );
}
