import { getCollection, type CollectionEntry } from "astro:content";
import { postPath, type Lang } from "../i18n";

export type Post = CollectionEntry<"blog">;

export type PostSummary = {
  id: string;
  slug: string;
  lang: Lang;
  href: string;
  external: boolean;
  title: string;
  description: string;
  date: Date;
  category: string;
  readingTime: number;
  externalSite?: string;
};

const WORDS_PER_MINUTE = 220;

export const splitId = (id: string) => {
  const [lang, ...rest] = id.split("/");
  return { lang: lang as Lang, slug: rest.join("/") };
};

export const readingTime = (post: Post) => {
  if (post.data.readingTime) return post.data.readingTime;
  const text = (post.body ?? "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`[\]()-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

const isPublished = (post: Post) => import.meta.env.DEV || !post.data.draft;

const toSummary = (post: Post): PostSummary => {
  const { lang, slug } = splitId(post.id);
  const external = Boolean(post.data.externalUrl);
  return {
    id: post.id,
    slug,
    lang,
    href: post.data.externalUrl ?? postPath(slug, lang),
    external,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date,
    category: post.data.category,
    readingTime: readingTime(post),
    externalSite: post.data.externalSite,
  };
};

const byDateDesc = (a: { date: Date }, b: { date: Date }) =>
  b.date.valueOf() - a.date.valueOf();

/** Posts internos (com página própria) de um idioma. */
export const getLocalPosts = async (lang: Lang) =>
  (await getCollection("blog"))
    .filter((p) => isPublished(p) && !p.data.externalUrl && splitId(p.id).lang === lang)
    .sort((a, b) => byDateDesc(a.data, b.data));

/**
 * Lista para a página do blog: prioriza o idioma atual e completa com posts
 * que só existem no outro idioma (marcados na UI).
 */
export const getPostList = async (lang: Lang): Promise<PostSummary[]> => {
  const all = (await getCollection("blog")).filter(isPublished).map(toSummary);
  const current = all.filter((p) => p.lang === lang);
  const taken = new Set(current.map((p) => p.slug));
  const others = all.filter((p) => p.lang !== lang && !taken.has(p.slug));
  return [...current, ...others].sort(byDateDesc);
};

/** Tradução do mesmo post no outro idioma, se existir. */
export const getTranslation = async (post: Post) => {
  const { lang, slug } = splitId(post.id);
  const target = lang === "pt" ? "en" : "pt";
  const all = await getCollection("blog");
  const match = all.find((p) => p.id === `${target}/${slug}` && isPublished(p) && !p.data.externalUrl);
  return match ? postPath(slug, target) : undefined;
};
