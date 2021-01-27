import Vue from 'vue';
import Router from 'vue-router';
import layout from '../pages/layout';

Vue.use(Router);

/* 应用的初始路由配置 */
export const staticRouterMap = [
  { path: '/login', name: 'Login', component: () => import('@/pages/Login') },
  { path: '/404', name: '404', component: () => import('@/pages/404') },
  {
    path: '/',
    meta: {
      group: 'home',
      text: '主页',
    },
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    component: layout,
    meta: {
      group: 'home',
    },
    redirect: { name: 'home' },
    children: [{
      path: '',
      name: 'home',
      component: () => import('@/components/homePage/index'),
    }],
  },
  {
    path: '/serve',
    component: layout,
    meta: {
      group: 'serveCenter',
    },
    redirect: { name: 'serveCenter' },
    children: [{
      path: '',
      name: 'serveCenter',
      component: () => import('@/components/serveCenter/index'),
    }, {
      path: ':type/:id',
      name: 'serveDetail',
      component: () => import('@/components/serveCenter/serveDetail/index'),
    }, {
      path: 'addList',
      name: 'addList',
      component: () => import('@/components/serveCenter/addList'),
    }],
  },
  {
    path: '/investigate',
    component: layout,
    meta: {
      group: 'investigate',
    },
    redirect: { name: 'investigate' },
    children: [{
      path: '',
      name: 'investigate',
      component: () => import('@/components/investigateLog/index'),
    }, {
      path: 'detail/:id',
      name: 'logDetail',
      component: () => import('@/components/investigateLog/logDetail'),
    }, {
      path: 'suspect/list',
      name: 'suspectList', // 嫌疑人
      component: () => import('@/components/investigateLog/suspectList'),
    }, {
      path: 'stakeholder/list',
      name: 'stakeHolderList', // 干系人
      component: () => import('@/components/investigateLog/stakeHolderList'),
    }, {
      path: 'suspect/:id',
      name: 'suspectEditInfo',
      component: () => import('@/components/investigateLog/suspectEditInfo'),
    }, {
      path: 'suspectother',
      name: 'suspectOther',
      component: () => import('@/components/investigateLog/suspectOther'),
    }],
  },
  {
    path: '/message',
    component: layout,
    meta: {
      group: 'message',
    },
    redirect: { name: 'message' },
    children: [{
      path: '',
      name: 'message',
      component: () => import('@/components/message/index'),
    }],
  },
  {
    path: '/account',
    component: layout,
    meta: {
      group: 'account',
    },
    redirect: { name: 'account' },
    children: [{
      path: '',
      name: 'account',
      component: () => import('@/components/account/index'),
    }],
  },
];
export const asyncRouterMap = [

];

// 路由捕获跳转404
export const routeNotFound = [{
  path: '*',
  redirect: { name: '404' },
}];

/* 创建初始化路由实例 */
function createRouter() {
  return new Router({
    scrollBehavior: () => ({ y: 0 }), // 所有路由导航页面自动垂直滚动到顶部
    routes: staticRouterMap, // 先挂载静态路由，动态部分根据权限addRoutes
  });
}

const router = createRouter();

/* 重置路由 */
export function resetRouter() {
  const newRouter = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: staticRouterMap,
  });
  router.matcher = newRouter.matcher;
}

export default router;
