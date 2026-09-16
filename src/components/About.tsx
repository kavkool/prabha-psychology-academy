import Image from "next/image";
import { EDUCATOR_NAME } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="bg-cream-paper py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-content items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy">
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
              className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
                Educator
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-cream">
                {EDUCATOR_NAME}
              </p>
              <p className="mt-2 text-sm text-cream/70">
                Cambridge Psychology Examiner · School Counselor &amp;
                Psychotherapist
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
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Examiner insight. Real-life psychology. Student-centered coaching.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              Prabhadevi Malarkannan — Prabha to her students — is a Cambridge
              A-Level Psychology Examiner, school counselor, and psychotherapist
              with more than 17 years of teaching experience. She taught
              Psychology and served as School Counselor at Nairobi International
              School (2016–2023), and brings that international classroom
              experience into focused coaching.
            </p>
            <p>
              Her academic foundation includes a Master&apos;s in Counselling
              and Psychotherapy and a Bachelor&apos;s degree in Education from
              Tamil Nadu Open University, plus a Master&apos;s in Rehabilitation
              Science from Bharathidasan University. That dual master&apos;s
              background — counselling and rehabilitation science — shapes how
              she meets different learners where they are.
            </p>
            <p>
              Exam success is the core of this academy — Cambridge IGCSE/GCSE,
              Cambridge A Level (9990), and AQA Psychology — but the work does
              not stop at the paper. Students learn to apply psychology to real
              life, understand themselves and others better, and leave with a
              changed perspective on how people think, feel, and behave.
            </p>
            <p>
              In lessons she keeps the work student-centered: simplifying
              complex topics with real-life examples, interactive discussion,
              and exam-focused strategies that build strengths and confidence.
              As an examiner, she coaches students to write the way papers are
              actually marked — tight AO coverage, evaluation that earns, and
              research methods that are precise.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Apply psychology to real life",
              "Understand yourself and others",
              "Change your perspective on life",
            ].map((item) => (
              <p
                key={item}
                className="rounded-xl border border-teal/20 bg-teal-mist px-4 py-3 text-sm font-semibold text-navy"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
