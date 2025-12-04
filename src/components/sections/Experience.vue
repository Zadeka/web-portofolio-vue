<script setup lang="ts">
import { Briefcase } from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { experiences } from "@/data/portofolio.data";
import { useIntersectionObserver, useTitle } from "@vueuse/core";
import { ref } from "vue";

// Make ref for root this page
const experienceSection = ref(null);

//Detection Section dengan Intersection Observer
useIntersectionObserver(
  experienceSection,
  ([entry]) => {
    if (entry?.isIntersecting) {
      // 3. Change tab title when section is visible
      useTitle("Oxa Defrizal | Experience");
    }
  },
  { threshold: 0.2 }, // Trigger when 20% of the section is visible
);

defineProps<{
  data: typeof experiences;
}>();
</script>

<template>
  <section
    ref="experienceSection"
    id="experience"
    class="from-background to-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b via-emerald-50/30 px-4 pt-32 pb-16 dark:via-emerald-950/20"
  >
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <div
        class="h-full w-full bg-[url(/src/assets/texture.svg)] bg-size-[60px] bg-center bg-repeat-space opacity-[0.6] transition-all duration-500 dark:opacity-[0.6] dark:invert"
      ></div>
      <div
        class="from-background via-background/80 to-background absolute inset-0 bg-linear-to-b"
      ></div>
    </div>

    <div class="relative z-10 mb-16 space-y-2 text-center">
      <h2
        class="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-3xl font-bold text-transparent dark:from-emerald-400 dark:to-green-400"
      >
        Work Experience
      </h2>
      <p class="text-muted-foreground">Perjalanan karir profesional saya sejauh ini.</p>
    </div>

    <div class="relative z-10 mx-auto max-w-3xl space-y-8">
      <div
        v-for="(job, index) in data"
        :key="index"
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 500, delay: index * 100 } }"
        class="relative border-l-2 border-emerald-200 pb-8 pl-8 last:pb-0 dark:border-emerald-800"
      >
        <div
          class="ring-background absolute top-6 -left-[9px] h-4 w-4 rounded-full bg-linear-to-br from-emerald-500 to-green-600 shadow-lg ring-4 shadow-emerald-500/50 dark:from-emerald-400 dark:to-green-500 dark:shadow-emerald-400/30"
        ></div>

        <Card
          class="bg-card/95 dark:bg-card/90 border-emerald-100 backdrop-blur-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 dark:border-emerald-900/50 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/30"
        >
          <CardHeader>
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 class="text-card-foreground text-xl font-bold">{{ job.role }}</h3>
              <Badge
                variant="secondary"
                class="w-fit bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
              >
                {{ job.period }}
              </Badge>
            </div>
            <div
              class="flex items-center gap-2 pt-1 text-base font-medium text-emerald-600 dark:text-emerald-400"
            >
              <Briefcase class="h-4 w-4" /> {{ job.company }}
            </div>
          </CardHeader>

          <CardContent>
            <ul
              class="ml-4 list-outside list-disc space-y-2 text-justify text-sm leading-relaxed text-slate-600 dark:text-slate-400"
            >
              <li
                v-for="(point, idx) in job.description"
                :key="idx"
                class="marker:text-emerald-500 dark:marker:text-emerald-400"
              >
                {{ point }}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
