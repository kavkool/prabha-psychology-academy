const STEPS = [
  {
    n: "01",
    title: "Free trial",
    body: "20 minutes to map syllabus, goals, and fit. No pressure.",
  },
  {
    n: "02",
    title: "Choose a pathway",
    body: "AS, A Level, fast-track, or 1:1, matched to your exam date.",
  },
  {
    n: "03",
    title: "Coach & refine",
    body: "Sessions plus examiner-style feedback until writing scores.",
  },
];

const LOGISTICS = [
  { label: "Platforms", value: "Meet · Zoom · Teams" },
  { label: "Schedule", value: "Single lesson or weekly slot" },
  { label: "Time zones", value: "Booked in your local time" },
  { label: "Payment", value: "Details shared after booking" },
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
            className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
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

        <p className="mt-5 text-center text-sm text-ink-muted">
          Bookings are coordinated via Google Calendar on the contact email.
        </p>
      </div>
    </section>
  );
}
