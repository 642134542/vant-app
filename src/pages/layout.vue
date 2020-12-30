<template>
  <div class="container">
    <div class="main">
      <router-view></router-view>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from './homeFooter';

export default {
  name: 'layout',
  components: {
    homeFooter,
  },
};
</script>

<style scoped>

</style>
