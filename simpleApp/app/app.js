import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

// import VueDevtools from 'nativescript-vue-devtools'
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes.js'


new Vue({
  render: (h) => h('Navigator',{attrs:{defaultRoute:'/home'}}),
}).$start()

Vue.use(Navigator, { routes })

// Vue.use(VueDevtools)