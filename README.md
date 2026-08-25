# Webble.se

Huvudwebbplatsen för Webble — webbyrå i Sverige, med närvaro i Italien och globalt.

Sajten är ombyggd 2026 till **Next.js 16** med App Router: sidor renderas på servern, med interaktiva öar för meny, skrivmaskin i hero och kontaktformulär.

## Stack

- Next.js 16.3, React 19, TypeScript
- Tailwind CSS 4
- Server Actions + `POST /api/contact` för förfrågningar
- `GET /api/services` för tjänstedata
- Docker (Node 22)

## Utveckling

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

```bash
docker compose up --build
```

## Produktion

```bash
npm run build
npm start
```

Docker-imagen (`Dockerfile`) använder Next.js `standalone`-output.

## Innehåll

Tjänster, case och copy ligger i `src/lib/`. Kontaktförfrågningar sparas i `data/inquiries.json` (gitignore:ad).

## Kontakt

- Sverige: [info@webble.se](mailto:info@webble.se) · +46 708-14 94 66
- Italien: [info@webble.it](mailto:info@webble.it)
- Globalt: [info@webble.io](mailto:info@webble.io)
