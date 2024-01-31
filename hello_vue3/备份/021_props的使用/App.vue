<template>
    <!--务必看懂下面这一行代码 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x"></h2> -->
    
    <Person a="哈哈" :list="personList"/>
</template>

<script lang="ts" setup name="App">
    import Person from '../src/components/Person.vue'
    import { reactive } from 'vue';
    import { type Persons } from './types';

    let x = 9

    let personList = reactive<Persons>([
        {id:'asudy01',name:'张三',age:18},
        {id:'asudy02',name:'李四',age:20},
        {id:'asudy03',name:'王五',age:22}
    ])
    // console.log(personList)
</script>./components/Person.vue