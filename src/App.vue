<script setup>
  import Tabbar from "@/Components/tabbar/Tabbar.vue";
  import Title from "@/Components/title/Title.vue"
  import {useCommon} from '@/Stores/common'
  import { storeToRefs } from "pinia";

  const useCommonStore = useCommon()
  const commonStates = storeToRefs(useCommonStore)
</script>

<template>
  <Title v-if="commonStates.titltshow.value"></Title>
      <router-view v-slot="{ Component }">
        <keep-alive include="Home">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <keep-alive include="home">
         <router-view>111</router-view>
      </keep-alive> -->
  <Tabbar v-if="commonStates.tabbarshow.value"></Tabbar>
</template>

<style scoped>
:deep(.van-tabbar-item__text) {
  color: pink
}
:deep(.van-badge__wrapper .van-icon .van-icon-home-o) {
  color: pink
}

</style>
