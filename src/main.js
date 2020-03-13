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

// 引入store
import store from './store/index'

// 引入Cookies持久化 js-cookies
import Cookies from 'js-cookie'
Vue.use(Cookies)

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
    TableColumn,
    Drawer,
    Message,
    Switch,
    Checkbox,
    CheckboxGroup,
    Divider,
    Popover,
    Select,
    Option,
    Radio,
    Transfer,
    Badge,
    Pagination } from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Drawer)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Divider)
Vue.use(Popover)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(Transfer)
Vue.use(Badge)
Vue.use(Pagination)

Vue.prototype.$message = Message

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
