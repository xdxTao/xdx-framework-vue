/**
 * ajax请求配置
 */
import axios from 'axios'

// axios默认配置
axios.defaults.timeout = 10000 // 超时时间
axios.defaults.baseURL = 'http://127.0.0.1:9000' // 默认地址

// 整理数据
axios.defaults.transformRequest = function(data) {
    data = JSON.stringify(data)
    return data
}

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'

        return config
    },
    error => {
        return Promise.reject(error.response)
    })

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.resultCode === '404') {
            console.log('response.data.resultCode是404')

            return
        } else {
            return response
        }
    },
    error => {
        return Promise.reject(error.response) // 返回接口返回的错误信息
    })
export default axios
