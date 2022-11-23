import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 9090,
    cors: true,
  },
  plugins: [react()],
  build: {
    outDir: "../public",
    sourcemap: true,
    watch: {
      buildDelay: 0,
      chokidar: { interval: "1s" },
    },
  },
});
