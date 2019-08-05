<template>
    <div id="footer">    
        <!--   脚部组件 -->
        <ul>
            <!-- 这个是路由的一个写法，to是从哪个路由来，tag 是设定标签类型 -->
            <router-link      
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
            tag="li"  
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    icon:"&#xe717;",   //这个是字体图标
                    text:"电影",       //名字
                    path:"/movie"       //路径
                },
                {
                    icon:"&#xe61d;",
                    text:"影院",
                    path:"/cinema"
                },
                {
                    icon:"&#xe605;",
                    text:"我的",
                     path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom:0;
        background: #fff;
        border-top:1px solid #ccc;
    }
    
    #footer ul,#footer ul li{
        width: 100%;
        height: 100%;
    }
    #footer ul{
        display: flex;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:.3rem
    }
    #footer ul li i{
        font-size:.4rem;
    }

    #footer ul .router-link-active{
        color:#c33;
    }
</style>