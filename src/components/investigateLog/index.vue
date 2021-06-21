<template>
  <div class="container">
    <div class="main">
      <h3 class="page-header">
        <i class="icon in-icon-filter" @click="showPopover = !showPopover"></i>
        <van-popup class="search-dialog" v-model="showPopover"
                   :overlay="false" :get-container="getContainer"
                   position="top" :style="{ height: '100%' }">
          <van-form>
            <van-field
                    v-model="form.clueName"
                    name="线索名称"
                    label="线索名称"
                    placeholder="线索名称"/>
            <van-field name="picker"
                       :value="form.clueType"
                       label="线索类别"
                       placeholder="点击选择线索类别"
                       @click="showCluePicker = true"/>
            <van-popup v-model="showCluePicker" position="bottom">
              <van-picker
                      show-toolbar
                      :columns="clueColumns"
                      @confirm="onClueConfirm"
                      @cancel="showCluePicker = false"/>
            </van-popup>
            <van-field
                    v-model="form.clueDescribe"
                    name="线索描述"
                    label="线索描述"
                    placeholder="线索描述"/>
            <van-field
                    v-model="form.ajbh"
                    name="aj编号"
                    label="aj编号"
                    placeholder="aj编号"/>
            <van-field
                    readonly
                    clickable
                    name="datetimePicker"
                    :value="form.timeStartValue"
                    label="录入时间开始"
                    placeholder="选择时间范围"
                    @click="showTimeStartPicker = true"/>
            <van-popup v-model="showTimeStartPicker" position="bottom">
              <van-datetime-picker
                      type="date"
                      @confirm="onTimeStartConfirm"
                      @cancel="showTimeStartPicker = true"
                      title="选择年月日"/>
            </van-popup>
            <van-field
                    readonly
                    clickable
                    name="datetimePicker"
                    :value="form.timeEndValue"
                    label="录入时间截止"
                    placeholder="选择时间范围"
                    @click="showTimeEndPicker = true"/>
            <van-popup v-model="showTimeEndPicker" position="bottom">
              <van-datetime-picker
                      type="date"
                      @confirm="onTimeEndConfirm"
                      @cancel="showTimeEndPicker = true"
                      title="选择年月日"/>
            </van-popup>
            <div style="margin: 16px;">
              <van-row>
                <van-col span="12">
                  <van-button block native-type="submit"
                              @click="showPopover = false">重置</van-button>
                </van-col>
                <van-col span="12">
                  <van-button block type="info" native-type="submit">确定</van-button>
                </van-col>
              </van-row>
            </div>
          </van-form>
        </van-popup>
        <span class="header-title">侦查日志</span>
      </h3>
      <div class="inverstigate-main">
        <van-tabs v-model="activeName">
          <van-tab title="我发起" name="first">
            <clue-card v-for="n in 10" :key="n"
                       @click.native="linkToDetail"></clue-card>
            <van-empty description="暂无数据" v-if="false" />
          </van-tab>
          <van-tab title="我参与" name="second">
            <clue-card v-for="n in 10" :key="n"></clue-card>
            <van-empty description="暂无数据" v-if="false"/>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import clueCard from "./clueCard";

export default {
  name: 'investigateIndex',
  components: {
    homeFooter,
    clueCard,
  },
  data() {
    return {
      activeName: 'first', // tab的状态
      showPopover: false, // 弹窗的标识位
      form: {
        clueName: '',
        clueType: '', // 线索类别
        clueDescribe: '', // 线索描述
        ajbh: '',
        timeStartValue: '', // 时间范围
        timeEndValue: '', // 时间范围
      },
      clueColumns: ['杭州', '宁波', '温州', '嘉兴', '湖州'], // 线索的选择
      showCluePicker: false, // 线索的标识位
      showTimeStartPicker: false, // 时间的标识位
      showTimeEndPicker: false,
    };
  },
  methods: {
    getContainer() {
    },
    /* 确定线索类别的回调 */
    onClueConfirm(value) {
      this.form.clueType = value;
      this.showCluePicker = false;
    },
    /* 录入时间开始 */
    onTimeStartConfirm(value) {
      this.form.timeStartValue = `${value.getYear()}:${value.getMonth() + 1}:${value.getDate()}`;
      this.showTimeStartPicker = false;
    },
    /* 录入时间开始 */
    onTimeEndConfirm(value) {
      this.form.timeEndValue = `${value.getYear()}:${value.getMonth() + 1}:${value.getDate()}`;
      this.showTimeEndPicker = false;
    },
    linkToDetail() {
      this.$router.push({
        name: 'logDetail',
        params: {
          id: 1,
        },
      })
    },
  },
};
</script>

<style scoped>

</style>
