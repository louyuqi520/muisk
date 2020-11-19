// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import qs from 'qs'
Vue.prototype.$qs = qs

Vue.use(VueBlu)

Vue.use(Vant);

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  components: { App },
  template: '<App/>'
})
