export const site = {
  name: "Webble",
  legalName: "Webble",
  founded: 2018,
  tagline: "Vi skapar hemsidor för framtiden",
  description:
    "Webble är en webbyrå som bygger snabba, trygga och prisvärda digitala upplevelser. Ni sköter innehållet. Vi tar koden, prestandan och rådgivningen.",
  url: "https://webble.se",
  email: "info@webble.se",
  phone: "+46 708-14 94 66",
  phoneHref: "tel:+46708149466",
  locales: {
    sweden: {
      name: "Sverige",
      domain: "Webble.se",
      href: "https://webble.se",
      email: "info@webble.se",
      phone: "+46 708-14 94 66",
    },
    italy: {
      name: "Italien",
      domain: "Webble.it",
      href: "https://webble.it",
      email: "info@webble.it",
    },
    global: {
      name: "Globalt",
      domain: "Webble.io",
      href: "https://webble.io",
      email: "info@webble.io",
    },
  },
} as const;

export const nav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/case", label: "Case" },
  { href: "/pris", label: "Pris" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerNav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/case", label: "Case" },
  { href: "/pris", label: "Pris" },
  { href: "/process", label: "Process" },
  { href: "/insikter", label: "Insikter" },
  { href: "/faq", label: "FAQ" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/integritet", label: "Integritet" },
] as const;

export const stats = [
  { value: "2018", label: "Byrån grundades" },
  { value: "3", label: "Marknader: SE, IT och globalt" },
  { value: "CMS", label: "Ni uppdaterar innehållet själva" },
  { value: "SSR", label: "Serverrenderat för SEO och fart" },
] as const;
