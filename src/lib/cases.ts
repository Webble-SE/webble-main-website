export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  sector: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  services: string[];
  stack: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "adventurephones",
    title: "Ett Jackbox-spel som körs i rummet",
    client: "AdventurePhones",
    year: "2026",
    sector: "Spel & realtid",
    summary:
      "En multiplayerupplevelse där värden kör spelet på storskärm och spelarna hakar på med telefonen. Inga konton. Bara rumskod, tärning och historia.",
    challenge:
      "Bygga ett live-spel som känns som en TV-kväll: låg tröskel att joina, tydlig värdvy, och strid som synkas mellan server, tärningsanimation och alla telefoner.",
    approach:
      "Vi delade upplevelsen i host och player, med WebSocket för rum, rundor och combat. Servern äger reglerna. Klienten visar. 3D-tärning, TTS-berättelse och QR-join gör det begripligt i soffan.",
    result:
      "En produktklar upplevelse med återanslutning, klasser, 90+ monster och ett flöde som går att visa live utan att någon installerar en app.",
    services: ["appar", "design", "webbplatser"],
    stack: ["Node.js", "TypeScript", "Socket.IO", "React"],
  },
  {
    slug: "fotografplattform",
    title: "Galleri, admin och kassa i samma ateljé",
    client: "Fotografplattform",
    year: "2025",
    sector: "Kreatörer & e-handel",
    summary:
      "En sajt där fotografen visar album, säljer bilder och sköter innehåll — utan att mejla ZIP-filer eller jaga fakturor.",
    challenge:
      "En visuell verksamhet behöver både portfolio och butik. Album, metadata, varukorg och admin måste hänga ihop, på mer än ett språk.",
    approach:
      "Vi byggde publik gallerivy, kassaflöde och ett admin för bilder, album, ordrar och inlägg. Innehåll och handel sitter i samma produkt, inte i tre verktyg.",
    result:
      "Fotografen kan publicera, sälja och följa ordrar från ett ställe. Besökaren får en sajt som ser ut som ateljén — och en kassa som faktiskt går att slutföra.",
    services: ["ehandel", "webbplatser", "drift"],
    stack: ["Next.js", "Node.js", "Stripe", "CMS-admin"],
  },
  {
    slug: "tillvaxtsajt",
    title: "En sajt ni själva kan leva med",
    client: "Tillväxtbolag",
    year: "2025",
    sector: "B2B-tjänster",
    summary:
      "Byte från en långsam, mallad sajt till en serverrenderad närvaro med CMS, tydliga tjänstesidor och ett kontaktflöde som säljer.",
    challenge:
      "Varje textändring gick via byrå. Sajten rankade dåligt, kändes generisk och berättade inte vad bolaget faktiskt levererar.",
    approach:
      "Vi skrev om informationsarkitekturen, satte ett uttryck som går att känna igen och byggde sidor som renderas på servern. Redaktörer uppdaterar innehåll utan att röra kod.",
    result:
      "Kortare tid till publicering, tydligare erbjudande och en teknisk grund som tål SEO, kampanjer och nästa tjänst ni lägger till.",
    services: ["webbplatser", "seo", "drift"],
    stack: ["Next.js", "CMS", "Analytics", "Schema.org"],
  },
];

export function getCases() {
  return cases;
}

export function getCase(slug: string) {
  return cases.find((entry) => entry.slug === slug);
}
