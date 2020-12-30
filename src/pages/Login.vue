<template>
  <div class="login">

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
