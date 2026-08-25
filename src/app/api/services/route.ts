import { NextResponse } from "next/server";
import { getServices } from "@/lib/services";

export async function GET() {
  const services = getServices().map((service) => ({
    slug: service.slug,
    title: service.title,
    summary: service.summary,
    href: `/tjanster/${service.slug}`,
  }));

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    count: services.length,
    services,
  });
}
