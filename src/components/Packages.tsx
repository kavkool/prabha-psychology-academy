import { CONTACT_EMAIL, trialMailto } from "@/lib/site";

const PACKAGES = [
  {
    name: "AS Level course",
    price: "Enquire",
    cadence: "Completion-oriented pathway",
    summary:
      "A structured AS Level course designed to take you from first principles through to exam-ready writing — syllabus coverage, practice, and feedback, not just last-minute drills.",
    includes: [
      "Full AS syllabus map and pacing",
      "Live coaching sessions with clear weekly goals",
      "Essay / short-answer feedback",
      "Mock practice before your exam series",
    ],
    cta: "Enquire about AS course",
    featured: false,
  },
  {
    name: "A Level course",
    price: "Enquire",
    cadence: "Full course pathway",
    summary:
      "The complete A Level pathway (including Cambridge 9990 and AQA options): content depth, evaluation, research methods, Issues & Debates, and timed paper practice until the writing is examiner-ready.",
    includes: [
      "Structured full-course syllabus map",
      "Weekly coaching + written feedback",
      "Paper technique across your exam set",
      "Mocks, progress check-ins, and exam-week plan",
    ],
    cta: "Enquire about A Level course",
    featured: true,
  },
  {
    name: "Fast-track courses",
    price: "Enquire",
    cadence: "Accelerated syllabus finish",
    summary:
      "For students who need to complete the syllabus at a fast pace — condensed coverage, focused practice, and clear priorities so you stay on track for your exam date.",
    includes: [
      "Accelerated syllabus plan around your date",
      "High-frequency sessions (as agreed)",
      "Priority topics and mark-earning skills",
      "Targeted mocks before the exam",
    ],
    cta: "Enquire about fast-track",
    featured: false,
  },
  {
    name: "1:1 flexible coaching",
    price: "Enquire",
    cadence: "Single lessons or ongoing",
    summary:
      "Private coaching that flexes with you — book a single lesson, keep a weekly slot, or mix both. Ideal for targeted technique work, catch-up, or ongoing support alongside school.",
    includes: [
      "Single lessons or a reserved weekly slot",
      "Examiner-informed feedback on your writing",
      "Study plan between sessions when needed",
      "Free 20-minute trial lesson to start",
    ],
    cta: "Book a free trial lesson",
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
            Courses & coaching
          </p>
          <h2
            id="packages-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Course pathways — and flexible 1:1 when you need it
          </h2>
          <p className="mt-4 text-ink-muted">
            Choose a completion-oriented course or flexible private coaching.
            Pricing is shared when you enquire.{" "}
            <span className="font-semibold text-navy">
              Trial classes are free.
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
                className={`font-display text-xl font-semibold sm:text-2xl ${
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
              <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
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
                href={trialMailto(CONTACT_EMAIL)}
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
