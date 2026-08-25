import { processSteps } from "@/lib/content";

export function ProcessList() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step) => (
        <li key={step.number} className="border-t-2 border-red pt-5">
          <p className="text-sm text-muted">{step.number}</p>
          <h3 className="mt-3 text-xl">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-paper-dim">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
