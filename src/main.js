import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars , faStar , faFilm, faHandHoldingHeart, faPlay, faKissWinkHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faTwitter, faTwitch, faYoutube, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF , faTwitter, faTwitch, faYoutube, faBars, faStar, faFilm, faDiscord, faHandHoldingHeart, faInstagram, faPlay, faKissWinkHeart )

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
