<script setup>
import router from '@/Router';
import {ref,onMounted,onUnmounted,onActivated} from 'vue'
  import Swipe from '../home/cpns/Swipe.vue';
  import Choosetime from './cpns/Choosetime.vue';
  import Position from './cpns/Position.vue';
  import List from './cpns/List.vue'
  import Card from './cpns/Card.vue';

  import { useHomeStore } from '@/Stores/home';
  import { storeToRefs } from 'pinia';
  const HomeStore = useHomeStore()
  // const HomeStores = storeToRefs(HomeStore)
  const id = 111
  const tosearch = ()=>{
    router.push('/search/'+id)
    // router.push({
    //   path:'/search',
    //   query:{
    //     id:'123'
    //   }
    // })
  }
  const scrollContainer = ref()
  const scroll = ref(0)
  onActivated(()=>{
    scrollContainer.value.scrollTop = HomeStore.homescrolltop
  })

  function handleScroll() {
    HomeStore.homescrolltop =  scrollContainer.value.scrollTop
  }
  onMounted(()=>{
    scrollContainer.value.addEventListener('scroll',handleScroll );
  })
  onUnmounted(() => {
    scrollContainer.value.removeEventListener('scroll', handleScroll);
  });

  // home2.value.addEventListener('scroll',(top)=>{
  //   console.log(top,123)
  //   scroll.value = top
  //   console.log(scroll.value,111)
  //   HomeStores.homescrolltop = scroll.value
  //   console.log(HomeStores.homescrolltop,222)
  // })

</script>

<template>
  <div class="home" ref="scrollContainer">
    <van-notice-bar scrollable text="米袋虽空——樱花开哉！" />
    <Swipe/>
    <Position/>
    <Choosetime/>
    <!-- <button @click="tosearch">搜索</button> -->
    <List />
    <Card/>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  /* background-color: #eee; */
  overflow-y: auto;
}
/* .home::-webkit-scrollbar {
    display:none
} */

</style>
