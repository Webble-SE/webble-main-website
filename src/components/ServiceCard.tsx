import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/tjanster/${service.slug}`}
      className="group flex flex-col border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-red sm:p-6 md:p-8"
    >
      <p className="eyebrow">{service.eyebrow}</p>
      <h3 className="mt-3 text-xl leading-snug sm:mt-4 sm:text-2xl">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-dim sm:mt-4 sm:text-base">{service.summary}</p>
      <span className="mt-5 text-[12px] font-bold uppercase tracking-[0.16em] text-red sm:mt-6">
        Läs mer →
      </span>
    </Link>
  );
}
