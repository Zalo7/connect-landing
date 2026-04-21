import Image from "next/image";
import { BENEFITS } from "@/lib/constants";
import Reveal from "@/components/Reveal/Reveal";

export default function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Beneficios"
      className="bg-[#E8DFFF] px-6 pt-48 pb-48 lg:px-20 lg:pt-32 lg:pb-32"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-2 gap-x-8 gap-y-24 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-12">
        {BENEFITS.map((b, i) => (
          <Reveal
            key={b.id}
            delay={i * 120}
            className="flex flex-col items-center gap-8 text-center"
          >
            <div className="flex h-44 w-full items-end justify-center lg:h-auto lg:items-center">
              <Image
                src={b.icon}
                alt=""
                aria-hidden="true"
                width={300}
                height={300}
                className="h-full w-auto object-contain drop-shadow-[0_10px_24px_rgba(85,16,165,0.3)] lg:h-auto lg:w-full lg:max-h-64"
              />
            </div>
            <h3 className="min-h-[3.6rem] font-display text-[1.5rem] font-bold uppercase leading-[1.1] text-[#1A063A] whitespace-pre-line lg:text-[1.75rem]">
              {b.title}
            </h3>
            <p className="font-display text-[1rem] uppercase leading-[1.4] tracking-[.02em] text-[#1A063A] lg:text-[1.1rem]">
              {b.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
