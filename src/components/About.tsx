import Image from "next/image";
import { EDUCATOR_NAME } from "@/lib/site";

const CREDENTIALS = [
  "Cambridge A-Level Psychology Examiner",
  "17+ years teaching experience",
  "School Counselor & Psychotherapist",
  "M.A. Counselling & Psychotherapy",
  "M.Sc. Rehabilitation Science",
  "B.Ed. · Tamil Nadu Open University",
];

export function About() {
  return (
    <section
      id="about"
      className="bg-cream-paper py-14 sm:py-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] max-h-[28rem] overflow-hidden rounded-3xl bg-navy lg:max-h-none">
            <Image
              src="/prabha.jpg"
              alt={EDUCATOR_NAME}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="font-display text-2xl font-semibold text-cream">
                {EDUCATOR_NAME}
              </p>
              <p className="mt-1 text-sm text-cream/70">
                Cambridge Psychology Examiner
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            About Prabha
          </p>
          <h2
            id="about-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            Examiner insight. Student-centered coaching.
          </h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            <p>
              Prabhadevi Malarkannan is a Cambridge A-Level Psychology Examiner,
              school counselor, and psychotherapist with 17+ years of teaching,
              including Psychology and counseling at Nairobi International School
              (2016-2023).
            </p>
            <p>
              She coaches Cambridge IGCSE/GCSE, A Level 9990, and AQA with
              examiner-style feedback, and one clear aim beyond the paper:
              psychology you can apply to understand yourself and others.
            </p>
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg border border-navy/10 bg-cream px-3 py-2 text-sm text-navy-mid"
              >
                <span aria-hidden className="text-gold">
                  ▹
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
