<template>
  <div class="container">
    <div class="main">
      <h3 class="inverstigate-header">
        <i class="in-icon-filter" @click="showPopover = !showPopover"></i>
        <van-popup class="search-dialog" v-model="showPopover"
                   :overlay="false" :get-container="getContainer"
                   position="top" :style="{ height: '30%' }">
          <van-form>
            <van-field
                    v-model="form.clueName"
                    name="线索名称"
                    label="线索名称"
                    placeholder="线索名称"/>
            <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="form.clueType"
                    label="线索类别"
                    placeholder="点击选择线索类别"
                    @click="showPicker = true"/>
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                      show-toolbar
                      :columns="columns"
                      @confirm="onConfirm"
                      @cancel="showPicker = false"/>
            </van-popup>
            <van-field
                    v-model="form.clueDescribe"
                    name="线索描述"
                    label="线索描述"
                    placeholder="线索描述"/>
            <van-field
                    v-model="form.ajbh"
                    name="案件编号"
                    label="案件编号"
                    placeholder="案件编号"/>
            <van-field
                    readonly
                    clickable
                    name="datetimePicker"
                    :value="form.timeValue"
                    label="录入时间"
                    placeholder="选择时间范围"
                    @click="showTimePicker = true"/>
            <van-popup v-model="showTimePicker" position="bottom">
              <van-datetime-picker
                      type="date"
                      :formatter="formatter"
                      @confirm="onTimeConfirm"
                      @cancel="showTimePicker = true"
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
        <span class="invest-title">侦查日志</span>
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
      showPopover: false,
      form: {
        clueName: '',
        clueType: '', // 线索类别
        clueDescribe: '', // 线索描述
        ajbh: '',
        timeValue: '', // 时间范围
      },
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false,
      showTimePicker: false,
    };
  },
  methods: {
    onConfirm(value) {
      this.form.clueType = value;
      this.showPicker = false;
    },
    onTimeConfirm(value) {
      this.form.timeValue = value;
      this.showTimePicker = false;
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
