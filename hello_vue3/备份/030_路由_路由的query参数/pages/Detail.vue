<template>
    <ul class="news-list">
        <li>编号：{{query.id}}</li>
        <li>标题：{{query.title }}</li>
        <li>内容：{{query.content}}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
    import {toRefs} from 'vue'
    import {useRoute} from 'vue-router'

    let route = useRoute()
    // console.log('@',route)
    let {query} = toRefs(route)
</script>

<style scoped>
    .news-list {
        list-style: none;
        padding-left: 20px;
    }

    .news-list>li {
        line-height: 30px;
    }
</style>