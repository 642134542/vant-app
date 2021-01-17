<template>
  <div>
    <van-nav-bar
            title="干系人信息"
            left-arrow
            @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="28"/>
      </template>
      <template #right>
        <i class="in-icon-plus-right"></i>
      </template>
    </van-nav-bar>
    <div class="inverstigate-main log-detail-box">
      <suspect-card cardTitle="干系人" v-for="n in 10" :key="n"></suspect-card>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import suspectCard from "./suspectCard";

export default {
  name: 'stakeHolderList', // 干系人
  components: {
    homeFooter,
    suspectCard,
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
