import Vue from 'vue'
import login from './login.vue'
import router from './login.router'

// 按需引入 ElementUi
import {
    Message
} from 'element-ui'

Vue.prototype.$message = Message

// 引入store
import store from '../../store/index'

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(login)
}).$mount('#login')
