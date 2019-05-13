import Vue from 'vue'
//js bootstrap
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
//css bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
