import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/LayoutBits";
import { getCase, getCases } from "@/lib/cases";
import { getService } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCases().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCase(slug);
  if (!entry) return { title: "Case" };
  return {
    title: entry.title,
    description: entry.summary,
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getCase(slug);
  if (!entry) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${entry.client} · ${entry.year}`}
        title={entry.title}
        description={entry.summary}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 md:py-24">
        <article className="space-y-10 md:col-span-2">
          <section>
            <h2 className="text-2xl">Uppgift</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper-dim">{entry.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl">Tillvägagångssätt</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper-dim">{entry.approach}</p>
          </section>
          <section>
            <h2 className="text-2xl">Resultat</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper-dim">{entry.result}</p>
          </section>
        </article>
        <aside className="h-fit border border-line bg-ink-soft p-7">
          <p className="eyebrow">Sektor</p>
          <p className="mt-2 text-paper-dim">{entry.sector}</p>
          <p className="eyebrow mt-8">Tjänster</p>
          <ul className="mt-3 space-y-2">
            {entry.services.map((slugName) => {
              const service = getService(slugName);
              return (
                <li key={slugName}>
                  <Link className="text-red" href={`/tjanster/${slugName}`}>
                    {service?.title ?? slugName}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="eyebrow mt-8">Teknik</p>
          <p className="mt-2 text-paper-dim">{entry.stack.join(" · ")}</p>
          <div className="mt-10">
            <ButtonLink href="/kontakt" variant="primary">
              Liknande uppdrag?
            </ButtonLink>
          </div>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
