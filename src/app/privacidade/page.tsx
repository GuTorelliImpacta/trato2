import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade | Trato & Butter",
  description: "Como este site trata dados: sem cadastro, sem rastreadores, com mapa do Google incorporado.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 text-white/85">
      <h1 className="font-display text-4xl font-bold text-white">Política de privacidade</h1>
      <p className="mt-6">Este site não tem formulário, cadastro nem ferramentas de análise ou publicidade. Não coletamos dados pessoais diretamente.</p>
      <h2 className="font-display mt-8 text-2xl font-bold text-white">Mapa do Google</h2>
      <p className="mt-3">A seção “Onde estamos” incorpora o Google Maps. Ao carregar a página, o Google pode receber seu endereço IP e usar cookies, conforme a política dele.</p>
      <h2 className="font-display mt-8 text-2xl font-bold text-white">Links externos</h2>
      <p className="mt-3">Os botões para iFood e Instagram levam a sites de terceiros, com suas próprias políticas. Ligações são feitas pelo seu aparelho.</p>
      <h2 className="font-display mt-8 text-2xl font-bold text-white">Seus direitos (LGPD)</h2>
      <p className="mt-3">Você pode pedir informações sobre seus dados ligando para <a className="underline" href={site.phoneHref}>{site.phone}</a>.</p>
    </article>
  );
}
