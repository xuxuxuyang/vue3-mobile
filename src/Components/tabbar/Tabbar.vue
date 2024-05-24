<script setup>
import {reactive, ref} from 'vue'
import {useCommon} from '@/Stores/common'
import { storeToRefs } from "pinia";
const useCommonStore = useCommon()
const commonStates = storeToRefs(useCommonStore)

const active = ref(0)
const tabbaritem = [
  {
    title:'首页',
    path:'/home',
    icon:'home-o'
  },
  {
    title:'收藏',
    path:'/collection',
    icon:'send-gift-o'
  },
  {
    title:'订单',
    path:'/order',
    icon:'search'
  },
  {
    title:'我的',
    path:'/my',
    icon:'contact-o'
  }
]
const routerChange =(index)=>{
  commonStates.titltshow.value = true
  // 控制激活状态
  active.value = index
  //控制title动态切换
  if(index == 1){
    commonStates.title.value = '收藏'
  }else if(index == 2){
    commonStates.title.value = '订单'
  }else if(index == 3){
    commonStates.title.value = '我的'
  }else {
    commonStates.title.value = '首页'
  }



}
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="active" @change="routerChange" active-color="#FFC0CB"  route
    >
      <template v-for="(item,index) in tabbaritem"  >
        <van-tabbar-item :icon="item.icon" :to="item.path">{{ item.title }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
