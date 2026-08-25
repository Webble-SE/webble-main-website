import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { faqs } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#org`,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        foundingDate: String(site.founded),
        description: site.description,
        image: `${site.url}/opengraph-image`,
        areaServed: ["SE", "IT"],
        sameAs: [site.locales.italy.href, site.locales.global.href],
        knowsAbout: services.map((service) => service.title),
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "SE",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "sv-SE",
        publisher: { "@id": `${site.url}/#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/faq#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
