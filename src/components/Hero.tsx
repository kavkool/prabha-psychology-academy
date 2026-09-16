import { CONTACT_EMAIL, trialMailto } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-cream"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-deep/40 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Cambridge Examiner · 17+ years
          </p>
          <h1
            id="hero-heading"
            className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Psychology coaching that earns marks, and clarifies life.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg lg:mx-0 mx-auto">
            Cambridge IGCSE/GCSE, A Level 9990 &amp; AQA: examiner-style
            feedback from Prabhadevi Malarkannan.{" "}
            <span className="font-semibold text-gold-soft">
              Free 20-minute trial.
            </span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start justify-center">
            <a
              href={trialMailto(CONTACT_EMAIL)}
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold text-navy-deep shadow-lg shadow-navy-deep/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Book a free trial lesson
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold/50 hover:text-gold-soft"
            >
              View programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
