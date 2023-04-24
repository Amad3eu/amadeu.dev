import { Translation } from "../utils/types.ts";

const Project = (props: {
  link: string;
  domain: string;
  technologies: string;
  from: string;
  to: string;
  matteo?: boolean;
}) => (
  <a href={props.link} rel="noopener" target="_blank">
    <div
      class={`rounded-xl p-0.3 h-full bg-gradient-to-r from-[${props.from}] to-[${props.to}] cursor-pointer transition-transform hover:scale-105`}
    >
      <div class="bg-gray rounded-lg p-2 text-center h-full">
        <h4>{props.domain}</h4>
        <p>{props.technologies}</p>
      </div>
    </div>
  </a>
);

const Projects = (data: { translation: Translation["projects"] }) => (
  <>
    <h3>{data.translation.title}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
      <Project
        link="https://github.com/Amad3eu/sa-senai-vinil"
        domain="Goldies"
        technologies="ReactJS, TypeScript, TailwindCSS, SASS, NodeJS, Express, MariaDB"
        from="#1dbde6"
        to="#f1515e"
      />
      <Project
        link="https://picomment.vercel.app/"
        domain="picomment"
        technologies="Next.js, Tailwind CSS, React-redux"
        from="#00ff87"
        to="#60efff"
      />
      <Project
        link="https://fedget.vercel.app/"
        domain="fedget"
        technologies="ReactJS, TailwindCSS, NodeJS, React native, Expo"
        from="#bf0fff"
        to="#cbff49"
      />
      <Project
        link="https://github.com/Amad3eu/NubankInterface"
        domain="Nubank Interface"
        technologies="React Native, Expo, JavaScript"
        from="#696eff"
        to="#f8acff"
      />
      <Project
        link="https://github.com/Amad3eu/website-aggregator/tree/main/client"
        domain="website-aggregator"
        technologies="ReactJS, Nodemon, express, ChatGPT, puppeteer"
        from="#a9ff68"
        to="#ff8989"
      />
      <Project
        link="https://github.com/Amad3eu/hilla-todo"
        domain="hilla-todo"
        technologies="ReactJS, Hilla.js, TypeScript"
        from="#f6d5f7"
        to="#fbe9d7"
      />
      <Project
        link="https://cryptodeu.vercel.app/"
        domain="cryptodeu"
        technologies="Vue.js, Api CoinCheckGo, AWS SES"
        from="#fbd07c"
        to="#b5c6e0"
      />
      <Project
        link="https://www.sfn-neumann.de"
        domain="Portfolio Amadeu"
        technologies="Deno.js, Fresh, TailwindCSS"
        from="#ef709b"
        to="#fa9372"
      />
      <Project
        link="https://github.com/Amad3eu/TodoAPI"
        domain="TodoAPI"
        technologies="GoLang, Docker, Kobra, Viper"
        from="#9bafd9"
        to="#103783"
      />
      <Project
        link="https://github.com/Amad3eu/JsLesson"
        domain="JsLesson"
        technologies="JavaScript included: NodeJS, Express, MongoDB"
        from="#f5e6ad"
        to="#f13c77"
      />
    </div>
  </>
);

export default Projects;
