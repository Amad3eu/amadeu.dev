## Projeto

Portfólio + blog em Astro 7, Tailwind v4 e MDX. Site 100% estático, deploy na Vercel.

- Dados pessoais: `src/config/site.ts`, `src/data/*.ts`. Não duplique esses dados em componentes.
- i18n: PT na raiz, EN em `/en`. Monte links sempre com `path()` / `postPath()` de `src/i18n`. Textos de UI vão no dicionário `ui` (as duas línguas).
- Páginas em `src/pages` são wrappers finos; a lógica fica em `src/views`.
- Cores só via tokens (`bg`, `surface`, `fg`, `muted`, `subtle`, `border`, `accent`). Nada de cores fixas nos componentes.
- JavaScript no cliente só quando necessário (hoje: tema, relógio/clima, copiar e-mail, Vercel Analytics; fogo e jogo só em `/lab` e na 404).
- Antes de terminar: `npm run check && npm run build`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Full documentation: https://docs.astro.build
