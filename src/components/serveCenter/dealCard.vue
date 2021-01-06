<template>
  <div>
    <div class="common-card" v-for="(item, index) in contentArr" :key="index" @click="toDetail">
      <div class="card-title flex-between">
        <div class="title">{{item.applyTitle}}</div>
        <div class="time">{{item.applyTime}}</div>
      </div>
      <div class="card-content">
        <div>{{item.applyNum}}</div>
        <div>简述：{{item.applyResume}}</div>
      </div>
      <div class="card-operation flex-between">
        <div><i class="icon icon-reply"></i><span>回复</span></div>
        <div><i class="icon icon-supplement"></i><span>补充</span></div>
        <div><i class="icon icon-end-case"></i><span>结案</span></div>
        <div><i class="icon icon-application"></i><span>申请表</span></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [],
    name: 'applyCard',
    data() {
      return {
        contentArr: [
          {
            applyTitle: 'wwwww',
            applyTime: '2020-11-18 13:25:55',
            applyNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
            applyResume: '张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案'
          },
          {
            applyTitle: 'vvvvvvvv',
            applyTime: '2020-11-18 13:25:55',
            applyNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
            applyResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦'
          },
          {
            applyTitle: '三生三世',
            applyTime: '2020-11-18 13:25:55',
            applyNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
            applyResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦'
          },
          {
            applyTitle: '网约车申请',
            applyTime: '2020-11-18 13:25:55',
            applyNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
            applyResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦'
          },
          {
            applyTitle: '网约车申请',
            applyTime: '2020-11-18 13:25:55',
            applyNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
            applyResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦'
          }
        ]
      }
    },
    methods: {
      toDetail () {
        alert('点击我查看详情，暂未开发')
      }
    }
  }
</script>

<style scoped>

</style>
