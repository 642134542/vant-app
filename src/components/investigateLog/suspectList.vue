<template>
  <div class="suspect-list-main">
    <van-nav-bar
            title="嫌疑人信息"
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
      <suspect-card v-for="n in 10" :key="n"></suspect-card>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import suspectCard from "./suspectCard";

export default {
  name: 'suspectList',
  components: {
    homeFooter,
    suspectCard,
  },
  data() {
    return {
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

</style>
