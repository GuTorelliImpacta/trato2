"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import { brl, menuTabs, topItems, type Item, type Tag } from "@/content/menu";
import { copy, site } from "@/content/site";

const tagLabel: Record<Tag, string> = { top: "Mais pedido", veg: "Vegetariano", hot: "Picante" };
const tagStyle: Record<Tag, string> = {
  top: "bg-[#E8B54A] text-black",
  veg: "border border-[#6fcf7c] text-[#6fcf7c]",
  hot: "border border-[#e2754a] text-[#e2754a]",
};

function Row({ item }: { item: Item }) {
  return (
    <li className="py-3">
      <div className="flex items-baseline gap-2">
        <h4 className="font-display text-lg font-bold leading-tight">{item.name}</h4>
        {item.detail && <span className="text-sm text-white/55">{item.detail}</span>}
        <span aria-hidden className="mb-1 min-w-4 flex-1 self-end border-b border-dotted border-white/25" />
        <span className="font-semibold tabular-nums text-[#E8B54A]">{brl(item.price)}</span>
      </div>
      {item.description && <p className="mt-1 max-w-prose text-sm leading-relaxed text-white/70">{item.description}</p>}
      {item.tags && (
        <p className="mt-1.5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => <span key={t} className={`px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${tagStyle[t]}`}>{tagLabel[t]}</span>)}
        </p>
      )}
    </li>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(menuTabs[0].id);
  const listRef = useRef<HTMLDivElement>(null);

  const go = (id: string) => { setActive(id); requestAnimationFrame(() => document.getElementById(`tab-${id}`)?.focus()); };
  const onKey = (e: KeyboardEvent, i: number) => {
    const n = menuTabs.length;
    if (e.key === "ArrowRight") { e.preventDefault(); go(menuTabs[(i + 1) % n].id); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(menuTabs[(i - 1 + n) % n].id); }
  };
  const jump = (label: string) => { const t = menuTabs.find((x) => x.label === label); if (t) { setActive(t.id); listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); } };

  return (
    <section id="cardapio" className="bg-[#1c1d1f] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-5xl">{copy.menu.title}</h2>
        <p className="mt-3 max-w-2xl text-white/70">{copy.menu.note}</p>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-[#E8B54A]">Mais pedidos</h3>
        <ul className="-mx-5 mt-4 flex snap-x gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-6">
          {topItems.map((i) => (
            <li key={i.name + i.tab} className="min-w-[10.5rem] snap-start md:min-w-0">
              <button type="button" onClick={() => jump(i.tab)} className="h-full w-full border border-white/15 bg-black/40 p-4 text-left hover:border-[#E8B54A]">
                <span className="text-xs text-white/55">{i.tab}</span>
                <span className="font-display mt-1 block text-lg font-bold leading-tight">{i.name.replace("*", "")}</span>
                <span className="mt-2 block font-semibold text-[#E8B54A]">{brl(i.price)}</span>
              </button>
            </li>
          ))}
        </ul>

        <div ref={listRef} className="scroll-mt-4" />
        <div role="tablist" aria-label="Seções do cardápio" className="-mx-5 mt-10 flex snap-x gap-2 overflow-x-auto px-5 pb-3 md:mx-0 md:flex-wrap md:px-0">
          {menuTabs.map((t, i) => (
            <button key={t.id} id={`tab-${t.id}`} role="tab" type="button" aria-selected={active === t.id} aria-controls={`panel-${t.id}`} tabIndex={active === t.id ? 0 : -1}
              onClick={() => setActive(t.id)} onKeyDown={(e) => onKey(e, i)}
              className={`min-h-11 shrink-0 snap-start whitespace-nowrap border px-4 text-sm font-semibold ${active === t.id ? "border-[#E8B54A] bg-[#E8B54A] text-black" : "border-white/30 hover:border-white"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {menuTabs.map((t) => (
          <div key={t.id} id={`panel-${t.id}`} role="tabpanel" aria-labelledby={`tab-${t.id}`} hidden={active !== t.id} className="mt-6">
            {t.intro && <p className="mb-4 max-w-2xl text-white/80">{t.intro}</p>}
            {t.groups.map((g, gi) => (
              <div key={gi} className={gi > 0 ? "mt-8" : ""}>
                {g.title && <h3 className="font-display text-2xl font-bold">{g.title}</h3>}
                {g.note && <p className="mt-1 text-sm text-white/60">{g.note}</p>}
                {g.chips && (
                  <>
                    <p className="mt-3 text-sm font-semibold text-[#E8B54A]">{g.chipsLabel}</p>
                    <ul className="mt-2 flex flex-wrap gap-2 pb-4">
                      {g.chips.map((c) => (
                        <li key={c.name} className="flex items-center gap-2 border border-white/20 px-3 py-2 text-sm">
                          {c.name}
                          {c.tags?.map((t) => <span key={t} className={`px-1.5 py-0.5 text-[10px] font-semibold uppercase ${tagStyle[t]}`}>{tagLabel[t]}</span>)}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <ul className="mt-2 grid gap-x-12 divide-y divide-white/10 md:grid-cols-2 md:divide-y-0">
                  {g.items.map((i) => <Row key={i.name} item={i} />)}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <p className="mt-10 text-sm text-white/55">Vegetariano e picante estão sinalizados nos itens. Valores de referência do cardápio da casa, sujeitos a alteração. No delivery, os preços são os do iFood.</p>
        <a href={site.ifood} target="_blank" rel="noopener" className="btn-primary mt-6">Pedir pelo iFood</a>
      </div>
    </section>
  );
}
