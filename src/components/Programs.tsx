import { BOOKING_URL, PAID_BOOKING_URL } from "@/lib/site";

const PROGRAMS = [
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

const PATHWAYS = [
  {
    name: "AS Level course",
    blurb: "Structured pathway from first principles to exam-ready writing.",
    includes: [
      "Syllabus map & pacing",
      "Live coaching + weekly goals",
      "Essay / short-answer feedback",
      "Pre-exam mocks",
    ],
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
            Programs & pathways
          </p>
          <h2
            id="programs-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            What we offer
          </h2>
          <p className="mt-3 text-sm text-ink-muted">
            Exam-board coaching and course pathways. Pricing on enquiry.{" "}
            <span className="font-semibold text-navy">
              Start with a free trial, or book a paid lesson.
            </span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.code}
              className="relative flex flex-col rounded-2xl border border-navy/10 bg-cream-paper p-5 sm:p-6"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
                {program.code}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-navy">
                {program.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-navy-mid">
                {program.points.map((point) => (
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

        <div className="mt-12">
          <h3 className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Pathways — enquire for details
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PATHWAYS.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-2xl border border-navy/10 bg-cream-paper p-5 text-navy shadow-card sm:p-6"
              >
                <h4 className="font-display text-lg font-semibold text-navy">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                  Enquire
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
              </article>
            ))}
          </div>
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
