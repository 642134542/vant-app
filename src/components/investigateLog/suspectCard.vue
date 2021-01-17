<template>
  <div class="suspect-card clearfix">
    <div class="suspect-img fl">
      <img />
    </div>
    <div class="fl">
      <div class="suspect-card-row">
        <label>{{cardTitle}}姓名:</label>
        <span>张一</span>
      </div>
      <div class="suspect-card-row">
        <label>性别:</label>
        <span>男</span>
      </div>
      <div class="suspect-card-row">
        <label>年龄:</label>
        <span>46</span>
      </div>
      <div class="suspect-card-row">
        <label>出生日期:</label>
        <span>1974-08-10</span>
      </div>
      <div class="suspect-card-row">
        <label>身份证:</label>
        <span>429918197408100772</span>
      </div>
      <div class="suspect-card-row">
        <label>身份证:</label>
        <span>429918197408100772</span>
      </div>
      <div class="suspect-card-row">
        <label>户籍:</label>
        <span>湖北省XX市XX镇XXXXXX</span>
      </div>
      <div class="suspect-card-row">
        <label>现住地:</label>
        <span>湖北省XX市XX镇XXXXXX</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suspectCard',
  props: {
    cardTitle: {
      type: String,
      default: '嫌疑人',
    },
  }
};
</script>

<style scoped>

</style>
