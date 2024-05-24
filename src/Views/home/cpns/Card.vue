<script setup>
  import router from '@/Router';
  import { useHomeStore } from '@/Stores/home';
  import { storeToRefs } from 'pinia';
  const homeStore = useHomeStore()
  const {carddates,loding,nomore} = storeToRefs(homeStore)
    homeStore.getcarddates()
    const onLoad = () => {
      setTimeout(() => {
      homeStore.getcarddates()
      }, 1000);
    };

const tocont= (cityId)=>{
  router.push('/details/'+cityId)
}




</script>

<template>
  <div class="card">
    <van-list
                    v-model:loading="loding"
                    :finished="nomore"
                    loading-text
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                        <van-cell v-for="item in carddates" :key="item.data.cityId" :title="item.data.cityId" @click="tocont(item.data.cityId)"/>
    </van-list>
  </div>
</template>

<style scoped>
.van-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
 .card {
  display: flex;
  flex-wrap: wrap;
  padding: 5px 10px;
  margin-bottom: 80px;
 }

 .van-cell {
  background-color: pink;
  height: 230px;
  border-radius: 8px;
  width: 50%;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 5px 0;
 }
 /* :deep(.van-list__finished-text) {
  margin-bottom:100px ;
 } */
</style>
