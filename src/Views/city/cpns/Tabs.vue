<script setup>
  import { ref } from 'vue';
  const active = ref('');
  import {useCity} from '@/Stores/city'
  import {useCommon} from '@/Stores/common'
  import { storeToRefs } from "pinia";
import router from '@/Router';
  const useCityStore = useCity()
  const useCommonStore = useCommon()
  const citystates = storeToRefs(useCityStore)
  const Commonstates = storeToRefs(useCommonStore)

  useCityStore.getcitydates()

  const choose = (item)=>{
    useCommonStore.city.cityName = item
    Commonstates.titltshow.value = true
    Commonstates.tabbarshow.value = true
    router.go(-1)
  }

</script>
<template>
  <div class="tabs">
    <van-tabs  v-model:active="active" line-width="30px">
      <template  v-for="(value,key) in citystates.citydates.value" :key="key">
        <van-tab :title="value.title" :name="key">
          <!-- 可滚动内容 -->
          <div class="content">
              <van-index-bar>
                <!-- 热门 -->
                  <div class="hot">
                    <template v-for="(item) in value.hotCities">
                      <div class="hoticon"  @click="choose(item.cityName)">{{item.cityName}}</div>
                    </template>
                  </div>
                <!-- 大分类 -->
                  <template v-for="item in value.cities">
                    <van-index-anchor :index="item.group" />
                    <!-- 小分类 -->
                        <template v-for="item2 in item.cities">
                              <van-cell :title="item2.cityName" @click="choose(item2.cityName)"/>
                       </template>
                  </template>..
              </van-index-bar>
              <van-list>
                <van-cell v-for="item in value.cities" :key="item" :title="item.group" />
              </van-list>
          </div>
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style scoped>
.tabs {
  position: relative;
}
.hot {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.hoticon {
  font-size: 12px;
  text-align: center;
  width: 70px;
  height: 28px;
  line-height: 28px;
  border-radius: 14px;
  margin: 5px 7px;
  background-color: #fff4ec;
  color: #000;
}
.content {
  position: relative;
  height: calc(100vh - 70px);
  overflow-y: auto;
}
</style>
