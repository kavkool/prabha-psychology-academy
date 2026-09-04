import { CONTACT_EMAIL, consultationMailto } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-cream"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-20 h-72 w-72 rounded-full border border-gold/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 top-36 h-48 w-48 rounded-full border border-teal-light/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-teal/10 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-12 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-deep/40 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Cambridge Examiner · 17+ years · 800+ lessons
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-[3.35rem]"
          >
            Master Psychology. Write Like an Examiner. Achieve Your Best Grade.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Cambridge Psychology Examiner and experienced international
            Psychology educator providing specialized IGCSE, A Level, AP and IB
            Psychology tutoring — focused on exam technique, evaluation, and
            examiner-style feedback.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={consultationMailto(CONTACT_EMAIL)}
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold text-navy-deep shadow-lg shadow-navy-deep/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Book a free 20-minute Exam Strategy Consultation
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold/50 hover:text-gold-soft"
            >
              Explore programs
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-navy-mid/50 p-6 shadow-lift backdrop-blur-sm sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
              Examiner-level coaching
            </p>
            <p className="mt-2 font-display text-2xl font-medium text-cream">
              Learn to write the answers examiners look for.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-cream/80">
              {[
                "Exam technique for IGCSE, A Level 9990, AP and IB",
                "Essay and evaluation writing that earns marks",
                "Research methods and Issues & Debates",
                "Examiner-style marking, mocks, and study plans",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
