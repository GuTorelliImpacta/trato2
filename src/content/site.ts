export const site = {
  name: "Trato & Butter",
  url: "https://trato-e-butter.vercel.app",
  phone: "(11) 2996-1767",
  phoneHref: "tel:+551129961767",
  instagram: "https://www.instagram.com/tratobutter",
  instagramHandle: "@tratobutter",
  ifood:
    "https://www.ifood.com.br/delivery/sao-paulo-sp/trato-e-butter-vila-albertina/47318918-c0e1-4230-a55c-2c74084aa305",
  address: {
    street: "R. Maria Amália Lopes Azevedo, 629",
    district: "Tremembé",
    city: "São Paulo",
    state: "SP",
    zip: "02350-001",
  },
  rating: { value: "4,7", count: 376 },
  price: "R$ 40–80 por pessoa",
  award: "Top 50 Hamburguerias 2026, Guia do Hambúrguer",
} as const;

export const fullAddress = `${site.address.street} — ${site.address.district}, ${site.address.city} – ${site.address.state}, ${site.address.zip}`;
export const mapQuery = `Trato & Butter, ${site.address.street}, ${site.address.district}, ${site.address.city}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
export const routeHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

/** Horários provisórios (print do Google). 0 = domingo. Editar aqui altera site, status e SEO. */
export type Slot = [string, string];
export const hours: Record<number, Slot[]> = {
  0: [["08:00", "17:00"], ["18:00", "22:00"]],
  1: [["08:00", "15:30"]],
  2: [["08:00", "15:30"], ["18:00", "22:00"]],
  3: [["08:00", "15:30"], ["18:00", "22:00"]],
  4: [["08:00", "15:30"], ["18:00", "22:00"]],
  5: [["08:00", "15:30"], ["18:00", "22:00"]],
  6: [["08:00", "17:00"], ["18:00", "22:00"]],
};
export const dayNames = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
export const schemaDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const copy = {
  hero: {
    h1: "Hambúrguer e carnes na parrilla a carvão, em Tremembé.",
    sub: "Preço de bairro, fogo de verdade.",
  },
  fogo: {
    title: "Tudo passa pela parrilla a carvão.",
    text: "Aqui a carne vai para a brasa. Hambúrguer artesanal, cortes produzidos na casa (gado Angus), espetos, frango assado e churrasco, feitos na parrilla a carvão. A costelinha e o brisket são defumados com lenha de maçã.",
  },
  menu: {
    title: "O que sai da brasa",
    note: `Do prato do dia aos cortes especiais, dos espetos aos drinks. Faixa de preço: ${site.price} (informado por clientes no Google).`,
  },
  casa: {
    title: "Casa de bairro, fogo de verdade",
    text: "Casa de carnes, restaurante, bar e hamburgueria na Rua Maria Amália Lopes Azevedo, em Tremembé. A comida é feita na parrilla a carvão.",
  },
  prova: {
    title: "Quem já passou por aqui",
    rating: `${site.rating.value} no Google, com ${site.rating.count} avaliações.`,
    award: `${site.award}.`,
  },
  pedir: {
    title: "Peça pelo iFood ou ligue",
    text: "Entrega pelo iFood. Se preferir, ligue e fale com a casa.",
  },
  faq: [
    { q: "Tem delivery?", a: "Sim, pelo iFood. Use o botão “Fechar o trato”." },
    { q: "Qual a faixa de preço?", a: `${site.price}, segundo clientes no Google. O prato do dia fica na faixa de R$ 30 a R$ 44.` },
    { q: "Os cortes vêm com acompanhamento?", a: "Sim. Cada corte especial vem com dois acompanhamentos à escolha." },
    { q: "Tem opção vegetariana?", a: "Os espetos de pão de alho, queijo coalho e mussarela defumada são vegetarianos, além de acompanhamentos como berinjela italiana e abobrinha defumada." },
  ],
};
