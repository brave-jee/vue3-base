import {defineStore} from 'pinia'

export const userCountStore = defineStore('count',{
    // actions里面放置的是一个一个的方法，用于相应组件中的“动作”
    actions:{
        increment(value:number){
            console.log('increment被调用了',value)
            if(this.sum < 10){
                //修改数据(this是当前的store)
                this.sum += value
            }
        }
    },
    // 真正存储数据的地方
    state(){
        return {
            sum:6,
            school:'atgugu',
            address:'宏福科技园'
        }
    }
})

