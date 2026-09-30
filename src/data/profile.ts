import type { Localized } from "../i18n";

/** Parágrafos da página /sobre. */
export const bio: Localized<string[]> = {
  pt: [
    "Sou desenvolvedor full stack e estudante de Engenharia de Software na Univille. Programo desde criança, passei pelo técnico em TI integrado ao ensino médio no SENAI/SC e trabalho com desenvolvimento web profissionalmente desde 2022.",
    "No backend, minha base é Python, Django e Django REST Framework. No front-end, TypeScript, React e Next.js. Gosto de projetos com regras de negócio de verdade: integrações, automações, processamento de dados e sistemas que precisam continuar fáceis de mudar depois de um ano em produção.",
    "Já trabalhei em uma plataforma de trading e gestão de risco de commodities, no backend de uma plataforma ligada à iniciativa UNESCO MIL Cities e em ferramentas internas e e-commerces como freelancer. Hoje sigo atendendo clientes e construindo ferramentas open source.",
    "Fora do código, leio bastante, escrevo sobre o que aprendo e mantenho tudo rodando num ambiente Linux.",
  ],
  en: [
    "I'm a full stack developer and a Software Engineering student at Univille, Brazil. I've been programming since I was a kid, went through an IT technical program at SENAI/SC during high school, and have worked professionally in web development since 2022.",
    "On the backend my foundation is Python, Django and Django REST Framework. On the front-end, TypeScript, React and Next.js. I enjoy projects with real business rules: integrations, automation, data processing and systems that need to stay easy to change after a year in production.",
    "I've worked on a commodity trading and risk management platform, on the backend of a platform connected to the UNESCO MIL Cities initiative, and on internal tools and e-commerce stores as a freelancer. Today I keep serving clients and building open source tools.",
    "Away from code, I read a lot, write about what I learn and keep everything running on Linux.",
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
    company: "Freelancer",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    start: "2024-11",
    highlights: {
      pt: [
        "Desenvolvimento de sistemas web, APIs REST e integrações com serviços de terceiros para clientes de diferentes áreas",
        "Features de ponta a ponta em plataforma de trading de commodities: contratos, pedidos, embarques, faturas, preços e custos",
        "Backend, modelagem de dados e APIs para plataforma ligada à iniciativa UNESCO MIL Cities",
      ],
      en: [
        "Building web systems, REST APIs and third-party integrations for clients across different industries",
        "End-to-end features on a commodity trading platform: contracts, orders, shipments, invoices, pricing and costs",
        "Backend, data modeling and APIs for a platform connected to the UNESCO MIL Cities initiative",
      ],
    },
    stack: ["Python", "Django", "DRF", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    company: "Aupi",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    start: "2022-11",
    end: "2024-11",
    highlights: {
      pt: [
        "Desenvolvi a interface de um sistema baseado em Django",
        "Criei o Aupi Tools, plataforma de utilitários web que consome APIs externas",
        "Implementei funcionalidades no backend e otimizei soluções existentes",
        "Resolvi problemas de integração e desempenho, melhorando a experiência do usuário",
      ],
      en: [
        "Built the front-end of a Django-based system",
        "Created Aupi Tools, a web utilities platform consuming external APIs",
        "Shipped backend features and optimized existing solutions",
        "Fixed integration and performance issues, improving the user experience",
      ],
    },
    stack: ["Django", "Python", "JavaScript", "REST APIs"],
  },
  {
    company: "Freelancer",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    start: "2022-02",
    end: "2022-10",
    highlights: {
      pt: [
        "Aplicações front-end, full stack e e-commerce",
        "Next.js no front-end e Django no backend",
        "Interfaces interativas e integração com APIs externas",
      ],
      en: [
        "Front-end, full stack and e-commerce applications",
        "Next.js on the front-end and Django on the backend",
        "Interactive interfaces and external API integrations",
      ],
    },
    stack: ["Next.js", "React", "Django"],
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
      pt: "Técnico em Tecnologia da Informação integrado ao Ensino Médio",
      en: "IT Technical Program integrated with High School",
    },
    institution: "SENAI/SC",
    start: "2020-03",
    end: "2022-12",
  },
];

export const skills: { title: Localized; items: string[] }[] = [
  {
    title: { pt: "Backend", en: "Backend" },
    items: ["Python", "Django", "Django REST Framework", "Node.js", "Go"],
  },
  {
    title: { pt: "Front-end", en: "Front-end" },
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: { pt: "Dados", en: "Data" },
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: { pt: "Infra e ferramentas", en: "Infra & tooling" },
    items: ["Docker", "AWS", "Nginx", "Vercel", "GitHub Actions", "Linux", "Git"],
  },
];

/** Chips exibidos no card de stack da home. */
export const coreStack = [
  "Python",
  "Django",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Go",
];

export const areas: Localized<string[]> = {
  pt: [
    "Desenvolvimento web full stack",
    "Design e integração de APIs REST",
    "Regras de negócio e modelagem de domínio",
    "E-commerce, pagamentos e webhooks",
    "Autenticação e autorização",
    "Modelagem relacional com PostgreSQL",
    "Ambientes com Docker e deploy em AWS, Nginx e Vercel",
    "CI/CD e open source",
  ],
  en: [
    "Full stack web development",
    "REST API design and integration",
    "Business rules and domain modeling",
    "E-commerce, payments and webhooks",
    "Authentication and authorization",
    "Relational modeling with PostgreSQL",
    "Docker environments and deploys on AWS, Nginx and Vercel",
    "CI/CD and open source",
  ],
};

export const languagesSpoken: { name: Localized; level: Localized }[] = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Intermediário", en: "Intermediate" } },
  { name: { pt: "Espanhol", en: "Spanish" }, level: { pt: "Básico", en: "Basic" } },
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
