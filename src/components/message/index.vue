<template>
  <div class="container message-container">
    <div class="message-container-main">
      <van-nav-bar
              title="最新消息"/>
      <div class="message-list">

        <van-pull-refresh v-model="isLoadingRefresh"
                          style="min-height: 100vh;"
                          @refresh="onRefresh">
          <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad">
            <message-card v-for="n in list" :key="n"></message-card>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import { Toast } from 'vant';
import messageCard from './messageCard';
import homeFooter from '../../pages/homeFooter';

export default {
  name: 'messageIndex',
  components: {
    messageCard,
    homeFooter,
  },
  data() {
    return {
      isLoadingRefresh: false, // 下拉刷新的标识位
      loading: false,
      finished: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoadingRefresh = false;
        this.finished = false;
        this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }, 1000);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>

</style>
