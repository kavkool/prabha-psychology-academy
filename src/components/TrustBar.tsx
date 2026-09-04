const TRUST_ITEMS = [
  "Cambridge Examiner",
  "17+ years experience",
  "800+ lessons",
  "4.7★ Preply",
  "IGCSE · GCSE",
  "A Level · AP · IB",
];

export function TrustBar() {
  return (
    <section
      aria-label="Credentials and curricula"
      className="border-y border-navy/10 bg-cream-paper"
    >
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 sm:px-6 lg:justify-between lg:px-8">
        {TRUST_ITEMS.map((item, index) => (
          <div key={item} className="flex items-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-soft sm:text-[0.8rem]">
              {item}
            </p>
            {index < TRUST_ITEMS.length - 1 ? (
              <span
                aria-hidden
                className="hidden h-1 w-1 rounded-full bg-gold lg:block"
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
