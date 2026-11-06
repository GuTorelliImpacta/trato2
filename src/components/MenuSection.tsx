"use client";
import Image from "next/image";
import { useState } from "react";
import { copy, menuCategories, menuItems, site } from "@/content/site";

export function MenuSection() {
  const [cat, setCat] = useState<string>(menuCategories[0]);
  const items = menuItems.filter((i) => i.category === cat);
  return (
    <section id="cardapio" className="bg-[#1c1d1f] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-5xl">{copy.menu.title}</h2>
        <p className="mt-3 max-w-xl text-white/70">{copy.menu.note}</p>

        {menuItems.length > 0 ? (
          <>
            <div role="tablist" aria-label="Categorias do cardápio" className="mt-8 flex flex-wrap gap-2">
              {menuCategories.map((c) => (
                <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
                  className={`min-h-11 border px-4 text-sm font-semibold ${cat === c ? "border-[#E8B54A] bg-[#E8B54A] text-black" : "border-white/30"}`}>
                  {c}
                </button>
              ))}
            </div>
            <ul className="mt-8 grid gap-px bg-white/15 md:grid-cols-2">
              {items.map((i) => (
                <li key={i.name} className="bg-[#1c1d1f] p-5">
                  <div className="flex justify-between gap-4">
                    <h3 className="font-display text-xl font-bold">{i.name}</h3>
                    {i.price && <span className="text-[#E8B54A]">{i.price}</span>}
                  </div>
                  <p className="mt-1 text-white/70">{i.description}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="grid grid-cols-2 gap-3">
              <Image src="/img/burger-fritas.webp" alt="Hambúrguer com bacon e queijo servido com porção de fritas" width={1206} height={1052} sizes="(min-width:768px) 30vw, 50vw" className="aspect-[4/5] w-full object-cover" />
              <Image src="/img/burger-bacon.webp" alt="Hambúrguer com queijo derretido, bacon e molho escuro" width={1206} height={930} sizes="(min-width:768px) 30vw, 50vw" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div>
              <p className="text-lg text-white/85">{copy.menu.emptyText}</p>
              <a href={site.ifood} target="_blank" rel="noopener" className="btn-primary mt-6">Ver cardápio completo no iFood</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
