import {defineStore} from 'pinia'

export const userTalkStore = defineStore('talk',{
    // 真正存储数据的地方
    state(){
        return {
            talkList:[
                {id:'ffff01',title:'你今天有点怪，哪里怪？怪好看的！'},
                {id:'ffff02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
                {id:'ffff03',title:'心里留了一块地，我的死心塌地'}
            ]
        }
    }
})