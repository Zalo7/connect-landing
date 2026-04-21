import Image from "next/image";
import { CONTACT, WA_LINK } from "@/lib/constants";

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 opacity-75 lg:h-6 lg:w-6" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 opacity-75 lg:h-6 lg:w-6" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 lg:h-9 lg:w-9" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 lg:h-9 lg:w-9" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 lg:h-9 lg:w-9" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t border-white/8 bg-brand-dark px-8 pb-10 pt-12 lg:px-20 lg:pt-16 lg:pb-16"
      aria-label="Pie de página"
    >
      <div className="mx-auto max-w-5xl lg:flex lg:items-start lg:justify-between">
        {/* Left side */}
        <div>
          <p className="font-display text-[1.1rem] font-light uppercase leading-[1.45] tracking-[.04em] text-white lg:text-[1.4rem]">
            RÁPIDO. EFICIENTE.<br />SEGURO Y SIN CORTES.
          </p>

          <ul className="mt-8 flex flex-col gap-3 lg:mt-10 lg:gap-4">
            <li className="flex items-center gap-3 font-display text-[0.95rem] font-light text-white lg:text-[1.1rem]">
              <IconPin />
              {CONTACT.address}
            </li>
            <li className="flex items-center gap-3 font-display text-[0.95rem] font-light text-white lg:text-[1.1rem]">
              <IconPhone />
              {CONTACT.phone}
            </li>
          </ul>

          <div className="mt-12 flex gap-5 lg:mt-16 lg:gap-6" aria-label="Redes sociales">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white/10 hover:border-white lg:h-16 lg:w-16"
            >
              <IconInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white/10 hover:border-white lg:h-16 lg:w-16"
            >
              <IconFacebook />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white/10 hover:border-white lg:h-16 lg:w-16"
            >
              <IconWhatsApp />
            </a>
          </div>
        </div>

        {/* Logo — right side on desktop */}
        <div className="mt-12 flex justify-center lg:mt-0">
          <Image
            src="/img/logo.png"
            alt="Connect"
            width={520}
            height={292}
            className="h-12 w-auto object-contain lg:h-16"
          />
        </div>
      </div>
    </footer>
  );
}
