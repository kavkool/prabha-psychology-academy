import { BOOKING_URL, CONTACT_EMAIL, PREPLY_URL } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-14 text-cream sm:py-16"
      aria-labelledby="cta-heading"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2
          id="cta-heading"
          className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
        >
          Book a free 20-minute trial lesson
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-cream/75">
          Pick a time on Google Calendar. Share your syllabus, private-candidate
          status, and time zone when you book.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
        >
          Book a free trial lesson
        </a>
        <p className="mt-4 text-sm text-cream/55">
          Prefer to message us?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-gold-soft underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mt-5 text-xs text-cream/45">
          Also on{" "}
          <a
            href={PREPLY_URL}
            rel="noreferrer"
            target="_blank"
            className="text-gold-soft underline-offset-2 hover:underline"
          >
            Preply
          </a>
        </p>
      </div>
    </section>
  );
}
