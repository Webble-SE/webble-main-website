export const packages = [
  {
    slug: "narvaro",
    name: "Närvaro",
    price: "Från 48 000 kr",
    cadence: "engångsprojekt",
    pitch: "En tydlig sajt som förklarar vad ni gör och tar emot förfrågningar. Redo att redigera dagen ni går live.",
    includes: [
      "Upp till 8 sidor",
      "Design efter ert uttryck",
      "CMS för texter och bilder",
      "Kontaktformulär och grundläggande SEO",
      "Mobilanpassning och lansering",
    ],
    fit: "Bolag som behöver en seriös första (eller andra) sajt utan onödig teknik.",
  },
  {
    slug: "tillvaxt",
    name: "Tillväxt",
    price: "Från 96 000 kr",
    cadence: "engångsprojekt",
    pitch: "Serverrenderad sajt byggd för sök, kampanjer och fler tjänster. Ni äger innehållet. Vi sätter farten.",
    includes: [
      "Informationsarkitektur och tjänstesidor",
      "Next.js / headless där det lönar sig",
      "Schema, sitemap och prestanda",
      "Utbildning för redaktörer",
      "Mätning och 30 dagar efter lansering",
    ],
    fit: "Företag som redan säljer och vill att sajten ska jobba hårdare.",
    featured: true,
  },
  {
    slug: "produkt",
    name: "Butik & produkt",
    price: "Offert",
    cadence: "efter omfattning",
    pitch: "E-handel, inloggning, realtid eller integrationer. Vi avgränsar innan vi bygger, så ni inte betalar för teater.",
    includes: [
      "Behovsanalys och arkitektur",
      "Kassa, admin eller appflöden",
      "Koppling mot befintliga system",
      "Test, lansering och dokumentation",
      "Förslag på drift efter go-live",
    ],
    fit: "När en vanlig sajt inte räcker — shop, portal eller egen produkt.",
  },
] as const;

export const retainers = [
  {
    name: "Drift",
    price: "Från 2 900 kr/mån",
    items: ["Hosting och övervakning", "Säkerhetsuppdateringar", "Backups", "Små innehållsfixar"],
  },
  {
    name: "Tillväxtavtal",
    price: "Från 8 900 kr/mån",
    items: ["Allt i Drift", "Prioriterad vidareutveckling", "SEO- och prestandakoll", "Månadsavstämning"],
  },
] as const;
