<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="getDog">再来一只小狗</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {ref,reactive} from 'vue'
    import axios from 'axios'

    //https://dog.ceo/api/breed/pembroke/images/random

    // 数据
    let sum = ref(0)
    let dogList = reactive([
        'https://images.dog.ceo//breeds//pembroke//n02113023_2971.jpg'
    ])

    // 方法
    function add(){
        sum.value += 1
    }

    async function getDog(){
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
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
    li{
        font-size: 20px;
    }
    img{
        height: 100px;
        margin-right: 10px;
        margin-left: 10px;
    }
</style>