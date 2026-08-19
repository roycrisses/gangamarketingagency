const STATS = [
  { value: "1%", label: "Client churn rate", caption: "Retention is our north star." },
  { value: "30+", label: "Campaigns managed", caption: "Across Nepal and beyond." },
  { value: "100%", label: "Client satisfaction", caption: "Measured on every engagement." },
  { value: "8+", label: "Years combined experience", caption: "In paid, SEO and social." },
];

export default function StatsGrid() {
  return (
    <section id="results" className="border-b border-[#171717]/5">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB]">
            Results
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            Numbers we&apos;re proud to put our name on.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#171717]/10 bg-[#171717]/10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1.5 bg-white p-6 sm:p-8"
            >
              <span className="text-4xl font-bold tracking-tight text-[#2563EB] sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-[#171717]">
                {stat.label}
              </span>
              <span className="text-xs leading-relaxed text-[#737373]">
                {stat.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}