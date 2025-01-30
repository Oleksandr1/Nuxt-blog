<template>
  <article class="prose dark:prose-invert">
    <button
      @click="router.back"
      class="underline underline-offset-1 hover:bg-gray-100 dark:hover:bg-gray-800 ma-2 p-2"
    >
      back
    </button>

    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
console.log("route.path", route.path);
const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});
useHead({
  ...page.value.meta.head,
});
</script>

<style></style>
