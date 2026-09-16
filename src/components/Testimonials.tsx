const QUOTES = [
  {
    quote:
      "As she is an examiner, she knows how to teach past papers and make kids exam ready. Through her teaching I achieved an A*.",
    attribution: "Nayan",
    context: "Cambridge A Level · A*",
  },
  {
    quote:
      "I received an A in CIE Psychology AS thanks to Ms Prabha. She explains complex topics simply with real-life examples.",
    attribution: "hafsa",
    context: "CIE AS Level · A",
  },
  {
    quote:
      "Classes are energetic and fun. I achieved 89 on my AS Levels through her help!",
    attribution: "Anaika",
    context: "AS Level · 89",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-cream py-14 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Student voices
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            Results that speak
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.attribution}
              className="flex flex-col rounded-2xl border border-navy/10 bg-cream-paper p-5 shadow-card sm:p-6"
            >
              <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.14em] text-gold-deep">
                ★★★★★
              </p>
              <blockquote className="flex-1 text-sm leading-relaxed text-navy">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-semibold text-navy">
                  {item.attribution}
                </p>
                <p className="text-xs text-ink-muted">{item.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
