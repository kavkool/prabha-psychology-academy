const STEPS = [
  {
    n: "01",
    title: "Free consultation",
    body: "A 20-minute Exam Strategy conversation. We talk syllabus, papers, and what best grade means for you — no pressure, no package pitch first.",
  },
  {
    n: "02",
    title: "Assess the starting point",
    body: "We map your current syllabus, recent marks, target grade, and the specific skills (evaluation, methods, timing) that are costing marks.",
  },
  {
    n: "03",
    title: "Choose a package",
    body: "1:1 coaching, the 12-week A/A* programme, or a small-group bootcamp — matched to exam date, curriculum, and how much support you need.",
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
            From first conversation to exam-ready writing
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
