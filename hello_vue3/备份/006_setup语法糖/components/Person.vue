<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <h2>年龄:{{ address }}</h2> 
        <h2>电话:{{ tel }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- <script lang="ts">

    export default {
        name: 'person',
    }
</script> -->

<script lang="ts" setup name="Person">
    // 数据，原来是写在data中的，此时的name，age，tel都不是响应式的数据
    let name = '张三' 
    let age = 18  
    let tel = '13829893238'  
    let address = '北京昌平区宏富琬.宏富科技园'

    
   // 方法
   function changeName(){
        // console.log(1)
        name = 'zhang-san'  // 注意：这样修改name，页面是没有变化的
        console.log(name)   // name确实改了，但是name不是响应式的
    }
    function changeAge(){
        // console.log(2)
        age += 1            // 注意：这样修改age，页面是没有变化的
        console.log(age)   // age确实改了，但是age不是响应式的
    }
    function showTel(){
        // console.log(3)
        alert(tel)       
        console.log(tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }
</style>