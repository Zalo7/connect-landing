import Link from "next/link";
import { PLANS, WA_LINK } from "@/lib/constants";
import IconWhatsApp from "@/components/icons/IconWhatsApp";
import Reveal from "@/components/Reveal/Reveal";

export default function Plans() {
  return (
    <section
      id="plans"
      aria-label="Planes"
      className="relative px-6 pt-56 pb-56"
      style={{
        background: [
          "radial-gradient(ellipse 120% 45% at 50% 25%, rgba(115,26,241,0.35) 0%, transparent 70%)",
          "radial-gradient(ellipse 110% 40% at 50% 75%, rgba(85,16,165,0.3) 0%, transparent 70%)",
          "#0F0326",
        ].join(", "),
      }}
    >
      {/* Header */}
      <Reveal>
        <header className="text-center lg:text-left lg:max-w-5xl lg:mx-auto">
          <h2 className="font-display text-[2.5rem] font-bold uppercase leading-[1] text-white sm:text-[3.5rem] lg:text-[3rem]">
            ELEGÍ TU VELOCIDAD
          </h2>
          <p className="mt-3 font-display text-[0.95rem] uppercase leading-[1.4] tracking-[.05em] text-white sm:text-lg lg:text-base">
            ENCONTRÁ{" "}
            <strong className="font-bold text-white">EL PLAN IDEAL</strong>{" "}
            PARA TU HOGAR
          </p>
        </header>
      </Reveal>

      {/* Plan cards — single column on mobile, 3 cols on desktop without cards */}
      <div className="mx-auto mt-16 flex max-w-[22rem] flex-col gap-10 sm:max-w-none sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-5xl lg:grid-cols-3 lg:gap-8">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 150}>
            <div className="mx-auto flex w-full max-w-[17rem] flex-col items-center gap-5 lg:max-w-none">
              {/* Plan title — outside the card */}
              <h3 className="font-display text-[2rem] font-normal uppercase leading-none text-white lg:text-[1.75rem]">
                PLAN {plan.id}
              </h3>

              <article
                className="relative flex w-full flex-col items-center gap-6 rounded-[28px] border border-white/15 px-5 py-9 text-center shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                style={{
                  background: [
                    "radial-gradient(ellipse 110% 65% at 50% 0%, rgba(115,26,241,0.9) 0%, transparent 75%)",
                    "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(85,16,165,0.85) 0%, transparent 75%)",
                    "#1A063A",
                  ].join(", "),
                }}
              >
                {/* SI TENÉS — old speed */}
                <div className="flex flex-col items-center gap-1">
                  <p className="font-display text-[0.9rem] font-bold uppercase tracking-[.1em] text-white">
                    SI TENÉS
                  </p>
                  <p className="relative font-display text-[2.5rem] font-bold uppercase leading-none text-white lg:text-[2.75rem]">
                    <span className="relative inline-block">
                      {plan.oldSpeed}
                      <span className="absolute left-[-8%] top-1/2 h-[3px] w-[116%] rotate-[-8deg] bg-[#E8DFFF]" />
                    </span>
                  </p>
                </div>

                {/* AHORA — new speed */}
                <div className="flex flex-col items-center gap-1">
                  <p className="font-display text-[0.9rem] font-bold uppercase tracking-[.1em] text-[#CDDF07]">
                    AHORA
                  </p>
                  <p className="font-display text-[3.25rem] font-bold uppercase leading-none text-[#CDDF07] lg:text-[3.75rem]">
                    {plan.newSpeed}
                  </p>
                  <p className="mt-1 font-display text-[1.35rem] font-bold text-[#CDDF07]">
                    {plan.price}
                  </p>
                </div>
              </article>
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA button */}
      <Reveal delay={200}>
        <div className="mt-16 flex justify-center">
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[320px] items-center justify-between gap-3 whitespace-nowrap rounded-full bg-[#CDDF07] px-8 py-4 font-display text-[0.95rem] font-bold uppercase tracking-[.05em] text-[#1A063A] shadow-[0_4px_20px_rgba(205,223,7,0.25)] transition hover:brightness-110 sm:text-base lg:w-auto lg:max-w-none"
          >
            CONSULTÁ POR TU PLAN
            <IconWhatsApp className="h-6 w-6 shrink-0" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
