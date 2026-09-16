import { CONTACT_EMAIL, trialMailto } from "@/lib/site";

const LOGISTICS = [
  {
    title: "Online platforms",
    body: "Lessons run online via Google Meet, Zoom, or Microsoft Teams — whichever works best for you.",
  },
  {
    title: "Single lesson or weekly slot",
    body: "Book a one-off lesson when you need targeted help, or reserve a regular weekly slot for steady progress.",
  },
  {
    title: "Time zones",
    body: "Lessons can be scheduled across time zones. We will confirm a time that works in your local time.",
  },
  {
    title: "Payment",
    body: "Payment details are shared after booking.",
  },
];

export function LessonLogistics() {
  return (
    <section
      id="lessons"
      className="bg-cream-paper py-20 sm:py-24"
      aria-labelledby="lessons-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Class logistics
          </p>
          <h2
            id="lessons-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            How lessons work
          </h2>
          <p className="mt-4 text-ink-muted">
            Practical details first — so booking feels simple. A calendar booking link is coming soon — for now, email to book your free trial.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {LOGISTICS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-navy/10 bg-cream p-6 shadow-card sm:p-7"
            >
              <h3 className="font-display text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-gold-mist px-6 py-6 text-center sm:px-8">
          <p className="font-display text-xl font-semibold text-navy">
            Trial classes are free
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-navy-mid">
            Book a free 20-minute trial lesson by email. Need help choosing a
            course or time?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-teal underline-offset-2 hover:underline"
            >
              Message us if you need help
            </a>
            .
          </p>
          <a
            href={trialMailto(CONTACT_EMAIL)}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal"
          >
            Book a free 20-minute trial lesson
          </a>
        </div>
      </div>
    </section>
  );
}
