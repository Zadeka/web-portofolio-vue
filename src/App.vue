<script setup lang="ts">
// Import Layouts
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

// Import Sections
import Hero from "@/components/sections/Hero.vue";
import About from "@/components/sections/About.vue";
import Experience from "@/components/sections/Experience.vue";
import Projects from "@/components/sections/Projects.vue";

// Import Data
import { experiences, projects } from "@/data/portofolio.data";
</script>

<template>
  <div
    class="bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen font-sans transition-colors duration-500"
  >
    <Navbar />

    <main>
      <Hero />
      <About />

      <Experience :data="experiences" />
      <Projects :data="projects" />
    </main>

    <Footer />
  </div>
</template>
