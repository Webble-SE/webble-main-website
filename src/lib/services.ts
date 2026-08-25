export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  promise: string;
  deliverables: string[];
  outcomes: string[];
  fit: string[];
};

export const services: Service[] = [
  {
    slug: "webbplatser",
    title: "Webbplatser & digitala plattformar",
    eyebrow: "Kärnerbjudande",
    summary:
      "Sajter som är snygga, snabba och lätta att sköta. Byggda för att sälja, förklara och hålla — inte för att samla damm.",
    problem:
      "Många företag sitter med en hemsida som är långsam, svår att ändra och osynlig i sök. Den kostar tid varje gång något ska uppdateras.",
    promise:
      "Vi bygger en modern sajt ni själva kan redigera, med tydlig struktur, stark prestanda och ett uttryck som håller 2026.",
    deliverables: [
      "Informationsarkitektur och sidstruktur",
      "Designsystem som går att växa i",
      "Serverrenderad sajt med CMS ni kan använda",
      "Formulär, analytics och grundläggande SEO",
      "Lansering, utbildning och dokumentation",
    ],
    outcomes: [
      "Snabbare sidladdning och bättre ranking",
      "Färre supportärenden när ni ändrar texter själva",
      "En sajt som ser ut som ert varumärke — inte som en mall",
    ],
    fit: ["Bolag som behöver en ny sajt", "Ombyggnad av en åldrad WordPress", "Sajter som ska sälja och förklara samtidigt"],
  },
  {
    slug: "ehandel",
    title: "E-handel",
    eyebrow: "Försäljning",
    summary:
      "Butiker som går att sköta i vardagen: produkter, betalsätt, frakt och en kassa som inte tappar kunden.",
    problem:
      "En webshop som krånglar i kassan, saknar lagerkoll eller ser oseriös ut på mobilen tappar köp ni redan har vunnit.",
    promise:
      "Vi sätter upp en butik som är tydlig för kunden och enkel för er — med betalning, ordrar och produktflöden som hänger ihop.",
    deliverables: [
      "Butiksdesign och produktlistor som konverterar",
      "Kassa, betalsätt och orderbekräftelser",
      "Produkt-, lager- och fraktflöden",
      "Admin där ni hanterar ordrar och innehåll",
      "Koppling mot bokföring eller befintliga system vid behov",
    ],
    outcomes: [
      "Färre avhopp i kassan",
      "Tydligare produktpresentation på mobil",
      "Ett säljflöde ni kan driva utan byrå varje vecka",
    ],
    fit: ["D2C och detaljhandel", "Fotografer och kreatörer som säljer bilder", "Tjänsteföretag med boknings- eller produktförsäljning"],
  },
  {
    slug: "design",
    title: "Design, UX & varumärke",
    eyebrow: "Uttryck",
    summary:
      "Visuell identitet och gränssnitt som gör intryck på tre sekunder och är lätta att använda i trettio.",
    problem:
      "Ett spretigt uttryck och otydliga flöden gör att besökaren inte förstår vad ni gör — eller inte vågar ta nästa steg.",
    promise:
      "Vi ritar upp ett uttryck och ett gränssnitt som är konsekvent, tillgängligt och byggt för konvertering, inte bara för portfolio.",
    deliverables: [
      "Varumärkesriktning: färg, typografi, ton",
      "Wireframes och klickbara prototyper",
      "UI-kit och komponentbibliotek",
      "Tillgänglighetsanpassade mönster",
      "Design som är redo att utvecklas, inte bara att visa",
    ],
    outcomes: [
      "Tydligare första intryck",
      "Färre klick till kontakt eller köp",
      "Ett uttryck som går att återanvända i sajt, app och material",
    ],
    fit: ["Nya varumärken", "Omprofilering", "Produkter som behöver ett gränssnitt innan kod"],
  },
  {
    slug: "appar",
    title: "Webbappar & interaktiva produkter",
    eyebrow: "Produkt",
    summary:
      "Skräddarsydda appar när en vanlig sajt inte räcker: realtid, inloggning, flöden och logik som är er affär.",
    problem:
      "Kalkylark, mejl och tre olika verktyg gör att teamet lägger tid på administration istället för på kunden.",
    promise:
      "Vi bygger den produkt ni faktiskt behöver — med tydliga användarroller, prestanda och en kodbas som går att vidareutveckla.",
    deliverables: [
      "Behovsanalys och produktavgränsning",
      "Arkitektur för webbapp, API och data",
      "Inloggning, roller och ärende- eller spellogik",
      "Realtid när det gör skillnad",
      "Admin, loggning och vidareutvecklingsplan",
    ],
    outcomes: [
      "Ett verktyg som ersätter manuella steg",
      "En produkt ni kan visa, sälja eller använda internt",
      "Teknikval som inte låser er om ett år",
    ],
    fit: ["SaaS-idéer", "Interna portaler", "Spel, communityn och live-upplevelser"],
  },
  {
    slug: "seo",
    title: "SEO, prestanda & Core Web Vitals",
    eyebrow: "Synlighet",
    summary:
      "Sajter som hittas, laddar och mäts. Serverrendering, strukturerad data och sidor som Google och människor gillar.",
    problem:
      "En vacker sajt som ingen hittar, eller som hoppar och laddar sent på mobilen, är en dyr brochure.",
    promise:
      "Vi bygger och trimmar för indexering, hastighet och tydliga landningssidor — med mätning så ni ser vad som händer.",
    deliverables: [
      "Teknisk SEO: metadata, sitemap, robots, schema",
      "Serverrendering och caching där det lönar sig",
      "Bild-, font- och scriptoptimering",
      "Innehållsstruktur för sökintention",
      "Mätning av Core Web Vitals och sökprestanda",
    ],
    outcomes: [
      "Bättre organisk synlighet över tid",
      "Lägre bounce på landningssidor",
      "En teknisk grund som inte behöver göras om vid varje kampanj",
    ],
    fit: ["Sajter som ska ranka", "Migrering från ren klient-SPA", "Företag som betalar för annonser men saknar organisk bas"],
  },
  {
    slug: "ai",
    title: "AI-integration & automation",
    eyebrow: "2026",
    summary:
      "AI där det sparar tid på riktigt: sök i ert innehåll, utkast till support, automatiserade flöden — inte en chatbot för show.",
    problem:
      "Teamet svarar på samma frågor, kopierar data mellan system och hinner inte producera innehåll i den takt sajten kräver.",
    promise:
      "Vi kopplar in modeller och automation mot era riktiga arbetsflöden, med tydliga gränser för data, kvalitet och ansvar.",
    deliverables: [
      "Kartläggning av repetitiva uppgifter",
      "AI-sök och assistans mot ert eget innehåll",
      "Automatisering av lead-, support- eller publiceringsflöden",
      "Säkerhet, loggning och mänsklig kontroll",
      "Utvärdering så ni ser tidsvinsten",
    ],
    outcomes: [
      "Mindre manuellt klipp-och-klistra",
      "Snabbare svar till kunder",
      "AI som är ett verktyg, inte ett riskprojekt",
    ],
    fit: ["Bolag med mycket innehåll", "Support- eller säljteam som drunknar i repetitiva ärenden", "Sajter som ska bli smartare utan att bytas ut"],
  },
  {
    slug: "drift",
    title: "Drift, hosting & vidareutveckling",
    eyebrow: "Partnerskap",
    summary:
      "En sajt är inte klar vid lansering. Vi håller den säker, snabb och i rörelse — till en kostnad som går att förstå.",
    problem:
      "Uppdateringar skjuts upp, plugins krockar och ingen äger prestandan. Till slut blir varje ändring ett projekt.",
    promise:
      "Vi tar ansvar för drift, säkerhet och små löpande förbättringar så att sajten fortsätter tjäna er affär.",
    deliverables: [
      "Hosting och övervakning",
      "Säkerhetsuppdateringar och backups",
      "Prestanda- och tillgänglighetskoll",
      "Innehålls- och funktionsstöd",
      "Prioriterad vidareutveckling i korta loopar",
    ],
    outcomes: [
      "Färre akuta nätter",
      "En sajt som inte åldras i tysthet",
      "En partner ni kan ringa utan att starta en ny upphandling",
    ],
    fit: ["Företag utan intern dev", "Sajter som just lanserats", "Organisationer som vill ha förutsägbar månadskostnad"],
  },
  {
    slug: "tillganglighet",
    title: "Tillgänglighet (WCAG)",
    eyebrow: "För alla",
    summary:
      "Sajter som fler kan använda — och som möter kraven som skärps för offentlig och kommersiell webb.",
    problem:
      "Otillgängliga sajter stänger ute kunder, skapar juridisk risk och ger sämre SEO. Det syns sällan internt förrän någon klagar.",
    promise:
      "Vi granskar, prioriterar och åtgärdar så att sajten fungerar med tangentbord, skärmläsare och tydlig kontrast — utan att se ut som ett formulär från 2004.",
    deliverables: [
      "Tillgänglighetsgranskning mot WCAG 2.2",
      "Åtgärdsplan i prioriterad ordning",
      "Kod- och designfixar",
      "Tydlig dokumentation till er organisation",
      "Uppföljning efter lansering",
    ],
    outcomes: [
      "Fler som faktiskt kan använda sajten",
      "Lägre risk mot kommande krav",
      "Bättre semantik, vilket också gynnar sök",
    ],
    fit: ["Offentlig sektor och leverantörer", "E-handel", "Sajter med inloggning och komplexa flöden"],
  },
  {
    slug: "integrationer",
    title: "Integrationer & API:er",
    eyebrow: "System",
    summary:
      "När sajten ska prata med bokning, CRM, betalsätt eller ert eget system — utan att ni kopierar data för hand.",
    problem:
      "Uppgifter finns i tre system. Personalen är limmet. Fel uppstår där människor tröttnar.",
    promise:
      "Vi kopplar ihop flödena med rena API:er, felhantering och loggar ni kan lita på.",
    deliverables: [
      "Kartläggning av system och dataägarskap",
      "API-design eller integration mot befintliga tjänster",
      "Webhooks, köer och felhantering",
      "Testdata och dokumentation",
      "Bevakning så ni ser när något går sönder",
    ],
    outcomes: [
      "Mindre dubbelarbete",
      "Färre fel i ordrar och kunddata",
      "En stack som kan växa med nästa verktyg",
    ],
    fit: ["Bolag med CRM, ERP eller bokning", "E-handel som ska synkas", "Produkter som behöver ett publikt eller internt API"],
  },
];

export function getServices() {
  return services;
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3) {
  const index = services.findIndex((service) => service.slug === slug);
  if (index === -1) return services.slice(0, count);
  return [...services.slice(index + 1), ...services.slice(0, index)].slice(0, count);
}
