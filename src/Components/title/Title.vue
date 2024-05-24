<script setup>
  import {useCommon} from '@/Stores/common'
  import { storeToRefs } from "pinia";

  const useCommonStore = useCommon()
  const commonStates = storeToRefs(useCommonStore)


</script>

<template>
  <div class="title">
   <van-nav-bar :title="commonStates.title.value"  fixed />
  </div>
</template>

<style scoped>
.title {
  position: relative;
  height: 46px;
  width: 100%;
}
</style>
