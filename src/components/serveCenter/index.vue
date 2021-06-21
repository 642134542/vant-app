<template>
  <div class="container">
    <div class="main">
      <h3 class="page-header">
        <i class="icon in-icon-filter" @click="filterPopover"></i>
        <van-popup class="search-dialog" v-model="showPopover" :overlay="false" position="top" :style="{ height: '100%' }">
          <van-form>
            <van-field name="radio" label="状态筛选">
              <template #input>
                <van-radio-group v-model="form.statusFilter" direction="horizontal">
                  <van-radio name="1">全部</van-radio>
                  <van-radio name="2">待审核</van-radio>
                  <van-radio name="3">待落实</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field readonly clickable name="picker" :value="form.applyStatus" label="申请状态" placeholder="请选择" @click="applyPicker = true"></van-field>
            <van-popup v-model="applyPicker" position="bottom">
              <van-picker show-toolbar :columns="applyColumns" @confirm="applyConfirm" @cancel="applyPicker = false"></van-picker>
            </van-popup>
            <van-field readonly clickable name="picker" :value="form.applyServer" label="申请服务" placeholder="请选择" @click="serverPicker = true"></van-field>
            <van-popup v-model="serverPicker" position="bottom">
              <van-picker show-toolbar :columns="serverColumns" @confirm="serverConfirm" @cancel="serverPicker = false"></van-picker>
            </van-popup>
            <van-field v-model="form.numName" name="aj编号" label="aj编号/名称" placeholder="请输入"></van-field>
            <van-field readonly clickable name="calendar" :value="form.applyTime" label="申请时间" placeholder="请选择" @click="timePicker = true"></van-field>
            <van-calendar v-model="timePicker" @confirm="timeConfirm" />
          </van-form>
          <div style="margin: 16px;">
            <van-row>
              <van-col span="12">
                <van-button block native-type="submit" @click="showPopover = false">重置</van-button>
              </van-col>
              <van-col span="12">
                <van-button block type="info" native-type="submit">确定</van-button>
              </van-col>
            </van-row>
          </div>
        </van-popup>
        <span class="header-title">服务申请</span>
        <i class="icon icon-plus" @click="addPopover"></i>
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
      showPopover: false, // 左侧过滤
      form: {
        statusFilter: '',
        applyStatus: '', // 申请状态
        applyServer: '', // 申请服务
        numName: '', // aj编号/名称
        applyTime: '' // 申请时间
      },
      applyTime: '',
      applyColumns: ['全部', '未提交', '办理中', '发回补充材料', '已驳回', '已退回', '结案', '已激活'],
      applyPicker: false,
      serverPicker: false,
      serverColumns: ['银联账单/布控申请', '高速公路车辆查询', 'fz中心查询申请', '外卖信息查询申请', '互联网企业服务513', '网约车相关申请', '1020话单申请', '出租车相关申请', '事情技术送检', '视频侦查服务', '互联网追逃服务'],
      timePicker: false,

    }
  },
  methods: {
    filterPopover () {
      this.showPopover = !this.showPopover;
    },
    addPopover () {
      this.$router.push({name: 'addList'})
    },
    applyConfirm(value) {
      this.form.applyStatus = value;
      this.applyPicker = false;
    },
    serverConfirm (value) {
      this.form.applyServer = value;
      this.serverPicker = false;
    },
    timeConfirm (date) {
      this.form.applyTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      this.timePicker = false;
    }
  },
};
</script>

<style scoped>

</style>
