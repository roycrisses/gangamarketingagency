const SERVICES = [
  {
    title: "Meta Ads",
    tagline: "Paid social that pays for itself",
    description:
      "Facebook & Instagram campaigns built on real funnel data — creative testing, audience research, and daily optimization toward profitable ROAS.",
    tags: ["Lead Gen", "E-commerce", "Retargeting"],
    icon: "meta",
    span: "md:col-span-4",
  },
  {
    title: "SEO",
    tagline: "Own the search results",
    description:
      "Technical, on-page, and content SEO that compounds. Rank for terms your customers actually search.",
    tags: ["Technical", "Content", "Local"],
    icon: "seo",
    span: "md:col-span-2",
  },
  {
    title: "Social Media Handling",
    tagline: "A presence that builds trust",
    description:
      "Content calendars, community management, and creative that turns followers into buyers.",
    tags: ["Content", "Community"],
    icon: "social",
    span: "md:col-span-2",
  },
  {
    title: "Website Creation",
    tagline: "Fast, conversion-first web",
    description:
      "Lightning-fast marketing sites engineered for speed, SEO, and lead capture — not just aesthetics.",
    tags: ["Landing Pages", "CRO"],
    icon: "web",
    span: "md:col-span-2",
  },
  {
    title: "Video Ads",
    tagline: "Creative that stops the scroll",
    description:
      "Script-to-screen short-form ads built from proven hooks and offers for every stage of the funnel.",
    tags: ["UGC", "Shorts", "Reels"],
    icon: "video",
    span: "md:col-span-2",
  },
];

const ICONS = {
  meta: (
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5h-4.9l-3.4 3.9a.6.6 0 0 1-1-.4V16H6.5A2.5 2.5 0 0 1 4 13.5v-8Zm6 1.6v6.8a.8.8 0 0 0 1.4.5l3.5-4.2a.6.6 0 0 0-.5-1H12l2-2.1a.6.6 0 0 0-.4-1H11a1 1 0 0 0-1 1Z" />
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  social: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M7.5 4.5c.6-1 2.5-1 4.5-1s3.9 0 4.5 1M7.5 19.5c.6 1 2.5 1 4.5 1s3.9 0 4.5-1M19.5 7.5c1 .6 1 2.5 1 4.5s0 3.9-1 4.5M4.5 7.5c-1 .6-1 2.5-1 4.5s0 3.9 1 4.5" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 7h.01M10 7h.01" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10.5 4.5-2.5v8L16 13.5" />
    </>
  ),
};

export default function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Services
            </p>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Everything your growth needs, in one place.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            No bloated retainers. You pick the channels that move your
            numbers, we run them like owners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(216,255,63,0.08)] ${service.span}`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-accent/5 blur-3xl transition-opacity opacity-0 group-hover:opacity-100"
              />
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-accent"
                    >
                      {ICONS[service.icon]}
                    </svg>
                  </span>
                  <span className="font-mono text-xs text-muted">
                    [{service.tagline}]
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
