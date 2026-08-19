const STATS = [
  { value: "1%", label: "Client churn rate", caption: "Retention is our north star." },
  { value: "30+", label: "Campaigns managed", caption: "Across Nepal and beyond." },
  { value: "100%", label: "Client satisfaction", caption: "Measured on every engagement." },
  { value: "8+", label: "Years combined experience", caption: "In paid, SEO and social." },
];

export default function StatsGrid() {
  return (
    <section id="results" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1.5 bg-background p-6 sm:p-8"
            >
              <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-foreground">
                {stat.label}
              </span>
              <span className="text-xs leading-relaxed text-muted">
                {stat.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
