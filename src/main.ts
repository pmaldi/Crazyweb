import { createApp } from 'vue';
import App from './App.vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import FontAwesomeIcon from "@/utilities/fontawesome-icons";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(BootstrapVue3)
    .mount("#app");