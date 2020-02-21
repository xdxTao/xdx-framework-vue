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
