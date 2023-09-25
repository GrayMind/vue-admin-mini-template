import { asyncRoutes, constantRoutes } from '@/common/router';

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(permissions, route) {
  if (route.meta && route.meta.permissionCodes) {
    return permissions.some((p) => route.meta.permissionCodes.includes(p.permissionCode));
  }
  return true;
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, permissions) {
  const res = [];

  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(permissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissions);
      }
      // 有子节点，但是子节点为空，则不展示
      if ((!tmp.children) || (tmp.children && tmp.children.length > 0)) {
        res.push(tmp);
      }
    }
  });

  return res;
}

const state = {
  routes: [],
  addRoutes: [],
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  },
};

const actions = {
  generateRoutes({ commit }) {
    return new Promise((resolve) => {
      commit('SET_ROUTES', asyncRoutes);
      resolve(asyncRoutes);
    });
    // return new Promise((resolve) => {
    //   const accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions);
    //   commit('SET_ROUTES', accessedRoutes);
    //   resolve(accessedRoutes);
    // });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
