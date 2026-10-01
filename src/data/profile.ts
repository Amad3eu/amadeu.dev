import type { Localized } from "../i18n";

/** Parágrafos da página /sobre. Mantenha alinhado com o currículo em public/. */
export const bio: Localized<string[]> = {
  pt: [
    "Sou desenvolvedor full stack, com mais de 4 anos de experiência em sistemas web, produtos internos, APIs e integrações, e estudante de Engenharia de Software na Univille. Programo desde criança e passei pelo técnico em Informática integrado ao ensino médio no SENAI/SC.",
    "Hoje trabalho na JoinVix, em Joinville, onde desenvolvo módulos, addons e plugins personalizados para WHMCS, integrações com serviços externos e o sistema interno da empresa. Em paralelo, atendo clientes como freelancer.",
    "Antes disso, trabalhei na Elint no Hermes CTRM, uma plataforma corporativa de gestão de operações de commodities, e na Aupi Soluções, com aplicações em Django e Next.js. Minha stack do dia a dia é PHP, Python/Django, TypeScript, React/Next.js, PostgreSQL e MySQL.",
    "Gosto de projetos com regras de negócio de verdade: pagamentos, integrações e automação de processos. Fora do trabalho, mantenho projetos open source como o MediaConv, escrevo sobre o que aprendo e uso Linux no dia a dia.",
  ],
  en: [
    "I'm a full stack developer with 4+ years of experience in web systems, internal products, APIs and integrations, and a Software Engineering student at Univille, Brazil. I've been programming since I was a kid and went through an IT technical program at SENAI/SC during high school.",
    "Today I work at JoinVix, in Joinville, building custom WHMCS modules, addons and plugins, integrations with external services and the company's internal system. On the side, I take on freelance clients.",
    "Before that, I worked at Elint on Hermes CTRM, an enterprise platform for managing commodity trading operations, and at Aupi Soluções on Django and Next.js applications. My day-to-day stack is PHP, Python/Django, TypeScript, React/Next.js, PostgreSQL and MySQL.",
    "I enjoy projects with real business rules: payments, integrations and process automation. Outside work, I maintain open source projects like MediaConv, write about what I learn and run Linux day to day.",
  ],
};

export type Job = {
  company: string;
  role: Localized;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, vazio = atual
  highlights: Localized<string[]>;
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "JoinVix",
    role: { pt: "Programador", en: "Software Developer" },
    start: "2026-07",
    highlights: {
      pt: [
        "Módulos, addons e plugins personalizados para WHMCS, adequados a regras de negócio e fluxos internos",
        "Desenvolvimento e evolução do sistema interno da empresa: automação, gestão e suporte às operações",
        "Integrações entre WHMCS, APIs externas, serviços internos e sistemas de terceiros",
        "Integrações bancárias, rotinas de pagamento e automações de cobrança",
        "Manutenção corretiva e evolutiva de sistemas em produção, com Linux, cPanel/WHM e Git",
      ],
      en: [
        "Custom WHMCS modules, addons and plugins tailored to business rules and internal workflows",
        "Building and evolving the company's internal system: automation, management and operations support",
        "Integrations between WHMCS, external APIs, internal services and third-party systems",
        "Banking integrations, payment routines and billing automation",
        "Corrective and evolutionary maintenance of production systems, with Linux, cPanel/WHM and Git",
      ],
    },
    stack: ["PHP", "MySQL", "JavaScript", "WHMCS", "REST APIs", "Linux", "cPanel/WHM"],
  },
  {
    company: "Elint",
    role: { pt: "Desenvolvedor Full Stack, Hermes CTRM", en: "Full Stack Developer, Hermes CTRM" },
    start: "2025-08",
    end: "2026-02",
    highlights: {
      pt: [
        "Desenvolvimento do Hermes CTRM, plataforma corporativa para gestão de operações comerciais e processos de commodities",
        "Funcionalidades para contratos, ordens, shipments, washouts e invoices",
        "Regras de negócio e fluxos de faturamento com estados Not Invoiced, Partially Invoiced e Fully Invoiced",
        "Evolução de pricing, packaging, incoterms, custos, moedas, datas contratuais, alocação e installments",
        "Interfaces, componentes e APIs REST integradas ao backend e ao banco relacional",
      ],
      en: [
        "Development of Hermes CTRM, an enterprise platform for managing commercial operations and commodity processes",
        "Features for contracts, orders, shipments, washouts and invoices",
        "Business rules and invoicing flows with Not Invoiced, Partially Invoiced and Fully Invoiced states",
        "Pricing, packaging, incoterms, costs, currencies, contract dates, allocation and installments",
        "Interfaces, components and REST APIs integrated with the backend and relational database",
      ],
    },
    stack: ["Python", "Django", "DRF", "React", "Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Freelancer",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    start: "2024-11",
    highlights: {
      pt: [
        "Sites, e-commerces, APIs e sistemas personalizados para clientes",
        "Aplicações com React/Next.js, Python/Django e PHP, com PostgreSQL e MySQL",
        "Integrações com Stripe, Pagar.me, Asaas, PIX, webhooks, autenticação e serviços externos",
        "Deploy e manutenção com Docker, AWS, Nginx e Vercel, além de projetos com WordPress e WooCommerce",
      ],
      en: [
        "Websites, e-commerce stores, APIs and custom systems for clients",
        "Applications with React/Next.js, Python/Django and PHP, on PostgreSQL and MySQL",
        "Integrations with Stripe, Pagar.me, Asaas, PIX, webhooks, authentication and external services",
        "Deploys and maintenance with Docker, AWS, Nginx and Vercel, plus WordPress and WooCommerce projects",
      ],
    },
    stack: ["React", "Next.js", "Django", "PHP", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "Aupi Soluções",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    start: "2022-11",
    end: "2024-11",
    highlights: {
      pt: [
        "Desenvolvimento e manutenção de aplicações web com React, Next.js, Python e Django",
        "APIs com Django REST Framework e integração entre frontend, backend e bancos relacionais",
        "Ferramentas internas para otimização de processos, incluindo o Aupi Tools",
        "Integração com APIs e serviços externos e manutenção evolutiva de produtos existentes",
      ],
      en: [
        "Development and maintenance of web applications with React, Next.js, Python and Django",
        "APIs with Django REST Framework, integrating frontend, backend and relational databases",
        "Internal tools for process optimization, including Aupi Tools",
        "Integration with external APIs and services, and ongoing evolution of existing products",
      ],
    },
    stack: ["Python", "Django", "DRF", "TypeScript", "React", "Next.js", "PostgreSQL"],
  },
];

export type Education = {
  title: Localized;
  institution: string;
  start: string;
  end: string;
};

export const education: Education[] = [
  {
    title: {
      pt: "Bacharelado em Engenharia de Software",
      en: "B.Sc. in Software Engineering",
    },
    institution: "Univille — Universidade da Região de Joinville",
    start: "2024-03",
    end: "2028-11",
  },
  {
    title: {
      pt: "Técnico Integrado em Informática",
      en: "IT Technical Program, integrated with High School",
    },
    institution: "SENAI/SC",
    start: "2020-03",
    end: "2022-12",
  },
];

export const skills: { title: Localized; items: string[] }[] = [
  {
    title: { pt: "Backend", en: "Backend" },
    items: ["PHP", "Python", "Django", "Django REST Framework", "REST APIs", "Go"],
  },
  {
    title: { pt: "Front-end", en: "Front-end" },
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: { pt: "Dados", en: "Data" },
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: { pt: "WHMCS e hospedagem", en: "WHMCS & hosting" },
    items: ["WHMCS", "Addons", "Plugins", "cPanel", "WHM"],
  },
  {
    title: { pt: "Integrações", en: "Integrations" },
    items: ["OAuth2", "Webhooks", "Stripe", "Pagar.me", "Asaas", "PIX"],
  },
  {
    title: { pt: "Infra e ferramentas", en: "Infra & tooling" },
    items: ["Docker", "Docker Compose", "Linux", "Nginx", "AWS EC2/S3", "Vercel", "Git", "GitHub", "GitLab"],
  },
];

/** Chips exibidos no card de stack da home. */
export const coreStack = [
  "PHP",
  "Python",
  "Django",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "Docker",
];

export const areas: Localized<string[]> = {
  pt: [
    "Desenvolvimento web full stack",
    "Design e integração de APIs REST",
    "Módulos, addons e plugins para WHMCS",
    "Pagamentos: Stripe, Pagar.me, Asaas, PIX e integrações bancárias",
    "E-commerce, incluindo WordPress e WooCommerce",
    "Regras de negócio e modelagem de dados relacional",
    "Deploy com Docker, AWS, Nginx e Vercel",
    "Automação de processos e open source",
  ],
  en: [
    "Full stack web development",
    "REST API design and integration",
    "WHMCS modules, addons and plugins",
    "Payments: Stripe, Pagar.me, Asaas, PIX and banking integrations",
    "E-commerce, including WordPress and WooCommerce",
    "Business rules and relational data modeling",
    "Deploys with Docker, AWS, Nginx and Vercel",
    "Process automation and open source",
  ],
};

export const languagesSpoken: { name: Localized; level: Localized }[] = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Profissional", en: "Professional" } },
  { name: { pt: "Francês", en: "French" }, level: { pt: "Básico / Intermediário", en: "Basic / Intermediate" } },
];

export const certifications: { year: string; name: string; issuer: string }[] = [
  { year: "2022", name: "Web Development Bootcamp", issuer: "Udemy" },
  { year: "2022", name: "Modern JavaScript Bootcamp", issuer: "Udemy" },
  { year: "2022", name: "Git & GitHub Bootcamp", issuer: "Udemy" },
  { year: "2022", name: "Domain-Driven Design", issuer: "LinkedIn Learning" },
  { year: "2022", name: "OOP com TypeScript", issuer: "LinkedIn Learning" },
  { year: "2021", name: "API RESTful com Node.js, TypeScript e TypeORM", issuer: "Udemy" },
  { year: "2021", name: "React e Next.js", issuer: "Udemy" },
  { year: "2021", name: "JavaScript e TypeScript do básico ao avançado", issuer: "Udemy" },
  { year: "2018", name: "2º lugar — Olimpíada de Matemática de Paranavaí e região", issuer: "IMPA" },
];
