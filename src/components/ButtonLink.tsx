import Link from "next/link";

const styles = {
  primary:
    "border-red bg-red text-white hover:bg-red-dark hover:border-red-dark",
  outline:
    "border-red bg-transparent text-paper hover:bg-red hover:text-white",
  dark: "border-ink bg-transparent text-ink hover:bg-red hover:border-red hover:text-white",
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center border-2 px-6 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.16em] transition sm:w-auto sm:px-10 sm:text-[13px] ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
