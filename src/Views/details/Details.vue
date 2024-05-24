<script setup>
  import {useCommon} from '@/Stores/common'
  const useCommonStore = useCommon()
  useCommonStore.titltshow = false
  useCommonStore.tabbarshow = false

  const onClickTab = ({ title }) => showToast(`跳到${title}对应的介绍`);
import { ref } from 'vue';
const activeName = ref(0);
const images = [
      'https://img0.baidu.com/it/u=1873225900,107983493&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=370',
      'https://img1.baidu.com/it/u=3391334114,2252902260&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=370',
    ];
</script>

<template>
  <div class="details">
    <!-- 导航栏 -->
    <van-tabs v-model:active="activeName" @click-tab="onClickTab">
      <van-tab title="标签 1" ></van-tab>
      <van-tab title="标签 2" ></van-tab>
      <van-tab title="标签 3" ></van-tab>
      <van-tab title="标签 4" ></van-tab>
      <van-tab title="标签 5" ></van-tab>
    </van-tabs>
    <!-- 轮播图 -->
        <div class="swipe">
              <van-swipe  :autoplay="1000">
                      <van-swipe-item v-for="image in images" :key="image">
                          <img :src="image" />
                      </van-swipe-item>
                <template #indicator="{ active, total }">
                    <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
                </template>
              </van-swipe>
        </div>
  </div>
</template>

<style scoped>
swipe{
  height: 100px;
}
.swipe img {
  height: 100px;
  width: 100%;
}
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
</style>
