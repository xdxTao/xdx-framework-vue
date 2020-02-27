// 管理token
import Cookies from 'js-cookie'

const TokenKey = 'X-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

/**
 *
 * @param {*} token
 * expires 过期时间，单位/天， 默认关闭浏览器
 *
 */
export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: 1 })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
