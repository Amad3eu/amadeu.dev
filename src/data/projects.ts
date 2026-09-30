import type { Localized } from "../i18n";

export type ProjectGroup = "professional" | "oss" | "archive";

export type Project = {
  name: string;
  year: number;
  group: ProjectGroup;
  /** Aparece na home. Mantenha 4 marcados. */
  featured?: boolean;
  kind: Localized;
  description: Localized;
  stack: string[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  // Trabalho profissional
  {
    name: "Hermes CTRM",
    year: 2025,
    group: "professional",
    featured: true,
    kind: { pt: "Plataforma", en: "Platform" },
    description: {
      pt: "Plataforma de trading e gestão de risco de commodities. Features de ponta a ponta em contratos, pedidos, embarques, washouts, faturas, validações, preços e custos.",
      en: "Commodity trading and risk management platform. End-to-end features across contracts, orders, shipments, washouts, invoices, validations, pricing and costs.",
    },
    stack: ["Python", "Django", "DRF", "React", "Next.js", "PostgreSQL"],
  },
  {
    name: "UNESCO MIL Cities",
    year: 2025,
    group: "professional",
    kind: { pt: "Backend", en: "Backend" },
    description: {
      pt: "Backend de uma plataforma ligada à iniciativa UNESCO MIL Cities: lógica de aplicação, APIs, modelagem de dados e arquitetura sustentável.",
      en: "Backend for a platform connected to the UNESCO MIL Cities initiative: application logic, APIs, data modeling and maintainable architecture.",
    },
    stack: ["Python", "Django", "REST APIs", "PostgreSQL"],
  },
  {
    name: "Aupi Tools",
    year: 2023,
    group: "professional",
    kind: { pt: "Produto", en: "Product" },
    description: {
      pt: "Plataforma de utilitários web que consome APIs externas, criada durante meu tempo na Aupi.",
      en: "Web utilities platform consuming external APIs, built during my time at Aupi.",
    },
    stack: ["Django", "JavaScript", "REST APIs"],
  },

  // Produtos e open source
  {
    name: "MediaConv",
    year: 2026,
    group: "oss",
    featured: true,
    kind: { pt: "CLI", en: "CLI" },
    description: {
      pt: "Conversor de mídia local e seguro via linha de comando, sobre o FFmpeg. Conversão em lote, vários formatos e distribuição via Homebrew e Scoop.",
      en: "Safe, local command-line media converter powered by FFmpeg. Batch conversion, many formats and distribution via Homebrew and Scoop.",
    },
    stack: ["Go", "FFmpeg", "GitHub Actions"],
    url: "https://amad3eu.github.io/mediaconv/",
    repo: "https://github.com/Amad3eu/mediaconv",
  },
  {
    name: "PDF to JSON API",
    year: 2025,
    group: "oss",
    featured: true,
    kind: { pt: "API", en: "API" },
    description: {
      pt: "API open source que extrai dados estruturados de extratos financeiros em PDF, com parsers para vários bancos brasileiros e normalização de datas e valores.",
      en: "Open source API that extracts structured data from financial PDF statements, with parsers for several Brazilian banks and date/value normalization.",
    },
    stack: ["Python", "Django REST Framework", "PDF parsing"],
  },
  {
    name: "ToneLens",
    year: 2026,
    group: "oss",
    featured: true,
    kind: { pt: "Experimento", en: "Experiment" },
    description: {
      pt: "Analisa mensagens de voz e identifica se o tom está alto, grosso ou carregado, usando energia, frequência e dinâmica do áudio. Gera transcrição inicial.",
      en: "Analyzes voice messages and flags whether the tone is loud, harsh or charged, using the audio's energy, frequency and dynamics. Produces an initial transcript.",
    },
    stack: ["TypeScript", "Web Audio API"],
    url: "https://tone-lens.vercel.app",
    repo: "https://github.com/Amad3eu/ToneLens",
  },
  {
    name: "AquaTick",
    year: 2026,
    group: "oss",
    kind: { pt: "Extensão GNOME", en: "GNOME extension" },
    description: {
      pt: "Extensão do GNOME Shell para acompanhar a hidratação diária: metas, lembretes e registro com um clique direto no painel.",
      en: "GNOME Shell extension to track daily water intake: goals, reminders and one-click logging right from the top panel.",
    },
    stack: ["JavaScript", "GNOME Shell"],
    repo: "https://github.com/Amad3eu/Aquatick",
  },
  {
    name: "Cookie Vault",
    year: 2026,
    group: "oss",
    kind: { pt: "Web app", en: "Web app" },
    description: {
      pt: "Cofre estático de saves do Cookie Clicker, com interface inspirada no Gist, galeria editável e um puzzle de esteganografia.",
      en: "Static Cookie Clicker save vault with a Gist-inspired UI, editable gallery and a steganography puzzle.",
    },
    stack: ["React", "Vite", "Canvas"],
    url: "https://cookie-vault-mu.vercel.app",
    repo: "https://github.com/Amad3eu/cookie-vault",
  },
  {
    name: "GitHub Explorer",
    year: 2025,
    group: "oss",
    kind: { pt: "Desafio técnico", en: "Take-home" },
    description: {
      pt: "Desafio técnico para vaga de React: busca de repositórios, detalhes, favoritos e carregamento dinâmico.",
      en: "Take-home challenge for a React role: repository search, details, favorites and dynamic loading.",
    },
    stack: ["Next.js", "TypeScript", "SWR", "Zustand"],
    url: "https://github-explorer-amad3eu.vercel.app",
    repo: "https://github.com/Amad3eu/magazord-frontend-react-test-github-explorer",
  },
  {
    name: "TodoAPI",
    year: 2022,
    group: "oss",
    kind: { pt: "API", en: "API" },
    description: {
      pt: "API de tarefas escrita em Go, com configuração via Viper e ambiente em Docker.",
      en: "Task API written in Go, configured with Viper and containerized with Docker.",
    },
    stack: ["Go", "Docker", "Cobra", "Viper"],
    repo: "https://github.com/Amad3eu/TodoAPI",
  },

  // Arquivo
  {
    name: "Goldies",
    year: 2022,
    group: "archive",
    kind: { pt: "E-commerce", en: "E-commerce" },
    description: {
      pt: "Loja de discos de vinil, projeto final (TCC) do curso técnico no SENAI.",
      en: "Vinyl record store, final project of my technical program at SENAI.",
    },
    stack: ["React", "TypeScript", "Express", "MariaDB"],
    repo: "https://github.com/Amad3eu/sa-senai-vinil",
  },
  {
    name: "picomment",
    year: 2023,
    group: "archive",
    kind: { pt: "Web app", en: "Web app" },
    description: {
      pt: "Comentários em fotos de gatos. Estudo de Next.js com Redux.",
      en: "Comments on cute cat pictures. A Next.js and Redux study.",
    },
    stack: ["Next.js", "Redux", "Tailwind CSS"],
    url: "https://picomment.vercel.app",
    repo: "https://github.com/Amad3eu/picomment",
  },
  {
    name: "fedget",
    year: 2022,
    group: "archive",
    kind: { pt: "Widget", en: "Widget" },
    description: {
      pt: "Widget de feedback com versões web e mobile.",
      en: "Feedback widget with web and mobile versions.",
    },
    stack: ["React", "React Native", "Node.js"],
    url: "https://fedget.vercel.app",
  },
  {
    name: "cryptodeu",
    year: 2022,
    group: "archive",
    kind: { pt: "Web app", en: "Web app" },
    description: {
      pt: "Busca e visualização de criptomoedas.",
      en: "Cryptocurrency search and charts.",
    },
    stack: ["Vue.js", "REST APIs"],
    url: "https://cryptodeu.vercel.app",
    repo: "https://github.com/Amad3eu/cryptodeu",
  },
  {
    name: "website-aggregator",
    year: 2023,
    group: "archive",
    kind: { pt: "Ferramenta", en: "Tool" },
    description: {
      pt: "Coleta conteúdo de sites com Puppeteer e processa com a API do ChatGPT.",
      en: "Scrapes website content with Puppeteer and processes it with the ChatGPT API.",
    },
    stack: ["React", "Express", "Puppeteer"],
    repo: "https://github.com/Amad3eu/website-aggregator",
  },
  {
    name: "JsLesson",
    year: 2021,
    group: "archive",
    kind: { pt: "Conteúdo", en: "Course" },
    description: {
      pt: "Material prático para quem está começando em JavaScript.",
      en: "Hands-on material for JavaScript beginners.",
    },
    stack: ["JavaScript", "Node.js", "MongoDB"],
    repo: "https://github.com/Amad3eu/JsLesson",
  },
];
