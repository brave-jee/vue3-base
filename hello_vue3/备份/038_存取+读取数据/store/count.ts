import {defineStore} from 'pinia'

export const userCountStore = defineStore('count',{
    // 真正存储数据的地方
    state(){
        return {
            sum:6
        }
    }
})

