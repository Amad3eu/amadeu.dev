import { Translation } from "../utils/types.ts";

const Footer = (data: { translation: Translation["footer"] }) => (
  <div class="col-span-2 lg:col-span-1 flex gap-1 items-start mt-10 justify-between">
    <div class="flex flex-col items-center gap-2 flex-1 justify-center">
      <a
        class="relative w-4"
        href="https://github.com/Amad3eu"
        rel="noopener"
        target="_blank"
      >
        <img class="w-full" src="vectors/github.svg" alt="Logo of GitHub" />
      </a>
      <a href="https://fresh.deno.dev" class="w-15">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge-dark.svg"
          alt="Made with Fresh"
        />
      </a>
    </div>
  </div>
);

export default Footer;
