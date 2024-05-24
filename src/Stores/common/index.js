import { defineStore } from "pinia";

export const useCommon = defineStore('common',{
  state:()=>{
    return {
      title:'首页',
      titltshow:true,
      tabbarshow:true,
      city:{
        cityName:'江西'
      }
    }
  }
})
