<template>
  <div>
    <van-nav-bar
            title="嫌疑人信息详情"
            left-arrow
            @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="28"/>
      </template>
      <template #right>
        <i class="in-icon-plus-right"></i>
      </template>
    </van-nav-bar>
    <van-form label-width="120px">
      <van-field name="picker"
                 readonly
                 clickable
                 :value="form.suspectType"
                 label="嫌疑人类别"
                 placeholder="选择嫌疑人类别"
                 @click="showSuspectPicker = true"/>
      <van-popup v-model="showSuspectPicker" position="bottom">
        <van-picker show-toolbar
                    :columns="suspectTypeList"
                    @confirm="onSuspectTypeConfirm"
                    @cancel="showSuspectPicker = false"/>
      </van-popup>
      <van-field
              v-model="form.name"
              name="姓名"
              label="姓名"
              placeholder="姓名"/>
      <van-field name="picker"
                 readonly
                 clickable
                 :value="form.sex"
                 label="性别"
                 placeholder="选择性别"
                 @click="showSexPicker = true"/>
      <van-popup v-model="showSexPicker" position="bottom">
        <van-picker show-toolbar
                    :columns="['男', '女']"
                    @confirm="onSexConfirm"
                    @cancel="showSexPicker = false"/>
      </van-popup>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'suspectEditInfo',
  data() {
    return {
      form: {
        suspectType: '',
        name: '',
        sex: '男', // 性别
      },
      showSuspectPicker: false,
      suspectTypeList: ['嫌疑人', '干系人'],
      showSexPicker: false, // 性别的弹窗黄标识位
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    /* 确认选择嫌疑人类别 */
    onSuspectTypeConfirm(val) {
      this.form.suspectType = val;
      this.showSuspectPicker = false;
    },
    onSexConfirm(val) {
      this.form.sex = val;
      this.showSexPicker = false;
    },
  },
}
</script>

<style scoped>

</style>
