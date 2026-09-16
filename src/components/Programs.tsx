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
    flagship: true,
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
            Curricula
          </p>
          <h2
            id="programs-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            Coaching for the exam you sit
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.code}
              className={`relative flex flex-col rounded-2xl border bg-cream-paper p-5 sm:p-6 ${
                program.flagship
                  ? "border-gold/50 ring-1 ring-gold/30"
                  : "border-navy/10"
              }`}
            >
              {program.flagship ? (
                <span className="absolute -top-2.5 left-5 rounded-full bg-gold px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-navy-deep">
                  Flagship
                </span>
              ) : null}
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
      </div>
    </section>
  );
}
