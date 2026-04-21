"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openNav, closeNav } from "@/store/slices/uiSlice";

const NAV_LINKS = [
  { href: "#hero",     label: "HOME" },
  { href: "#plans",    label: "PLANES" },
  { href: "#about",    label: "NOSOTROS" },
  { href: "#contact",  label: "CONTACTO" },
];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navOpen  = useAppSelector((s) => s.ui.navOpen);
  const pathname = usePathname();
  const showMarquee = pathname === "/";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Nav bar */}
        <nav className="flex items-center justify-between bg-[#1A063A] px-6 py-4 lg:px-12">
          <Link href="/" aria-label="Connect – inicio">
            <Image
              src="/img/logo.png"
              alt="Connect"
              width={520}
              height={292}
              className="h-10 w-auto object-contain lg:h-12"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-display text-sm uppercase tracking-[.12em] text-white transition hover:text-[#CDDF07]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => dispatch(openNav())}
            aria-label="Abrir menú"
            aria-expanded={navOpen}
            className="flex flex-col gap-[6px] p-2 lg:hidden"
          >
            <span className="block h-[2.5px] w-7 rounded-full bg-white" />
            <span className="block h-[2.5px] w-7 rounded-full bg-white" />
            <span className="block h-[2.5px] w-7 rounded-full bg-white" />
          </button>
        </nav>

        {/* Marquee — only on home */}
        {showMarquee && <div className="overflow-hidden bg-[#E8DFFF] flex items-center min-h-[52px]">
          <div className="animate-marquee flex whitespace-nowrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="flex shrink-0 items-center">
                <Link
                  href="/registro"
                  className="font-display text-md font-bold uppercase tracking-[.15em] text-[#1A063A] underline underline-offset-2"
                >
                  PRE REGISTRATE
                </Link>
                <span className="mx-4 text-sm font-bold text-[#1A063A]">-</span>
                <span className="font-display text-md font-bold uppercase tracking-[.15em] text-[#1A063A]">
                  PRÓXIMAMENTE EN SÁENZ PEÑA
                </span>
                <span className="mx-4 text-sm font-bold text-[#1A063A]">-</span>
              </span>
            ))}
          </div>
        </div>}
      </header>

      {/* Overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/50"
          onClick={() => dispatch(closeNav())}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[200] flex w-[min(75vw,280px)] flex-col gap-10 rounded-l-2xl bg-[#1A063A] px-10 pt-24 pb-16 transition-transform duration-300 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menú de navegación"
      >
        <button
          onClick={() => dispatch(closeNav())}
          aria-label="Cerrar menú"
          className="absolute right-6 top-6 text-2xl leading-none text-white"
        >
          ✕
        </button>

        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => dispatch(closeNav())}
            className="font-display text-lg font-light uppercase tracking-[.15em] text-white"
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
