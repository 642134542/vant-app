<template>
  <el-container class="app-container">
    <el-header height="48px" class="app-header">
      <div class="header-bg-small"></div>
      <com-header></com-header>
    </el-header>
    <el-main class="app-main">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import comHeader from './comHeader';

export default {
  name: 'layout',
  components: {
    comHeader,
  },
};
</script>

<style scoped>

</style>
