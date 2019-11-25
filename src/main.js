import Vue from 'vue'
import App from './App'
import router from './router' //默认导入此目录下的index文件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
