import type { MetadataRoute } from "next";
import { getCases } from "@/lib/cases";
import { getServices } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/tjanster", "/case", "/process", "/om-oss", "/kontakt", "/integritet"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    }),
  );

  const serviceRoutes = getServices().map((service) => ({
    url: `${site.url}/tjanster/${service.slug}`,
    lastModified: now,
  }));

  const caseRoutes = getCases().map((entry) => ({
    url: `${site.url}/case/${entry.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes];
}
