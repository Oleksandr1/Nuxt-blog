<template>
  <NuxtLayout>
    <section>
      <div>
        {{ error.statusCode }}
        {{ error.statusMessage }}
      </div>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
defineProps<{ error?: { statusCode: number; statusMessage: string } }>();
</script>
<style></style>
