import {customRef} from 'vue'

export default function(initValue:string,delay:number){
// 使用vue提供的customRef定义响应式数据
let timer:number
// track(跟踪)、trigger(触发)
let msg = customRef((track,trigger)=>{
    return {
        // get何时调用，—— msg被读取时调用
        get(){
            // 告诉vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
            track()
            return initValue			
        },
        // set何时调用？—— msg被修改时调用
        set(value){
            clearTimeout(timer)
            timer = setTimeout(() => {
                // console.log("set",value)
                initValue = value
                // 通知vue一下数据msg变化了
                trigger()
            }, delay);
        }
    }
})
return {msg}
}