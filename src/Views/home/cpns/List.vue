<script setup>

</script>

<template>
  <div class="list">
    <template v-for="item in 100">
      <div class="item" >
        {{ item }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.list {
  height: 50px;
  background-color: pink;
  display: flex;
  overflow-x: auto;
}
.list::-webkit-scrollbar {
    display:none
  }
.item {
  margin: 10px 10px;
  background-color: forestgreen;
  /* height: 30px; */
  width: 30px;
}
</style>
