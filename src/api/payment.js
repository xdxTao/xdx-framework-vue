// 支付接口API
import request from '@/utils/request'

export function fetchList(query) {
    return request({
        url: '/mytools/order/alipay',
        method: 'post',
        params: query
    })
}
