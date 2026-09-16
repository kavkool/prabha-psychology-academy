export const SITE_NAME = "Prabha Psychology";
export const EDUCATOR_NAME = "Prabhadevi Malarkannan";
export const EDUCATOR_SHORT = "Prabha";
export const POSITIONING =
  "Cambridge Psychology Examiner & International Psychology Educator";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
  process.env.CONTACT_EMAIL ||
  "prabha.malarkannan@gmail.com";

/** Google Calendar appointment scheduling link for free trial lessons */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  process.env.BOOKING_URL ||
  "https://calendar.app.google/wDt5SsP83a1bCemX9";

/** Calendly link for paid lessons */
export const PAID_BOOKING_URL =
  process.env.NEXT_PUBLIC_PAID_BOOKING_URL ||
  process.env.PAID_BOOKING_URL ||
  "https://calendly.com/prabha-malarkannan/lesson";

export const INSTAGRAM_HANDLE = "@prabhapsychology";
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://instagram.com/prabhapsychology";

export const PREPLY_URL = "https://preply.com/en/tutor/5078532";
export const PREPLY_LESSONS = 833;
export const PREPLY_RATING = 4.67;
export const YEARS_EXPERIENCE = 17;

export const SEO_TITLE =
  "Prabha Psychology | Cambridge & AQA Psychology Coaching";
export const SEO_DESCRIPTION =
  "Cambridge Psychology Examiner Prabhadevi Malarkannan coaches Cambridge IGCSE/GCSE, Cambridge A Level (9990), and AQA Psychology. Free trial. Private candidates welcome.";

export const TRIAL_SUBJECT = "Free 20-minute trial lesson";

export const TRIAL_BODY = `Hi Prabha,

I would like to book a free 20-minute trial lesson.

Name:
Curriculum (Cambridge IGCSE/GCSE / Cambridge A Level 9990 / AQA):
Current grade / target grade (if any):
Private candidate? (yes / no / not sure):
Time zone:
Anything I should know:

Thank you.`;

/** @deprecated Primary booking uses BOOKING_URL; kept for email-support fallbacks */
export const CONSULTATION_SUBJECT = TRIAL_SUBJECT;
export const CONSULTATION_BODY = TRIAL_BODY;

/** Mailto for secondary email / message-us links only — not primary trial CTAs */
export function trialMailto(email: string = CONTACT_EMAIL): string {
  const params = new URLSearchParams({
    subject: TRIAL_SUBJECT,
    body: TRIAL_BODY,
  });
  return `mailto:${email}?${params.toString()}`;
}

export function consultationMailto(email: string = CONTACT_EMAIL): string {
  return trialMailto(email);
}

export const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
