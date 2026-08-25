"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileDock() {
  const pathname = usePathname();
  if (pathname === "/kontakt") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <Link
        href="/kontakt"
        className="flex min-h-12 items-center justify-center border-2 border-red bg-red text-[12px] font-bold uppercase tracking-[0.16em] text-white"
      >
        Starta projekt
      </Link>
    </div>
  );
}
