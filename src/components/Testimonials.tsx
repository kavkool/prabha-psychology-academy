const QUOTES = [
  {
    quote:
      "Prabhadevi is an excellent Cambridge psychology tutor who is very knowledgeable. As she is an examiner, she knows how to effectively teach and answer questions in past papers to make kids exam ready. Through her teaching I was able to achieve an A* in the subject.",
    attribution: "Nayan",
    context: "Preply student · Cambridge A Level · A*",
  },
  {
    quote:
      "I received an A in my CIE Psychology AS level due to Ms Prabha's help! She is an incredible teacher! Her lessons are very engaging and she is able to explain complex topics in simpler terms and give real-life examples. She is very knowledgeable about Psychology and the CIE syllabus specifically.",
    attribution: "hafsa",
    context: "Preply student · CIE AS Level · A",
  },
  {
    quote:
      "Ms. Prabha is an amazing A-level psychology tutor! Her classes are super energetic, and she makes learning really fun. I was able to achieve 89 on my AS Levels through her help!",
    attribution: "Anaika",
    context: "Preply student · AS Level · 89",
  },
  {
    quote:
      "Mrs. Prabha is very patient with me, and her lessons are fascinating. With her help, I achieved an 88 in the Oct/Nov 2025 AS-Level examination.",
    attribution: "Yutong",
    context: "Preply student · AS Level · 88",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
              Student voices
            </p>
            <h2
              id="testimonials-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
            >
              Real results from real students
            </h2>
          </div>
          <p className="rounded-full border border-gold/40 bg-gold-mist px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy-deep">
            Preply reviews
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTES.map((item) => (
            <figure
              key={item.attribution}
              className="flex flex-col rounded-2xl border border-navy/10 bg-cream-paper p-6 shadow-card"
            >
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                ★★★★★
              </p>
              <blockquote className="flex-1 font-display text-base leading-relaxed text-navy sm:text-[1.05rem]">
                “{item.quote}”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-navy">
                {item.attribution}
              </p>
              <p className="text-xs text-ink-muted">{item.context}</p>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          More student results include A*/A outcomes and strong AS scores across
          Cambridge and AQA Psychology — from past-paper readiness to exam-day
          confidence.
        </p>
      </div>
    </section>
  );
}
