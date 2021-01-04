<template>
  <div class="container">
    <div class="main">
      <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="#fff">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="my-apply">
        <div class="sub-title"><i class="icon icon-wait"></i><span>我的申请</span></div>
        <apply-card></apply-card>
      </div>
      <div class="gap"></div>
      <div class="service-hall">
        <div class="sub-title"><i class="icon icon-service-hall"></i><span>服务大厅</span></div>
        <hall-card></hall-card>
      </div>
      <div class="gap"></div>
      <div class="investigate-log">
        <div class="sub-title"><i class="icon icon-investigate"></i><span>侦查日志</span></div>
        <div></div>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import applyCard from "./applyCard"; // 我的申请
import hallCard from "./hallCard"; // 服务大厅
export default {
  name: 'homeIndex',
  components: {
    homeFooter,
    applyCard,
    hallCard
  },
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg',
      ],
    }
  }
};
</script>

<style scoped>

</style>
