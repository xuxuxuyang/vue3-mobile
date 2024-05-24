// 4.实例化使用pinia
import { defineStore } from "pinia";
import { storeToRefs } from "pinia";
import {homecarddatesApi} from '@/Services/api/home'

//创建一个Store（可以创建多个，所以很方便）
export const useHomeStore= defineStore('home',{
  state:()=>({
    carddates:[],
    page:1,
    loding:true,
    nomore:false,
    homescrolltop:0
  }),
  getters:{

  },
  //不能使用箭头函数，因为要使用this
  actions:{
    async getcarddates(){
      try{
        const res = await  homecarddatesApi(this.page)
        const ress = res.data.data
        this.carddates.push(...ress)
        this.loding = false
        this.page++
      }catch {
        this.nomore = true
      }
    }
  }
})
