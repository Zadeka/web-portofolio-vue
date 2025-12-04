<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";

// Setup VueUse
const mode = useColorMode({
  initialValue: "dark",
  disableTransition: false,
});

const toggleTheme = () => {
  mode.value = mode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    @click="toggleTheme"
    class="relative h-9 w-9 overflow-hidden rounded-full cursor-pointer"
  >
    <Sun
      class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90 fill-yellow-400 stroke-yellow-400"
    />

    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0 fill-indigo-900 stroke-indigo-900"
    />

    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
