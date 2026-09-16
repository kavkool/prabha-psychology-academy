const STEPS = [
  {
    n: "01",
    title: "Free trial lesson",
    body: "A free 20-minute trial lesson. We talk syllabus, goals, and what best grade means for you — no pressure, no package pitch first.",
  },
  {
    n: "02",
    title: "Assess the starting point",
    body: "We map your current syllabus, recent marks (if any), target grade, and the skills — evaluation, methods, timing — that will move the needle.",
  },
  {
    n: "03",
    title: "Choose a pathway",
    body: "AS Level course, full A Level course, fast-track, or flexible 1:1 — matched to exam date, curriculum, and how much support you need.",
  },
  {
    n: "04",
    title: "Coach, mark, refine",
    body: "Sessions plus examiner-style feedback on essays and mocks. You leave each week knowing exactly what to practise — and why it scores.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            From free trial to exam-ready writing
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl border border-navy/10 bg-cream-paper p-6"
            >
              <span className="font-display text-3xl font-semibold text-gold">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
