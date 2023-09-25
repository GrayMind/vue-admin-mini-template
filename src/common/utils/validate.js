/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 手机号验证
 * @param {string} mobile
 * @returns {Boolean}
 */
export function isMobile(mobile) {
  return /^1\d{10}$/.test(mobile);
}
