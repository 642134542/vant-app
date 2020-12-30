<template>
  <div class="login">
    <div class="login-form">
      <h2 class="login-title">
        <!--eslint-disable -->
        <svg xmlns="http://www.w3.org/2000/svg" width="48.967" height="48.788" viewBox="0 0 24.967 27.788">
          <path id="logo" d="M369.5,28.549V23.3a2.833,2.833,0,0,0-1.443-2.461l-3.645-2.074V31.443a.885.885,0,0,0,.451.769l11.185,6.363V34.428a2.837,2.837,0,0,0-1.442-2.462l-4.655-2.648a.885.885,0,0,1-.451-.77m14.341.769-4.656,2.648a2.837,2.837,0,0,0-1.442,2.462v4.148l11.184-6.363a.884.884,0,0,0,.451-.769V18.769l-3.645,2.074a2.833,2.833,0,0,0-1.443,2.461v5.245a.886.886,0,0,1-.449.769m-1.605-15.754-4.671-2.658a.914.914,0,0,0-.9,0L365.435,17.3l3.645,2.074a2.924,2.924,0,0,0,2.884,0l4.7-2.675a.942.942,0,0,1,.207-.084.919.919,0,0,1,.694.084l4.7,2.675a2.924,2.924,0,0,0,2.884,0L388.8,17.3l-6.56-3.732Z" transform="translate(-364.414 -10.788)" fill="#fff"/>
        </svg>
        <span>军用标准知识图谱</span>
      </h2>
      <el-form ref="loginForm"
               :rules="loginRules"
               :model="param">
        <el-form-item prop="loginName">
          <div class="login-field-group">
            <el-input class="login-field"
                      placeholder="用户名"
                      @keyup.enter.native="loginSubmit('loginForm')"
                      type="text" v-model.trim="param.loginName"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="loginPwd">
          <div class="login-field-group">
            <el-input class="login-field"
                      placeholder="密码"
                      type="password"
                      @keyup.enter.native="loginSubmit('loginForm')"
                      v-model.trim="param.loginPwd"/>
          </div>
        </el-form-item>
        <p class="login-tips" v-if="tips">{{ tips }}</p>
        <el-button id="login-btn" class="btn"
                   :loading="loading"
                   @click="loginSubmit('loginForm')">登&nbsp;&nbsp;录</el-button>
      </el-form>
    </div>
    <div class="login-left-bg">
      <div class="login-left-bg-main">
        <img src="../assets/images/login-main.png" />
      </div>
      <div class="login-left-bg-cloud">
        <img src="../assets/images/login-cloud.png" />
      </div>
      <div class="login-left-bg-border">
        <img src="../assets/images/login-border.png" />
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5';

export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入不少于长度为6的密码'));
      } else {
        callback();
      }
    };
    return {
      param: {
        loginName: '',
        loginPwd: '',
      },
      tips: '',
      loading: false,
      loginRules: {
        loginName: [{ required: true, min: 1, max: 20, message: '请输入长度不超过20的用户名', trigger: 'blur' }],
        loginPwd: [{ required: true, trigger: 'blur', validator: validatePassword }],
      },
    };
  },
  computed: {
  },
  methods: {
    showTips(str) {
      this.tips = str;
      setTimeout(() => { this.tips = ''; }, 3000);
    },
    loginSubmit(formName) {
      // eslint-disable-next-line consistent-return
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch(
            'UserLogin',
            {
              userName: this.param.loginName,
              password: md5(this.param.loginPwd),
            },
          ).then(() => {
            this.loading = false;
            this.$router.push({ name: 'home' });
          }, () => {
            this.loading = false;
            this.showTips('用户名或密码错误');
          });
        } else {
          this.showTips('请填写登录名和密码');
          return false;
        }
      });
    },
  },
};
</script>
