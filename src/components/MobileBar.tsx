import { site } from "@/content/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1.4fr_1fr_1fr] gap-px bg-black/90 md:hidden" role="group" aria-label="Contato rápido">
      <a href={site.ifood} target="_blank" rel="noopener" className="flex min-h-14 items-center justify-center bg-[#E8B54A] text-sm font-bold text-black">Fechar o trato</a>
      <a href={site.phoneHref} className="flex min-h-14 items-center justify-center bg-[#1c1d1f] text-sm font-semibold">Ligar</a>
      <a href="#onde-estamos" className="flex min-h-14 items-center justify-center bg-[#1c1d1f] text-sm font-semibold">Rota</a>
    </div>
  );
}
