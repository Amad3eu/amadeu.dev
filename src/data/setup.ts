import type { IconName } from "../components/Icon.astro";
import type { Localized } from "../i18n";

/**
 * Conteúdo da página /setup. Tudo aqui vem dos meus gists públicos:
 * ao mudar um gist, atualize o trecho e a data correspondentes.
 */
export type SetupSection = {
  id: string;
  icon: IconName;
  title: Localized;
  text: Localized;
  items: { label: Localized; value: string }[];
  snippet: { lang: "bash" | "json"; code: string };
  gist: { file: string; url: string; updated: string };
};

const gist = (id: string) => `https://gist.github.com/Amad3eu/${id}`;

export const sections: SetupSection[] = [
  {
    id: "sistema",
    icon: "layers",
    title: { pt: "Sistema", en: "System" },
    text: {
      pt: "Uso Linux no dia a dia. Tenho um script que deixa uma máquina nova pronta para programar: atualiza os pacotes, instala as linguagens e as ferramentas de compilação e depois configura o terminal.",
      en: "I run Linux day to day. I keep a script that gets a fresh machine ready to code: it updates packages, installs languages and build tools, then sets up the terminal.",
    },
    items: [
      { label: { pt: "Base", en: "Base" }, value: "Debian/Ubuntu (apt)" },
      { label: { pt: "Linguagens", en: "Languages" }, value: "Python 3.10, Node.js LTS" },
      { label: { pt: "Ferramentas", en: "Tools" }, value: "Git, curl, build-essential, Yarn" },
      { label: { pt: "Apps", en: "Apps" }, value: "VS Code, Google Chrome" },
    ],
    snippet: {
      lang: "bash",
      code: `sudo apt update -y && sudo apt upgrade -y

# Python e ferramentas de compilação
sudo apt install python3.10-full python3.10-dev -y
sudo apt install git curl build-essential dkms perl wget -y

# Node.js LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs`,
    },
    gist: { file: "my-ambient-dev.sh", url: gist("9da57b58b190eb286de4d07b7e7f1e68"), updated: "2023-06-20" },
  },
  {
    id: "terminal",
    icon: "code",
    title: { pt: "Terminal", en: "Terminal" },
    text: {
      pt: "Zsh com Oh My Zsh e o prompt Spaceship. Dois plugins fazem a maior diferença: sugestão de comandos pelo histórico e destaque de sintaxe enquanto digito.",
      en: "Zsh with Oh My Zsh and the Spaceship prompt. Two plugins make the biggest difference: command suggestions from history and syntax highlighting as I type.",
    },
    items: [
      { label: { pt: "Shell", en: "Shell" }, value: "Zsh + Oh My Zsh" },
      { label: { pt: "Prompt", en: "Prompt" }, value: "Spaceship" },
      { label: { pt: "Plugins", en: "Plugins" }, value: "git, zsh-autosuggestions, zsh-syntax-highlighting" },
      { label: { pt: "Versões", en: "Version managers" }, value: "nvm (Node), pyenv (Python)" },
      { label: { pt: "Fonte", en: "Font" }, value: "Ubuntu Mono Powerline" },
    ],
    snippet: {
      lang: "bash",
      code: `# ~/.zshrc
ZSH_THEME="spaceship"
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

# instalação dos plugins
git clone https://github.com/zsh-users/zsh-autosuggestions \\
  \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \\
  \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting`,
    },
    gist: { file: ".zshrc", url: gist("512491b6d499b0bbe2bedebe6e55dccb"), updated: "2023-07-24" },
  },
  {
    id: "editor",
    icon: "pen",
    title: { pt: "Editor", en: "Editor" },
    text: {
      pt: "VS Code com o tema Catppuccin Mocha e JetBrains Mono. Deixo a interface enxuta: sem minimapa, sem breadcrumbs e com a barra de status escondida. O ESLint corrige o que der ao salvar.",
      en: "VS Code with the Catppuccin Mocha theme and JetBrains Mono. I keep the interface lean: no minimap, no breadcrumbs and a hidden status bar. ESLint fixes what it can on save.",
    },
    items: [
      { label: { pt: "Tema", en: "Theme" }, value: "Catppuccin Mocha" },
      { label: { pt: "Ícones", en: "Icons" }, value: "Catppuccin Mocha, Fluent Icons" },
      { label: { pt: "Fonte", en: "Font" }, value: "JetBrains Mono 15px, line-height 1.8" },
      { label: { pt: "Terminal integrado", en: "Integrated terminal" }, value: "JetBrainsMono Nerd Font 14px" },
      { label: { pt: "Indentação", en: "Indentation" }, value: "2" },
    ],
    snippet: {
      lang: "json",
      code: `{
  "workbench.colorTheme": "Catppuccin Mocha",
  "workbench.iconTheme": "catppuccin-mocha",
  "workbench.productIconTheme": "fluent-icons",
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontSize": 15,
  "editor.lineHeight": 1.8,
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.rulers": [80, 120],
  "editor.minimap.enabled": false,
  "breadcrumbs.enabled": false,
  "workbench.statusBar.visible": false,
  "editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" }
}`,
    },
    gist: { file: "settings.json", url: gist("b87e78619908247cf464283f8d82a4ac"), updated: "2024-01-23" },
  },
];

/** Outros gists públicos, listados no fim da página. */
export const otherGists: { file: string; url: string; date: string; text: Localized }[] = [
  {
    file: "React-UseId.jsx",
    url: gist("84739800a915d67a0f616b80c7150c98"),
    date: "2022-10-14",
    text: { pt: "Exemplo do hook useId, do React 18.", en: "Example of React 18's useId hook." },
  },
  {
    file: "UseSyncExternalStore.jsx",
    url: gist("bc46dce1a93e295ef91ef93328c45aa9"),
    date: "2022-10-14",
    text: {
      pt: "Exemplo do hook useSyncExternalStore, do React 18.",
      en: "Example of React 18's useSyncExternalStore hook.",
    },
  },
  {
    file: "UseDeferredValue.jsx",
    url: gist("eafd5648feb2fd67f290d4b09017d018"),
    date: "2022-10-14",
    text: {
      pt: "Exemplo do hook useDeferredValue, do React 18.",
      en: "Example of React 18's useDeferredValue hook.",
    },
  },
];
