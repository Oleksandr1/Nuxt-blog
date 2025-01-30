<template>
  <div>
    <section class="no-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div>Date</div>
        <div>Title</div>
      </div>
      <ul>
        <li v-for="blog in blogs" :key="blog.id">
          <NuxtLink
            :to="blog.path"
            class="column hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div class="text-gray-500">{{ blog?.meta?.publishedAt }}</div>
            <div>{{ blog.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { ContentInfo } from "../../types";
const router = useRouter();
const { data } = await useAsyncData<ContentInfo[]>(
  "blogs",
  async (): Promise<ContentInfo[]> => {
    return queryCollection("blog").all() as unknown as ContentInfo[];
  }
);
console.log("BlogCollectionItem");
const blogs: ComputedRef<ContentInfo[]> = computed(() => {
  if (!data.value) return [] as ContentInfo[];
  return data.value.sort((a: ContentInfo, b: ContentInfo) => {
    const dateA = new Date(a?.meta?.publishedAt || 0).getTime();
    const dateB = new Date(b?.meta?.publishedAt || 0).getTime();
    return dateB - dateA;
  });
});
</script>
<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
