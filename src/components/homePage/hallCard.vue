<template>
  <div>
    <van-row>
      <van-col span="12" class="hall-card hall-item" v-for="(item, index) in hallArr" :key="index" >
        <img :src="item.icon">
        <div class="item-content">
          <div class="item-name">{{item.name}}</div>
          <div class="item-status">
            <label class="status-pending">待处理(<span class="red">{{item.pending}}</span>)</label>
            <label>处理中(<span class="blue">{{item.inProcess}}</span>)</label>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [],
    name: '',
    data() {
      return {
        hallArr: [
          {
            name: '银联账单/布控申请',
            icon: require('../../assets/icon-wait.png'),
            pending: 1,
            inProcess: 2
          },
          {
            name: '高速公路车辆查询',
            icon: require('../../assets/icon-wait.png'),
            pending: 6,
            inProcess: 2
          },
          {
            name: '反诈中心查询申请',
            icon: require('../../assets/icon-wait.png'),
            pending: 11,
            inProcess: 2
          },
          {
            name: '外卖信息查询申请',
            icon: require('../../assets/icon-wait.png'),
            pending: 1,
            inProcess: 2
          },
          {
            name: '互联网企业服务513',
            icon: require('../../assets/icon-wait.png'),
            pending: 6,
            inProcess: 2
          },
          {
            name: '网约车相关申请',
            icon: require('../../assets/icon-wait.png'),
            pending: 11,
            inProcess: 2
          },
          {
            name: '1020话单申请',
            icon: require('../../assets/icon-wait.png'),
            pending: 1,
            inProcess: 2
          },
          {
            name: '出租车相关申请',
            icon: require('../../assets/icon-wait.png'),
            pending: 6,
            inProcess: 2
          },
          {
            name: '刑事技术送检',
            icon: require('../../assets/icon-wait.png'),
            pending: 11,
            inProcess: 2
          },
          {
            name: '视频侦查服务',
            icon: require('../../assets/icon-wait.png'),
            pending: 1,
            inProcess: 2
          },
          {
            name: '互联网追逃服务',
            icon: require('../../assets/icon-wait.png'),
            pending: 6,
            inProcess: 2
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
