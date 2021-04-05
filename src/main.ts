import Vue from 'vue'
import App from './App.vue'
import { vuetify, router } from './plugins'
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
