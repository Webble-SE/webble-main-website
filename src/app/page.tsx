import { CaseCard } from "@/components/CaseCard";
import { ContactPanel } from "@/components/ContactPanel";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Container, SectionHeading } from "@/components/LayoutBits";
import { Marquee } from "@/components/Marquee";
import { ProcessList } from "@/components/ProcessList";
import { ServiceCard } from "@/components/ServiceCard";
import { getCases } from "@/lib/cases";
import { principles } from "@/lib/content";
import { getInsights } from "@/lib/insights";
import { packages } from "@/lib/pricing";
import { seo } from "@/lib/seo";
import { getServices } from "@/lib/services";
import { site, stats } from "@/lib/site";
import Link from "next/link";

export const metadata = seo({
  title: site.tagline,
  description: site.description,
  path: "/",
});

export default async function HomePage() {
  const services = getServices().slice(0, 6);
  const cases = getCases();
  const posts = getInsights().slice(0, 3);

  return (
    <>
      <Hero />
      <Marquee />

      <section className="py-16 sm:py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Webble 2026"
              title="En webbyrå som gör det komplicerade enkelt"
              description="Sedan 2018 bygger vi sajter som är användarvänliga, trygga och inte kostar mer än de behöver. Ni ska kunna ändra innehållet själva. Vi tar koden, hastigheten och de raka råden."
            />
            <p className="text-base leading-relaxed text-paper-dim sm:text-lg">
              Vårt mål är oförändrat: varje företag ska ha råd med en riktigt bra
              webbplats. Skillnaden 2026 är att den också ska vara serverrenderad,
              sökbar och redo för AI, e-handel och integrationer — inte bara snygg i
              webbläsaren hos den som byggde den.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-px bg-line md:mt-16 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink px-4 py-6 sm:px-5 sm:py-8">
                <dt className="display text-2xl text-red sm:text-3xl md:text-4xl">{stat.value}</dt>
                <dd className="mt-2 text-xs leading-relaxed text-paper-dim sm:mt-3 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Tjänster"
            title="Vad vi faktiskt gör"
            description="Från en ny sajt till butik, app, SEO och drift. Ni köper det ni behöver — inte ett paket med tre saker ni inte bad om."
          />
          <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Alla nio tjänster finns på{" "}
            <Link className="text-red" href="/tjanster">
              sidan för tjänster
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-ink-soft py-16 sm:py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Pris" title="Tydliga paket. Inga dolda 'responsivt'." />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.slug}
                className={`flex flex-col border p-6 sm:p-7 ${
                  "featured" in item && item.featured ? "border-red bg-ink" : "border-line bg-ink"
                }`}
              >
                <p className="eyebrow">{item.cadence}</p>
                <h3 className="mt-3 text-2xl">{item.name}</h3>
                <p className="mt-2 text-xl text-red">{item.price}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-paper-dim">{item.pitch}</p>
                <Link href="/pris" className="mt-6 text-[12px] font-bold uppercase tracking-[0.16em] text-red">
                  Se vad som ingår →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Varför Webble"
            title="Tre saker vi inte kompromissar med"
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="border border-line bg-ink p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim sm:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Utvalt arbete"
            title="Sajter och produkter som gör jobbet"
            description="Ett urval av uppdrag: realtidsspel, fotografplattform med kassa, och tillväxtsajter där redaktören äger innehållet."
          />
          <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
            {cases.map((entry, index) => (
              <div key={entry.slug} className={index === 0 ? "md:col-span-2" : ""}>
                <CaseCard entry={entry} large={index === 0} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Så arbetar vi"
            title="Från samtal till sajt ni kan leva med"
            description="Korta loopar. Tydliga beslut. Ingen teater."
          />
          <div className="mt-10 sm:mt-12">
            <ProcessList />
          </div>
          <p className="mt-8 text-sm text-muted">
            Hela flödet finns på{" "}
            <Link className="text-red" href="/process">
              process-sidan
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Insikter" title="Kort om webb som faktiskt säljer" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insikter/${post.slug}`}
                className="border border-line p-6 transition hover:border-red"
              >
                <p className="eyebrow">
                  {post.date} · {post.readMinutes} min
                </p>
                <h3 className="mt-4 text-xl">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{post.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Frågor" title="Det ni brukar undra" />
          <div className="mt-8 sm:mt-10">
            <Faq limit={6} />
          </div>
          <p className="mt-8 text-sm text-muted">
            Fler svar på{" "}
            <Link className="text-red" href="/faq">
              FAQ
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaBand />
      <ContactPanel source="/" />
    </>
  );
}
