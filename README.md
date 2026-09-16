# Prabha Psychology

Marketing landing page for **Prabha Psychology**: Cambridge and AQA Psychology coaching with Prabhadevi Malarkannan (Cambridge Psychology Examiner and international Psychology educator).

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
| Contact email | `.env.local` → `NEXT_PUBLIC_CONTACT_EMAIL` (falls back to `CONTACT_EMAIL`, then `prabha.malarkannan@gmail.com`) |
| Booking URL | `.env.local` → `NEXT_PUBLIC_BOOKING_URL` (falls back to `BOOKING_URL`, then Google Calendar appointment link) |
| Instagram | `.env.local` → `NEXT_PUBLIC_INSTAGRAM_URL` and `INSTAGRAM_HANDLE` in `src/lib/site.ts` |
| Free trial mailto copy | `src/lib/site.ts` (`TRIAL_SUBJECT`, `TRIAL_BODY`) — used for secondary email-support links only |
| Testimonials | `src/components/Testimonials.tsx` |
| Courses / packages | `src/components/Packages.tsx` |
| About copy | `src/components/About.tsx` |
| How it works + logistics | `src/components/HowItWorks.tsx` |
| Cambridge exam sessions | `src/components/ExamSessions.tsx` |

### Booking

Primary CTAs (Header, Hero, Packages, Final CTA, How it works) open the **Google Calendar appointment** link in a new tab:

`https://calendar.app.google/wDt5SsP83a1bCemX9`

Override with `NEXT_PUBLIC_BOOKING_URL` / `BOOKING_URL` in `.env.local` or Vercel env vars.

Contact email `prabha.malarkannan@gmail.com` remains for secondary “message us” / support mailto links (Footer, Final CTA). Instagram `@prabhapsychology` is a placeholder until the real profile is live.

## Not built yet (intentional placeholders)

- Real payment checkout
- Live chat widget
- Dynamic timezone converter

Trial booking is via Google Calendar appointments; payment details are shared when students book.

## Deploy (Vercel)

1. Push this folder to GitHub.
2. Import the repo in Vercel (https://vercel.com).
3. Set `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_BOOKING_URL` (optional if using the default Calendar link), and optional `NEXT_PUBLIC_INSTAGRAM_URL` in project environment variables.
4. Deploy. Framework preset: Next.js.

## Brand notes

- No fabricated accreditation logos, awards, or student-count claims.
- Curricula featured: Cambridge IGCSE/GCSE Psychology, Cambridge A Level Psychology (9990), AQA Psychology.
- Exam-oriented core plus beyond-the-exam value (apply psychology to real life) in a single line of positioning.
- Private candidates welcome; no prior Psychology knowledge required for A Level.
- SPED / counselling background is credibility only, not a separate counselling practice offering on this site.
