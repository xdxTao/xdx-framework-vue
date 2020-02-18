// 用户管理API
import request from '@/utils/request'

export function userlist(query) {
    return request({
        url: '/myuser/user/list',
        method: 'get',
        params: query
    })
}
