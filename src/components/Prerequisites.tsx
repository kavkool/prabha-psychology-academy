import { CONTACT_EMAIL, trialMailto } from "@/lib/site";

export function Prerequisites() {
  return (
    <section
      id="get-started"
      className="bg-teal-mist py-16 sm:py-20"
      aria-labelledby="prereq-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
              Getting started
            </p>
            <h2
              id="prereq-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
            >
              No prior Psychology needed. Private candidates welcome.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
              You do not need prior knowledge or a prior qualification to study
              A Level Psychology with us. We support students taking A Level
              Psychology as{" "}
              <strong className="font-semibold text-navy">
                private candidates
              </strong>{" "}
              — not enrolled in a school — with syllabus mapping, exam
              technique, and practical guidance around Cambridge exam sessions.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-navy/10 bg-cream-paper p-6 shadow-card">
              <p className="font-display text-xl font-semibold text-navy">
                Start with a free trial
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Trial classes are free. Tell us your syllabus, whether you are a
                private candidate, and your time zone — we will take it from
                there.
              </p>
              <a
                href={trialMailto(CONTACT_EMAIL)}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal"
              >
                Book a free 20-minute trial lesson
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
