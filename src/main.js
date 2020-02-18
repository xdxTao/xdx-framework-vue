import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 路由相关
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 设置title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

// 全局引入 ElementUi
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 按需引入 ElementUi
import { Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Tooltip,
    Input,
    Table,
    TableColumn } from 'element-ui'
Vue.use(Button)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
