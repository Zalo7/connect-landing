"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setHeroSlide } from "@/store/slices/uiSlice";
import { HERO_SLIDES, WA_LINK } from "@/lib/constants";
import IconWhatsApp from "@/components/icons/IconWhatsApp";

export default function Hero() {
  const dispatch = useAppDispatch();
  const current = useAppSelector((s) => s.ui.heroSlide);
  const total = HERO_SLIDES.length;
  const touchRef = useRef(0);
  const currentRef = useRef(current);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setHeroSlide((currentRef.current + 1) % total));
    }, 7000);
    return () => clearInterval(timer);
  }, [dispatch, total]);

  const goTo = (idx: number) =>
    dispatch(setHeroSlide(((idx % total) + total) % total));

  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchRef.current;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  };

  return (
    <section
      id="hero"
      aria-label="Inicio"
      className="relative h-svh overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#1A063A]" />
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 60% at 72% 48%, rgba(115,26,255,0.55) 0%, transparent 70%)",
            "radial-gradient(ellipse 50% 45% at 80% 42%, rgba(85,16,165,0.6) 0%, transparent 65%)",
            "radial-gradient(ellipse 60% 50% at 15% 75%, rgba(115,26,255,0.45) 0%, transparent 70%)",
            "radial-gradient(ellipse 90% 80% at 60% 55%, rgba(42,10,94,0.4) 0%, transparent 80%)",
          ].join(", "),
        }}
      />

      {/* ═══════ SLIDE 1 — Fiber Cable ═══════ */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          current === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Cable — mobile */}
        <div className="absolute right-0 bottom-0 w-[38%] max-w-[200px] h-[65%] sm:w-[32%] sm:max-w-[240px] lg:hidden">
          <Image
            src="/img/hero-fiber.png"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none object-contain object-bottom drop-shadow-[0_0_40px_rgba(115,26,255,0.25)]"
            priority
          />
        </div>
        {/* Cable — desktop */}
        <div className="absolute right-[-2%] bottom-0 hidden h-[82%] w-[38%] max-w-[500px] lg:block">
          <Image
            src="/img/fibra-desktop-hero.png"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none object-contain object-bottom drop-shadow-[0_0_60px_rgba(115,26,255,0.35)]"
            priority
          />
        </div>

        {/* Text */}
        <div className="relative z-10 h-full px-7 pt-[30vh] sm:px-10 lg:px-20">
          <div className="w-[55%] sm:w-[50%] lg:w-[42%]">
            <h2 className="font-display font-bold uppercase text-white text-[2.25rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3rem]">
              TU
              <br />
              CONEXIÓN
              <br />
              SUBE DE
              <br />
              NIVEL
            </h2>

            <p className="mt-4 font-display font-bold uppercase text-[#CDDF07] text-[1.25rem] leading-[1.15] sm:text-2xl lg:text-[1.5rem]">
              RÁPIDO Y
              <br />
              SIN CORTES
            </p>

            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1A063A] px-5 py-2.5 font-display text-[0.65rem] font-bold uppercase tracking-[.12em] text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition hover:brightness-125 sm:text-xs lg:text-xs"
            >
              CONSULTAR AHORA
              <IconWhatsApp className="h-4 w-4 shrink-0" />
            </Link>

            {/* Arrow → prev slide (mobile only) */}
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              aria-label="Slide anterior"
              className="mt-12 block transition-transform hover:-translate-x-1 lg:hidden"
            >
              <Image
                src="/img/flecha-hero.png"
                alt=""
                aria-hidden="true"
                width={88}
                height={87}
                className="h-5 w-auto object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      {/* ═══════ SLIDE 2 — Progress Bar ═══════ */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          current === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Progress bar — desktop, right side like fiber cable */}
        <div className="absolute right-[15%] bottom-[15%] hidden h-auto w-[35%] max-w-[480px] lg:block">
          <Image
            src="/img/hero-progress.png"
            alt=""
            aria-hidden="true"
            width={600}
            height={80}
            className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(205,223,7,0.3)]"
          />
        </div>

        <div className="relative z-10 h-full px-7 pt-[30vh] sm:px-10 lg:px-20">
          <div className="w-[80%] sm:w-[55%] lg:w-[42%]">
            <h2 className="font-display font-bold uppercase text-white text-[2rem] leading-[1.1] sm:text-[2.5rem] lg:text-[3rem]">
              MÁS
              <br />
              VELOCIDAD,
            </h2>
            <h2 className="mt-3 font-display font-bold uppercase text-white text-[2rem] leading-[1.1] sm:text-[2.5rem] lg:text-[3rem]">
              MÁS
              <br />
              RENDIMIENTO
            </h2>

            {/* Progress bar — mobile only */}
            <Image
              src="/img/hero-progress.png"
              alt=""
              aria-hidden="true"
              width={600}
              height={80}
              className="mt-3 block h-auto w-56 max-w-full lg:hidden"
            />

            <Link
              href="#plans"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#CDDF07] px-5 py-2.5 font-display text-[0.65rem] font-bold uppercase tracking-[.12em] text-[#1A063A] shadow-[0_4px_20px_rgba(205,223,7,0.3)] transition hover:brightness-110 sm:text-xs sm:px-6 lg:text-xs"
            >
              VER PLANES
            </Link>

            {/* Arrow → prev slide (mobile only) */}
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              aria-label="Slide anterior"
              className="mt-12 block transition-transform hover:-translate-x-1 lg:hidden"
            >
              <Image
                src="/img/flecha-hero.png"
                alt=""
                aria-hidden="true"
                width={88}
                height={87}
                className="h-5 w-auto object-contain scale-x-[-1]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Side arrows (desktop) ── */}
      <button
        type="button"
        onClick={() => goTo(current - 1)}
        aria-label="Slide anterior"
        className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 rounded-lg bg-[#1A063A] p-3 transition-transform hover:-translate-x-1 lg:block"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        aria-label="Slide siguiente"
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rounded-lg bg-[#1A063A] p-3 transition-transform hover:translate-x-1 lg:block"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* ── Dots ── */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5"
        role="tablist"
        aria-label="Slides"
      >
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === current}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
