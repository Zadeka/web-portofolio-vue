<script setup lang="ts">
import { ref } from "vue";
import { Code2, Menu, X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { navLinks } from "@/data/portofolio.data"; // Import data

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<template>
  <nav
    class="bg-background/80 fixed top-0 z-50 w-full border-b border-emerald-100 backdrop-blur-md transition-colors duration-500 dark:border-emerald-900/50"
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <a href="#" class="flex items-center gap-2 text-xl font-bold tracking-tighter">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-green-600 shadow-md shadow-emerald-500/50 dark:from-emerald-400 dark:to-green-500 dark:shadow-emerald-400/30"
        >
          <Code2 class="h-5 w-5 text-white" />
        </div>
        <span
          class="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-400"
        >
          DevPortfolio
        </span>
      </a>

      <div class="hidden items-center gap-6 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
        >
          {{ link.name }}
        </a>
        <div class="mx-2 h-4 w-px bg-emerald-200 dark:bg-emerald-800"></div>
        <ThemeToggle />
        <Button
          as-child
          variant="default"
          size="sm"
          class="bg-linear-to-r from-emerald-600 to-green-600 text-white shadow-md shadow-emerald-500/30 transition-all duration-300 hover:from-emerald-700 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-600/40 dark:from-emerald-500 dark:to-green-500 dark:shadow-emerald-400/20 dark:hover:from-emerald-600 dark:hover:to-green-600"
        >
          <a
            href="https://drive.google.com/file/d/1063lhRUlHXIAfsLYypbUPnJ88ao5omk_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          @click="toggleMenu"
          class="text-foreground p-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          <Menu v-if="!isMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="bg-background/95 absolute top-16 left-0 flex w-full flex-col gap-4 border-b border-emerald-100 p-4 shadow-lg backdrop-blur-md md:hidden dark:border-emerald-900/50"
    >
      <a
        v-for="link in navLinks"
        :key="link.name"
        :href="link.href"
        @click="isMenuOpen = false"
        class="py-2 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
      >
        {{ link.name }}
      </a>
      <Button
        as-child
        variant="default"
        class="w-full bg-linear-to-r from-emerald-600 to-green-600 text-white shadow-md shadow-emerald-500/30 transition-all duration-300 hover:from-emerald-700 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-600/40 dark:from-emerald-500 dark:to-green-500 dark:shadow-emerald-400/20 dark:hover:from-emerald-600 dark:hover:to-green-600"
      >
        <a
          href="https://drive.google.com/file/d/1063lhRUlHXIAfsLYypbUPnJ88ao5omk_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </Button>
    </div>
  </nav>
</template>
