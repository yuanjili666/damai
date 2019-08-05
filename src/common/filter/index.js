import Vue from "vue"  //引入vue 

Vue.filter("ToImg",(path,info)=>{    //全局过滤器
  return path.replace(/w\.h/,info)    //  正则查找替换
})
