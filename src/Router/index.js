// 路由：
// 1.npm run vue-router
import { createRouter,createWebHistory } from "vue-router";
// 2.实例化路由
const router = createRouter({
  //3.设置路由模式
  history:createWebHistory(),
  // 4.数组包对象一个对象一个路由
  routes:[
    {
      path:'/',
      redirect:'/home' //默认重定向
    },
    {
      path:'/home',//配置路径
      component:()=> import('@/Views/home/Home.vue'), //懒加载
    },
    {
      path:'/collection',
      component:()=> import('@/Views/collection/Collection.vue'),
    },
    {
      path:'/order',
      component:()=> import('@/Views/order/Order.vue'),
    },
    {
      path:'/my',
      component:()=> import('@/Views/my/My.vue'),
    },
    {
      path:'/city',
      component:()=> import('@/Views/city/City.vue'),
    },
    {
      path:'/search/:id',
      component:()=> import('@/Views/search/Search.vue')
    },
    {
      path:'/details/:id',
      component:()=> import('@/Views/details/Details.vue')
    }
  ]
})

export default router
