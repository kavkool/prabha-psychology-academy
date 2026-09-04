"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL, leadMagnetMailto } from "@/lib/site";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const href = leadMagnetMailto(trimmed, CONTACT_EMAIL);
    window.location.href = href;
    setStatus("success");
  }

  return (
    <section
      id="guide"
      className="bg-teal-dark py-20 text-cream sm:py-24"
      aria-labelledby="guide-heading"
    >
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Free guide
          </p>
          <h2
            id="guide-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            10 Mistakes Students Make in Cambridge Psychology 9990 Exams
          </h2>
          <p className="mt-4 max-w-xl text-cream/80">
            The patterns examiners see every series — thin evaluation, methods
            confusion, misplaced Issues & Debates, and answers that never quite
            match the command word. Leave your email and we will send the
            guide.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-cream p-6 text-navy shadow-lift">
            {status === "success" ? (
              <p className="text-sm leading-relaxed">
                Thank you. If your email app opened, send the message to finish
                the request. If it did not, write to{" "}
                <a
                  className="font-semibold text-teal underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                with the subject “9990 guide”.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="guide-email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="guide-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-navy/15 bg-cream-paper px-4 py-3 text-navy placeholder:text-ink-faint"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal"
                >
                  Send me the guide
                </button>
                <p className="text-xs leading-relaxed text-ink-muted">
                  Client-side capture only for now: submit opens a prefilled
                  email. No list is stored on this site until a form backend is
                  wired (see README).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
