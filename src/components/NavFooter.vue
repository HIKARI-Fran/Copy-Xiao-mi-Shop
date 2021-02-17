<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;"> 孙大炮主页</a><span>|</span>
      <a href="javascript:;"> Vue全栈课程</a><span>|</span>
      <a href="javascript:;"> React全家桶课程</a><span>|</span>
      <a href="javascript:;">
        React全家桶课程 | 微信支付专项课程（H5+小程序+Node+Mongo）</a
      >
    </div>
    <div class="copyright">
      @Copyright @ 2021
      <a href="javascript:;" class="link-to">mi.51purse.com</a> All Rights
      Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff7301;
  text-align: center;
  font-size: 16px;
  color: #999999;
  background-color: #333333;
  .footer-logo {
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
      margin-top: 46px;
    }
    p {
      margin-bottom: 31px;
    }
  }
  .footer-link {
    margin-bottom: 15px;
    a {
      display: inline-block;
      color: #999999;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    .link-to {
      color: #ff7301;
    }
  }
}
</style>
