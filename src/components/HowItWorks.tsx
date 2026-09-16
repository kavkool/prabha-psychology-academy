import { BOOKING_URL, PAID_BOOKING_URL } from "@/lib/site";

const STEPS = [
  {
    n: "01",
    title: "Free trial",
    body: "Book 20 minutes to map syllabus, goals, and fit. No pressure.",
  },
  {
    n: "02",
    title: "Choose how to learn",
    body: "AS, A Level, fast-track, or 1:1, matched to your exam date, or book a paid lesson when ready.",
  },
  {
    n: "03",
    title: "Coach & refine",
    body: "Sessions plus examiner-style feedback until writing scores.",
  },
];

const LOGISTICS = [
  { label: "Free trial", value: "20-minute intro · Free" },
  { label: "Platform", value: "Google Meet" },
  { label: "Schedule", value: "Single lesson or weekly slot" },
  { label: "Time zones", value: "Booked in your local time" },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-cream py-14 sm:py-16"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            Three steps to exam-ready writing
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-navy/10 bg-cream-paper p-5 sm:p-6"
            >
              <span className="font-display text-2xl font-semibold text-gold">
                {step.n}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LOGISTICS.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-navy/10 bg-cream-warm/60 px-4 py-3 text-center sm:text-left"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-teal">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-navy">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-ink-muted">
          Single lesson from $45 · course packages listed under Ways to learn
        </p>

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
            className="inline-flex items-center justify-center rounded-full border border-navy/30 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-cream-warm"
          >
            Book a paid lesson
          </a>
        </div>
      </div>
    </section>
  );
}
