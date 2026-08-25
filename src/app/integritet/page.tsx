import type { Metadata } from "next";
import { Container, PageHero } from "@/components/LayoutBits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integritet",
  description: "Hur Webble hanterar personuppgifter i kontaktformulär och kunddialog.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Integritet"
        title="Hur vi hanterar era uppgifter"
        description="Kort och tydligt: vi sparar det ni skickar för att kunna återkoppla, inte för att sälja vidare."
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-8 text-lg leading-relaxed text-paper-dim">
          <p>
            Personuppgiftsansvarig är {site.name}. Kontakt:{" "}
            <a className="text-red" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <div>
            <h2 className="text-2xl text-ink">Vad vi samlar in</h2>
            <p className="mt-3">
              Via formuläret: namn, e-post, telefon, företag och meddelande. Ni lämnar
              uppgifterna frivilligt för att vi ska kunna svara på en förfrågan.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-ink">Varför</h2>
            <p className="mt-3">
              Ändamålet är kunddialog och offert. Rättslig grund är samtycke samt
              berättigat intresse att besvara er förfrågan. Vi använder inte uppgifterna
              för massutskick.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-ink">Hur länge</h2>
            <p className="mt-3">
              Förfrågningar som inte leder till uppdrag raderas eller anonymiseras inom
              24 månader. Avtals- och fakturaunderlag sparas enligt bokföringslagen.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-ink">Era rättigheter</h2>
            <p className="mt-3">
              Ni kan begära registerutdrag, rättelse eller radering. Kontakta oss så
              hanterar vi det. Klagomål kan lämnas till Integritetsskyddsmyndigheten.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
