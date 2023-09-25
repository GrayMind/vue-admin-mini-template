import Storage from './storage';

const UserInfoKey = 'xxxxxxx_user_info';

const UserOrganizationRoleKey = 'xxxxxxx_user_organization_role';

/**
 * 获取token
 * @returns
 */
export function getToken() {
  const userInfo = getUserInfo();
  if (userInfo) {
    return userInfo.token || '';
  }
  return '';
}

/**
 * 获取 appid
 * @returns
 */
// export function getAppId() {
//   const userInfo = getUserInfo()
//   if (userInfo) {
//     return userInfo.tenantCode || ''
//   }
//   return ''
// }

/**
 * 保存用户基础信息
 * @param {*} userInfo
 */
export function setUserInfo(userInfo) {
  Storage.setItem(UserInfoKey, userInfo);
}

/**
 * 获取用户基础信息
 * @returns
 */
export function getUserInfo() {
  return Storage.getItem(UserInfoKey);
}

/**
 * 删除用户基础信息
 * @returns
 */
export function removeUserInfo() {
  return Storage.removeItem(UserInfoKey);
}

/**
 * 保存用户组织及角色
 * @param {*} userInfo
 */
export function setOrganizationRole(organizationRole) {
  Storage.setItem(UserOrganizationRoleKey, organizationRole);
}

/**
 * 获取用户组织及角色
 * @returns
 */
export function getOrganizationRole() {
  return Storage.getItem(UserOrganizationRoleKey);
}

/**
 * 删除用户组织及角色
 * @returns
 */
export function removeOrganizationRole() {
  return Storage.removeItem(UserOrganizationRoleKey);
}
