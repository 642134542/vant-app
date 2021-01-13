<template>
  <div>
    <van-nav-bar
      title="新增"
      left-text="返回"
      right-text="确定"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>
    <div class="add-list-wrap">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: [],
  name: 'addList',
  data() {
      return {
        list: ['银联账单/布控申请', '高速公路车辆查询', '反诈中心查询申请', '外卖信息查询申请', '互联网企业服务513', '网约车相关申请', '1020话单申请', '出租车相关申请', '刑事技术送检', '视频侦查服务', '互联网追逃服务'],
      }
  },
  methods: {
    onClickLeft () {
      this.$router.push({
        name: 'serveCenter',
      })
    }
  }
}
</script>

<style scoped>

</style>
