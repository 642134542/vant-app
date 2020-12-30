<template>
  <el-container class="app-container">
    <el-header height="270px" class="app-header">
      <div class="header-bg-small"></div>
      <com-header></com-header>
    </el-header>
    <el-main class="app-main home-layout-main">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import comHeader from './comHeader';

export default {
  name: 'homeLayout',
  components: {
    comHeader,
  },
};
</script>

<style scoped>

</style>
