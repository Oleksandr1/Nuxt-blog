<template>
  <div class="flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showNextModeLabel">
      Change to {{ nextMode }}
    </div>
    <button
      @click="toggleMode"
      @mouseenter="showNextModeLabel = true"
      @mouseleave="showNextModeLabel = false"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-xl"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script lang="ts" setup>
type Mode = "system" | "light" | "dark";

const colorMode = useColorMode();

const showNextModeLabel = ref<boolean>(false);

const modes: Mode[] = ["system", "light", "dark"];

const nextModeIcons: Record<Mode, string> = {
  system: "🌓",
  light: "🌕",
  dark: "🌑",
};
const nextMode: ComputedRef<Mode> = computed(() => {
  const currentMode = modes.includes(colorMode.preference as Mode)
    ? (colorMode.preference as Mode)
    : "system";

  const currentModeIndex = modes.indexOf(currentMode);

  return modes[(currentModeIndex + 1) % modes.length];
});

const nextModeIcon: ComputedRef<string> = computed(
  () => nextModeIcons[nextMode.value as Mode]
);

const toggleMode = () => {
  colorMode.preference = nextMode.value;
};
</script>

<style scoped></style>
