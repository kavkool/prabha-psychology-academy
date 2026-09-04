export const SITE_NAME = "Prabha Psychology Academy";
export const EDUCATOR_NAME = "Prabhadevi Malarkannan";
export const EDUCATOR_SHORT = "Prabha";
export const POSITIONING =
  "Cambridge Psychology Examiner & International Psychology Educator";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
  process.env.CONTACT_EMAIL ||
  "hello@prabhapsychology.com";

export const INSTAGRAM_HANDLE = "@prabhapsychology";
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://instagram.com/prabhapsychology";

export const PREPLY_URL = "https://preply.com/en/tutor/5078532";
export const PREPLY_LESSONS = 833;
export const PREPLY_RATING = 4.67;
export const YEARS_EXPERIENCE = 17;

export const SEO_TITLE =
  "Prabha Psychology Academy | Cambridge Psychology Exam Coaching";
export const SEO_DESCRIPTION =
  "Cambridge Psychology Examiner and international Psychology educator Prabhadevi Malarkannan coaches IGCSE, A Level (9990), AP and IB students in exam technique, evaluation writing, and examiner-style feedback.";

export const CONSULTATION_SUBJECT =
  "Free 20-minute Exam Strategy Consultation";

export const CONSULTATION_BODY = `Hi Prabha,

I would like to book a free 20-minute Exam Strategy Consultation.

Name:
Curriculum (IGCSE / A Level 9990 / AP / IB):
Current grade / target grade:
Time zone:
Anything I should know:

Thank you.`;

export function consultationMailto(email: string = CONTACT_EMAIL): string {
  const params = new URLSearchParams({
    subject: CONSULTATION_SUBJECT,
    body: CONSULTATION_BODY,
  });
  return `mailto:${email}?${params.toString()}`;
}

export function leadMagnetMailto(
  senderEmail: string,
  email: string = CONTACT_EMAIL,
): string {
  const params = new URLSearchParams({
    subject: "Guide request: 10 Mistakes Students Make in Cambridge Psychology 9990 Exams",
    body: `Please send me the free guide: 10 Mistakes Students Make in Cambridge Psychology 9990 Exams.\n\nMy email: ${senderEmail}`,
  });
  return `mailto:${email}?${params.toString()}`;
}

export const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
