import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Update base URL for GitHub Pages
export default defineConfig({
  base: "/CryptoTrekker/", 
  plugins: [react()],
});
