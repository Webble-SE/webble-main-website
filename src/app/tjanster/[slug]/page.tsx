import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/LayoutBits";
import { ServiceCard } from "@/components/ServiceCard";
import { getRelatedServices, getService, getServices } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Tjänst" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.summary} />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl">Problemet</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper-dim">{service.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl">Vad vi lovar</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper-dim">{service.promise}</p>
          </div>
          <div>
            <h2 className="text-2xl">Leverans</h2>
            <ul className="mt-4 space-y-3 text-paper-dim">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="h-fit border border-line bg-ink-soft p-7">
          <p className="eyebrow">Passar er om</p>
          <ul className="mt-5 space-y-3 text-paper-dim">
            {service.fit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="eyebrow mt-10">Resultat vi siktar på</p>
          <ul className="mt-5 space-y-3 text-paper-dim">
            {service.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/kontakt" variant="primary">
              Prata om {service.eyebrow.toLowerCase()}
            </ButtonLink>
          </div>
        </aside>
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl">Relaterat</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
