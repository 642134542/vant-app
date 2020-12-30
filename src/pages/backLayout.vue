<template>
  <el-container class="app-container">
    <el-header height="48px" class="app-header">
      <div class="header-bg-small"></div>
      <com-header></com-header>
    </el-header>
    <el-main class="app-main">
      <el-container>
        <el-aside class="back-aside" width="240px">
          <router-link class="router_item router_account"
                       v-for="item in filterRouter"
                       :key="item.name"
                       :to="{ name: item.name }">
            <span class="router_icon" :class="item.icon"></span>{{item.text}}</router-link>
          <el-menu
            :default-openeds="['2']"
            :class="[ this.$route.name ]"
            class="el-menu-vertical"
            v-if="$store.state.user.isAdmin">
            <el-submenu index="2">
              <template slot="title">
                <span class="router_icon router_wisdom"></span>
                <span class="title">智能问答管理</span>
              </template>
              <router-link to="/manage/wisdommodel">
                <el-menu-item index="2-1">模型管理</el-menu-item>
              </router-link>
              <router-link to="/manage/chatting">
                <el-menu-item index="2-2">聊天管理</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="back-main">
          <router-view/>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import comHeader from './comHeader';

export default {
  name: 'backLayout',
  components: {
    comHeader,
  },
  data() {
    return {
      routerLinks: [{ name: 'account', text: '个人中心', icon: 'router_account' },
        { name: 'userManage', text: '用户管理', icon: 'router_user' },
        { name: 'dataManage', text: '数据管理', icon: 'router_data' },
        { name: 'noumenonManage', text: '标准本体管理', icon: 'router_noumenon' },
        { name: 'fieldTypeManage', text: '标准领域类别管理', icon: 'router_fieldtype' },
        { name: 'typeManage', text: '标准类别管理', icon: 'router_type' },
        { name: 'lifeCycle', text: '要素生命周期关联', icon: 'router_type' }],
    };
  },
  computed: {
    // 1管理员2普通用户
    filterRouter() {
      const { isAdmin } = this.$store.state.user;
      if (isAdmin) {
        return this.routerLinks;
      }
      return [{ name: 'account', text: '个人中心', icon: 'router_account' },
        { name: 'dataManage', text: '数据管理', icon: 'router_data' }];
    },
  },
};
</script>

<style scoped>

</style>
