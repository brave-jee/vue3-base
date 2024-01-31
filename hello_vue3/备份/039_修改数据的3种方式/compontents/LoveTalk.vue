<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>  
</template>

<script setup lang="ts" name="LoveTalk">
    import {reactive} from 'vue'
    import axios from 'axios'
    import {nanoid} from 'nanoid'
    import {userTalkStore} from '@/store/loveTalk'

    const talkStore = userTalkStore()

    // 数据

    // 方法
    async function getLoveTalk(){

        // 发请求,下面这行写法是：连续解构赋值+重命名
        // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // console.log(result.data.content)
        // 把请求回来的字符串，包装成一个对象
        // let obj = {id:nanoid(),title}
        // console.log(obj)
        // 放到数组中
        // talkList.unshift(obj)
    }
</script>

<style scoped>
 .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
 }
</style>