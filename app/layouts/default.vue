<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-start md:items-center mt-5">
      <div class="flex items-center md:space-x-12">
        <div class="hidden md:block">
          <NuxtLink
            class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            to="/"
          >
            Oleksandr Shcherbyna</NuxtLink
          >
        </div>
        <the-menu />
      </div>
      <color-mode-selector />
    </header>
    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "%s - Oleksandr Shcherbyna",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto";
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
