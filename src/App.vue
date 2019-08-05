<template>
  <div id="app">
    <router-view></router-view>  
    <!-- router-view，路由显示需要用到，没有它路由功能木有办法实现  -->
    <TabBar/>  
    <!-- A组件的，第三部。  在这里做展示 -->
  </div>
</template>

<script>
import TabBar from "common/tabBar"   //A组件（代表组件的意思），引入的第一步
export default {
    name:"App",
    components:{    
      TabBar,    //A组件， 做注册   （组件使用的第二步）
      
    }
}
</script>
<style lang="scss">

</style>
