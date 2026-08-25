import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "light", className = "h-8 w-auto" }: LogoProps) {
  const src = variant === "light" ? "/branding/webble-white.svg" : "/branding/webble.svg";

  return (
    <Link href="/" aria-label="Webble startsida" className="inline-flex items-center">
      {/* SVG wordmark — img keeps the red accent intact on both backgrounds */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Webble" width={200} height={38} className={className} />
    </Link>
  );
}
