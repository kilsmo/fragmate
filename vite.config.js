import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: 'jsdom', // Set jsdom as the environment for tests
  },
  build: {
    lib: {
      entry: "src/index.js", // Entry file for the library
      name: "Fragmate",      // Global variable name for UMD builds
      fileName: (format) => `fragmate.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
