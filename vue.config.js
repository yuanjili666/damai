const path = require("path")//path:所有输出文件的目标路径;
module.exports = {   
    devServer:{   //在开发环境下将 API 请求代理到 API 服务器 
        proxy:{  //用来设置代理，
            "/api":{  //自定义的/api
                target:"http://39.97.33.178",  //接口地址，  target 目标的意思   ，当请求/api的时候就代理请求"http://39.97.33.178"
                changeOrigin:true   //用来设置跨域的，如果是域名需要额外添加一个参数changeOrigin: true，否则会代理失败。
            }
        }
    },
    configureWebpack:{
        resolve:{//resolve  解决的意思
            //alias  是别名的  意思
            alias:{//下面就是为了解决../../的问题，（文件夹下面文件夹的文件访问其他文件夹的文件）
                "@":path.join(__dirname,"./src"),   //这个是路径拼接，
                //意思是@ 符号就代表src
                "api":path.join(__dirname,"./src/api"),//用来管理接口的
                "components":path.join(__dirname,"./src/components"), //用来放组件的
                "views":path.join(__dirname,"./src/views"),  //用来放页面的
                "common":path.join(__dirname,"./src/common"), //用来放公共的组件的，及其他公共的东西
                "utils":path.join(__dirname,"./src/utils"),  //公众的组件，公共的方法，封装公共的
                "router":path.join(__dirname,"./src/router"),  // 路由问价夹的设置
                "store":path.join(__dirname,"./src/store")   //vuex的文件夹设置
            }
        }
    }
}

/*
这个文件可以理解为webpack 重置项一样

这样就可以了，可以做一个测试一下，
在components  下面创建一个文件夹，在文件夹上面
例如：在components 下面创建一个文件夹叫做home，该问价下面有一个文件叫做index.vue
然后再App.vue 中引入，并且注册，在<template></template>  写上组件的名称标签

****这个文件的作用是设置地址的代理，已经地址简洁的设置

这个是第一步，项目的配置：
配置
/api =http://39.97.33.178  且可以跨域的

设置文件夹的访问地址设置：就是说地址定义名称

    "api"="./src/api",       //用来管理接口的
    "components"=/src/components"    //用来放组件的
    "views"="./src/views"        //用来放页面的
    "common"=/src/common"     //用来放公共的组件的，及其他公共的东西
    "utils"=/src/utils"        //公众的组件，公共的方法，封装公共的
    "router"=/src/router"      //路由
    "store"=./src/store"       //vuex



*/
