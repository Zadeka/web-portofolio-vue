<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-vue-next";

import topographyPattern from "@/assets/topography.svg";
import { useIntersectionObserver, useTitle } from "@vueuse/core";
import { ref } from "vue";

// Make ref for root this page
const heroSection = ref(null);

//Detection Section dengan Intersection Observer untuk Title Tab
useIntersectionObserver(
  heroSection,
  ([entry]) => {
    if (entry?.isIntersecting) {
      useTitle("Oxa Defrizal | Home");
    }
  },
  { threshold: 0.5 },
);

const fadeInUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 40 }, // first state before animation
  hidden: { opacity: 0, y: 40, transition: { duration: 300 } }, // fast reset after leaving viewport
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 800,
      type: "spring", // Using spring effect for a more lively animation
      stiffness: 100,
      damping: 15,
      delay: delay, // Dynamic delay
    },
  },
});
</script>

<template>
  <section
    ref="heroSection"
    id="home"
    class="from-background to-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b via-emerald-50/10 px-4 pt-32 pb-16 text-center dark:via-emerald-950/5"
  >
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <img
        v-motion
        :initial="{ scale: 1.1, opacity: 0 }"
        :visible="{
          scale: 1,
          opacity: 0.6,
          transition: { duration: 700, type: 'keyframe', ease: 'easeInOut' },
        }"
        :src="topographyPattern"
        alt="Topography Pattern"
        class="h-full w-full object-cover transition-all duration-500 dark:opacity-[0.6] dark:invert"
      />

      <div
        class="from-background via-background/80 to-background absolute inset-0 bg-linear-to-t"
      ></div>
    </div>

    <div class="relative z-10 max-w-2xl space-y-6">
      <Badge
        v-motion="fadeInUp(0)"
        variant="secondary"
        class="rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-1 text-emerald-700 backdrop-blur-sm dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300"
      >
        Welcome to my portfolio
      </Badge>

      <h1
        v-motion="fadeInUp(150)"
        class="text-foreground text-4xl font-bold tracking-tight md:text-6xl"
      >
        Hi, I'm
        <span
          class="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-400"
          >Oxa Defrizal Khasay</span
        >
        <br />
        Frontend Developer
      </h1>

      <p
        v-motion="fadeInUp(300)"
        class="text-muted-foreground bg-background/30 mx-auto max-w-3xl rounded-lg p-2 text-lg backdrop-blur-sm md:text-xl"
      >
        Crafting
        <span class="font-medium text-emerald-600 dark:text-emerald-400">intuitive</span>
        and
        <span class="font-medium text-emerald-600 dark:text-emerald-400">aesthetic</span>
        user interfaces, while ensuring a
        <span class="font-medium text-emerald-600 dark:text-emerald-400"
          >seamless user experience</span
        >
        across all devices.
      </p>

      <div v-motion="fadeInUp(450)" class="flex justify-center gap-4 pt-4">
        <Button
          as-child
          size="lg"
          class="gap-2 bg-[#0077b5] text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-[#006399] hover:shadow-xl hover:shadow-blue-500/40 dark:bg-[#0077b5] dark:shadow-blue-400/20 dark:hover:bg-[#006399]"
        >
          <a
            href="https://www.linkedin.com/in/oxadefrizalkhasay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin class="h-4 w-4" />
            LinkedIn
          </a>
        </Button>
        <Button
          as-child
          variant="outline"
          size="lg"
          class="bg-background/50 gap-2 border-emerald-200 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-200/50 hover:shadow-xl hover:shadow-emerald-500/40 dark:border-emerald-800 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/80"
        >
          <a href="https://github.com/zadeka" target="_blank" rel="noopener noreferrer">
            <Github class="h-4 w-4" /> GitHub
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>
