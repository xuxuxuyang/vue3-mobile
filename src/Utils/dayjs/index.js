import dayjs from "dayjs"


//离店时间格式化
export const leaveday = (date)=>{
   return dayjs(date).format('M月DD日')
}

// 转时间戳格式化
export const daytimes = (date)=>{
  return dayjs(date).unix()
}
