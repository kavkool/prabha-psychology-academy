"use client";

import { useState } from "react";
import { BOOKING_URL, NAV_LINKS, SITE_NAME } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative h-9 w-9 overflow-hidden rounded-full bg-navy ring-1 ring-navy/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/prabha.jpg"
              alt=""
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <span
              aria-hidden
              className="absolute inset-0 hidden items-center justify-center font-display text-[0.95rem] font-semibold text-gold-soft"
            >
              P
            </span>
          </span>
          <span className="font-display text-[1.05rem] font-semibold text-navy">
            {SITE_NAME}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-mid transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-navy px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-teal sm:inline-flex"
          >
            Free trial lesson
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-current ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-navy/10 bg-cream px-4 py-4 xl:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-base font-medium text-navy hover:bg-cream-warm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Book a free trial lesson
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
