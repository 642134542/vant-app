<template>
  <div>
    <van-row>
      <van-col span="12" class="hall-card hall-item" v-for="(item, index) in hallArr" :key="index" v-if="item.hasPer === 1">
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
            name: '银联账单/布控申请', // 名称
            icon: require('../../assets/icon-hall-bank.png'), // icon
            pending: 1, // 待处理
            inProcess: 2, // 处理中
            hasPer: 1 // 是否有新增权限 1为有，0为没有
          },
          {
            name: '高速公路车辆查询',
            icon: require('../../assets/icon-hall-way.png'),
            pending: 6,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: 'fz中心查询申请',
            icon: require('../../assets/icon-hall-fraud.png'),
            pending: 11,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '外卖信息查询申请',
            icon: require('../../assets/icon-hall-food.png'),
            pending: 1,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '互联网企业服务513',
            icon: require('../../assets/icon-hall-net.png'),
            pending: 6,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '网约车相关申请',
            icon: require('../../assets/icon-hall-online-car.png'),
            pending: 11,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '1020话单申请',
            icon: require('../../assets/icon-hall-call.png'),
            pending: 1,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '出租车相关申请',
            icon: require('../../assets/icon-hall-taxi.png'),
            pending: 6,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '事情技术送检',
            icon: require('../../assets/icon-hall-criminal.png'),
            pending: 11,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '视频侦查服务',
            icon: require('../../assets/icon-hall-video.png'),
            pending: 1,
            inProcess: 2,
            hasPer: 1
          },
          {
            name: '互联网xx服务',
            icon: require('../../assets/icon-hall-escape.png'),
            pending: 6,
            inProcess: 2,
            hasPer: 1
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
