/** Cardápio transcrito de fotos do menu impresso da casa (publicadas no Google). Foto com ~2 anos: confirmar preços. */
export type Tag = "top" | "veg" | "hot";
export type Item = { name: string; detail?: string; description?: string; price: number; tags?: Tag[]; note?: string };
export type Group = { title?: string; note?: string; chips?: Item[]; chipsLabel?: string; items: Item[] };
export type Tab = { id: string; label: string; intro?: string; groups: Group[] };

const dia = "arroz soltinho, feijão de mãe, salada ou batata frita";

export const menuTabs: Tab[] = [
  {
    id: "dia", label: "Dia a dia",
    intro: "Almoço e jantar, prato feito na brasa.",
    groups: [{ items: [
      { name: "Almoço goiano", description: "Arroz soltinho, feijão de mãe, farofinha da casa, vinagrete e 2 espetos Angus tradicionais.", price: 38, tags: ["top"] },
      { name: "Omelete com queijo", description: `Com ${dia}.`, price: 30 },
      { name: "Contra filé acebolado", description: `Contra filé Angus 120 g grelhado no fogo, ${dia}.`, price: 36 },
      { name: "Contra filé a cavalo", description: `Contra filé Angus 120 g grelhado no fogo, ${dia}.`, price: 36 },
      { name: "Parmegiana de carne", description: "Bife de alcatra Angus empanado, molho de tomate feito na casa, mozarela fior de latte, arroz soltinho e batata frita.", price: 44 },
      { name: "Parmegiana de frango", description: "Filé de frango empanado, molho de tomate feito na casa, mozarela fior de latte, arroz soltinho e batata frita.", price: 38 },
      { name: "Escalope ao molho madeira", description: "Arroz soltinho e batata frita.", price: 34 },
      { name: "Filé de frango", description: `Grelhado no fogo, com ${dia}.`, price: 30 },
      { name: "Bife à milanesa", description: `Com ${dia}.`, price: 35 },
      { name: "Frango à milanesa", description: `Com ${dia}.`, price: 32 },
      { name: "Sobrecoxa de frango", description: `Com ${dia}.`, price: 32 },
    ] }],
  },
  {
    id: "cortes", label: "Cortes especiais",
    intro: "Todos os cortes são produzidos na casa, de animais da raça Angus e, esporadicamente, Wagyu. Cada corte vem com dois acompanhamentos à sua escolha.",
    groups: [{ items: [
      { name: "Bife ancho", detail: "300 g", price: 80, tags: ["top"] },
      { name: "Bife chorizo", detail: "300 g", price: 76 },
      { name: "Picanha", detail: "300 g", price: 82 },
      { name: "Flat iron", detail: "300 g", price: 76 },
      { name: "Baby beef", detail: "300 g", price: 76 },
      { name: "Fraldinha", detail: "300 g", price: 74 },
      { name: "Assado de tira", detail: "300 g", price: 70 },
      { name: "Butter beef", detail: "300 g", price: 110 },
      { name: "Denver steak", detail: "300 g", price: 80 },
      { name: "Cowboy steak", detail: "300 g", price: 58 },
      { name: "Salmão", detail: "300 g", price: 75 },
      { name: "Dry aged", detail: "300 g", price: 165 },
      { name: "Short rib", detail: "600 g", price: 140 },
      { name: "Prime rib", detail: "700 g", price: 152 },
    ] }],
  },
  {
    id: "entradas", label: "Entradas",
    groups: [{ items: [
      { name: "Bolinho de carne", detail: "6 un", price: 34 },
      { name: "Croquete", detail: "8 un", price: 30 },
      { name: "Frango à passarinho", detail: "300 g", price: 30 },
      { name: "Linguiça da casa", detail: "300 g", price: 50, tags: ["top"] },
      { name: "Linguiça apimentada", detail: "300 g", price: 30, tags: ["hot"] },
      { name: "Batata palito", detail: "200 g", price: 15 },
      { name: "Porqueta", detail: "300 g", price: 30 },
      { name: "Tulipa", detail: "300 g", price: 34 },
      { name: "Filé mignon", detail: "300 g", price: 60 },
      { name: "Lagarto acebolado", detail: "300 g", price: 60 },
    ] }],
  },
  {
    id: "brasa", label: "Defumados e espetos",
    groups: [
      { title: "American BBQ", items: [
        { name: "Costelinha defumada", description: "Costela de porco defumada com lenha de maçã, coberta com molho barbecue agridoce. Acompanha fritas e maionese da casa (até 2 pessoas).", price: 120, tags: ["top"] },
        { name: "Brisket", detail: "300 g", description: "Peito bovino defumado com lenha de maçã, saboroso e suculento. Acompanha fritas e maionese da casa.", price: 75 },
      ] },
      { title: "Espetos tradicionais", note: "Os espetos marcados com * não entram no prato do dia a dia.", chipsLabel: "R$ 10 cada",
        chips: [
          { name: "Carne Angus", price: 10 }, { name: "Frango", price: 10 }, { name: "Kafta", price: 10 }, { name: "Misto", price: 10 },
          { name: "Linguiça toscana", price: 10 }, { name: "Linguiça da casa", price: 10 }, { name: "Coração", price: 10 },
          { name: "Linguiça apimentada", price: 10, tags: ["hot"] },
          { name: "Pão de alho", price: 10, tags: ["veg"] }, { name: "Queijo coalho", price: 10, tags: ["veg"] }, { name: "Mussarela defumada", price: 10, tags: ["veg"] },
        ],
        items: [
          { name: "Cupim com queijo*", price: 13, tags: ["top"] }, { name: "Salmão*", price: 15 }, { name: "Romeu e Julieta*", price: 13 },
        ] },
    ],
  },
  {
    id: "acomp", label: "Acompanhamentos",
    groups: [
      { items: [
        { name: "Arroz branco soltinho", price: 10 }, { name: "Arroz biro-biro", price: 15 }, { name: "Feijão de mãe", price: 10 },
        { name: "Farofinha da casa", price: 8 }, { name: "Batata frita", price: 15 }, { name: "Berinjela italiana", price: 12 },
        { name: "Abobrinha defumada", price: 12 }, { name: "Vinagrete", price: 10 }, { name: "Salada de maionese", price: 15 }, { name: "Salada de folhas", price: 12 },
      ] },
      { title: "Molhos", note: "Porção de 30 ml.", items: [
        { name: "Vinagretinho", price: 5 }, { name: "Pimenta da casa", price: 5, tags: ["hot"] }, { name: "Barbecue de rapadura", price: 4 },
        { name: "Maionese defumada", price: 4 }, { name: "Maionese verde", price: 4 }, { name: "Chimichurri", price: 5 },
        { name: "Molho de alho confit", price: 5 }, { name: "Farofa da casa", price: 3 },
      ] },
    ],
  },
  {
    id: "drinks", label: "Drinks",
    groups: [{ items: [
      { name: "English iced tea", description: "Chá gelado com gin e hortelã, em 4 sabores: maçã verde, pêssego, limão siciliano ou cranberry.", price: 28 },
      { name: "Caipirinha", description: "A clássica, de limão, feita com cachaça nacional.", price: 32 },
      { name: "Caipiroska", description: "O clássico com a leve modificação da vodka nacional.", price: 30 },
      { name: "Gin tônica", description: "Gin, água tônica, limão tahiti e um twist de limão siciliano.", price: 32 },
      { name: "Old fashioned de tangerina", description: "Bourbon, água com gás, tangerina e twist de laranja.", price: 36 },
      { name: "Mojito clássico", description: "Rum, hortelã, xarope de açúcar e limão tahiti.", price: 30 },
      { name: "Negroni", description: "Vermute tinto, gin, Campari e um twist de laranja.", price: 36, tags: ["top"] },
      { name: "Aperol spritz", description: "Aperol, espumante brut, água com gás e uma fatia de laranja.", price: 32 },
      { name: "Creme alcoolicano", description: "Milkshake com Malibu, calda toffee e coco ralado. Acompanha um shot de café.", price: 32 },
    ] }],
  },
  {
    id: "sobremesas", label: "Sobremesas",
    groups: [{ items: [
      { name: "Pudim de leite caseiro", description: "Receita original da fazenda.", price: 15 },
      { name: "Brownie de chocolate", description: "Servido no copo, com calda de morango e sorvete de baunilha.", price: 20 },
      { name: "Brigadeiro de panela", description: "Servido com banana nanica grelhada na churrasqueira.", price: 32 },
    ] }],
  },
];

export const brl = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

/** Destaques: itens marcados "mais pedido" no cardápio impresso. */
export const topItems = menuTabs.flatMap((t) => t.groups.flatMap((g) => g.items.filter((i) => i.tags?.includes("top")).map((i) => ({ ...i, tab: t.label }))));
