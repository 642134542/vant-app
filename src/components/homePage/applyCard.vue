<template>
  <div>
    <div class="apply-card" v-for="(item, index) in contentArr" :key="index">
    <div class="card-title flex-between">
      <div class="title">{{item.applyTitle}}</div>
      <div class="time">{{item.applyTime}}</div>
    </div>
    <div class="card-content">
      <div>{{item.applyNum}}</div>
      <div>简述：{{item.applyResume}}</div>
    </div>
    <div class="card-operation flex-between">
      <div><i class="icon icon-agree"></i><span>同意</span></div>
      <div><i class="icon icon-refund"></i><span>退办</span></div>
      <div><i class="icon icon-reject"></i><span>驳回</span></div>
      <div><i class="icon icon-supplement"></i><span>补充</span></div>
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
            }
          ]
        }
    }
  }
</script>

<style scoped>

</style>
