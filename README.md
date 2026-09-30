# amadeu.dev

Portfólio e blog de Luiz Felipe Warmling Amadeu. Feito com [Astro](https://astro.build), Tailwind CSS v4 e MDX. Português na raiz, inglês em `/en`.

## Rodando

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run check    # checagem de tipos
npm run assets   # regenera og.png, apple-touch-icon.png e favicon.ico
```

Requer Node 22.12 ou mais novo.

## Onde mudar cada coisa

| Quero mudar...                          | Arquivo                               |
| --------------------------------------- | ------------------------------------- |
| Nome, e-mail, redes, "construindo agora" | `src/config/site.ts`                  |
| Bio, experiência, formação, skills      | `src/data/profile.ts`                 |
| Projetos (e quais aparecem na home)     | `src/data/projects.ts`                |
| Textos da interface (PT/EN)             | `src/i18n/index.ts`                   |
| Cores, fontes e tema claro/escuro       | `src/styles/global.css` (`:root`)     |
| Foto                                    | `src/assets/me.jpg`                   |
| Currículos                              | `public/cv-pt.pdf`, `public/cv-en.pdf` |

## Escrevendo um post

Crie `src/content/blog/pt/meu-post.mdx`:

```md
---
title: Título do post
description: Uma ou duas frases que aparecem na listagem e no Google.
date: 2026-10-01
category: Arquitetura
tags: [django, api]
draft: true   # remova para publicar
---

Conteúdo em Markdown/MDX.
```

- Para a versão em inglês, crie `src/content/blog/en/meu-post.mdx` com o **mesmo nome de arquivo**. O site liga as duas versões sozinho.
- Post publicado em outro site (DEV.to, LinkedIn)? Use `externalUrl` e `externalSite` no frontmatter e deixe o corpo vazio.
- Posts com `draft: true` aparecem só no `npm run dev`.

## Estrutura

```
src/
  config/site.ts        dados pessoais e links
  data/                 perfil e projetos (tipados, PT/EN)
  i18n/index.ts         rotas traduzidas, textos de UI, formatação de datas
  content/blog/{pt,en}  posts em MD/MDX
  content.config.ts     schema dos posts
  lib/                  posts, RSS e gráfico do GitHub
  components/           peças visuais
  views/                corpo de cada página, compartilhado entre idiomas
  pages/                rotas finas: /, /blog, /projetos, /sobre e /en/*
```

As páginas em `src/pages` só escolhem o idioma e renderizam uma view. Toda a lógica vive em `src/views`.

## Deploy (Vercel)

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório. O framework Astro é detectado sozinho.
2. Pronto. A URL de produção (`*.vercel.app`) vira o domínio do site automaticamente.
3. Quando tiver domínio próprio: adicione em **Settings → Domains** e crie a variável `SITE_URL` (ex.: `https://amadeu.dev`).

Gráfico do GitHub sempre atualizado: crie um Deploy Hook em **Settings → Git → Deploy Hooks**, salve a URL como secret `VERCEL_DEPLOY_HOOK` no GitHub, e o workflow `rebuild.yml` refaz o deploy todo dia.

Cabeçalhos de segurança (CSP, HSTS etc.) ficam em `vercel.json`.
