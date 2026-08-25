import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/LayoutBits";
import { getCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Case",
  description:
    "Utvalt arbete från Webble: realtidsspel, fotografplattform med e-handel och tillväxtsajter med CMS.",
};

export default async function CasesPage() {
  const cases = getCases();

  return (
    <>
      <PageHero
        eyebrow="Case"
        title="Arbete som går att klicka på"
        description="Vi visar uppdrag där produkten, sajten eller butiken gör ett jobb i vardagen — inte bara ser bra ut i en pitch."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          {cases.map((entry, index) => (
            <div key={entry.slug} className={index === 0 ? "md:col-span-2" : ""}>
              <CaseCard entry={entry} large={index === 0} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
