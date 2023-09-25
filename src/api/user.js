import request from '@/common/utils/request'
import ApiConfig from '@/common/config/api-config'
import { stringFormat } from '@/common/utils/index'

/**
 * 登录
 * @param {*} username
 * @param {*} password
 * @returns
 */
export function login(username, password) {
  return request({
    url: stringFormat(ApiConfig.LOGIN_URL, username),
    method: 'post',
    data: {
      password
    }
  })
}
