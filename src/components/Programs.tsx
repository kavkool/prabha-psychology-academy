const PROGRAMS = [
  {
    code: "IGCSE · GCSE",
    title: "Cambridge IGCSE & GCSE Psychology",
    body: "Build a precise command of core studies, research methods, and structured exam answers across Cambridge IGCSE and GCSE Psychology. Students learn how marks are awarded — not just what the syllabus lists.",
    points: [
      "Core studies and application",
      "Research methods fluency",
      "Structured short- and long-answer technique",
    ],
  },
  {
    code: "9990",
    title: "Cambridge A Level Psychology (9990)",
    body: "Flagship programme. Examiner-informed coaching for Papers 1–4: approaches, core studies, research methods, and Issues, Debates and Approaches — including Clinical and other core options where the syllabus requires them — with evaluation that actually scores.",
    points: [
      "Essay structure and evaluation",
      "Issues and Debates · Clinical / core options",
      "Mock papers with examiner-style comments",
    ],
    flagship: true,
  },
  {
    code: "AQA",
    title: "AQA Psychology",
    body: "Exam technique coaching aligned to the AQA Psychology specification — clear AO coverage, evaluation that scores, and paper practice that mirrors how AQA rewards answers. Strong fit for school students and private candidates alike.",
    points: [
      "Specification-aligned content and AO focus",
      "Essay and evaluation technique for AQA papers",
      "Timed practice with actionable feedback",
    ],
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Curricula
          </p>
          <h2
            id="programs-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Coaching matched to the exam you sit
          </h2>
          <p className="mt-4 text-ink-muted">
            Cambridge examiner mindset for Cambridge papers; AQA-aligned
            technique for AQA — so students write answers that match how each
            paper is actually marked.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.code}
              className={`relative flex flex-col rounded-2xl border bg-cream-paper p-6 shadow-card sm:p-7 ${
                program.flagship
                  ? "border-gold/50 ring-1 ring-gold/30"
                  : "border-navy/10"
              }`}
            >
              {program.flagship ? (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy-deep">
                  Flagship
                </span>
              ) : null}
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-teal">
                {program.code}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {program.body}
              </p>
              <ul className="mt-5 space-y-2 border-t border-navy/10 pt-5 text-sm text-navy-mid">
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
      </div>
    </section>
  );
}
