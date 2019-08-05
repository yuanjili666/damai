import Vue from 'vue'       //1.引入 vue
import App from './App.vue'    //2.引入  App.vue
import store from "store"    //vuex的 
import router from "router"   //路由的
import "common/components/index.js"         
import "common/filter/index.js";
Vue.config.productionTip = false      //阻止了生产模式，此时是以开发模式运行，可以更改为true查看变化

new Vue({
  router,    //引入的文件要new才行，所以
  store,
  render: h => h(App)   //render是很牛逼的，
}).$mount('#app')    // 外部挂载，不挂载你看不到



/*





*/