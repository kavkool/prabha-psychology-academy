const SESSIONS = [
  {
    title: "October / November",
    detail: "Main autumn exam series for Cambridge Psychology.",
  },
  {
    title: "March — India",
    detail: "Cambridge session available in India for eligible candidates.",
  },
  {
    title: "May / June",
    detail: "Main summer exam series for Cambridge Psychology.",
  },
];

export function ExamSessions() {
  return (
    <section
      id="exam-sessions"
      className="bg-cream py-16 sm:py-20"
      aria-labelledby="exam-sessions-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-navy/10 bg-navy px-6 py-10 text-cream sm:px-10 sm:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
              Cambridge exam sessions
            </p>
            <h2
              id="exam-sessions-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Plan coaching around your series
            </h2>
            <p className="mt-4 text-cream/75">
              We map your course and mocks to the Cambridge session you are
              entering. Private candidates: we help you stay aligned to entry
              deadlines and paper preparation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {SESSIONS.map((session, index) => (
              <article
                key={session.title}
                className="rounded-2xl border border-white/10 bg-navy-mid/60 p-5 sm:p-6"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
                  Session {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-cream">
                  {session.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {session.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
