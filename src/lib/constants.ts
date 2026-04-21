export const WA_NUMBER = "5493644587317";
export const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export const CONTACT = {
  address: "Buenos Aires 48, Quitilipi",
  phone: "+ 549 364 – 4587317",
  email: "administracion@connectsrl.ar",
} as const;

export const PLANS = [
  { id: 1, oldSpeed: "25 MB", newSpeed: "50 MB",  price: "$24.000" },
  { id: 2, oldSpeed: "50 MB", newSpeed: "100 MB", price: "$28.000" },
  { id: 3, oldSpeed: "100 MB", newSpeed: "300 MB", price: "$35.000" },
] as const;

export const BENEFITS = [
  {
    id: "speed",
    icon: "/img/icon-lightning.png",
    title: "VELOCIDAD\nREAL",
    desc: "Sin letra chica. Lo que contratás, es lo que recibís.",
  },
  {
    id: "stable",
    icon: "/img/icon-signal.png",
    title: "CONEXIÓN\nESTABLE",
    desc: "Sin cortes. Sin interrupciones. Internet que acompaña tu rutina.",
  },
  {
    id: "network",
    icon: "/img/icon-cable.png",
    title: "RED DE\nCALIDAD",
    desc: "Red de fibra óptica para una conexión superior.",
  },
  {
    id: "support",
    icon: "/img/icon-headset.png",
    title: "SOPORTE DE\nCALIDAD",
    desc: "Atención personalizada que resuelve.",
  },
] as const;

export const HERO_SLIDES = [
  {
    id: "slide-1",
    title: "TU\nCONEXIÓN\nSUBE DE\nNIVEL",
    subtitle: "RÁPIDO Y\nSIN CORTES",
    cta: { label: "CONSULTAR AHORA", href: WA_LINK, external: true, icon: "whatsapp" as const },
    showImage: true,
  },
  {
    id: "slide-2",
    title: "MÁS\nVELOCIDAD,\nMÁS\nRENDIMIENTO",
    subtitle: null,
    cta: { label: "VER PLANES", href: "#plans", external: false, icon: null },
    showImage: false,
  },
] as const;

export const MARQUEE_TEXT = "PRE REGISTRATE  -  PRÓXIMAMENTE EN SÁENZ PEÑA";

export const FAQ_ITEMS = [
  {
    id: "q1",
    question: "¿Cómo me conecto a Connect?",
    answer:
      "Escribinos por WhatsApp o visitanos en Buenos Aires 48, Quitilipi. Te asesoramos y coordinamos la instalación sin costo adicional.",
  },
  {
    id: "q2",
    question: "¿La velocidad que contrato es la que recibo?",
    answer:
      "Sí. Connect garantiza velocidad real sin letra chica. Lo que contratás es lo que recibís, medido en condiciones normales de uso.",
  },
  {
    id: "q3",
    question: "¿Cuáles son los puntos de WiFi libre?",
    answer:
      "Actualmente contamos con dos puntos de acceso gratuito: Espacio Verde y Plaza Central, ambos en Quitilipi.",
  },
  {
    id: "q4",
    question: "¿Cómo es el soporte técnico?",
    answer:
      "Tenemos soporte local con atención personalizada. Podés comunicarte por WhatsApp, teléfono o correo. Resolvemos rápido y sin derivarte a call centers.",
  },
  {
    id: "q5",
    question: "¿Puedo mejorar mi plan actual?",
    answer:
      "Sí. Si ya sos cliente podés hacer el upgrade al plan superior sin penalidades. Consultanos y te explicamos cómo.",
  },
] as const;
