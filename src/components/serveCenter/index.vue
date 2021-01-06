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
        <span class="header-title">服务申请</span>
      </h3>
      <div class="serve-main">
        <van-tabs v-model="activeName">
          <van-tab title="我的申请" name="first">
            <apply-card></apply-card>
          </van-tab>
          <van-tab title="我的审批" name="second">
            <approval-card></approval-card>
          </van-tab>
          <van-tab title="我的待办" name="three">
            <deal-card></deal-card>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import applyCard from "./applyCard";
import approvalCard from "./approvalCard";
import dealCard from "./dealCard";

export default {
  name: 'serveIndex',
  components: {
    homeFooter,
    applyCard,
    approvalCard,
    dealCard
  },
  data () {
    return {
      activeName: 'first', // tab的状态
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
