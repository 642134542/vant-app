<template>
  <div class="tab-bar-wrap">
    <div class="tab-bar-wrap m-tabBar">
      <router-link class="nav-item" :to="{ path: '/home' }">
        <i class="nav-item-icon"></i>
        <span class="text">首页</span>
      </router-link>
      <router-link class="nav-item" :to="{ path: '/serve' }">
        <i class="nav-item-icon nav-icon-server"></i>
        <span class="text">服务申请</span></router-link>
      <router-link class="nav-item" :to="{ path: '/investigate' }">
        <i class="nav-item-icon nav-icon-log"></i>
        <span class="text">侦查日志</span></router-link>
      <router-link class="nav-item" :to="{ path: '/message' }">
        <i class="nav-item-icon nav-icon-message"></i>
        <span class="text">消息</span></router-link>
      <router-link class="nav-item" :to="{ path: '/account' }">
        <i class="nav-item-icon nav-icon-account"></i>
        <span class="text">我的</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeFooter',
};
</script>

<style scoped>

</style>
