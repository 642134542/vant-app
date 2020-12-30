import request from '@/utils/request';

/* 用户登录 */
export function login(params) {
  return request({
    url: '/user/login',
    method: 'post',
    params,
  });
}

/**
 * 登出
 */
export function logOut() {
  return request({
    url: '/user/logout',
    method: 'post',
  });
}
/* 用户密码修改 */
export function changePwd(data) {
  return request({
    url: '/user/password',
    method: 'put',
    data,
  });
}

/* 获取当前登录用户基本信息以及相应路由权限信息 */
export function getUserInfo() {
  return request({
    url: '/user/user-info',
    method: 'get',
  });
}

/**
 * 获取用户列表
 */
export function getUserList(params, page, size) {
  return request({
    url: `/user/list/${page}/${size}`,
    method: 'get',
    params,
  });
}

/**
 * 新增用户
 * @param params
 * @param page
 * @param size
 */
export function addUser(params) {
  return request({
    url: '/user',
    method: 'post',
    data: params,
  });
}

/**
 * 判断用户是否存在
 * @param params
 */
export function isUserExist(params) {
  return request({
    url: '/user/is-exist',
    method: 'get',
    params,
  });
}
/**
 * 重置用户密码
 * @param params
 */
export function resetUserPwd(params) {
  return request({
    url: '/user/password/reset',
    method: 'put',
    params,
  });
}

/**
 * 删除用户
 * @param userId
 */
export function delUser(userId) {
  return request({
    url: `/user/${userId}`,
    method: 'delete',
  });
}
