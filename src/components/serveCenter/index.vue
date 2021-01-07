<template>
  <div class="container">
    <div class="main">
      <h3 class="page-header">
        <i class="in-icon-filter" @click="showPopover = !showPopover"></i>
        <van-popup class="search-dialog"
                   v-model="showPopover"
                   :overlay="false"
                   position="top" :style="{ height: '30%' }">
          <van-form>
            <van-field
              v-model="form.clueName"
              name="线索名称"
              label="线索名称"
              placeholder="线索名称"/>
          </van-form>
        </van-popup>
        <span class="header-title">服务中心</span>
      </h3>
      <div class="serve-main">
        <van-tabs v-model="activeName">
          <van-tab title="我的申请" name="apply">
            <Card :activeName="activeName"></Card>
          </van-tab>
          <van-tab title="我的审批" name="approval">
            <Card :activeName="activeName"></Card>
          </van-tab>
          <van-tab title="我的待办" name="deal">
            <Card :activeName="activeName"></Card>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import Card from "./card";

export default {
  name: 'serveIndex',
  components: {
    homeFooter,
    Card,
  },
  data () {
    return {
      activeName: 'apply', // tab的状态
      showPopover: false,
      form: {
        clueName: '',
      },
    }
  }
};
</script>

<style scoped>

</style>
