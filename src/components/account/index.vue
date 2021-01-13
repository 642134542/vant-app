<template>
  <div class="container">
    <div class="main">
      <div class="account-bg">
        <div class="avatar-box">
          <van-image
                  round
                  fit="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <h3 class="account-name center">张三</h3>
        <p class="account-num center">188642</p>
      </div>
      <van-cell is-link class="version-update">
        <i class="xz-icon-versions-update"></i>
        <h4>版本更新</h4>
        <label>当前已是最新版本</label>
      </van-cell>
      <van-popup v-model="show">内容</van-popup>
      <van-cell-group>
        <van-cell is-link class="version-update">
          <i class="xz-icon-versions-update xz-icon-my-inion"></i>
          <h4>意见反馈</h4>
        </van-cell>
        <van-cell is-link class="version-update">
          <i class="xz-icon-versions-update icon-my-introduce"></i>
          <h4>关于我们</h4>
        </van-cell>
      </van-cell-group>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';

export default {
  name: 'accountIndex',
  components: {
    homeFooter,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>

</style>
