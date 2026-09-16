import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PREPLY_URL,
  SITE_NAME,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/80">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-cream">
            {SITE_NAME}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed">
            Cambridge &amp; AQA Psychology coaching with examiner-level feedback.
          </p>
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Curricula
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li>Cambridge IGCSE &amp; GCSE</li>
            <li>Cambridge A Level (9990)</li>
            <li>AQA Psychology</li>
          </ul>
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Contact
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li>
              <a className="hover:text-gold-soft" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gold-soft"
                href={INSTAGRAM_URL}
                rel="noreferrer"
                target="_blank"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gold-soft"
                href={PREPLY_URL}
                rel="noreferrer"
                target="_blank"
              >
                Preply
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-4 py-4 text-center text-xs text-cream/45 sm:px-6 lg:px-8">
          © 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
