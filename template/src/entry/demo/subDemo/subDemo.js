// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Hallo from '../../../components/Hallo'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Hallo/>',
  components: { Hallo }
})
