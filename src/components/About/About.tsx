import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";

const PILLARS = [
  {
    id: "clients",
    big: "+2000",
    bigSize: "text-[4rem] lg:text-[3.5rem]",
    sub: "PERSONAS CONFÍAN\nEN CONNECT",
  },
  {
    id: "speed",
    big: "VELOCIDAD REAL",
    bigSize: "text-[2rem] lg:text-[2.25rem]",
    sub: "LO QUE CONTRATÁS,\nES LO QUE RECIBÍS",
  },
  {
    id: "support",
    big: "ATENCIÓN LOCAL",
    bigSize: "text-[2rem] lg:text-[2.25rem]",
    sub: "SOPORTE CERCANO,\nRÁPIDO Y RESOLUTIVO",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="Somos Connect"
      className="relative px-6 pt-56 pb-56 text-center lg:px-20 lg:pt-40 lg:pb-40"
      style={{
        background: [
          "radial-gradient(ellipse 130% 55% at 50% 20%, rgba(138,54,255,0.5) 0%, transparent 70%)",
          "radial-gradient(ellipse 120% 50% at 50% 80%, rgba(115,26,241,0.45) 0%, transparent 70%)",
          "#0F0326",
        ].join(", "),
      }}
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-[2.5rem] font-bold uppercase leading-[1] text-white sm:text-[3.5rem] lg:text-left lg:text-[3rem]">
            SOMOS CONNECT
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-[22rem] font-display text-[1rem] leading-[1.5] text-white sm:text-lg lg:mx-0 lg:max-w-[36rem] lg:text-left lg:text-base">
            El primer proveedor de fibra óptica en Quitilipi.
            Desde el inicio apostamos por una{" "}
            <strong className="font-bold">conexión estable, rápida y sin interrupciones,</strong>{" "}
            pensada para acompañar el día a día de cada cliente.
          </p>
        </Reveal>

        {/* Pillars — vertical on mobile, horizontal with arrows on desktop */}
        {/* Mobile: vertical */}
        <div className="mt-20 flex flex-col items-center lg:hidden">
          {PILLARS.map((p, i) => (
            <div key={p.id} className="flex flex-col items-center">
              {i > 0 && (
                <div className="h-24 w-[2px] bg-white/30" aria-hidden="true" />
              )}
              <Reveal delay={i * 150}>
                <div className="flex flex-col items-center gap-3 py-6">
                  <p className={`font-display ${p.bigSize} font-bold uppercase leading-none text-[#CDDF07]`}>
                    {p.big}
                  </p>
                  <p className="whitespace-pre-line font-display text-[0.95rem] font-bold uppercase leading-[1.3] tracking-[.05em] text-white">
                    {p.sub}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal with purple arrows */}
        <Reveal delay={150}>
          <div className="mt-20 hidden items-center justify-center gap-6 lg:flex">
            {PILLARS.map((p, i) => (
              <div key={p.id} className="flex items-center gap-6">
                {i > 0 && (
                  <Image
                    src="/img/flecha-morada.png"
                    alt=""
                    aria-hidden="true"
                    width={200}
                    height={30}
                    className="h-auto w-24 shrink-0 object-contain"
                  />
                )}
                <div className="flex flex-col items-center gap-3 text-center">
                  <p className={`font-display ${p.bigSize} font-bold uppercase leading-none text-[#CDDF07]`}>
                    {p.big}
                  </p>
                  <p className="whitespace-pre-line font-display text-[1.1rem] font-normal uppercase leading-[1.3] tracking-[.05em] text-white">
                    {p.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-10 flex w-full max-w-[18rem] items-center justify-center lg:hidden">
            <Image
              src="/img/phone-wifi.png"
              alt=""
              aria-hidden="true"
              width={493}
              height={616}
              className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(115,26,241,0.5)]"
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-[22rem] text-center font-display text-[1.35rem] font-normal uppercase leading-[1.25] text-white sm:text-[1.75rem] lg:mt-20 lg:max-w-[40rem] lg:text-[1.5rem]">
            PORQUE CUANDO EL INTERNET FUNCIONA BIEN,{" "}
            <strong className="font-bold">TODO FUNCIONA MEJOR.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
