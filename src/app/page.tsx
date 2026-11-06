import Image from "next/image";
import { Hours } from "@/components/Hours";
import { MapEmbed } from "@/components/MapEmbed";
import { MenuSection } from "@/components/MenuSection";
import { OpenStatus } from "@/components/OpenStatus";
import { copy, fullAddress, hours, routeHref, schemaDays, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  url: site.url,
  telephone: "+551129961767",
  image: `${site.url}/img/burger-bacon.webp`,
  servesCuisine: ["Hambúrguer", "Churrasco", "Grelhados"],
  hasMenu: `${site.url}/#cardapio`,
  priceRange: "R$ 40–80",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: Object.entries(hours).flatMap(([d, slots]) =>
    slots.map(([opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: schemaDays[Number(d)], opens, closes })),
  ),
  sameAs: [site.instagram],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <Image src="/img/burger-bacon.webp" alt="Hambúrguer com queijo derretido, bacon e molho escuro sobre bandeja de metal" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-40 md:pb-20">
          <span className="drop mb-5 block h-8 w-5 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[#E8B54A]" aria-hidden />
          <h1 className="font-display max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]">{copy.hero.h1}</h1>
          <p className="mt-4 text-lg text-white/85">{copy.hero.sub}</p>
          <div className="mt-6"><OpenStatus /></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.ifood} target="_blank" rel="noopener" className="btn-primary">Fechar o trato</a>
            <a href={site.phoneHref} className="btn-ghost">Ligar {site.phone}</a>
          </div>
          <p className="mt-8 text-sm text-white/65">{site.rating.value}★ no Google · {site.award}</p>
        </div>
      </section>

      <section id="fogo" className="bg-black py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 grid-cols-1 md:grid-cols-2">
          <Image src="/img/carne-fatiada.webp" alt="Carne grelhada fatiada, rosada no centro, sobre tábua escura" width={768} height={1045} sizes="(min-width:768px) 40vw, 90vw" className="mx-auto h-auto max-h-[560px] w-auto max-w-full object-cover" />
          <div>
            <h2 className="font-display text-3xl font-bold md:text-5xl">{copy.fogo.title}</h2>
            <p className="mt-5 max-w-lg text-lg text-white/80">{copy.fogo.text}</p>
          </div>
        </div>
      </section>

      <MenuSection />

      <section id="a-casa" className="bg-black py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-5xl">{copy.casa.title}</h2>
            <p className="mt-5 max-w-lg text-lg text-white/80">{copy.casa.text}</p>
          </div>
          <Image src="/img/burger-fritas.webp" alt="Hambúrguer com bacon e queijo servido com porção de fritas" width={1206} height={1052} sizes="(min-width:768px) 45vw, 90vw" className="h-auto w-full max-w-full object-cover" />
        </div>
      </section>

      <section id="prova" className="border-y border-white/15 bg-[#E8B54A] py-14 text-black">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <h2 className="font-display text-2xl font-bold">{copy.prova.title}</h2>
          <p className="text-lg font-semibold">{copy.prova.rating}</p>
          <p className="text-lg">{copy.prova.award}</p>
        </div>
      </section>

      <section id="pedir" className="bg-[#1c1d1f] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-5xl">{copy.pedir.title}</h2>
            <p className="mt-5 text-lg text-white/80">{copy.pedir.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.ifood} target="_blank" rel="noopener" className="btn-primary">Fechar o trato</a>
              <a href={site.phoneHref} className="btn-ghost">Ligar</a>
            </div>
            <div className="mt-10 space-y-6">
              {copy.faq.map((f) => (
                <div key={f.q}><h3 className="font-display text-lg font-bold">{f.q}</h3><p className="mt-1 text-white/75">{f.a}</p></div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display mb-4 text-2xl font-bold">Horários</h3>
            <Hours />
          </div>
        </div>
      </section>

      <section id="onde-estamos" className="bg-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Onde estamos</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div>
              <address className="not-italic text-lg text-white/85">{fullAddress}</address>
              <p className="mt-3"><a href={site.phoneHref} className="underline">{site.phone}</a></p>
              <a href={routeHref} target="_blank" rel="noopener" className="btn-ghost mt-6">Traçar rota</a>
            </div>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
