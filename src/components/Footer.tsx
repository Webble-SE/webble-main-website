import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const offices = [site.locales.sweden, site.locales.italy, site.locales.global];

  return (
    <footer className="pb-20 lg:pb-0">
      <div className="border-t border-line bg-ink-soft px-4 py-12 sm:px-5 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Logo className="h-9 w-auto md:h-12" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim md:text-lg">
            Vi arbetar med kunder över hela Sverige och har uppdragsgivare i andra länder.
            Kommunikation och digitala lösningar som gör skillnad — utan att ni ska behöva bli utvecklare.
          </p>
          <nav aria-label="Sidfot" className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold uppercase tracking-[0.14em] text-paper-dim">
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-red">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {offices.map((office) => (
              <div key={office.domain}>
                <h3 className="text-lg">{office.name}</h3>
                <div className="mt-3 mb-4 h-0.5 w-16 bg-red" />
                <a className="block py-1 text-paper-dim transition hover:text-red" href={office.href}>
                  {office.domain}
                </a>
                {"phone" in office && office.phone ? (
                  <a className="block py-1 text-paper-dim transition hover:text-red" href={site.phoneHref}>
                    {office.phone}
                  </a>
                ) : null}
                <a className="block py-1 text-paper-dim transition hover:text-red" href={`mailto:${office.email}`}>
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-[#131313] px-4 py-4 text-sm text-paper/70 sm:flex-row sm:items-center sm:justify-between sm:px-5 md:px-8">
        <p>© Copyright {year} — {site.name}</p>
        <p className="sm:text-right">Vi skapar webblösningar med ❤️</p>
      </div>
    </footer>
  );
}
