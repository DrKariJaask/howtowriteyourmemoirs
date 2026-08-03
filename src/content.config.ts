import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    section: z.string(),
  }),
});

export const collections = {
  articles,
};
