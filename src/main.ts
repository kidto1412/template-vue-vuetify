/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import api from "./plugins/axios";

const app = createApp(App);

app.config.globalProperties.api = api;

app.use(router);
app.use(vuetify);

registerPlugins(app);

app.mount("#app");
