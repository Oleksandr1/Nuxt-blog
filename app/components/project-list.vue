<template>
  <div class="not-prose">
    <p class="mb-10">Take a look at my GitHub projects:</p>
    <section v-if="status === 'pending'">Loading...</section>
    <section v-else-if="error">{{ error }}</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in repos"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono dark:hover:bg-gray-800"
          :key="repo.id"
        >
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between">
              <div class="font-semibold">{{ repo.name }}</div>
              <div>{{ repo.stargazers_count }} ★</div>
            </div>
            <p class="text-sm">
              {{ repo.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup lang="ts">
import { Repo } from "../types";

const { data, error } = await useAsyncData<Repo[]>("repos", () =>
  $fetch("https://api.github.com/users/Oleksandr1/repos")
);

const repos = computed((): Repo[] => {
  if (!data.value) return [] as Repo[];
  const value = data.value as Repo[];
  return value
    .filter((repo: Repo) => repo.description)
    .sort((a: Repo, b: Repo) => a.stargazers_count - b.stargazers_count);
});
</script>

function useColorMode(): any { throw new Error("Function not implemented."); }
