import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "../config/site";
import { useTranslations, type Lang } from "../i18n";
import { getPostList } from "./posts";

export const buildFeed = async (context: APIContext, lang: Lang) => {
  const t = useTranslations(lang);
  const posts = await getPostList(lang);
  return rss({
    title: `${site.name} — ${t("blog.title")}`,
    description: t("blog.description"),
    site: context.site!,
    customData: `<language>${lang === "pt" ? "pt-BR" : "en"}</language>`,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.date,
      link: post.href,
      categories: [post.category],
    })),
  });
};
