<template>
  <div>
    <van-nav-bar
            title="日志详情"
            left-arrow
            @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="24"/>
      </template>
      <template #right>
        <i class="in-icon-filter-right" @click="showPopover = !showPopover"></i>
        <i class="in-icon-plus-right"></i>
      </template>
    </van-nav-bar>
    <div class="inverstigate-main log-detail-box">
      <log-detail-card v-for="n in 10" :key="n"></log-detail-card>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import logDetailCard from "./logDetailCard";

export default {
  name: 'logDetail',
  components: {
    homeFooter,
    logDetailCard,
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: 'investigate',
      })
    },
  },
};
</script>

<style scoped>

</style>
