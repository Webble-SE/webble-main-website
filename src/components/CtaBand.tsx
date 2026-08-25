import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/LayoutBits";

export function CtaBand() {
  return (
    <section className="bg-red">
      <Container className="flex flex-col items-stretch justify-between gap-6 py-12 sm:gap-8 md:flex-row md:items-center md:py-20">
        <div className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/80">
            Redo när ni är
          </p>
          <h2 className="mt-3 text-2xl text-white sm:text-3xl md:text-5xl">
            Berätta vad ni behöver. Vi gör det begripligt.
          </h2>
        </div>
        <ButtonLink href="/kontakt" className="shrink-0 border-white text-white hover:bg-white hover:text-red">
          Boka ett samtal
        </ButtonLink>
      </Container>
    </section>
  );
}
