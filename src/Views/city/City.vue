<script setup>
  import Serach from './cpns/Search.vue'
  import Tabs from './cpns/Tabs.vue'


</script>

<template>
  <div class="city">
    <Serach></Serach>
    <Tabs></Tabs>
  </div>
</template>

<style scoped>
.city {
  --van-search-input-height:20px
}

</style>
