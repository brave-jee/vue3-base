<template>
    <Person v-if="isshow"/>
</template>

<script lang="ts" setup name="App">
    import Person from '../src/components/Person.vue'
    import {ref,onMounted} from 'vue'

    let isshow = ref(true)

       // 挂载完毕
       onMounted(()=>{
        console.log('父---挂载完毕')
    })


</script>./components/Person.vue