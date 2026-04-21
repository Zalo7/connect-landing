"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleFaq } from "@/store/slices/uiSlice";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const dispatch  = useAppDispatch();
  const openId    = useAppSelector((s) => s.ui.faqOpenId);

  return (
    <section
      id="faq"
      aria-label="Preguntas frecuentes"
      className="relative px-6 pt-48 pb-48"
      style={{
        background: [
          "radial-gradient(ellipse 120% 45% at 50% 15%, rgba(115,26,241,0.35) 0%, transparent 70%)",
          "radial-gradient(ellipse 110% 40% at 50% 85%, rgba(85,16,165,0.3) 0%, transparent 70%)",
          "#0F0326",
        ].join(", "),
      }}>
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-[2.5rem] font-bold uppercase tracking-[.02em] text-white text-center leading-none mb-10 sm:text-[3.5rem] lg:text-left lg:text-[3rem] lg:mb-14">
          PREGUNTAS FRECUENTES
        </h2>

        <div className="flex flex-col lg:max-w-3xl">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-white/14">
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-[0.95rem] font-bold uppercase tracking-[.06em] text-white lg:text-[1.1rem] lg:py-6"
                  aria-expanded={isOpen}
                  onClick={() => dispatch(toggleFaq(item.id))}
                >
                  {item.question}
                  <span
                    className={`flex-shrink-0 text-[22px] leading-none text-brand-yellow transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden font-display text-[0.9rem] text-white/65 leading-[1.65] transition-all duration-300 lg:text-[1rem] ${
                    isOpen ? "max-h-60 pb-4" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
