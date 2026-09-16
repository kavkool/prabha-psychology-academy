import { BOOKING_URL, PAID_BOOKING_URL } from "@/lib/site";

const EXAMS = [
  {
    code: "IGCSE · GCSE",
    title: "Cambridge IGCSE & GCSE",
    points: [
      "Core studies & application",
      "Research methods",
      "Structured exam answers",
    ],
  },
  {
    code: "9990",
    title: "Cambridge A Level (9990)",
    points: [
      "Essay structure & evaluation",
      "Issues & Debates · options",
      "Mocks with examiner-style feedback",
    ],
  },
  {
    code: "AQA",
    title: "AQA Psychology",
    points: [
      "AO-focused technique",
      "Essay & evaluation for AQA",
      "Timed practice + feedback",
    ],
  },
];

const WAYS_TO_LEARN = [
  {
    name: "AS Level course",
    price: "From $449 · 12 lessons",
    blurb: "Structured course from first principles to exam-ready writing.",
    includes: [
      "Syllabus map & pacing",
      "Live coaching + weekly goals",
      "Essay / short-answer feedback",
      "Pre-exam mocks",
    ],
    flagship: false,
    ctaLabel: "After free trial",
    ctaHref: "trial",
  },
  {
    name: "A Level course",
    price: "From $699 · 20 lessons",
    blurb: "Full course for Cambridge 9990 or AQA: content, evaluation, papers.",
    includes: [
      "Full-course syllabus map",
      "Weekly coaching + written feedback",
      "Paper technique across your set",
      "Mocks & exam-week plan",
    ],
    flagship: true,
    ctaLabel: "After free trial",
    ctaHref: "trial",
  },
  {
    name: "Fast-track",
    price: "From $499 · 10 intensive lessons",
    blurb: "Accelerated coverage when your exam date is close.",
    includes: [
      "Condensed syllabus plan",
      "High-frequency sessions",
      "Priority mark-earning skills",
      "Targeted mocks",
    ],
    flagship: false,
    ctaLabel: "After free trial",
    ctaHref: "trial",
  },
  {
    name: "Single lessons",
    price: "From $45 / lesson",
    blurb: "Single lessons or a weekly slot: flexible support.",
    includes: [
      "One-off or reserved weekly",
      "Examiner-style writing feedback",
      "Study plan between sessions",
      "Book anytime — no package needed",
    ],
    flagship: false,
    ctaLabel: "Book instantly",
    ctaHref: "paid",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="bg-cream py-14 sm:py-16"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Offerings
          </p>
          <h2
            id="programs-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            What we offer
          </h2>
          <p className="mt-3 text-sm text-ink-muted">
            Exam-board coaching and flexible ways to learn.{" "}
            <span className="font-semibold text-navy">
              Start with a free trial to plan a course, or book a paid single
              lesson from $45.
            </span>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Exams we teach
          </h3>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {EXAMS.map((exam) => (
              <article
                key={exam.code}
                className="relative flex flex-col rounded-2xl border border-navy/10 bg-cream-paper p-5 sm:p-6"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
                  {exam.code}
                </p>
                <h4 className="mt-1.5 font-display text-lg font-semibold text-navy">
                  {exam.title}
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-navy-mid">
                  {exam.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden className="text-gold">
                        ▹
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Ways to learn
          </h3>
          <p className="mt-2 text-center text-sm text-ink-muted">
            Start with a free trial. Course packages are set up after we talk.
          </p>
          <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
            USD pricing
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {WAYS_TO_LEARN.map((item) => (
              <article
                key={item.name}
                className={`relative flex flex-col rounded-2xl border bg-cream-paper p-5 text-navy shadow-card sm:p-6 ${
                  item.flagship
                    ? "border-gold/60 ring-1 ring-gold/40"
                    : "border-navy/10"
                }`}
              >
                {item.flagship ? (
                  <p className="absolute -top-2.5 left-4 rounded-full bg-gold px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-navy">
                    Flagship
                  </p>
                ) : null}
                <h4 className="font-display text-lg font-semibold text-navy">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                  {item.price}
                </p>
                <p className="mt-3 text-sm leading-snug text-ink-muted">
                  {item.blurb}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {item.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span aria-hidden className="text-teal">
                        ✓
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={
                    item.ctaHref === "paid" ? PAID_BOOKING_URL : BOOKING_URL
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    item.ctaHref === "paid"
                      ? "border border-navy/30 text-navy hover:border-navy hover:bg-cream"
                      : "bg-navy text-cream hover:bg-teal"
                  }`}
                >
                  {item.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          Free trial to plan a course · Paid lesson for single sessions.
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
