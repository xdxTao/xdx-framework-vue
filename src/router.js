import VueRouter from 'vue-router'      //导入路由的包
//导入对应的路由组件
const Payment = () => import('./pages/tools/Payment.vue')



// 3. 创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则
    // { path: '/',component:home, meta: {title: '小道仙模板'} },
    { path: '/Payment',component: Payment, meta: {title: '测试支付'} },
    // { path: '*',component: error, meta: {title: '页面走丢了'} },

    

    
  ],
  linkActiveClass: ''  //覆盖默认的路由高亮类 默认的叫 router-link-active
})

// 把路由对象暴露出去
export default router