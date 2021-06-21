<template>
  <div>
    <van-nav-bar
      title="服务申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>
    <!--申请详细信息-->
    <div class="common-card no-top-line">
      <div class="card-title flex-between bottom-line">
        <div class="title-left">{{detailInfo.detailName}}</div>
        <div class="title-right">查看详情 <i class="icon icon-right-arrow"></i></div>
      </div>
      <div class="card-content">
        <div>申请时间：{{detailInfo.detailTime}}</div>
        <div>aj编号：{{detailInfo.detailNum}}</div>
        <div>简述：{{detailInfo.detailResume}}</div>
      </div>
      <div class="card-operation flex-between">
        <div><i class="icon icon-check"></i><span>查看</span></div>
        <div><i class="icon icon-check"></i><span>回复</span></div>
        <div><i class="icon icon-supplement"></i><span>补充</span></div>
        <div><i class="icon icon-activation"></i><span>激活</span></div>
        <div><i class="icon icon-end-case"></i><span>结案</span></div>
        <div><i class="icon icon-application"></i><span>审批表</span></div>
      </div>
    </div>
    <div class="gap"></div>
    <!--签核进度-->
    <div class="common-card no-top-line">
      <div class="card-title bottom-line">
        <div class="title-left">签核进度</div>
      </div>
      <van-steps direction="vertical" :active="0">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </div>
    <div class="gap"></div>
    <!--申请反馈-->
    <div class="common-card no-top-line">
      <div class="card-title bottom-line">
        <div class="title-left">申请反馈</div>
      </div>
      <div class="card-content">
        <div>反馈时间：{{detailInfo.detailTime}}</div>
        <div>反馈描述：{{detailInfo.detailResume}}</div>
        <div>附件列表：暂无</div>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import homeFooter from '../../../pages/homeFooter';
  export default {
    props: [],
    name: 'serveDetail',
    components: {
      homeFooter,
    },
    data() {
        return {
          detailInfo: {
            detailName: '互联网企业服务(513)',
            detailTime: '2020-11-18 13:25:55',
            detailNum: 'A400059506900500000（张一公交车被盗)',
            detailResume: '张一公交车被盗张一公交车被盗张一公交车被盗张一公交车被盗张一公交车被盗张一公交车被盗张张一公交车被盗张一公交车猥亵'
          }
        }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
    },
  }
</script>

<style scoped>

</style>
