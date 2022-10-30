import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import "uno.css";
import "@hansuhhi-don/csss/dist/style.css";

export function createApp() {
  const pinia = createPinia();
  const app = createSSRApp(App);

  app.use(pinia);

  return {
    app,
  };
}
