export const listenscroll = ()=>{
      const userclientHeight =  document.documentElement.clientHeight //客户端页面高度--手机屏幕多高就多高
      const pagescroll =  document.documentElement.scrollTop //页面滚动距离
      const pageallscroll =  document.documentElement.scrollHeight //总共可滚动距离
      if(userclientHeight + pagescroll >= pageallscroll){
          return true
      }
}
