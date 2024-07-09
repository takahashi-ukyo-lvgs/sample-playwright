/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "none",
    host: "127.0.0.1",
  },
  preview: {
    open: "none",
    host: "127.0.0.1",
  },
  plugins: [react()],
  test: {
    globals: true,
    include: ["app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["postcss.config.js"],
    environment: "jsdom",
  },
  resolve: {},
})
