<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="bg-background border-t border-emerald-100 py-12 transition-colors duration-500 dark:border-emerald-900/50"
  >
    <div
      class="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row"
    >
      <div class="text-center md:text-left">
        <h3
          class="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-lg font-bold text-transparent dark:from-emerald-400 dark:to-green-400"
        >
          Let's Connect
        </h3>
        <p class="text-muted-foreground mt-1 text-sm">
          Open to freelance and full-time opportunities.
        </p>
      </div>

      <div class="flex gap-4">
        <Button
          as-child
          variant="outline"
          size="icon"
          class="rounded-full border-emerald-200 transition-all duration-300 hover:border-red-300 hover:bg-red-50/50 dark:border-emerald-800 dark:hover:border-red-700 dark:hover:bg-red-950/30"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=oxadefrizal258@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email via Gmail"
          >
            <Mail class="h-4 w-4 stroke-red-500 dark:stroke-red-400" />
          </a>
        </Button>

        <Button
          as-child
          variant="outline"
          size="icon"
          class="rounded-full border-emerald-200 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-emerald-800 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
        >
          <a
            href="https://www.linkedin.com/in/oxadefrizalkhasay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin
              class="h-4 w-4 fill-blue-500 stroke-blue-500 dark:fill-blue-400 dark:stroke-blue-400"
            />
          </a>
        </Button>

        <Button
          as-child
          variant="outline"
          size="icon"
          class="rounded-full border-emerald-200 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-emerald-800 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30"
        >
          <a
            href="https://github.com/zadeka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github
              class="h-4 w-4 fill-slate-700 stroke-slate-700 dark:fill-slate-300 dark:stroke-slate-300"
            />
          </a>
        </Button>
      </div>

      <div class="text-muted-foreground max-w-64 text-justify text-sm leading-loose md:text-end">
        &copy; {{ currentYear }} Oxa Defrizal. <br class="md:hidden" />
        Built with <span class="font-semibold text-emerald-600 dark:text-emerald-400">Vue</span>,
        <span class="font-semibold text-sky-600 dark:text-sky-400">Tailwind v4</span>, and
        <span class="font-semibold text-black dark:text-white">Shadcn</span>.
      </div>
    </div>
  </footer>
</template>
