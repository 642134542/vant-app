/* eslint-disable */
import router from './router'
import store from './store'
import { routeNotFound } from '@/router';


const whiteList = ['/login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  // start progress bar
  // determine whether the user has logged in
  const hasToken = localStorage.getItem('loginStatus');
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      if (!store.state.user.userName) { // 判断用户信息是否存在
         // get user info
        // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
        store.dispatch('GetUserInfo').then((res) => {
          // generate accessible routes map based on roles
          const allRoles = [];
          const { isAdmin } = store.state.user;
          if (isAdmin) {
            allRoles.push('admin');
          }
          store.dispatch('generateRoutes', allRoles).then((routerData) => {
            // dynamically add accessible routes
            router.addRoutes(routerData);
            router.addRoutes(routeNotFound);
            next({ ...to, replace: true });
          });
        }).catch(() => {
          store.dispatch('UserLogout').then(() => {
            next({ name: 'Login' });
          }, () => {
            next({ name: 'Login' });
          });
        });
      } else {
        // set the replace: true, so the navigation will not leave a history record
        next();
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      // next({ name: 'login' });
    }
  }
});
