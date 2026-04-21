"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WA_LINK } from "@/lib/constants";
import IconWhatsApp from "@/components/icons/IconWhatsApp";

export default function FloatingWA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1A063A] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-110 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <IconWhatsApp className="h-7 w-7 text-white" />
    </Link>
  );
}
