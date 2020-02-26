/**
 * ajax请求配置
 */
import axios from 'axios'
// import store from '../store/index'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import router from '../router'

// axios默认配置
axios.defaults.timeout = 10000 // 超时时间
// axios.defaults.baseURL 请求地址前缀
// User地址
// axios.defaults.baseURL = 'http://127.0.0.1:8001'
// tools地址
// axios.defaults.baseURL = 'http://127.0.0.1:8088'
// 微服务地址
axios.defaults.baseURL = 'http://myzuul.com:9527/xdx'

// 整理数据
axios.defaults.transformRequest = function(data) {
    data = JSON.stringify(data)
    return data
}

// 路由请求拦截
axios.interceptors.request.use(
    config => {
        // 当前路由地址
        console.log(router.history.current.path)
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers.common['X-Token'] = getToken()
        return config
    },
    error => {
        return Promise.reject(error.response)
    })

// 路由响应拦截
axios.interceptors.response.use(
    response => {
        if (response.data.success === false) {
            if (response.data.code === 401) {
                window.location.href = '/login'
            } else {
                return Message.error(response.data.errDesc)
            }
        } else {
            return response.data
        }
    },
    error => {
        return Promise.reject(error.response) // 返回接口返回的错误信息
    })
export default axios
