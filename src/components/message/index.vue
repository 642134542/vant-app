<template>
  <div class="container message-container">
    <div class="message-container-main">
      <van-nav-bar
              title="最新消息"/>
      <div class="message-list">
        <message-card v-for="n in 10" :key="n"></message-card>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import messageCard from './messageCard';
import homeFooter from '../../pages/homeFooter';

export default {
  name: 'messageIndex',
  components: {
    messageCard,
    homeFooter,
  },
};
</script>

<style scoped>

</style>
