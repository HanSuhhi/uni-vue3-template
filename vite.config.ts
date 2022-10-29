import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import unocss from "unocss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), unocss()],
  envPrefix: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
