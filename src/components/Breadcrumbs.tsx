import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ href: "/", label: "Hem" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href === "/" ? site.url : `${site.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Brödsmulor" className="border-b border-line">
      <ol className="mx-auto flex max-w-7xl flex-wrap gap-x-2 gap-y-1 px-5 py-3 text-sm text-muted md:px-8">
        {trail.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {index === trail.length - 1 ? (
              <span className="text-paper-dim">{item.label}</span>
            ) : (
              <Link className="transition hover:text-red" href={item.href}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    </nav>
  );
}
