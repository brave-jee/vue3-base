<template>
    <div class="app">
        <h1>你好呀！</h1>
        <Person></Person>
    </div>
</template>

<script lang="ts">
import Person from '../src/components/Person.vue'
    // js或Ts
    export default {
        name: 'App', // 组件名
        components:{Person} // 注册组件
    }
</script>

<style>
    /* 样式 */
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>