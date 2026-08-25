import { ButtonLink } from "@/components/ButtonLink";
import { Typewriter } from "@/components/Typewriter";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(92svh,920px)] items-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/video/hero-poster.jpg"
          aria-hidden
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 bg-ink/70" />
      <div className="absolute inset-0 -z-10 grid-fade opacity-40" />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-5 md:px-8 md:py-32">
        <p className="eyebrow">Webbyrå · Sverige · 2026</p>
        <h1 className="mx-auto mt-5 max-w-5xl text-[2rem] leading-[1.08] text-white sm:text-5xl md:text-7xl">
          Vi skapar
          <span className="block">
            <Typewriter />
          </span>
          hemsidor för framtiden
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg md:mt-8 md:text-xl">
          Vi kan inte se in i framtiden, men vi kan förbereda er för den. Med samlad
          kunskap och raka råd gör vi det komplicerade enkelt åt er.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <ButtonLink href="/kontakt" variant="primary">
            Starta ett projekt
          </ButtonLink>
          <ButtonLink href="/tjanster">Se tjänster</ButtonLink>
        </div>
      </div>
    </section>
  );
}
