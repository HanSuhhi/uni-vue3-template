import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// import presetIcons from "@unocss/preset-icons";
import unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), unocss()],
  envPrefix: [""],
});
