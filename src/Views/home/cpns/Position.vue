<script setup>
import  router from '@/Router'
  import {useCommon} from '@/Stores/common'
  import { storeToRefs } from "pinia";
  const useCommonStore = useCommon()
  const commonStates = storeToRefs(useCommonStore)
  const tocity = ()=>{
  commonStates.titltshow.value = false
  commonStates.tabbarshow.value = false
  router.push('/city')
}
</script>

<template>
  <div class="position" @click="tocity">
    <div>{{ useCommonStore.city.cityName}}</div>
    <div>切换位置<van-icon name="location-o" /></div>
  </div>
</template>

<style scoped>

.position {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  font-size: 12px ;
}
</style>
