import Vue from 'vue'
import App from './App.vue'
import VBodyScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false
Vue.use(VBodyScrollLock)

new Vue({
  render: h => h(App),
}).$mount('#app')
