import { CONTACT_EMAIL, PREPLY_URL, consultationMailto } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-20 text-cream sm:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
          Next step
        </p>
        <h2
          id="cta-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          Book a free 20-minute Exam Strategy Consultation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/75">
          Tell Prabha your syllabus, current grade, and target. Leave with a
          clearer picture of what examiners reward — and whether coaching is
          the right next move.
        </p>
        <a
          href={consultationMailto(CONTACT_EMAIL)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
        >
          Email to book your consultation
        </a>
        <p className="mt-4 text-sm text-cream/60">{CONTACT_EMAIL}</p>
        <p className="mt-6 text-sm text-cream/50">
          Prefer a trial lesson first?{" "}
          <a
            href={PREPLY_URL}
            rel="noreferrer"
            target="_blank"
            className="text-gold-soft underline-offset-2 hover:underline"
          >
            Also available on Preply
          </a>
          .
        </p>
      </div>
    </section>
  );
}
