<template>
  <div class="login">
    <div class="container">
      <div class="header">
        <img src="/imgs/login-logo.png" alt="" />
      </div>
    </div>
    <div class="login-page">
      <div class="wrapper">
        <div class="login-form">
          <div class="login-header">
            <span class="account-login">账号登录</span>
            <span>|</span>
            <span class="scan-login">扫码登录</span>
          </div>
          <div class="login-user">
            <div class="input">
              <input
                type="text"
                name="username"
                placeholder="邮箱/手机号码/小米ID"
                v-model="username"
              />
            </div>
            <div class="input">
              <input
                type="text"
                name="password"
                placeholder="密码"
                v-model="password"
              />
            </div>
          </div>
          <div class="login-btn" @click="login">登录</div>
          <div class="login-footer">
            <div class="login-footer-left">
              <a href="javascript:;">手机短信登录/注册</a>
            </div>
            <div class="login-footer-right">
              <span class="reg">立即注册</span>
              <span class="middle-line">|</span>
              <span class="forget-pwd">忘记密码?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <p class="footer-first">
          <a href="javascript:;">简体</a> | <a href="javascript:;">繁体</a> |
          <a href="javascript:;">English</a> |
          <a href="javascript:;">常见问题</a> |
          <a href="javascript:;">隐私政策</a>
        </p>
        <p>
          小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let { username, password } = this;
      let res = await this.$axios.post("/user/login", {
        username,
        password,
      });
      this.$cookie.set("id", res.id, { expires: "1M" });
      this.$store.dispatch("saveUserName", res.username);
      this.$router.push("/index");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/reset.scss";
.login {
  .container {
    .header {
      height: 112px;
    }
  }
  .login-page {
    height: 576px;
    background: url("/imgs/login-bg.jpg") center no-repeat;

    position: relative;
    .wrapper {
      .login-form {
        position: absolute;
        left: 64%;
        margin-top: 37px;
        width: 410px;
        height: 510px;
        background-color: #fff;
        .login-header {
          text-align: center;
          margin-top: 40px;
          span {
            display: inline-block;
            color: #666666;
            font-size: 24px;
            margin: 0 25px;
            cursor: pointer;
          }
          .account-login {
            color: #ff6600;
          }
        }
        .login-user {
          margin-top: 50px;
          text-align: center;
          .input {
            input {
              width: 348px;
              height: 50px;
              outline: none;
              border: 1px solid #e5e5e5;
              margin-bottom: 20px;
              text-indent: 17px;
            }
          }
        }
        .login-btn {
          width: 348px;
          height: 50px;
          background-color: #ff6600;
          color: #fff;
          font-size: 16px;
          text-align: center;
          line-height: 50px;
          margin: 0 30px;
          margin-top: 10px;
          margin-bottom: 15px;
          cursor: pointer;
        }
        .login-footer {
          display: flex;
          justify-content: space-between;
          padding: 0 30px;
          .login-footer-left {
            a {
              color: #ff6600;
            }
          }
          .login-footer-right {
            color: #999;
            span {
              display: inline-block;
              text-align: center;
            }
            .middle-line {
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
  .footer {
    .container {
      height: 392px;
      display: flex;
      flex-direction: column;

      align-items: center;
      font-size: 14px;
      .footer-first {
        margin-top: 250px;
        margin-bottom: 20px;
        a {
          color: #333333;
        }
      }
    }
  }
}
</style>