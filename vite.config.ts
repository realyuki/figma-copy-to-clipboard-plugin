import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [viteSingleFile(), tsconfigPaths()],
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    cssCodeSplit: false,
  },
});
