/**
 * Configuração central do site.
 * Tudo que é "sobre você" e muda com frequência fica aqui.
 */
export const site = {
  name: "Luiz Amadeu",
  fullName: "Luiz Felipe Warmling Amadeu",
  handle: "@amad3eu",
  email: "luizfelipewarmling@gmail.com",
  /** Mostra o selo "aberto a oportunidades" no topo da home. */
  available: true,
  location: {
    label: "Joinville, SC",
    timeZone: "America/Sao_Paulo",
    // Coordenadas usadas pelo widget de clima (Open-Meteo, sem chave de API).
    latitude: -26.3044,
    longitude: -48.8487,
  },
  github: {
    user: "Amad3eu",
    repo: "Amad3eu/amadeu.dev",
  },
  socials: {
    github: "https://github.com/Amad3eu",
    linkedin: "https://www.linkedin.com/in/amad3eu",
    devto: "https://dev.to/amad3eu",
    tabnews: "https://www.tabnews.com.br/amad3eu",
    hashnode: "https://hashnode.com/@Amad3eu",
  },
  /**
   * Currículo por idioma (arquivos em public/).
   * Enquanto não houver versão em inglês, os dois apontam para o PT.
   */
  cv: {
    pt: "/cv-pt.pdf",
    en: "/cv-pt.pdf",
    fileName: "CV_Luiz_Felipe_Amadeu.pdf",
  },
  /** Card "Construindo agora" da home. */
  now: {
    name: "MediaConv",
    url: "https://amad3eu.github.io/mediaconv/",
    repo: "https://github.com/Amad3eu/mediaconv",
  },
} as const;
