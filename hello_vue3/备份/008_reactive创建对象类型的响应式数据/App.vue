<template>
    <Person></Person>
</template>

<script lang="ts">
import Person from '../src/components/Person.vue'
    // js或Ts
    export default {
        name: 'App', // 组件名
        components:{Person} // 注册组件
    }
</script>