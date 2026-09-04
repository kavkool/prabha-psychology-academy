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
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-cream">
            {SITE_NAME}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Cambridge Psychology exam coaching with examiner-level assessment
            expertise.
          </p>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Curricula
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Cambridge IGCSE &amp; GCSE Psychology</li>
            <li>Cambridge AS and A Level Psychology (9990)</li>
            <li>AP Psychology</li>
            <li>IB Psychology (SL/HL)</li>
          </ul>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
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
                Also available on Preply
              </a>
            </li>
          </ul>
          <p className="mt-3 text-xs text-cream/45">
            Email and Instagram are placeholders until live accounts are
            connected.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-4 py-5 text-center text-xs text-cream/45 sm:px-6 lg:px-8">
          © 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
