<template>
    <div class="header">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{   //别处传值，props接收的值
        title:{ 
            type:String,     //类型
            default:"猫眼电影"    //默认值
        }
    }
}
</script>

<style>
    .header{
        width: 100%;
        height: 1rem;
        background: #e54847;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top:0;
    }
</style>