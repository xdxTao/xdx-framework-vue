// 权限管理API  【菜单、角色、权限】
import request from '@/utils/request'

/**
 * 添加菜单
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月19日
 */
export function addMenu(data) {
    return request({
        url: '/myuser/authority/menu/add',
        method: 'post',
        data
    })
}

/**
 * 菜单列表
 * @param {*} query
 * @author 小道仙
 * @date 2020年2月19日
 */
export function menuList(query) {
    return request({
        url: '/myuser/authority/menu/list',
        method: 'get',
        params: query
    })
}

/**
 * 更新菜单
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月19日
 */
export function menuUpdate(data) {
    return request({
        url: '/myuser/authority/menu/update',
        method: 'post',
        data
    })
}

/**
 * 添加角色
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月21日
 */
export function addRole(data) {
    return request({
        url: '/myuser/authority/role/add',
        method: 'post',
        data
    })
}

/**
 * 角色列表
 * @param {*} query
 * @author 小道仙
 * @date 2020年2月21日
 */
export function roleList(query) {
    return request({
        url: '/myuser/authority/role/list',
        method: 'get',
        params: query
    })
}

/**
 * 角色更新
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月21日
 */
export function roleUpdate(data) {
    return request({
        url: '/myuser/authority/role/update',
        method: 'post',
        data
    })
}

/**
 * 权限列表
 * @param {*} query
 * @author 小道仙
 * @date 2020年2月22日
 */
export function authorityList(query) {
    return request({
        url: '/myuser/authority/list',
        method: 'get',
        params: query
    })
}

/**
 * 权限保存
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月22日
 */
export function authoritySave(data) {
    return request({
        url: '/myuser/authority/save',
        method: 'post',
        data
    })
}

/**
 * 根据roleId获取权限
 * @param {*} query
 * @author 小道仙
 * @date 2020年2月22日
 */
export function listbyroleId(query) {
    return request({
        url: '/myuser/authority/listbyroleId',
        method: 'get',
        params: query
    })
}

