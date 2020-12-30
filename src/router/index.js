import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/pages/layout';
import homeLayout from '@/pages/homeLayout';
import backLayout from '@/pages/backLayout';

Vue.use(Router);

/* 应用的初始路由配置 */
export const staticRouterMap = [
  { path: '/login', name: 'Login', component: () => import('@/pages/Login') },
  { path: '/404', name: '404', component: () => import('@/pages/404') },
  {
    path: '/',
    meta: {
      group: 'home',
      text: '智能检索',
    },
    redirect: { name: 'home' },
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
