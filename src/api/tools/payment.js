import request from '@/utils/request'

export function fetchList(query) {
    return request({
        url: '/order/alipay',
        method: 'post',
        params: query
    })
}
