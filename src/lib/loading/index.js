import Loading from "./index.vue";    //加载，这个是当页面还没有加载出来的时候显示这个组件，可以通过控制台看，这个组件可以挂载任意地方，哪里需要哪里就挂载
import Vue from "vue";  //引入vue 
export default () => {


/*  请注意，extend创建的是一个组件构造器，而不是一个具体的组件实例。
  所以他不能直接在new Vue中这样使用： new Vue({components: fuck})
   最终还是要通过Vue.components注册才可以使用的。 
    
Vue.extend()构造器
*/

    let LoadingComponent = Vue.extend(Loading);   //
    let vm = new LoadingComponent({   //
        el: document.createElement("div"),  //创建 一个div，并挂载     
        methods: {
            handlemount() {
                document.body.appendChild(vm.$mount().$el)       //把这个vm.$mount().$el （也就是div） 放在body中
            },
            handleDestory() {
                document.body.removeChild(vm.$mount().$el)    //把上面那个移除
            }
        }
    })


    return vm; 

}