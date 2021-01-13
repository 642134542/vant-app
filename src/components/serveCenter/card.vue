<template>
  <div>
    <div class="common-card" v-for="(item, index) in contentArr" :key="index">
      <div @click="toDetail(item)">
        <div class="card-title flex-between">
          <div class="title-left">{{item.cardTitle}}</div>
          <div class="title-right">{{item.cardTime}}</div>
        </div>
        <div class="card-content">
          <div>{{item.cardNum}}</div>
          <div>简述：{{item.cardResume}}</div>
        </div>
      </div>
      <div class="card-operation flex-between" v-if="activeName === 'apply'">
        <div><i class="icon icon-check"></i><span>查看</span></div>
        <div><i class="icon icon-edit"></i><span>编辑</span></div>
        <div><i class="icon icon-cancel"></i><span>撤销</span></div>
        <div><i class="icon icon-delete"></i><span>删除</span></div>
      </div>
      <div class="card-operation flex-between" v-if="activeName === 'approval'">
        <div><i class="icon icon-agree"></i><span>同意</span></div>
        <div><i class="icon icon-refund"></i><span>退办</span></div>
        <div><i class="icon icon-reject"></i><span>驳回</span></div>
        <div><i class="icon icon-edit"></i><span>补充</span></div>
      </div>
      <div class="card-operation flex-between" v-if="activeName === 'deal'">
      <div><i class="icon icon-reply"></i><span>回复</span></div>
      <div><i class="icon icon-edit"></i><span>补充</span></div>
      <div><i class="icon icon-end-case"></i><span>结案</span></div>
      <div><i class="icon icon-application"></i><span>申请表</span></div>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['activeName'],
    name: 'card',
    data() {
        return {
          contentArr: [
            {
              cardTitle: '1020申请',
              cardTime: '2020-11-18 13:25:55',
              cardNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
              cardResume: '张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案张一公交车猥亵案',
              cardId: 1
            },
            {
              cardTitle: '网约车申请',
              cardTime: '2020-11-18 13:25:55',
              cardNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
              cardResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦',
              cardId: 2
            },
            {
              cardTitle: '反诈中心申请',
              cardTime: '2020-11-18 13:25:55',
              cardNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
              cardResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦',
              cardId: 3
            },
            {
              cardTitle: '网约车申请',
              cardTime: '2020-11-18 13:25:55',
              cardNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
              cardResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦',
              cardId: 4
            },
            {
              cardTitle: '网约车申请',
              cardTime: '2020-11-18 13:25:55',
              cardNum: '案件编号：A400059506900500000（张一公交车猥亵案)',
              cardResume: '吧啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦',
              cardId: 5
            }
          ]
        }
    },
    methods: {
      toDetail (item) {
        this.$router.push({
          name: 'serveDetail',
          params: {
            type: this.activeName,
            id: item.cardId,
          },
        })
      }
    }
  }
</script>

<style scoped>

</style>
