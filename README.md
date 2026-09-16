# Prabha Psychology Academy

Marketing landing page for **Prabha Psychology Academy** — Cambridge and AQA Psychology coaching with Prabhadevi Malarkannan (Cambridge Psychology Examiner and international Psychology educator).

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
cd prabha-psychology-academy
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Customize

| Item | Where |
| --- | --- |
| Contact email | `.env.local` → `NEXT_PUBLIC_CONTACT_EMAIL` (falls back to `CONTACT_EMAIL`, then `hello@prabhapsychology.com`) |
| Instagram | `.env.local` → `NEXT_PUBLIC_INSTAGRAM_URL` and `INSTAGRAM_HANDLE` in `src/lib/site.ts` |
| Free trial mailto copy | `src/lib/site.ts` (`TRIAL_SUBJECT`, `TRIAL_BODY`) |
| Testimonials | `src/components/Testimonials.tsx` |
| Courses / packages | `src/components/Packages.tsx` |
| About copy | `src/components/About.tsx` |
| Lesson logistics | `src/components/LessonLogistics.tsx` |
| Cambridge exam sessions | `src/components/ExamSessions.tsx` |

`hello@prabhapsychology.com` and Instagram `@prabhapsychology` are placeholders until real inboxes and profiles are live.

## Lead magnet wiring

The "10 Mistakes Students Make in Cambridge Psychology 9990 Exams" form is **client-side only**.

Current behaviour:

1. Visitor enters an email and submits.
2. The browser opens a prefilled `mailto:` to the contact address (or shows a success note if that is blocked).
3. **No emails are stored** and no newsletter list is created.

To wire this for production, replace the submit handler in `src/components/LeadMagnet.tsx` with one of:

- Formspree or Getform (form POST)
- A Next.js Route Handler that sends via Resend or Postmark
- A marketing tool (Mailchimp, ConvertKit, Buttondown) subscribe API

Keep the success message and never store addresses in git.

## Not built yet (intentional placeholders)

- Real calendar / scheduling UI
- Real payment checkout
- Live chat widget
- Dynamic timezone converter

Booking is mailto-based; payment details are shared when students book.

## Deploy (Vercel)

1. Push this folder to GitHub.
2. Import the repo in Vercel (https://vercel.com).
3. Set `NEXT_PUBLIC_CONTACT_EMAIL` (and optional `NEXT_PUBLIC_INSTAGRAM_URL`) in project environment variables.
4. Deploy. Framework preset: Next.js.

## Brand notes

- No fabricated accreditation logos, awards, or student-count claims.
- Curricula featured: Cambridge IGCSE/GCSE Psychology, Cambridge A Level Psychology (9990), AQA Psychology.
- Exam-oriented core plus beyond-the-exam value (apply psychology to real life; understand yourself and others; change perspective).
- Private candidates welcome; no prior Psychology knowledge required for A Level.
- SPED / counselling background is credibility only — not a separate counselling practice offering on this site.
