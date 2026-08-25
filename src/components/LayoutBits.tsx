export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-2xl leading-tight sm:text-3xl md:text-5xl">{title}</h2>
      <div className={`mt-4 h-0.5 w-16 bg-red ${align === "center" ? "mx-auto" : ""}`} />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-paper-dim sm:mt-6 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-soft">
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-3xl leading-tight sm:text-4xl md:text-6xl">{title}</h1>
        <div className="mt-5 h-0.5 w-20 bg-red" />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper-dim sm:mt-6 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
