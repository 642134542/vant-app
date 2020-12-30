<template>
  <div class="clearfix com-header">
    <div class="fl">
      <i class="logo"></i>
      <span class="title">军用标准知识图谱</span>
    </div>
    <div class="router-nav  fl">
      <router-link class="router-nav-item" :to="{ path: '/home' }">
        智能检索
        <span class="bottom-line"></span>
      </router-link>
      <router-link class="router-nav-item" :to="{ path: '/graph' }">
        知识可视化
        <span class="bottom-line"></span>
      </router-link>
    </div>
    <div class="fr account">
      <el-popover
        trigger="hover"
        placement="bottom"
        popper-class="account-popper"
        width="100">
        <div slot="reference" class="account" @click="jumpToManage">
          <span>{{user.userName}}</span>
          <el-avatar size="small" :src="circleUrl"></el-avatar>
        </div>
        <div class="account-loginout" @click="loginOut">
          <i class="el-icon-switch-button"></i>
          <span>退出登录</span>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comHeader',
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    jumpToManage() {
      this.$router.push({
        name: 'account',
      });
    },
    loginOut() {
      this.$store.dispatch('UserLogout').then(() => {
        this.$router.push({
          name: 'Login',
        });
      });
    },
  },
};
</script>

<style scoped>

</style>
