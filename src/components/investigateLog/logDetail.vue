<template>
  <div>
    <van-nav-bar
      title="日志详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="32"/>
      </template>
      <template #right>
        <i class="in-icon-filter-right" @click="showPopover = !showPopover"></i>
        <van-popover
                v-model="showPlusPopover"
                trigger="click"
                :actions="popoverActions"
                placement="bottom-end"
                @select="onSelect">
          <template #reference>
            <i class="in-icon-plus-right"></i>
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <div class="inverstigate-main log-detail-box">
      <log-detail-card v-for="n in 10" :key="n"></log-detail-card>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../../pages/homeFooter';
import logDetailCard from "./logDetailCard";

export default {
  name: 'logDetail',
  components: {
    homeFooter,
    logDetailCard,
  },
  data() {
    return {
      showPlusPopover: false, // 浮窗的标识位
      popoverActions: [{ text: '新增图像侦查信息' },
        { text: '新增嫌疑人信息' },
        { text: '新增其他信息' }],
    };
  },
  methods: {
    onSelect() {

    },
    onClickLeft() {
      this.$router.push({
        name: 'investigate',
      })
    },
  },
};
</script>

<style scoped>

</style>
