import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use the GitHub Pages base path when running in GitHub Actions to ensure
  // built asset URLs resolve correctly at https://<user>.github.io/<repo>/
  base: process.env.GITHUB_ACTIONS ? "/portfolio_anukshmitha_madhevan/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),

  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
