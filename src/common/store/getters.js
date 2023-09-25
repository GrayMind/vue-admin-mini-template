const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  // 用户信息
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  nickName: (state) => state.user.nickName,
  userGuid: (state) => state.user.userGuid,
  mobile: (state) => state.user.mobile,
  permissions: (state) => state.user.permissions,
  currentOrganization: (state) => state.user.currentOrganization,
  // tags
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
  // 权限相关
  permission_routes: (state) => state.permission.routes,
};
export default getters;
