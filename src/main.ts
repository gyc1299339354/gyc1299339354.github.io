import Vue from 'vue'
import 'normalize.css'

import './assets/app.stylus'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

const VueTypedJs = require('vue-typed-js')
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
