import { defineContentConfig, defineCollection } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSitemapCollection({
        type: "page",
        source: "**",
      })
    ),
    blog: defineCollection(
      asSitemapCollection({
        type: "page",
        // source: "blog/*.md",
        source: "blog/**",
      })
    ),
  },
});
