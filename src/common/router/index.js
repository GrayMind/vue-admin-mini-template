import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
import Layout from '@/common/layout';

Vue.use(Router);

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    permissionCodes: [            control the page permission (you can set multiple permissionCode)
      'staff-list',
      'staff-edit'
    ]
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
    business: 'business name'    不同的业务会使用相同的页面，页面中根据业务表示做不同的处理
    badge: 'oneTaskRevisitList'  设置 badge key，会在 store/taskBadge 中使用该 key 去取 badge 的值，显示在菜单上
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/apps/redirect/index'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/apps/login/index'),
    hidden: true,
  },

  {
    path: '/404',
    component: () => import('@/apps/404'),
    hidden: true,
  },

  {
    path: '/',
    component: Layout,
    redirect: '/module1/page1'
  },
];
// 动态路由里的每一个子路由，最好都至少包含一个 permissionCodes ，若该路由没有具体的权限，可以将路由定义在 constantRoutes 中
// 比如：12345工单详情和报修单详情 对应的两个路由就定义在了 constantRoutes 中
export const asyncRoutes = [
  {
    path: '/module1',
    component: Layout,
    alwaysShow: true,
    meta: { title: '模块1', icon: 'el-icon-price-tag' },
    children: [{
      path: 'page1',
      name: 'Module1Page1',
      component: () => import('@/apps/module1/page1.vue'),
      meta: { title: '页面1' },
    },{
      path: 'page2',
      name: 'Module1Page2',
      component: () => import('@/apps/module1/page2.vue'),
      meta: { title: '页面2' },
    }],
  },
  {
    path: '/module2',
    component: Layout,
    alwaysShow: true,
    meta: { title: '模块2', icon: 'el-icon-price-tag' },
    children: [{
      path: 'page1',
      name: 'Module1Page1',
      component: () => import('@/apps/module2/index.vue'),
      meta: { title: '页面1' },
    }],
  },
  // {
  //   path: '/agent-mangement',
  //   component: Layout,
  //   name: 'AgentMangement',
  //   alwaysShow: true,
  //   meta: { title: '坐席管理', icon: 'el-icon-price-tag' },
  //   children: [
  //     {
  //       path: 'monitor',
  //       name: 'AgentMangementMonitor',
  //       component: () => import('@/apps/callcenter/index'),
  //       meta: { title: '坐席监控', icon: 'monitor', permissionCodes: ['callcenter-kefu-monitor'] },
  //     },
  //     {
  //       path: 'record',
  //       name: 'AgentMangementRecord',
  //       component: () => import('@/apps/callcenter/agent-record'),
  //       meta: { title: '坐席记录', icon: 'monitor', permissionCodes: ['callcenter-kefu-record'] },
  //     },
  //     {
  //       path: 'record/:userGuid',
  //       name: 'AgentMangementRecordDetail',
  //       component: () => import('@/apps/callcenter/agent-record-detail'),
  //       meta: { title: '坐席记录详情', icon: 'monitor', permissionCodes: ['callcenter-kefu-record'] },
  //       hidden: true,
  //     },
  //   ],
  // },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

console.log(router)

export default router;
