import { defineStore } from 'pinia'

let useLayoutSettingStore = defineStore('SettingStore',{
    state:() => {
        return {
            fold: false
        }
    },
    actions:{
        changeFold(){
            this.fold = !this.fold
        }
    }
})

export default useLayoutSettingStore