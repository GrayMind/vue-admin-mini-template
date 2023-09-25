import store from '@/common/store';

/**
 * @param {Array} value
 * @returns {Boolean}
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = store.getters && store.getters.permissions;
    const permissionCodes = value;
    const hasPermission = permissions.some((p) => permissionCodes.includes(p.permissionCode));
    return hasPermission;
  }
  console.error('need roles! Like v-permission="[\'admin\',\'editor\']"');
  return false;
}
