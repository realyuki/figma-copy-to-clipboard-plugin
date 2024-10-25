import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteSingleFile(), tsconfigPaths()],
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: "./src/main.ts",
      output: {
        entryFileNames: "main.js",
      },
    },
  },
});
