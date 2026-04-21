import { CONTACT } from "@/lib/constants";
import Reveal from "@/components/Reveal/Reveal";

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[60px] w-[60px] text-brand-purple-bright lg:h-[80px] lg:w-[80px]" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[60px] w-[60px] text-brand-purple-bright lg:h-[80px] lg:w-[80px]" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      <path d="M14.5 2l-3.5 3.5L14.5 9" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[60px] w-[60px] text-brand-purple-bright lg:h-[80px] lg:w-[80px]" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contacto"
      className="bg-brand-lavender px-6 pt-48 pb-48 text-brand-dark lg:px-20 lg:pt-32 lg:pb-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-display text-[2.5rem] font-bold uppercase leading-none text-brand-dark sm:text-[3.5rem] lg:text-left lg:text-[3rem]">
            CONTACTANOS
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-16 flex flex-col gap-12 sm:flex-row sm:justify-center lg:justify-between lg:gap-0 lg:mt-20">
            <li className="flex flex-col items-center gap-4">
              <IconHome />
              <p className="font-display text-[0.85rem] font-bold uppercase tracking-[.12em] text-brand-dark lg:text-[1rem]">VISITANOS</p>
              <p className="font-display text-[0.95rem] text-brand-dark lg:text-[1.1rem]">{CONTACT.address}</p>
            </li>

            <li className="flex flex-col items-center gap-4">
              <IconPhone />
              <p className="font-display text-[0.85rem] font-bold uppercase tracking-[.12em] text-brand-dark lg:text-[1rem]">LLAMANOS</p>
              <a href={`tel:+${CONTACT.phone.replace(/\D/g, "")}`} className="font-display text-[0.95rem] text-brand-dark lg:text-[1.1rem]">
                {CONTACT.phone}
              </a>
            </li>

            <li className="flex flex-col items-center gap-4">
              <IconMail />
              <p className="font-display text-[0.85rem] font-bold uppercase tracking-[.12em] text-brand-dark lg:text-[1rem]">CONTACTANOS</p>
              <a href={`mailto:${CONTACT.email}`} className="font-display text-[0.95rem] text-brand-dark lg:text-[1.1rem]">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
