// 消息发送api
import request from '@/utils/request'
// tools服务前缀
const serverTools = '/mytools'
// tools服务前缀
const serverUser = '/myuser'

/**
 * 发送消息
 * @param {*} data
 * @author 小道仙
 * @date 2020年3月6日
 */
export function send(data) {
    return request({
        url: serverTools + '/tools/rocketmq',
        method: 'post',
        data
    })
}

/**
 * 未读消息条数
 * @param {*} query
 * @author 小道仙
 * @date 2020年3月6日
 */
export function getUnreadCount(query) {
    return request({
        url: serverUser + '/message/unreadCount',
        method: 'get',
        params: query
    })
}

/**
 * 消息列表
 * @param {*} data
 * @author 小道仙
 * @date 2020年3月6日
 */
export function list(query) {
    return request({
        url: serverUser + '/message/list',
        method: 'get',
        params: query
    })
}

/**
 * 消息已读操作
 * @param {*} data
 * @author 小道仙
 * @date 2020年3月6日
 */
export function alreadyRead(query) {
    return request({
        url: serverUser + '/message/alreadyRead',
        method: 'get',
        params: query
    })
}
