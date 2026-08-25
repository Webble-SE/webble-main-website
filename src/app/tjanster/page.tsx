import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/LayoutBits";
import { ServiceCard } from "@/components/ServiceCard";
import { getServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Webbplatser, e-handel, appar, SEO, AI, tillgänglighet och drift. Webbles tjänster för 2026 — serverrenderat, redigerbart och byggt för att sälja.",
};

export default async function ServicesPage() {
  const services = getServices();

  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title="Nio sätt att göra er webb mer värd"
        description="Vi tar fram sajter, butiker och produkter som ni kan sköta. Välj en tjänst eller kombinera. Vi säger till om ni inte behöver allt."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
