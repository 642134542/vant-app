<template>
  <div class="tab-bar-wrap">
    <div class="tab-bar-wrap m-tabBar">
      <router-link class="nav-item" :to="{ path: '/home' }">
        <span class="text">首页</span>
      </router-link>
      <router-link class="nav-item" :to="{ path: '/home' }">
        <span class="text">服务中心</span></router-link>
      <router-link class="nav-item" :to="{ path: '/home' }">
        <span class="text">侦查中心</span></router-link>
      <router-link class="nav-item" :to="{ path: '/home' }">
        <span class="text">消息</span></router-link>
      <router-link class="nav-item" :to="{ path: '/home' }">
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
