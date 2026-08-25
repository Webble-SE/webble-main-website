import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/LayoutBits";

export function ContactPanel({ source = "/kontakt" }: { source?: string }) {
  return (
    <section className="px-4 py-16 sm:px-5 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          title="Kontakt"
          description="Vi skapar kommunikation och digitala lösningar som gör skillnad. Fyll i om ni vill bli kontaktade via telefon eller e-post."
        />
        <div className="mt-10 bg-red p-3 sm:mt-12 sm:p-4 md:p-8">
          <div className="bg-paper px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-16">
            <ContactForm source={source} />
          </div>
        </div>
      </div>
    </section>
  );
}
