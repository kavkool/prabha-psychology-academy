import { BOOKING_URL, PAID_BOOKING_URL } from "@/lib/site";

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
            className="font-display text-3xl font-medium leading-[1.4] tracking-[0.02em] text-balance sm:text-4xl sm:leading-[1.35] lg:text-[2.6rem] lg:leading-[1.32] lg:tracking-[0.025em]"
          >
            Exam-ready Psychology coaching, grounded in real understanding.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg lg:mx-0 mx-auto">
            Cambridge IGCSE/GCSE, A Level 9990 &amp; AQA: examiner-style
            feedback from Prabhadevi Malarkannan.{" "}
            <span className="font-semibold text-gold-soft">
              Free 20-minute trial
            </span>{" "}
            or book a paid lesson when you are ready.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold text-navy-deep shadow-lg shadow-navy-deep/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Book a free trial
            </a>
            <a
              href={PAID_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cream/35 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold/50 hover:text-gold-soft"
            >
              Book a paid lesson
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream/80 transition-colors hover:border-cream/50 hover:text-cream"
            >
              View programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
