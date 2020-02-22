import VueRouter from 'vue-router' // 导入路由的包
// 导入对应的路由组件
const Payment = () => import('./pages/tools/pay/Payment.vue')
const Error = () => import('./pages/tools/pay/Error.vue')
const Success = () => import('./pages/tools/pay/Success.vue')
const UserList = () => import('./pages/usermgmt/UserList.vue')
const MenuMgmt = () => import('./pages/usermgmt/MenuMgmt.vue')
const AuthorityMgmt = () => import('./pages/usermgmt/AuthorityMgmt.vue')

// 3. 创建路由对象
var router = new VueRouter({
    routes: [ // 配置路由规则
    // { path: '/',component:home, meta: {title: '小道仙模板'} },
        { path: '/tools/pay/payment', component: Payment, meta: { title: '测试支付' }},
        { path: '/pay/error', component: Error, meta: { title: '支付失败' }},
        { path: '/pay/success', component: Success, meta: { title: '支付成功' }},
        { path: '/user/userlist', component: UserList, meta: { title: '用户列表' }},
        { path: '/user/menumgmt', component: MenuMgmt, meta: { title: '菜单管理' }},
        { path: '/user/authority', component: AuthorityMgmt, meta: { title: '权限管理' }}
        // { path: '*',component: error, meta: {title: '页面走丢了'} },

    ],
    linkActiveClass: '' // 覆盖默认的路由高亮类 默认的叫 router-link-active
})

// 把路由对象暴露出去
export default router
