import {
  // setUserInfo,
  getUserInfo,
  removeUserInfo,
} from '@/common/utils/auth';
// import { MD5 } from '@/common/utils/index';
import { resetRouter } from '@/common/router';

const initState = () => {
  const userInfo = getUserInfo();
  const state = {
    token: '',
    nickName: '',
    tenantCode: '',
    avatar: '',
    userGuid: '',
    mobile: '',
    permissions: [],
    organizationRole: [],
    currentOrganization: {},
  };

  if (userInfo) {
    state.token = userInfo.token;
    state.nickName = userInfo.nickName;
    state.tenantCode = userInfo.tenantCode;
    state.avatar = userInfo.avatar;
    state.userGuid = userInfo.userGuid;
    state.mobile = userInfo.mobile;
  }
  return state;
};

const initstate = initState();

const mutations = {

  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions;
  },
  SET_USER_INFO: (state, userInfo) => {
    if (userInfo) {
      state.token = userInfo.token;
      state.nickName = userInfo.nickName;
      state.tenantCode = userInfo.tenantCode;
      state.avatar = userInfo.avatar;
      state.userGuid = userInfo.userGuid;
      state.mobile = userInfo.mobile;
    } else {
      state = {};
    }
  },
  // 用户所有的组织角色
  SET_ORGANIZATION_ROLE: (state, organizationRole) => {
    state.organizationRole = organizationRole;
  },
  // 当前所在选择的组织角色
  SET_CURRENT_ORGANIZATION_ROLE: (state, currentOrganization) => {
    state.currentOrganization = currentOrganization;
  },
};

const actions = {
  // 登录
  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo;
  //   return new Promise((resolve, reject) => {
  //     login(username.trim(), MD5(password)).then((response) => {
  //       const { user } = response;
  //       commit('SET_USER_INFO', user);
  //       setUserInfo(user);
  //       resolve();
  //     }).catch((error) => {
  //       reject(error);
  //     });
  //   });
  // },

  // 获取用户组织角色
  // getUserOrganizationRole({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     getUserOrganizationRole().then((response) => {
  //       const { organizationRole } = response;
  //       commit('SET_ORGANIZATION_ROLE', organizationRole || []);
  //       setOrganizationRole(organizationRole || []);
  //       resolve(organizationRole || []);
  //     }).catch((error) => {
  //       reject(error);
  //     });
  //   });
  // },

  // 退出登录
  logout({ dispatch }) {
    return new Promise((resolve) => {
      dispatch('resetUserInfo');
      resetRouter();

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true });

      resolve();
    });
  },

  // 删除用户所有信息
  resetUserInfo({ commit }) {
    return new Promise((resolve) => {
      commit('SET_USER_INFO', {});
      commit('SET_PERMISSIONS', []);
      commit('SET_ORGANIZATION_ROLE', []);
      commit('SET_CURRENT_ORGANIZATION_ROLE', {});
      removeUserInfo();
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state: initstate,
  mutations,
  actions,
};
