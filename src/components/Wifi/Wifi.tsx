import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";

export default function Wifi() {
  return (
    <section
      id="wifi"
      aria-label="WiFi libre en la ciudad"
      className="relative px-6 pt-56 pb-56 lg:px-20 lg:pt-40 lg:pb-40"
      style={{
        background: [
          "radial-gradient(ellipse 90% 50% at 50% 20%, rgba(115,26,241,0.28) 0%, transparent 65%)",
          "radial-gradient(ellipse 70% 40% at 50% 80%, rgba(85,16,165,0.25) 0%, transparent 70%)",
          "#1A063A",
        ].join(", "),
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Title + description */}
        <Reveal>
          <h2 className="mx-auto max-w-[16rem] text-center font-display text-[2.5rem] font-bold uppercase leading-none text-white sm:text-[3.5rem] sm:max-w-none lg:text-left lg:text-[3.5rem]">
            WIFI LIBRE EN LA CIUDAD
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-[20rem] text-center font-display text-[1rem] uppercase leading-[1.4] tracking-[.03em] text-white sm:text-lg lg:mx-0 lg:max-w-none lg:text-left">
            <strong className="font-bold">CONECTATE GRATIS</strong>{" "}
            EN NUESTROS PUNTOS ESTRATÉGICOS.
          </p>
        </Reveal>

        {/* Wifi image + branches + locations */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center lg:mt-20">
            {/* Wifi image — large */}
            <div className="flex w-full max-w-[14rem] items-center justify-center lg:max-w-[28rem]">
              <Image
                src="/img/wifi-neon.png"
                alt=""
                aria-hidden="true"
                width={514}
                height={398}
                className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(115,26,241,0.6)]"
              />
            </div>

            {/* Branch arrows — overlapping wifi image */}
            <div className="-mt-2 flex w-full items-start justify-center gap-16 lg:-mt-4 lg:gap-32" aria-hidden="true">
              <Image
                src="/img/flecha-izquierda.png"
                alt=""
                width={500}
                height={120}
                className="h-auto w-[35%] max-w-[20rem] object-contain"
              />
              <Image
                src="/img/flecha-derecha.png"
                alt=""
                width={500}
                height={120}
                className="h-auto w-[35%] max-w-[20rem] object-contain"
              />
            </div>

            {/* Location labels */}
            <div className="mt-2 flex w-full items-start justify-between px-4 lg:px-12" role="list">
              <h3
                className="font-display text-[1.35rem] font-bold uppercase leading-[1.1] text-white lg:text-[2rem]"
                role="listitem"
              >
                ESPACIO
                <br />
                VERDE
              </h3>
              <h3
                className="text-right font-display text-[1.35rem] font-bold uppercase leading-[1.1] text-white lg:text-[2rem]"
                role="listitem"
              >
                PLAZA
                <br />
                CENTRAL
              </h3>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
