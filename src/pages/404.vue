<template>
  <div class="notfound">
    <div class="bubble">
      <p>您查看的页面不存在! </p>
      <p>请确认输入的网址是否正确，您可以选择： <router-link :to="{ name: 'home' }">返回首页</router-link></p>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
