<template>
  <div class="suspect-list-main">
    <van-nav-bar
            title="其他信息"
            left-arrow
            @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="28"/>
      </template>
    </van-nav-bar>
    <div class="inverstigate-main suspect-main-other">
      <van-form>
        <h4>基本信息</h4>
        <van-field
                v-model="form.username"
                name="关联嫌疑人"
                label="关联嫌疑人"
                placeholder="关联嫌疑人"
                :rules="[{ required: true, message: '请填写关联嫌疑人' }]"/>
        <van-field
                v-model="form.caseNumber"
                name="关联案件"
                label="关联案件"
                placeholder="关联案件"
                :rules="[{ required: true, message: '请填写关联案件' }]"
        />
        <van-cell is-link title="地点" value="获取" />
        <!--获取时间-->
        <van-field is-link readonly clickable
                   label="获取时间"
                   placeholder="请选择"
                   input-align="right"
                   v-model="form.time"
                   @click="showTimePicker = true" />
        <van-popup v-model="showTimePicker" position="bottom">
          <van-datetime-picker
                  type="datetime"
                  @confirm="onTimeConfirm"
                  @cancel="showTimePicker = false"
          />
        </van-popup>

        <!--侦查类别-->
        <van-field is-link readonly clickable
                   label="侦查类别"
                   placeholder="请选择"
                   input-align="right"
                   v-model="form.investigateType"
                   @click="showInvestigatePicker = true" />
        <van-popup v-model="showInvestigatePicker"
                   position="bottom">
          <van-picker
                  show-toolbar
                  :columns="investigateList"
                  @confirm="investigateConfirm"
                  @cancel="showInvestigatePicker = false"
          />
        </van-popup>
        <h4>其他附件</h4>
        <van-cell title="上传照片"  />
        <van-uploader v-model="fileList" :after-read="afterRead" />
        <van-cell title="上传视频" />
        <van-uploader accept="*" v-model="videoList" :after-read="afterRead" />
        <van-cell title="上传附件"  />
        <van-uploader accept="*" v-model="attachmentList">
          <van-button icon="plus" size="small" type="primary">上传文件</van-button>
        </van-uploader>
        <h4>内容描述</h4>
        <van-field
                v-model="form.describe"
                rows="2"
                autosize
                type="textarea"
                placeholder="请输入内容描述"/>
      </van-form>
      <div class="btn-group">
        <van-button size="small">取 消</van-button>
        <van-button size="small" type="primary">确 定</van-button>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import { dayFormat } from '../../utils/createUniqueString';
import homeFooter from '../../pages/homeFooter';

export default {
  name: 'suspectOther',
  components: {
    homeFooter,
  },
  data() {
    return {
      form: {
        username: '', // 关联嫌疑人
        caseNumber: '', // 关联案件
        time: '', // 获取时间
        investigateType: '', // 侦查类别
        describe: '', // 描述
      },
      investigateList: ['省厅', '审讯', '监管', '情报', '图侦', '刑事技术', '外调',
        '法制', '经侦', '网安', '综合'], // 侦查类别列表
      showInvestigatePicker: false, // 侦查类别选择模态
      showTimePicker: false, // 获取时间模态框
      fileList: [
        {
          url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img01.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败',
        },
      ],
      videoList: [], // 视频
      attachmentList: [], // 附件
    };
  },
  created() {
    this.form.time = dayFormat(new Date());
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    /* 时间确认 */
    onTimeConfirm(value) {
      this.form.time = dayFormat(value);
      this.showTimePicker = false;
    },
    /* 确认侦查类别 */
    investigateConfirm(val) {
      this.form.investigateType = val;
      this.showInvestigatePicker = false;
    },
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
      }, 1000);
    },
  },
}
</script>

<style scoped>

</style>
