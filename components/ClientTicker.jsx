const CLIENTS = [
  "Himalayan Trails",
  "Kathmandu Eats",
  "Everest Tech",
  "Sagarmatha Realty",
  "Yeti Ventures",
  "Pokhara Prints",
  "Bhaktapur Crafts",
  "Nepal Beverages",
  "Annapurna Hotels",
  "Terai Fresh",
];

export default function ClientTicker() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Brands we work with"
      className="border-b border-line bg-surface/40 py-8"
    >
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Trusted by ambitious brands
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="ticker-track flex w-max items-center gap-16 pr-16">
          {doubled.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-white/35"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
