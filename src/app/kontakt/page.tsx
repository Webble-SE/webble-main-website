import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/LayoutBits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Hör av er till Webble. Berätta vad ni behöver — vi återkommer med raka råd, inte en säljdeck.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Berätta vad ni vill få gjort"
        description="Ett mejl, ett samtal eller formuläret räcker. Vi återkommer inom en arbetsdag med nästa steg — eller med frågan som saknas."
      />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
          <a className="border border-line p-6 transition hover:border-red" href={site.phoneHref}>
            <p className="eyebrow">Telefon</p>
            <p className="mt-3 text-xl">{site.phone}</p>
          </a>
          <a className="border border-line p-6 transition hover:border-red" href={`mailto:${site.email}`}>
            <p className="eyebrow">E-post</p>
            <p className="mt-3 text-xl">{site.email}</p>
          </a>
          <div className="border border-line p-6">
            <p className="eyebrow">Marknader</p>
            <p className="mt-3 text-xl">Sverige · Italien · globalt</p>
          </div>
        </div>
      </section>
      <ContactPanel source="/kontakt" />
    </>
  );
}
