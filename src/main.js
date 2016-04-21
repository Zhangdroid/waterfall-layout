import Vue from 'vue'
import App from './App'
import VueAsyncData from 'vue-async-data'
import VueAnimatedList from 'vue-animated-list'

/* eslint-disable no-new */
Vue.use(VueAsyncData)
Vue.use(VueAnimatedList)
new Vue({
  el: 'body',
  components: { App }
})

