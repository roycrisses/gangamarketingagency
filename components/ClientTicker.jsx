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
      className="border-y border-[#171717]/5 bg-[#F4F4F5]/50 py-8"
    >
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
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
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-[#171717]/30"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}