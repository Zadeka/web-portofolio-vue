<script setup lang="ts">
import { ExternalLink, Github } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { projects } from "@/data/portofolio.data";
import { useIntersectionObserver, useTitle } from "@vueuse/core";
import { ref } from "vue";

// Make ref for root this page
const projectsSection = ref(null);

//Detection Section dengan Intersection Observer
useIntersectionObserver(
  projectsSection,
  ([entry]) => {
    if (entry?.isIntersecting) {
      // 3. Change tab title when section is visible
      useTitle("Oxa Defrizal | Projects");
    }
  },
  { threshold: 0.2 }, // Trigger when 50% of the section is visible
);

defineProps<{
  data: typeof projects;
}>();
</script>

<template>
  <section
    ref="projectsSection"
    id="projects"
    class="from-background to-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b via-emerald-50/20 px-4 pt-32 pb-16 dark:via-emerald-950/10"
  >
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <div
        class="h-full w-full bg-[url(/src/assets/wiggle.svg)] bg-size-[60px] bg-center bg-repeat-space opacity-[0.6] transition-all duration-500 dark:opacity-[0.6] dark:invert"
      ></div>
      <div
        class="from-background via-background/80 to-background absolute inset-0 bg-linear-to-b"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <div class="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
        <div class="space-y-2">
          <h2
            class="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-3xl font-bold text-transparent dark:from-emerald-400 dark:to-green-400"
          >
            Featured Projects
          </h2>
          <p class="text-muted-foreground">A selection of key projects I've worked on.</p>
        </div>
        <Button
          as-child
          class="flex items-center justify-center gap-2 bg-linear-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:from-emerald-700 hover:to-green-700 hover:shadow-xl hover:shadow-emerald-600/50 dark:from-emerald-500 dark:to-green-500 dark:shadow-emerald-400/30 dark:hover:from-emerald-600 dark:hover:to-green-600"
        >
          <a
            href="https://github.com/Zadeka?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects <ExternalLink class="h-4 w-4" />
          </a>
        </Button>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="(project, index) in data"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 400, delay: index * 100 } }"
          class="bg-card/95 dark:bg-card/90 flex flex-col border-emerald-100 backdrop-blur-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 dark:border-emerald-900/50 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/30"
        >
          <CardHeader>
            <div
              class="mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-md border-2 border-emerald-100 bg-linear-to-br from-emerald-50 to-green-50 transition-all duration-300 hover:border-emerald-200 dark:border-emerald-900/50 dark:from-emerald-950/30 dark:to-green-950/30 dark:hover:border-emerald-800"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardTitle
              class="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-400"
            >
              {{ project.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="grow">
            <p class="text-justify text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ project.desc }}
            </p>
          </CardContent>
          <CardFooter class="flex flex-col items-start gap-4">
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="tech in project.tech"
                :key="tech"
                variant="secondary"
                class="bg-emerald-100 text-xs text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
              >
                {{ tech }}
              </Badge>
            </div>
            <Separator class="bg-emerald-100 dark:bg-emerald-900/50" />
            <div class="flex w-full gap-4 pt-2">
              <a
                v-if="project.link_github"
                target="_blank"
                rel="noopener noreferrer"
                :href="project.link_github"
                class="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                <Github class="h-4 w-4" /> Code
              </a>

              <a
                v-if="project.link_demo"
                target="_blank"
                rel="noopener noreferrer"
                :href="project.link_demo"
                class="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                <ExternalLink class="h-4 w-4" /> Live Demo
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
