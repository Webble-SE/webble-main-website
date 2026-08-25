export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  body: { heading?: string; text: string }[];
};

export const insights: Insight[] = [
  {
    slug: "spa-vs-ssr-2026",
    title: "Varför en ren SPA-sajt tappar 2026",
    description:
      "En sajt som bara renderas i webbläsaren är sämre för Google, långsammare på mobilen och svårare att dela. Så funkar serverrendering i praktiken.",
    date: "2026-03-12",
    readMinutes: 5,
    body: [
      {
        text: "Många företagssajter från 2018–2022 byggdes som rena React-appar: en tom HTML-fil och allt innehåll via JavaScript. Det kändes modernt. 2026 är det oftast fel verktyg för en sajt som ska hittas och sälja.",
      },
      {
        heading: "Google och människor ser samma sak",
        text: "Med serverrendering skickar servern färdig HTML. Sökmotorer, länkförhandsvisningar och skärmläsare får texten direkt. Ni slipper hoppas på att en crawler kör er JavaScript på samma sätt som Chrome gör.",
      },
      {
        heading: "Fart på mobilen är sälj",
        text: "En tom sida som väntar på ett stort JS-paket tappar folk på 4G. Serverrenderade sidor kan visa rubrik och knapp innan resten hydrerar. Core Web Vitals speglar det — och de påverkar både ranking och konvertering.",
      },
      {
        heading: "När en SPA ändå är rätt",
        text: "Inloggade verktyg, spel och appar med mycket interaktion mår bra av en klienttung yta. Då renderar vi skalet på servern och låter appen ta över där det behövs. Det är skillnaden mellan en produkt och en brochure som låtsas vara en app.",
      },
    ],
  },
  {
    slug: "cms-utan-kod",
    title: "Så uppdaterar ni sajten utan att bli utvecklare",
    description:
      "En bra byråsajt ska gå att ändra på en lunchrast. Så tänker vi kring CMS, behörigheter och vad som faktiskt ska ligga i kod.",
    date: "2026-05-04",
    readMinutes: 4,
    body: [
      {
        text: "Den vanligaste källan till irritation efter lansering är inte färgen på knappen. Det är att byta en rubrik kräver en ticket, en offert och tre dagar. Det är ett designfel, inte ett öde.",
      },
      {
        heading: "Redaktören äger orden",
        text: "Texter, bilder, vanliga undersidor och nyheter hör hemma i ett CMS. Layout, prestanda och integrationer hör hemma i kod. När de två blandas blir varje stavfel ett utvecklingsärende.",
      },
      {
        heading: "Färre fält, färre misstag",
        text: "Ett CMS med hundra valfria boxar gör folk rädda. Vi sätter de fält ni faktiskt använder, med förhandsvisning, och utbildar i trettio minuter — inte i en trehundra sidor manual.",
      },
      {
        heading: "Vad ni fortfarande ska höra av er om",
        text: "Ny kassa, ny språkversion, ny integration. Sådant ändrar arkitektur. Däremot ska ni kunna byta teamfoto, öppettider och en tjänstebeskrivning utan att vänta på oss.",
      },
    ],
  },
  {
    slug: "valja-webbyra-2026",
    title: "Checklista: så väljer ni webbyrå 2026",
    description:
      "Fem frågor som avslöjar om byrån bygger för er vardag eller för sin portfolio. Använd dem i nästa upphandling.",
    date: "2026-07-18",
    readMinutes: 6,
    body: [
      {
        text: "Uppköp av webb går ofta på magkänsla och en snygg PDF. Det räcker inte. En sajt ska leva tre–fem år. Ställ frågor som tvingar fram hur byrån tänker när kampanjen är över.",
      },
      {
        heading: "1. Vem ändrar en rubrik på onsdag?",
        text: "Om svaret är 'vi tar det i nästa sprint' har ni köpt ett gisslan. Kräv att vanligt innehåll går att publicera utan utvecklare.",
      },
      {
        heading: "2. Var renderas sidan?",
        text: "Fråga om HTML kommer från servern eller bara från JavaScript. För en publik sajt ska svaret vara servern — med ett skäl om de föreslår något annat.",
      },
      {
        heading: "3. Vad kostar nästa år, inte bara månad ett?",
        text: "Lanseringspris utan drift, säkerhet och vidareutveckling är en halvsanning. Be om ett intervall för månad 13.",
      },
      {
        heading: "4. Vad säger ni nej till?",
        text: "En byrå som säger ja till allt har ingen åsikt. Raka råd om onödiga features är en del av jobbet, inte ohövlighet.",
      },
      {
        heading: "5. Kan vi se något som liknar vårt problem?",
        text: "Portfolio med bara awards hjälper er inte. Be om ett case där kunden uppdaterar själv, eller där kassan faktiskt gick i mål.",
      },
    ],
  },
];

export function getInsights() {
  return insights;
}

export function getInsight(slug: string) {
  return insights.find((entry) => entry.slug === slug);
}
