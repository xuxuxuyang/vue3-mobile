<script setup>
import router from'@/Router/index'
  import {useCommon} from '@/Stores/common'
  import { storeToRefs } from "pinia";
  const useCommonStore = useCommon()
  const commonStates = storeToRefs(useCommonStore)
  import { ref } from 'vue';
  import { showToast } from 'vant'
    const value = ref('');
    const onSearch = (val) => showToast(val);
    const onCancel = () => {
      router.go(-1)
      commonStates.titltshow.value = true
      commonStates.tabbarshow.value = true
    };
</script>

<template>
  <div class="search">
    <form action="/">
     <van-search
      v-model="value"
      show-action
      placeholder="请输入目的地"
      @search="onSearch"
      @cancel="onCancel"
    />
    </form>
  </div>
</template>

<style scoped>
.search {
  position: relative;
}

</style>
