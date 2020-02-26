// 用户管理API
import request from '@/utils/request'

/**
 * 用户列表
 *
 * @param {*} query
 */
export function userlist(query) {
    return request({
        url: '/myuser/user/list',
        method: 'get',
        params: query
    })
}

/**
 * 用户登录
 *
 * @param {*} query
 */
export function login(query) {
    return request({
        url: '/myuser/user/login',
        method: 'get',
        params: query
    })
}

/**
 * 退出登录
 *
 * @param {*} query
 */
export function loginOut(query) {
    return request({
        url: '/myuser/user/loginOut',
        method: 'get',
        params: query
    })
}
