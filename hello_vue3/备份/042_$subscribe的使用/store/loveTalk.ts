import {defineStore} from 'pinia'
import {nanoid} from 'nanoid'
import axios from 'axios'

export const userTalkStore = defineStore('talk',{
    actions:{
        async getATalk(){
            // 发请求,下面这行写法是：连续解构赋值+重命名
            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // console.log(result.data.content)
            // 把请求回来的字符串，包装成一个对象
            let obj = {id:nanoid(),title}
            // console.log(obj)
            // 放到数组中
            this.talkList.unshift(obj)
        }
    },
    // 真正存储数据的地方
    state(){
        return {
            talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})