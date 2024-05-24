<script setup>
    import { daytimes, leaveday } from '@/Utils/dayjs';
    import {ref,computed} from 'vue'
    // 时间格式化
    const formatDate = (date) => `${date.getMonth() + 1}月${date.getDate()}日`;
    //默认今天
    const nowtimes=  formatDate(new Date())
    const date = ref(nowtimes);
    //默认格式化离店时间+1天
    const leavetime = leaveday(new Date().getTime() + (1000*60*60*24)) //用时间戳格式化
    const leavedate= ref(leavetime);


    //计算一共几晚
    const staydays = ref(1)
    const cometimes = ref()
    const leavetimes = ref()
    const staytime = computed(()=>{
      return leavetimes.value - cometimes.value
    })
    //控制时间选择器
    const show = ref(false);
    const leaveshow = ref(false);
    const onConfirm = (value) => {
      cometimes.value = daytimes(value)
      show.value = false;
      date.value = formatDate(value);
    };
    const onleaveConfirm = (value) => {
      leavetimes.value = daytimes(value)
      staydays.value = staytime.value/(60*60*24)
      leaveshow.value = false;
      leavedate.value = formatDate(value);
    };
// -----------------------------------------------------------------------用区间时间选择器
    // import { ref } from 'vue';
    // const date = ref('');
    // const comedate = ref('0');
    // const leavedate = ref('');
    // const show = ref(false);

    // const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    // const onConfirm = (values) => {
    //   const [start, end] = values;
    //   comedate.value = formatDate(start)
    //   leavedate.value = formatDate(end)
    //   show.value = false;
    //   date.value = formatDate(start)
    // };
</script>

<template>
  <div class="choosetime">
      <div>
        <span class="time">入住</span>
        <van-cell  :value="date" @click="show = true" />
        <van-calendar v-model:show="show" @confirm="onConfirm" />
        <!-- 区间时间选择器 -->
        <!-- <van-cell :title="comedate" :value="date" @click="show = true" />
        <van-calendar v-model:show="show" type="range" @confirm="onConfirm" /> -->
      </div>
      <div class="howtime">共{{staydays}}晚</div>
      <div>
        <span class="time">离店</span>
        <van-cell  :value="leavedate" @click="leaveshow = true" />
        <van-calendar v-model:show="leaveshow" @confirm="onleaveConfirm" />
      </div>

  </div>
</template>

<style scoped>
:deep(.van-cell__value) {
  color: #413f3f;
}
.choosetime {
  font-size: 15px;
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
}
.howtime {
  margin-top: 10px;
  font-size: 12px;
  color: #413f3f;
}
.time {
  display: block;;
  font-size: 10px;
  color: #927e7e;
  /* margin: 0 15px; */
}

</style>
