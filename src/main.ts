import { createApp } from "vue";
import axios from "axios";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import mitt from "mitt";
import App from "@/App.vue";
import interceptors from "@/plugins/interceptors";
import router from "@/router";

// Tailwind CSS
import "@/assets/css/index.css";

// Global CSS
import "@/assets/scss/global.scss";

// api interceptors
interceptors(axios);

// define libs
const pinia = createPinia();
const emitter = mitt();

// create app
const app = createApp(App);

// provide mitt
app.provide("emitter", emitter);

// use libs
app.use(pinia);
app.use(router);
app.use(VueQueryPlugin);

// mount app
app.mount("#app");
