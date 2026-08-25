"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitInquiry, type ContactState } from "@/lib/actions/contact";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "w-full border-0 border-b border-muted/50 bg-transparent px-1 py-3 text-base text-ink outline-none transition placeholder:text-muted focus:border-red";

export function ContactForm({ source = "/kontakt" }: { source?: string }) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="text-center">
        <p className="eyebrow">Skickat</p>
        <h3 className="mt-4 text-2xl text-ink">Tack. Vi hör av oss.</h3>
        <p className="mt-4 text-base leading-relaxed text-ink/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="source" value={source} />
      <p className="hidden" aria-hidden>
        <label>
          Webbplats
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Namn</span>
          <input className={fieldClass} name="name" required placeholder="NAMN" autoComplete="name" />
        </label>
        <label className="block">
          <span className="sr-only">Företag</span>
          <input className={fieldClass} name="company" placeholder="FÖRETAG" autoComplete="organization" />
        </label>
        <label className="block">
          <span className="sr-only">E-postadress</span>
          <input
            className={fieldClass}
            type="email"
            name="email"
            required
            placeholder="E-POSTADRESS"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="sr-only">Telefonnummer</span>
          <input
            className={fieldClass}
            type="tel"
            name="phone"
            placeholder="TELEFONNUMMER"
            autoComplete="tel"
            inputMode="tel"
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Meddelande</span>
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="message"
          required
          placeholder="ERT MEDDELANDE"
        />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          className="mt-1 size-4 shrink-0 accent-red"
          required
        />
        <span>
          Jag godkänner att Webble sparar information om mig för att kunna återkoppla.{" "}
          <Link href="/integritet" className="text-red underline-offset-2 hover:underline">
            Läs mer här.
          </Link>
        </span>
      </label>
      {state.status === "error" ? (
        <p className="text-sm text-red" role="alert">
          {state.message}
        </p>
      ) : null}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={pending}
          className="min-h-12 w-full border-2 border-red px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-red hover:text-white disabled:opacity-60 sm:w-auto sm:px-12"
        >
          {pending ? "Skickar…" : "Skicka"}
        </button>
      </div>
    </form>
  );
}
