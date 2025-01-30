<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});
useHead({
  meta: page.value?.meta,
});
useSeoMeta({
  ...page.value?.seo,
});
</script>

<style></style>
