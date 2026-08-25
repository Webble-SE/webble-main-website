import Link from "next/link";
import type { CaseStudy } from "@/lib/cases";

export function CaseCard({ entry, large = false }: { entry: CaseStudy; large?: boolean }) {
  return (
    <Link
      href={`/case/${entry.slug}`}
      className={`group relative flex min-h-64 flex-col justify-end overflow-hidden border border-line bg-paper p-5 transition hover:border-red sm:min-h-72 sm:p-6 md:p-8 ${
        large ? "md:min-h-96" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(221_0_1/0.18),transparent_45%)] opacity-80 transition group-hover:opacity-100" />
      <div className="relative">
        <p className="eyebrow">
          {entry.sector} · {entry.year}
        </p>
        <h3 className="mt-3 text-xl leading-snug sm:mt-4 sm:text-2xl md:text-3xl">{entry.title}</h3>
        <p className="mt-3 max-w-xl text-sm text-paper-dim sm:text-base">{entry.summary}</p>
        <span className="mt-5 inline-block text-[12px] font-bold uppercase tracking-[0.16em] text-red sm:mt-6">
          Se case →
        </span>
      </div>
    </Link>
  );
}
