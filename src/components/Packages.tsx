import { BOOKING_URL, PAID_BOOKING_URL } from "@/lib/site";

const PACKAGES = [
  {
    name: "AS Level course",
    blurb: "Structured pathway from first principles to exam-ready writing.",
    includes: [
      "Syllabus map & pacing",
      "Live coaching + weekly goals",
      "Essay / short-answer feedback",
      "Pre-exam mocks",
    ],
    featured: false,
  },
  {
    name: "A Level course",
    blurb: "Full pathway for Cambridge 9990 or AQA: content, evaluation, papers.",
    includes: [
      "Full-course syllabus map",
      "Weekly coaching + written feedback",
      "Paper technique across your set",
      "Mocks & exam-week plan",
    ],
    featured: true,
  },
  {
    name: "Fast-track",
    blurb: "Accelerated coverage when your exam date is close.",
    includes: [
      "Condensed syllabus plan",
      "High-frequency sessions",
      "Priority mark-earning skills",
      "Targeted mocks",
    ],
    featured: false,
  },
  {
    name: "Optional 1:1",
    blurb: "Single lessons or a weekly slot: flexible support.",
    includes: [
      "One-off or reserved weekly",
      "Examiner-style writing feedback",
      "Study plan between sessions",
      "Free 20-minute trial to start",
    ],
    featured: false,
  },
];

export function Packages() {
  return (
    <section
      id="packages"
      className="bg-cream-warm py-14 sm:py-16"
      aria-labelledby="packages-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Courses & coaching
          </p>
          <h2
            id="packages-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            Pathways: enquire for details
          </h2>
          <p className="mt-3 text-sm text-ink-muted">
            Pricing shared on enquiry.{" "}
            <span className="font-semibold text-navy">
              Start with a free trial, or book a paid lesson.
            </span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((item) => (
            <article
              key={item.name}
              className={`flex flex-col rounded-2xl p-5 sm:p-6 ${
                item.featured
                  ? "bg-navy text-cream shadow-lift"
                  : "border border-navy/10 bg-cream-paper text-navy shadow-card"
              }`}
            >
              <h3
                className={`font-display text-lg font-semibold ${
                  item.featured ? "text-cream" : "text-navy"
                }`}
              >
                {item.name}
              </h3>
              <p
                className={`mt-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                  item.featured ? "text-gold-soft" : "text-teal"
                }`}
              >
                Enquire
              </p>
              <p
                className={`mt-3 text-sm leading-snug ${
                  item.featured ? "text-cream/80" : "text-ink-muted"
                }`}
              >
                {item.blurb}
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span
                      aria-hidden
                      className={item.featured ? "text-gold" : "text-teal"}
                    >
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal"
          >
            Book a free trial
          </a>
          <a
            href={PAID_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-navy/30 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-cream"
          >
            Book a paid lesson
          </a>
        </div>
      </div>
    </section>
  );
}
