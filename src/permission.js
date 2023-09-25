// import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
// import { getToken } from '@/common/utils/auth'; // get token from cookie
import getPageTitle from '@/common/utils/get-page-title';
import router from './common/router';
import store from './common/store';
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

// const whiteList = ['/login', '/datav']; // no redirect whitelist
let flag = false
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // 设置 page title
  document.title = getPageTitle(to.meta.title);
  if(flag) {
    next();
    NProgress.done();
  } else {
    flag = true
    const accessRoutes =
      await store.dispatch('permission/generateRoutes', store.getters.permissions);
    // console.log('generateRoutes', accessRoutes)
    // 添加路由
    router.addRoutes(accessRoutes);
    next({ ...to, replace: true });
  }

  // 判断用户是否登录
  // const hasToken = getToken();

  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // 跳转到登录页时，如果已经登录过，则自动进入首页
  //     next({ path: '/' });
  //     NProgress.done();
  //   } else {
  //     // 判断是否有 permissions 信息
  //     const hasPermissions = store.getters.permissions && store.getters.permissions.length > 0;
  //     if (hasPermissions) {
  //       next();
  //     } else {
  //       try {
  //         // 获取权限列表
  //         await store.dispatch('user/getUserPermissions');

  //         if (store.getters.permissions.length === 0) {
  //           await store.dispatch('user/resetUserInfo');
  //           Message.error('当前用户没有任何权限，请配置完成后再登录');
  //           NProgress.done();
  //           next('/login');
  //         }
  //         // 动态生成路由
  //         const accessRoutes =
  //               await store.dispatch('permission/generateRoutes', store.getters.permissions);
  //         // console.log('generateRoutes', accessRoutes)
  //         // 添加路由
  //         router.addRoutes(accessRoutes);
  //         next({ ...to, replace: true });
  //       } catch (error) {
  //         // 清理缓存信息，回到登录页面
  //         await store.dispatch('user/resetUserInfo');
  //         Message.error(error || 'Has Error');
  //         next('/login');
  //         NProgress.done();
  //       }
  //     }
  //   }
  // } else if (whiteList.indexOf(to.path) !== -1) { /* 不存在token */
  //   // 在白名单内，进入页面
  //   next();
  // } else {
  //   // 不在白名单内，进入登录页面
  //   next('/login');
  //   NProgress.done();
  // }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
