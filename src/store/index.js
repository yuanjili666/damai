import Vue from "vue" //1.引入 vue
import Vuex from "vuex"  //2.引入vuex
Vue.use(Vuex);  //3. use  的作用是使用插件
const state = {}   //这个是为了美观的写法，这些常量都要放在  new vuex.store({})
const actions = {}    //这个是为了美观的写法，这些常量都要放在  new vuex.store({})
const mutations = {}    //这个是为了美观的写法，这些常量都要放在  new vuex.store({})

export default new Vuex.Store({  //4.1导出一下的东西
    state,  //4.2 数据的
    actions,  //4.3  
    mutations,  //4.4
    modules:{}   //4.5
})


/*
项目文件结构构件好了之后。
这个是把vue.config.js   文件编写好了之后开始写的这个页面。

*/