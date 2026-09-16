const SESSIONS = [
  { when: "October / November", where: "Worldwide" },
  { when: "March", where: "India (limited centres)" },
  { when: "May / June", where: "Worldwide" },
];

export function ExamSessions() {
  return (
    <section
      id="exam-sessions"
      className="bg-cream py-10 sm:py-12"
      aria-labelledby="exam-sessions-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-navy/10 bg-navy px-5 py-8 text-cream sm:px-8 sm:py-9">
          <div className="text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
              Cambridge exam sessions
            </p>
            <h2
              id="exam-sessions-heading"
              className="mt-2 font-display text-xl font-semibold sm:text-2xl"
            >
              Plan around your series
            </h2>
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {SESSIONS.map((session) => (
              <li
                key={session.when}
                className="rounded-full border border-white/15 bg-navy-mid/70 px-4 py-2 text-sm font-medium text-cream"
              >
                <span>{session.when}</span>
                <span className="mx-1.5 text-cream/40">·</span>
                <span className="text-gold-soft">{session.where}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
