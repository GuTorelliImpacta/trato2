# Spec de tarefas — Trato & Butter

**Stack:** Next.js 16 (App Router) + TypeScript strict + Tailwind 4, estático, sem backend e sem formulário (PRD §12).
**Pastas:** `src/app` (rotas), `src/components`, `src/content` (dados e copy), `public/img`.
**Tokens:** preto `#000`, carvão `#1c1d1f`/`#2f3032`, branco, manteiga `#E8B54A`, brasa `#9C491D`; títulos Zilla Slab, corpo DM Sans.
**Mapa de repetição:** nota/prêmio só no hero (linha pequena) e no bloco Prova; endereço/telefone na seção Onde estamos e no rodapé; CTA "Fechar o trato" no hero, barra fixa mobile e fechamento.

- [x] T01 Setup (Next, TS, Tailwind, headers de segurança) — PRD §12
- [x] T02 Tokens, fontes, layout, header, rodapé, barra fixa mobile — PRD §8, §9
- [x] T03 Conteúdo em `src/content` (fatos, horários, copy) — PRD §2, §10
- [x] T04 Home: hero, Fogo, Cardápio, A casa, Prova, Pedir e horários, Onde estamos — PRD §9
- [x] T05 Momento memorável: status "aberto agora" (fuso America/Sao_Paulo) — PRD §7.4
- [x] T06 Cardápio filtrável orientado a dados; vazio mostra fotos reais + iFood (PRD §7.4 item 2)
- [x] T07 Mapa incorporado — PRD §11
- [x] T08 SEO: metadata, JSON-LD Restaurant, sitemap, robots — PRD §12
- [x] T09 `/privacidade` — PRD §12
- [x] T10 QA (build, lint, tsc, Playwright), README, PR, deploy

**Decisão:** `/cardapio` não é criada (regra de existência: sem itens reais). `[CONFIRMAR]` não aparece no site.
