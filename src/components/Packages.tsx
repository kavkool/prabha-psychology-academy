import { CONTACT_EMAIL, consultationMailto } from "@/lib/site";

const PACKAGES = [
  {
    name: "1:1 Exam Coaching",
    price: "From $600–$800",
    cadence: "8 × 60-minute sessions",
    summary:
      "A focused burst of examiner-informed coaching: essay feedback, targeted technique, and a mock with comments you can actually act on.",
    includes: [
      "Eight private 60-minute sessions",
      "Written essay / evaluation feedback",
      "One full mock with examiner-style marks",
      "Personal study plan between sessions",
    ],
    cta: "Discuss this package",
    featured: false,
  },
  {
    name: "A Level Grade A/A* Program",
    price: "$900–$1,500",
    cadence: "12 weeks, comprehensive",
    summary:
      "The flagship 9990 pathway: syllabus coverage, evaluation depth, Issues & Debates, research methods, and timed paper practice until the writing is examiner-ready.",
    includes: [
      "12-week structured syllabus map",
      "Weekly coaching + written feedback",
      "Paper 1–4 technique drills",
      "Mocks, grade tracking, and exam-week plan",
    ],
    cta: "Start with a consultation",
    featured: true,
  },
  {
    name: "Small-group Exam Bootcamp",
    price: "Enquire",
    cadence: "4–6 students",
    summary:
      "Intensive, small-group exam prep — high energy, shared marking insights, and enough individual attention to correct the mistakes that cost grades.",
    includes: [
      "Limited to 4–6 students",
      "Timed exam practice",
      "Peer + examiner-style feedback",
      "Dates set around your exam series",
    ],
    cta: "Enquire about a bootcamp",
    featured: false,
  },
];

export function Packages() {
  return (
    <section
      id="packages"
      className="bg-cream-warm py-20 sm:py-24"
      aria-labelledby="packages-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Packages
          </p>
          <h2
            id="packages-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Outcome-oriented coaching, not hourly drift
          </h2>
          <p className="mt-4 text-ink-muted">
            Each package is built around a grade target, a syllabus, and
            examiner-style feedback — so time in sessions turns into marks on
            the paper.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((item) => (
            <article
              key={item.name}
              className={`flex flex-col rounded-2xl p-6 sm:p-7 ${
                item.featured
                  ? "bg-navy text-cream shadow-lift"
                  : "border border-navy/10 bg-cream-paper text-navy shadow-card"
              }`}
            >
              <h3
                className={`font-display text-2xl font-semibold ${
                  item.featured ? "text-cream" : "text-navy"
                }`}
              >
                {item.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  item.featured ? "text-gold-soft" : "text-teal"
                }`}
              >
                {item.cadence}
              </p>
              <p className="mt-4 font-display text-3xl font-semibold">
                {item.price}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  item.featured ? "text-cream/80" : "text-ink-muted"
                }`}
              >
                {item.summary}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
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
              <a
                href={consultationMailto(CONTACT_EMAIL)}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  item.featured
                    ? "bg-gold text-navy-deep hover:bg-gold-soft"
                    : "bg-navy text-cream hover:bg-teal"
                }`}
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
