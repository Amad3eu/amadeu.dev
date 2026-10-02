import type { ImageMetadata } from "astro";
import type { Localized } from "../i18n";
import bb8Poster from "../assets/lab/bb8.png";
import pomodoroPoster from "../assets/lab/pomodoro.png";
import gamePoster from "../assets/lab/vandal-game.png";

/**
 * Conteúdo da página /lab.
 * Demos são embutidas por iframe: ao adicionar uma de outro domínio,
 * libere o domínio no `frame-src` da CSP em vercel.json.
 */
export type Demo = {
  title: string;
  meta: string;
  url: string;
  repo: string;
  poster: ImageMetadata;
  /** "play" mostra "Jogar"; "run" mostra "Rodar aqui". */
  action: "play" | "run";
  /** Avisa que a demo toca som. */
  sound: boolean;
  text: Localized;
  /** Lista curta ao lado da demo (controles, como usar). */
  tips: Localized<string[]>;
};

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

export const game: Demo = {
  title: "Vandal Game",
  meta: "2026 · React + TypeScript",
  url: "https://vandal-game-guimeujovem.vercel.app",
  repo: "https://github.com/Amad3eu/vandal-game",
  poster: gamePoster,
  action: "play",
  sound: true,
  text: {
    pt: "Jogo de corrida em pixel art no estilo do dinossauro do Chrome: corra, pule e deixe sua marca. Tem modo corrida e modo livre, placar, moedas e dificuldade que aumenta com o tempo. Feito com React, TypeScript e Vite, com uma versão mobile em Expo.",
    en: "A pixel art runner in the style of Chrome's dinosaur game: run, jump and leave your mark. It has a run mode and a free mode, a leaderboard, coins and difficulty that ramps up over time. Built with React, TypeScript and Vite, with a mobile version in Expo.",
  },
  tips: {
    pt: ["Espaço, W ou ↑ para pular", "S ou ↓ para abaixar", "Shift ou X para o dash"],
    en: ["Space, W or ↑ to jump", "S or ↓ to duck", "Shift or X to dash"],
  },
};

/** Demos antigas que continuam divertidas. Aparecem depois do jogo. */
export const demos: Demo[] = [
  {
    title: "BB-8",
    meta: "2021 · SCSS + jQuery",
    url: "https://amad3eu.github.io/BB-8/Index.html",
    repo: "https://github.com/Amad3eu/BB-8",
    poster: bb8Poster,
    action: "run",
    sound: false,
    text: {
      pt: "O droide BB-8, de Star Wars, desenhado só com CSS. Ele rola atrás do cursor, acelera e freia conforme a distância e vira a cabeça para o lado em que está andando.",
      en: "The BB-8 droid from Star Wars, drawn with CSS only. It rolls after the cursor, speeds up and slows down with the distance, and turns its head toward the side it's moving to.",
    },
    tips: {
      pt: ["Mexa o mouse sobre a cena", "No celular, toque onde ele deve ir"],
      en: ["Move the mouse over the scene", "On a phone, tap where it should go"],
    },
  },
  {
    title: "Pomodoro",
    meta: "2021 · SCSS + JavaScript",
    url: "https://amad3eu.github.io/PomodoroApp/",
    repo: "https://github.com/Amad3eu/PomodoroApp",
    poster: pomodoroPoster,
    action: "run",
    sound: true,
    text: {
      pt: "Timer Pomodoro com sessão e pausa ajustáveis e cinco trilhas de fundo para manter o foco: Forest, Ocean, Rainy, Peace e Busy.",
      en: "A Pomodoro timer with adjustable session and break lengths and five background tracks to help you focus: Forest, Ocean, Rainy, Peace and Busy.",
    },
    tips: {
      pt: ["Ajuste os minutos de sessão e de pausa", "Escolha uma trilha no topo", "Clique em Start"],
      en: ["Set the session and break minutes", "Pick a track at the top", "Click Start"],
    },
  },
];
