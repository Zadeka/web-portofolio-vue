<script setup lang="ts">
import { User } from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useIntersectionObserver, useTitle } from "@vueuse/core";
import { ref } from "vue";

// Make ref for root this page
const aboutSection = ref(null);

//Detection Section dengan Intersection Observer
useIntersectionObserver(
  aboutSection,
  ([entry]) => {
    if (entry?.isIntersecting) {
      // 3. Change tab title when section is visible
      useTitle("Oxa Defrizal | About Me");
    }
  },
  { threshold: 0.5 }, // Trigger when 50% of the section is visible
);
</script>

<template>
  <section
    ref="aboutSection"
    id="about"
    class="from-background to-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b via-emerald-50/20 px-4 pt-32 pb-16 dark:via-emerald-950/10"
  >
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <div
        class="h-full w-full bg-[url(/src/assets/hideout.svg)] bg-size-[60px] bg-center bg-repeat-space transition-all duration-500 dark:opacity-[0.6] dark:invert"
      ></div>
      <div
        class="from-background via-background/80 to-background absolute inset-0 bg-linear-to-t"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="relative aspect-square overflow-hidden rounded-2xl border-2 border-emerald-200 bg-linear-to-br from-emerald-50 to-green-50 shadow-xl shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-200/50 md:aspect-4/3 dark:border-emerald-800 dark:from-emerald-950/50 dark:to-green-950/50 dark:shadow-emerald-900/30 dark:hover:border-emerald-700 dark:hover:shadow-emerald-800/40"
        >
          <img
            src="/src/assets/Gemini_Generated_Image_apyssmapyssmapys.png"
            alt="Profile"
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
        >
          <Card
            class="bg-card/95 dark:bg-card/90 h-full w-full border-emerald-100 shadow-lg shadow-emerald-100/30 backdrop-blur-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-200/40 dark:border-emerald-900/50 dark:shadow-emerald-900/20 dark:hover:border-emerald-800 dark:hover:shadow-emerald-800/30"
          >
            <CardHeader class="pb-4">
              <div class="flex items-center gap-2 text-lg font-semibold">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/50 dark:from-emerald-400 dark:to-green-500 dark:shadow-emerald-400/30"
                >
                  <User class="h-4 w-4" />
                </div>
                <span
                  class="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-400"
                  >About Me</span
                >
              </div>
            </CardHeader>

            <CardContent class="space-y-6">
              <p class="text-justify leading-relaxed text-slate-600 dark:text-slate-400">
                Hello, I'm
                <span class="font-semibold text-emerald-600 dark:text-emerald-400"
                  >Oxa Defrizal Khasay</span
                >, a passionate Frontend Web Developer with expertise in building modern,
                high-performance web applications. I specialize in the React ecosystem, including
                Next.js, transforming creative designs into intuitive and responsive user
                interfaces.
              </p>
              <p class="text-justify leading-relaxed text-slate-600 dark:text-slate-400">
                I am dedicated to writing clean, maintainable code and ensuring seamless user
                experiences across all devices. Committed to continuous learning, I thrive on
                leveraging the latest web technologies to drive innovation and deliver scalable
                frontend solutions.
              </p>

              <div class="flex flex-wrap gap-2">
                <Badge
                  variant="default"
                  class="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
                  >TypeScript</Badge
                >
                <Badge
                  variant="default"
                  class="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
                  >JavaScript</Badge
                >
                <Badge
                  variant="default"
                  class="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900"
                  >Next JS</Badge
                >
                <Badge
                  variant="default"
                  class="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
                  >Vue.js</Badge
                >
                <Badge
                  variant="default"
                  class="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900"
                  >React</Badge
                >
                <Badge
                  variant="default"
                  class="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
                  >Vite</Badge
                >
                <Badge
                  variant="default"
                  class="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900"
                  >Tailwind CSS</Badge
                >
                <Badge
                  variant="default"
                  class="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-900"
                  >Shadcn UI</Badge
                >
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
