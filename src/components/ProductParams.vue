<template >
  <div class="product-params">
    <div :class="{ fixed: isFixed }" class="navBar">
      <div class="container">
        <div class="product-title">
          <span class="product-name">小米8 透明探索版</span>
          <span>|</span> <a href="javascript:;">小米8</a><span>|</span>
          <a href="javascript:;">小米8 SE</a>
        </div>
        <div class="product-desc">
          <a href="javascript:;">概述</a><span>|</span>
          <a href="javascript:;">参数</a><span>|</span>
          <a href="javascript:;">用户评价</a>
          <div class="btn">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-params",
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop = document.documentElement.scrolltop || window.pageYOffset;
      this.isFixed = scrollTop > 152 ? true : false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.product-params {
  .navBar {
    &.fixed {
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 30;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 71px;
      border-top: 1px solid #ccc;

      .product-title {
        display: flex;
        align-items: center;
        .product-name {
          font-size: 18px;
          font-weight: bold;
          color: #333333;
        }
        a {
          color: #666666;
          font-size: 12px;
        }
        span {
          margin: 0 10px;
          &:first-child {
            margin: 0;
          }
        }
      }
      .product-desc {
        a {
          color: #666666;
          font-size: 12px;
        }
        span {
          margin: 0 10px;
        }
        .btn {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          width: 110px;
          text-align: center;
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          background-color: #ff7301;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>