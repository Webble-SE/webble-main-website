import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60svh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl">Sidan finns inte</h1>
      <p className="mt-6 text-lg text-paper-dim">
        Länken är fel, eller så har sidan flyttats i omläggningen till 2026.
      </p>
      <div className="mt-10">
        <ButtonLink href="/" variant="primary">
          Till startsidan
        </ButtonLink>
      </div>
    </section>
  );
}
