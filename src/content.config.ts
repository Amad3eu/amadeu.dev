import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Posts ficam em src/content/blog/<lang>/<slug>.mdx.
 * Mesmo nome de arquivo em pt/ e en/ = tradução do mesmo post.
 * Posts com `externalUrl` não geram página: o link sai direto para o site original.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    externalUrl: z.url().optional(),
    externalSite: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
