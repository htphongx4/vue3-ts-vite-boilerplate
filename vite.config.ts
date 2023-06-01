import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import svgLoader from "vite-svg-loader";
import checker from "vite-plugin-checker";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@composables": path.resolve(__dirname, "./src/composables"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@plugins": path.resolve(__dirname, "./src/plugins"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    checker({
      typescript: true,
    }),
    visualizer({
      emitFile: false
    }),
    AutoImport({
      include: [
        /\.[t]s?$/, // .ts
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      dts: "./src/auto-imports.d.ts",
      imports: [
        "vue",
        "vue-router",
        {
          "@vueuse/core": [["get", "v"], "set", "useAsyncState"],
        },
      ],
      dirs: [
        "./src/composables",
        "./src/composables/**",
        "./src/components/**",
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_mixins.scss";`,
      },
    },
  },
  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    }
  }
});
