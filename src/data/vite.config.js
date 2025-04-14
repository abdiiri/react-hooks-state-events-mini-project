import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import polyfillNode from "vite-plugin-polyfill-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), polyfillNode()],
  resolve: {
    alias: {
      crypto: "crypto-browserify", // Polyfill for crypto API
    },
  },
});
