import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

/*
  Big John PRO se carga via @font-face en globals.css.
  Cuando tengas los archivos, copialos a src/fonts/:
    BigJohnPRO-Regular.woff2
    BigJohnPRO-Bold.woff2

  Opcionalmente podés migrar a next/font/local descomentando
  el bloque en globals.css y reemplazando esto por:
    import localFont from "next/font/local"
    const bigJohnPro = localFont({ src: [...], variable: "--font-big-john" })
*/

export const metadata: Metadata = {
  title: "Connect – Tu conexión sube de nivel",
  description:
    "El primer proveedor de fibra óptica en Quitilipi. Velocidad real, sin cortes y con soporte local.",
  keywords: ["fibra óptica", "internet", "Quitilipi", "Connect", "Chaco"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
