<template>
    <div class="person">
       ？？？
    </div>
</template>


<script lang="ts" setup name="Person">
    import {type PersonInter,type Persons} from '@/types'

    // let person:PersonInter = {id:'asy',name:'张三',age:60}

    let personList:Persons = [
        {id:'asy',name:'张三',age:60},
        {id:'asy',name:'李四',age:17},
        {id:'asy',name:'王五',age:20}
    ]
    
   
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
</style>