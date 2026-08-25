import type { Metadata } from "next";
import { site } from "@/lib/site";

export function seo({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const fullTitle = path === "/" ? `${site.name} — ${site.tagline}` : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle ?? `${title} — ${site.name}`,
      description,
      url,
      locale: "sv_SE",
      siteName: site.name,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle ?? `${title} — ${site.name}`,
      description,
    },
  };
}
