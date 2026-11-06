import type { Metadata, Viewport } from "next";
import { DM_Sans, Zilla_Slab } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { site } from "@/content/site";

const zilla = Zilla_Slab({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-zilla", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Trato & Butter — Hambúrguer e carnes na parrilla em Tremembé",
  description: "Hambúrguer artesanal e carnes na parrilla a carvão em Tremembé, zona norte de São Paulo. Veja os horários e peça pelo iFood.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Trato & Butter — Hambúrguer e carnes na parrilla em Tremembé",
    description: "Hambúrguer artesanal e carnes na parrilla a carvão, na zona norte de São Paulo.",
    locale: "pt_BR", type: "website", siteName: site.name, images: ["/img/burger-bacon.webp"],
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${zilla.variable} ${dm.variable}`}>
      <body>
        <a href="#conteudo" className="skip">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
