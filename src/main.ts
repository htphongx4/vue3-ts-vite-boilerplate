import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import interceptors from "@/plugins/interceptors";
import axios from "axios";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import mitt from "mitt";
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
