import { faqs } from "@/lib/content";

export function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-4 sm:py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-1 display text-lg marker:content-none sm:text-xl md:text-2xl">
            <span className="min-w-0 flex-1">{item.question}</span>
            <span className="shrink-0 text-red transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl pb-1 text-sm leading-relaxed text-paper-dim sm:mt-4 sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
