"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 md:px-8 md:py-4">
        <Logo className="h-7 w-auto sm:h-8" />
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Huvudmeny">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] font-bold uppercase tracking-[0.16em] transition xl:text-[13px] xl:tracking-[0.18em] ${
                  active ? "text-red" : "text-paper/80 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="border-2 border-red px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-paper transition hover:bg-red xl:px-6"
          >
            Starta projekt
          </Link>
        </nav>
        <button
          type="button"
          className="flex min-h-11 items-center gap-3 text-paper lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="display text-[12px] tracking-[0.22em] sm:text-[13px]">
            {open ? "Stäng" : "Meny"}
          </span>
          <span className="relative block h-4 w-7" aria-hidden>
            <span
              className={`absolute right-0 left-0 h-0.5 bg-paper transition ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1/2 right-0 left-0 h-0.5 -translate-y-1/2 bg-paper transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 bg-red transition ${
                open ? "top-1/2 right-0 left-0 -rotate-45" : "right-0 bottom-0 w-1/2"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-x-0 bottom-0 top-[57px] z-40 flex flex-col overflow-y-auto bg-ink px-6 py-8 lg:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobilmeny">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-3xl text-paper sm:text-4xl"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={close}
              className="mt-4 inline-flex min-h-12 items-center justify-center border-2 border-red bg-red text-[13px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Starta projekt
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
