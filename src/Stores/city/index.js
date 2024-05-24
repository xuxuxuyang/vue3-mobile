import { defineStore } from "pinia";
import {citydatesApi} from '@/Services/api/city'

export const useCity= defineStore('city',{
  state:()=>{
    return {
      citydates:{}
    }
  },
  actions:{
     async getcitydates(){
      const res = await citydatesApi()
      this.citydates  = res.data.data
    }
  }
})
