import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Container, PageHero } from "@/components/LayoutBits";
import { ProcessList } from "@/components/ProcessList";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Så arbetar Webble: rakt samtal, tydligt förslag, design som går att bygga, serverrenderad utveckling och lansering ni kan leva med.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Inga överraskningar. Bara nästa steg."
        description="Ni ska alltid veta vad som händer, vad det kostar och vad ni ska besluta. Fem steg, från första mejlet till en sajt ni själva kan uppdatera."
      />
      <section className="py-20 md:py-28">
        <Container>
          <ProcessList />
          <div className="mt-16 space-y-10">
            {processSteps.map((step) => (
              <article key={step.number} className="grid gap-4 border-t border-line pt-8 md:grid-cols-[120px_1fr]">
                <p className="display text-3xl text-red">{step.number}</p>
                <div>
                  <h2 className="text-2xl">{step.title}</h2>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-paper-dim">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
