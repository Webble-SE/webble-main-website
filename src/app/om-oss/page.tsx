import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Container, PageHero } from "@/components/LayoutBits";
import { principles } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Webble är webbyrån som vill att fler ska ha råd med en bra sajt. Grundad 2018. Sverige, Italien och globalt.",
};

const timeline = [
  {
    year: "2018",
    title: "Webble startar",
    text: "Idén är enkel: en hemsida ska vara trygg, snabb att sköta och inte kosta en förmögenhet. Kunden ska kunna ändra innehåll utan att bli utvecklare.",
  },
  {
    year: "2019–23",
    title: "Sajter, CMS och vardag",
    text: "Uppdrag i Sverige och utanför. Vi lär oss vad som faktiskt håller efter lansering: redaktörskap, drift och att säga nej till onödiga features.",
  },
  {
    year: "2024–26",
    title: "Server, prestanda och produkter",
    text: "SPA-sajter räcker inte när Google, fart och appar spelar roll. Vi bygger serverrenderat, tar oss an e-handel, realtid och AI där det sparar tid.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Om Webble"
        title="Vi tar koden. Ni tar affären."
        description="Webble prioriterar rena, snabba upplevelser som är användarvänliga, säkra och inte kostar mer än de behöver. Ni ska känna er trygga med sajten — och kunna ändra innehållet själva."
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Varför vi finns</h2>
            <div className="mt-4 h-0.5 w-16 bg-red" />
            <p className="mt-6 text-lg leading-relaxed text-paper-dim">
              Vi tycker inte att man måste uppfinna hjulet varje gång. Där en beprövad
              plattform sparar tid och pengar använder vi den. Där ni behöver något eget
              — en butik, en app, en integration — bygger vi det. Huvudmålet är detsamma
              som 2018: varje person och varje bolag ska ha råd med en bra webbplats.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-paper-dim">
              Vi kan inte se in i framtiden, men vi kan förbereda er för den. Med samlad
              kunskap och raka råd gör vi det komplicerade enkelt.
            </p>
          </div>
          <div className="grid gap-4">
            {principles.map((item) => (
              <article key={item.title} className="border border-line p-6">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-paper-dim">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <h2 className="text-3xl md:text-4xl">Åtta år, tre marknader</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year}>
                <p className="eyebrow">{item.year}</p>
                <h3 className="mt-3 text-2xl">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-paper-dim">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 grid gap-6 border border-line p-8 md:grid-cols-3">
            <div>
              <p className="eyebrow">{site.locales.sweden.name}</p>
              <p className="mt-3 text-paper-dim">{site.locales.sweden.domain}</p>
              <p className="text-paper-dim">{site.locales.sweden.phone}</p>
            </div>
            <div>
              <p className="eyebrow">{site.locales.italy.name}</p>
              <p className="mt-3 text-paper-dim">{site.locales.italy.domain}</p>
              <p className="text-paper-dim">{site.locales.italy.email}</p>
            </div>
            <div>
              <p className="eyebrow">{site.locales.global.name}</p>
              <p className="mt-3 text-paper-dim">{site.locales.global.domain}</p>
              <p className="text-paper-dim">{site.locales.global.email}</p>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
