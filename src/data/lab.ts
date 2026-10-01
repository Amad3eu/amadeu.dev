import type { Localized } from "../i18n";

/**
 * Conteúdo da página /lab.
 * Se trocar a URL do jogo, atualize também o `frame-src` da CSP em vercel.json.
 */
export const fire = {
  title: { pt: "Fogo do Doom", en: "Doom fire" } as Localized,
  meta: "2021 · JavaScript",
  repo: "https://github.com/Amad3eu/Fireplace-Doom",
  reference: "https://fabiensanglard.net/doom_fire_psx/",
  text: {
    pt: "Reimplementação do efeito de fogo do Doom de PlayStation. Fiz a primeira versão em 2021, renderizando numa tabela HTML; aqui o mesmo algoritmo roda em canvas. A chama rosa é a paleta do projeto original, e a clássica está a um clique.",
    en: "A reimplementation of the fire effect from Doom on PlayStation. I built the first version in 2021, rendering into an HTML table; here the same algorithm runs on a canvas. The pink flame is the original project's palette, and the classic one is a click away.",
  } as Localized,
  how: {
    pt: [
      "A tela é uma grade de 65 × 50 pixels, cada um com uma intensidade de 0 a 36",
      "A linha de baixo é a fonte de calor, sempre no máximo",
      "A cada passo, cada pixel copia o de baixo menos um decaimento aleatório",
      "O mesmo número aleatório desloca o pixel para o lado, o que cria o vento",
    ],
    en: [
      "The screen is a 65 × 50 pixel grid, each pixel holding an intensity from 0 to 36",
      "The bottom row is the heat source, always at maximum",
      "On every step, each pixel copies the one below it minus a random decay",
      "The same random number shifts the pixel sideways, which creates the wind",
    ],
  } as Localized<string[]>,
};

export const game = {
  title: "Vandal Game",
  meta: "2026 · React + TypeScript",
  url: "https://vandal-game-guimeujovem.vercel.app",
  repo: "https://github.com/Amad3eu/vandal-game",
  text: {
    pt: "Jogo de corrida em pixel art no estilo do dinossauro do Chrome: corra, pule e deixe sua marca. Tem modo corrida e modo livre, placar, moedas e dificuldade que aumenta com o tempo. Feito com React, TypeScript e Vite, com uma versão mobile em Expo.",
    en: "A pixel art runner in the style of Chrome's dinosaur game: run, jump and leave your mark. It has a run mode and a free mode, a leaderboard, coins and difficulty that ramps up over time. Built with React, TypeScript and Vite, with a mobile version in Expo.",
  } as Localized,
  controls: {
    pt: ["Espaço, W ou ↑ para pular", "S ou ↓ para abaixar", "Shift ou X para o dash"],
    en: ["Space, W or ↑ to jump", "S or ↓ to duck", "Shift or X to dash"],
  } as Localized<string[]>,
};
