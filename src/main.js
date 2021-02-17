import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
// 如果是代理跨域的话，就不用写完整的URL了
axios.defaults.baseURL = '/api';
//设置最长超时时间，可以优化用户体验
axios.defaults.timeout = 8000;
//设置相应拦截器
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    this.$router.push('/login')
  } else {
    alert(res.msg)
  }

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
