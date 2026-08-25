import { marqueeItems } from "@/lib/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-line bg-ink-soft py-4">
      <div className="marquee-track flex w-max gap-10 pr-10 text-sm font-bold uppercase tracking-[0.22em] text-ink/45">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}
            <span className="text-red">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
