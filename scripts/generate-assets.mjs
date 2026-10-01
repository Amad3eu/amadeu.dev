/**
 * Gera public/og.png (1200x630) e public/apple-touch-icon.png (180x180).
 * Rode com `npm run assets` depois de mudar nome, cargo ou foto.
 * Usa fontes do sistema (Ubuntu Sans); troque em FONT se não tiver.
 */
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const FONT = "Ubuntu Sans, Noto Sans, DejaVu Sans, sans-serif";
const MONO = "Ubuntu Sans Mono, Noto Sans Mono, DejaVu Sans Mono, monospace";
const BG = "#0b0b0c";
const FG = "#ededed";
const MUTED = "#a1a1aa";
const ACCENT = "#a3e635";

const grid = Array.from({ length: 13 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630" />`).join("") +
  Array.from({ length: 7 }, (_, i) => `<line x1="0" y1="${i * 100 + 15}" x2="1200" y2="${i * 100 + 15}" />`).join("");

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${BG}"/>
  <g stroke="#1a1a1d" stroke-width="1">${grid}</g>
  <circle cx="1080" cy="80" r="260" fill="${ACCENT}" opacity="0.06"/>
  <text x="80" y="140" font-family="${MONO}" font-size="24" letter-spacing="4" fill="${ACCENT}">DESENVOLVEDOR FULL STACK</text>
  <text x="80" y="250" font-family="${FONT}" font-weight="700" font-size="92" fill="${FG}">Luiz Amadeu</text>
  <text x="80" y="320" font-family="${FONT}" font-size="36" fill="${MUTED}">Sistemas web, APIs e integrações de pagamento.</text>
  <text x="80" y="540" font-family="${MONO}" font-size="24" fill="${MUTED}"><tspan fill="${ACCENT}">/</tspan>PHP · Python/Django · TypeScript/React · Next.js</text>
</svg>`;

const photo = await sharp(await readFile("src/assets/me.jpg"))
  .resize(220, 220)
  .composite([{ input: Buffer.from('<svg width="220" height="220"><circle cx="110" cy="110" r="110"/></svg>'), blend: "dest-in" }])
  .png()
  .toBuffer();

await sharp(Buffer.from(ogSvg))
  .composite([{ input: photo, left: 900, top: 360 }])
  .png({ compressionLevel: 9 })
  .toFile("public/og.png");

const iconSvg = (await readFile("public/favicon.svg", "utf8")).replace('rx="14"', 'rx="0"');
await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile("public/apple-touch-icon.png");

// favicon.ico com um PNG 32x32 embutido (formato ICO aceita PNG desde o Windows Vista).
const png32 = await sharp(Buffer.from(await readFile("public/favicon.svg"))).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reservado
header.writeUInt16LE(1, 2); // tipo: ícone
header.writeUInt16LE(1, 4); // quantidade de imagens
header.writeUInt8(32, 6); // largura
header.writeUInt8(32, 7); // altura
header.writeUInt16LE(1, 10); // planos de cor
header.writeUInt16LE(32, 12); // bits por pixel
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18); // offset da imagem
await writeFile("public/favicon.ico", Buffer.concat([header, png32]));

console.log("ok: public/og.png, public/apple-touch-icon.png, public/favicon.ico");
