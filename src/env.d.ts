/// <reference types="vite/client" />

// Declaration for SVG files to be recognized as strings (URLs)
declare module "*.svg" {
  const content: string;
  export default content;
}

// Declaration for Vue components to avoid import errors
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
