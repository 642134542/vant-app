// eslint-disable
import { login, logOut, getUserInfo } from '@/api/user';
import { resetRouter } from '@/router';

const user = {
  state: {
    userId: '', // 当前用户id
    userName: '', // 当前用户名称
    orgId: '', // 当前用户所属单位id
    orgName: '', // 当前用户所属单位名称
    roles: [], // 当前用户拥有的角色信息
    isAdmin: false, // 是否是管理员
  },
  mutations: {
    SET_USERNAME: (state, userName) => {
      state.userName = userName;
    },
    SET_USERINFO: (state, userInfo) => {
      state.userId = userInfo.userId;
      state.userName = userInfo.userName;
      state.orgId = userInfo.orgId;
      state.orgName = userInfo.orgName;
      state.roles = userInfo.roleNames; // 1管理员2普通用户
      if (userInfo && userInfo.roleNames) {
        const adminArry = userInfo.roleNames.filter((v) => v.roleId === 1);
        if (adminArry.length) {
          state.isAdmin = true;
        }
      } else {
        state.isAdmin = false;
      }
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
  },
  actions: {
    // 用户登录
    // eslint-disable-next-line no-unused-vars
    UserLogin({ commit }, param) {
      return new Promise((resolve, reject) => {
        login(param).then((res) => {
          // 后台并没有给定登陆成功的凭证，只能用登陆名作为凭证暂存
          localStorage.setItem('loginStatus', 'true');
          // commit('SET_USERNAME', param.userName);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    // 用户手动登出
    UserLogout({ commit }) {
      return new Promise((resolve, reject) => {
        logOut().then(() => {
          commit('SET_USERNAME', '');
          commit('SET_USERINFO', {});

          localStorage.removeItem('loginStatus');

          resetRouter();
          // TODO 清除路由信息
          // 路由信息无法清除，只能强制刷新
          resolve();
        }).catch((error) => {
          commit('SET_USERNAME', '');
          commit('SET_USERINFO', {});

          localStorage.removeItem('loginStatus');

          resetRouter();
          reject(error);
        });
      });
    },
    // remove token
    resetToken({ commit }) {
      return new Promise((resolve) => {
        commit('SET_USERNAME', '');
        localStorage.removeItem('loginStatus');
        commit('SET_ROLES', []);
        resolve();
      });
    },
    // 获取用户信息
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          const { data } = res;
          if (res.status === 200) {
            commit('SET_USERINFO', data);
            resolve(res);
          } else {
            reject(data.message);
          }
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};

export default user;
