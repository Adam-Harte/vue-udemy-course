import Vue from 'vue'
import App from './App.vue'

import Header from './Header.vue'
import Servers from '.Servers.vue'
import Footer from './Footer.vue'

Vue.component ('vue-header', Header)
Vue.component ('servers', Servers)
Vue.component ('vue-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
