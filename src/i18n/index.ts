export const languages = {
  pt: { label: "PT", htmlLang: "pt-BR", ogLocale: "pt_BR", dateLocale: "pt-BR" },
  en: { label: "EN", htmlLang: "en", ogLocale: "en_US", dateLocale: "en-US" },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "pt";

/** Rotas com slug traduzido. Use sempre `path()` para montar links. */
const routes = {
  home: { pt: "/", en: "/en" },
  blog: { pt: "/blog", en: "/en/blog" },
  projects: { pt: "/projetos", en: "/en/projects" },
  about: { pt: "/sobre", en: "/en/about" },
  rss: { pt: "/rss.xml", en: "/en/rss.xml" },
} as const;

export type RouteKey = keyof typeof routes;

export const path = (key: RouteKey, lang: Lang) => routes[key][lang];

export const postPath = (slug: string, lang: Lang) =>
  `${routes.blog[lang]}/${slug}`;

export const otherLang = (lang: Lang): Lang => (lang === "pt" ? "en" : "pt");

/** Texto localizado inline: `l(lang, { pt: "Olá", en: "Hi" })`. */
export type Localized<T = string> = Record<Lang, T>;
export const l = <T>(lang: Lang, value: Localized<T>): T => value[lang];

export const ui = {
  pt: {
    "meta.title": "Luiz Amadeu — Desenvolvedor Full Stack",
    "meta.description":
      "Desenvolvedor full stack (PHP, Python/Django, TypeScript/React/Next.js). Sistemas web, APIs e integrações com regras de negócio de verdade.",
    "nav.home": "início",
    "nav.blog": "blog",
    "nav.projects": "projetos",
    "nav.about": "sobre",
    "nav.skip": "Pular para o conteúdo",
    "theme.toggle": "Alternar tema claro/escuro",
    "lang.switch": "Read in English",
    "hero.eyebrow": "Desenvolvedor Full Stack",
    "hero.available": "Aberto a oportunidades",
    "hero.title": "Desenvolvo sistemas web e APIs em torno de regras de negócio de verdade.",
    "hero.titleAccent": "Do Django ao Next.js, com código que dura.",
    "hero.cta.projects": "Ver projetos",
    "hero.cta.blog": "Ler o blog",
    "hero.cta.cv": "Baixar CV",
    "hero.meta.role": "Full stack",
    "hero.meta.student": "Eng. de Software",
    "now.label": "Construindo agora",
    "now.description":
      "Conversor de mídia local e seguro, via linha de comando, sobre o FFmpeg. WebM para MP4 sem subir arquivo para site nenhum.",
    "clock.label": "Hora local",
    "clock.weather": "Clima agora",
    "github.label": "Atividade no GitHub",
    "github.total": "{n} contribuições no último ano",
    "github.less": "Menos",
    "github.more": "Mais",
    "stack.label": "Stack principal",
    "card.projects.label": "Projetos",
    "card.projects.title": "O que eu construí",
    "card.projects.text": "Trabalho profissional, open source e experimentos",
    "card.about.label": "Sobre",
    "card.about.title": "Minha trajetória",
    "card.about.text": "Experiência, formação e habilidades",
    "card.blog.label": "Blog",
    "card.blog.title": "O que eu escrevo",
    "card.blog.text": "Arquitetura, front-end e carreira",
    "card.contact.label": "Contato",
    "card.contact.title": "Vamos conversar",
    "card.contact.text": "Freelas, vagas e parcerias",
    "section.posts": "posts",
    "section.posts.hint": "artigos recentes",
    "section.posts.all": "Todos os posts",
    "section.projects": "projetos",
    "section.projects.hint": "em destaque",
    "section.projects.all": "Todos os projetos",
    "contact.eyebrow": "Contato",
    "contact.title": "Tem um projeto, uma vaga ou uma ideia?",
    "contact.text":
      "Respondo e-mails em até dois dias úteis. Se preferir, me chama no LinkedIn.",
    "contact.copy": "Copiar e-mail",
    "contact.copied": "E-mail copiado",
    "blog.title": "Blog",
    "blog.description":
      "Textos sobre desenvolvimento web, arquitetura de software, front-end e carreira.",
    "blog.empty": "Nenhum post publicado ainda.",
    "blog.readingTime": "{n} min",
    "blog.external": "Publicado no {site}",
    "blog.otherLang": "em inglês",
    "blog.back": "Voltar para o blog",
    "blog.toc": "Neste post",
    "blog.prev": "Anterior",
    "blog.next": "Próximo",
    "blog.updated": "Atualizado em",
    "blog.translation": "Read this post in English",
    "projects.title": "Projetos",
    "projects.description":
      "Uma seleção do que construí: sistemas em produção, ferramentas open source e experimentos.",
    "projects.professional": "Trabalho profissional",
    "projects.professional.hint": "código privado, contexto público",
    "projects.oss": "Produtos e open source",
    "projects.oss.hint": "código aberto",
    "projects.archive": "Arquivo",
    "projects.archive.hint": "projetos de estudo, 2021 a 2023",
    "projects.site": "Site",
    "projects.code": "Código",
    "about.title": "Sobre",
    "about.description":
      "Quem eu sou, onde trabalhei, o que estudei e com o que trabalho hoje.",
    "about.eyebrow": "Sobre",
    "about.heading": "Um pouco sobre mim",
    "about.experience": "Experiência",
    "about.education": "Formação",
    "about.skills": "Habilidades",
    "about.areas": "Áreas de atuação",
    "about.certifications": "Cursos e certificações",
    "about.languages": "Idiomas",
    "about.cv": "Baixar currículo (PDF)",
    "footer.tagline":
      "Desenvolvedor full stack. Construo sistemas web, APIs e integrações com foco em clareza e manutenção.",
    "footer.nav": "Navegação",
    "footer.content": "Conteúdo",
    "footer.social": "Contato",
    "footer.rights": "Código aberto no GitHub.",
    "footer.built": "Feito com Astro",
    "404.title": "Página não encontrada",
    "404.text": "O link pode estar quebrado ou a página mudou de endereço.",
    "404.back": "Voltar para o início",
  },
  en: {
    "meta.title": "Luiz Amadeu — Full Stack Developer",
    "meta.description":
      "Full stack developer (PHP, Python/Django, TypeScript/React/Next.js). Web systems, APIs and integrations built around real business rules.",
    "nav.home": "home",
    "nav.blog": "blog",
    "nav.projects": "projects",
    "nav.about": "about",
    "nav.skip": "Skip to content",
    "theme.toggle": "Toggle light/dark theme",
    "lang.switch": "Ler em português",
    "hero.eyebrow": "Full Stack Developer",
    "hero.available": "Open to opportunities",
    "hero.title": "I build web systems and APIs around real business rules.",
    "hero.titleAccent": "From Django to Next.js, with code that lasts.",
    "hero.cta.projects": "See projects",
    "hero.cta.blog": "Read the blog",
    "hero.cta.cv": "Download CV",
    "hero.meta.role": "Full stack",
    "hero.meta.student": "Software Eng.",
    "now.label": "Building now",
    "now.description":
      "A safe, local command-line media converter powered by FFmpeg. WebM to MP4 without uploading files to random websites.",
    "clock.label": "Local time",
    "clock.weather": "Weather now",
    "github.label": "GitHub activity",
    "github.total": "{n} contributions in the last year",
    "github.less": "Less",
    "github.more": "More",
    "stack.label": "Core stack",
    "card.projects.label": "Projects",
    "card.projects.title": "What I've built",
    "card.projects.text": "Professional work, open source and experiments",
    "card.about.label": "About",
    "card.about.title": "My journey",
    "card.about.text": "Experience, education and skills",
    "card.blog.label": "Blog",
    "card.blog.title": "What I write",
    "card.blog.text": "Architecture, front-end and career",
    "card.contact.label": "Contact",
    "card.contact.title": "Let's talk",
    "card.contact.text": "Freelance, roles and partnerships",
    "section.posts": "posts",
    "section.posts.hint": "recent writing",
    "section.posts.all": "All posts",
    "section.projects": "projects",
    "section.projects.hint": "featured",
    "section.projects.all": "All projects",
    "contact.eyebrow": "Contact",
    "contact.title": "Got a project, a role or an idea?",
    "contact.text":
      "I reply to emails within two business days. LinkedIn works too.",
    "contact.copy": "Copy email",
    "contact.copied": "Email copied",
    "blog.title": "Blog",
    "blog.description":
      "Writing about web development, software architecture, front-end and career.",
    "blog.empty": "No posts published yet.",
    "blog.readingTime": "{n} min",
    "blog.external": "Published on {site}",
    "blog.otherLang": "in Portuguese",
    "blog.back": "Back to the blog",
    "blog.toc": "On this page",
    "blog.prev": "Previous",
    "blog.next": "Next",
    "blog.updated": "Updated on",
    "blog.translation": "Ler este post em português",
    "projects.title": "Projects",
    "projects.description":
      "A selection of what I've built: production systems, open source tools and experiments.",
    "projects.professional": "Professional work",
    "projects.professional.hint": "private code, public context",
    "projects.oss": "Products & open source",
    "projects.oss.hint": "open code",
    "projects.archive": "Archive",
    "projects.archive.hint": "study projects, 2021 to 2023",
    "projects.site": "Website",
    "projects.code": "Code",
    "about.title": "About",
    "about.description":
      "Who I am, where I've worked, what I've studied and what I work with today.",
    "about.eyebrow": "About",
    "about.heading": "A bit about me",
    "about.experience": "Experience",
    "about.education": "Education",
    "about.skills": "Skills",
    "about.areas": "Areas of work",
    "about.certifications": "Courses & certifications",
    "about.languages": "Languages",
    "about.cv": "Download résumé (PDF)",
    "footer.tagline":
      "Full stack developer. I build web systems, APIs and integrations with a focus on clarity and maintainability.",
    "footer.nav": "Navigation",
    "footer.content": "Content",
    "footer.social": "Contact",
    "footer.rights": "Open source on GitHub.",
    "footer.built": "Built with Astro",
    "404.title": "Page not found",
    "404.text": "The link may be broken or the page has moved.",
    "404.back": "Back to home",
  },
} as const;

export type UiKey = keyof (typeof ui)["pt"];

export const useTranslations = (lang: Lang) =>
  (key: UiKey, vars?: Record<string, string | number>) => {
    let text: string = ui[lang][key] ?? ui[defaultLang][key];
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }
    return text;
  };

export const formatDate = (date: Date, lang: Lang, style: "short" | "long" = "short") =>
  new Intl.DateTimeFormat(languages[lang].dateLocale, {
    day: "numeric",
    month: style === "short" ? "short" : "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
