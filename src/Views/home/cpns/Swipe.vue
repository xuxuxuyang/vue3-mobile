<script setup>
    const images = [
      'https://img0.baidu.com/it/u=1873225900,107983493&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=370',
      'https://img1.baidu.com/it/u=3391334114,2252902260&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=370',
    ];
</script>

<template>
  <div class="swipe">
      <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
              <img :src="image" />
            </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>
.swipe img {
  height: 100px;
  width: 100%;
}

</style>
