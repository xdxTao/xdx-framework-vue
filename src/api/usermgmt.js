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

/**
 * 新增用户
 *
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月27日
 */
export function userSave(data) {
    return request({
        url: '/myuser/user/save',
        method: 'post',
        data
    })
}

/**
 * 更新用户
 *
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月27日
 */
export function userUpdate(data) {
    return request({
        url: '/myuser/user/update',
        method: 'post',
        data
    })
}

/**
 * 用户列表Dto
 *
 * @param {*} data
 * @author 小道仙
 * @date 2020年3月5日
 */
export function userDtoList(query) {
    return request({
        url: '/myuser/user/listDto',
        method: 'get',
        params: query
    })
}
