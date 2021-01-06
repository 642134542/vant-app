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
      <div><i class="icon icon-check"></i><span>查看</span></div>
      <div><i class="icon icon-supplement"></i><span>编辑</span></div>
      <div><i class="icon icon-cancel"></i><span>撤销</span></div>
      <div><i class="icon icon-delete"></i><span>删除</span></div>
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
              applyTitle: '1020申请',
              applyTime: '2020-11-18 13:25:55',
              applyNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
              applyResume: '张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案'
            },
            {
              applyTitle: '网约车申请',
              applyTime: '2020-11-18 13:25:55',
              applyNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
              applyResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦'
            },
            {
              applyTitle: '反诈中心申请',
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
