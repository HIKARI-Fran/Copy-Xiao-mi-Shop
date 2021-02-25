<template>
  <div class="header">
    <div class="topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">IoT</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">天星数科</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">小爱开放社区</a>
          <a href="javascript:;">企业团购</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">{{ username }}</a>

          <a href="javascript:;" v-if="!username" @click="register">注册</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span> 购物车({{ cartNum }})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="item-list">
              <ul>
                <li v-for="item in productList" :key="item.id">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ "¥" + item.price + "元" }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="item-list">
              <ul>
                <li v-for="item in productList" :key="item.id">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ "¥" + item.price + "元" }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="item-list">
              <ul>
                <li v-for="item in productList" :key="item.id">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ "¥" + item.price + "元" }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="item-list">
              <ul>
                <li v-for="item in productList" :key="item.id">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ "¥" + item.price + "元" }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="item-list">
              <ul>
                <li v-for="item in productList" :key="item.id">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ "¥" + item.price + "元" }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>路由器</span>
            <div class="item-list">
              <ul>
                <li v-for="item in productList" :key="item.id">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ "¥" + item.price + "元" }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <div class="item-list">
              <ul>
                <li v-for="item in productList" :key="item.id">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ "¥" + item.price + "元" }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>服务</span>
            <div class="item-list"></div>
          </div>
          <div class="item-menu">
            <span>社区</span>
            <div class="item-list"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.getProductList();
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    cartNum() {
      return this.$store.state.cartNum;
    },
  },
  methods: {
    async getProductList() {
      const res = await this.$axios.get("/products", {
        params: { pageSize: 6, categoryId: 100012 },
      });
      this.productList = res.list;
    },
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";
.header {
  .topbar {
    background-color: #333333;
    height: 39px;
    color: #b0b0b0;
    line-height: 39px;
    .container {
      @include flex;

      a {
        display: inline-block;
        margin-right: 17px;
        color: #b0b0b0;
        &:hover {
          color: #fff;
        }
      }
      .topbar-user {
        .my-cart {
          width: 110px;
          background-color: #666666;
          text-align: center;
          .icon-cart {
            @include bgImg(12px, 12px, "/imgs/icon-cart.png");
            vertical-align: middle;
            margin-right: 4px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex;
      .header-logo {
        width: 55px;
        height: 55px;
        overflow: hidden;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &:before {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            background-color: #ff6600;
            transition: margin 0.25s;
          }
          &:after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
            background-color: #ff6600;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.25s;
          }
        }
      }
      .header-menu {
        display: flex;

        .item-menu {
          display: inline-block;
          color: #333;
          line-height: 112px;
          font-size: 16px;
          padding-right: 20px;
          &:hover {
            .item-list {
              height: 220px;
              transition: all 0.5s;
              border-top: 1px solid #d7d7d7;
              border-bottom: 1px solid #d7d7d7;
              opacity: 1;
            }
          }
          &:hover:nth-child(9) {
            .item-list {
              display: none;
            }
          }
          &:hover:nth-child(8) {
            .item-list {
              display: none;
            }
          }
          span {
            cursor: pointer;
            &:hover {
              color: #ff6600;
            }
          }
          .item-list {
            position: absolute;
            opacity: 0;
            height: 0px;
            top: 112px;
            left: 0;
            overflow: hidden;
            width: 1226px;
            z-index: 20;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            overflow: hidden;
            background-color: #ffffff;

            ul li {
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 204px;
              float: left;
              font-weight: bold;
              &:before {
                display: inline-block;
                position: absolute;
                left: 0;
                top: 28px;
                content: " ";
                height: 100px;
                width: 1px;
                background-color: #d7d7d7;
              }
              &:first-child:before {
                display: none;
              }
              a {
                display: block;
                text-align: center;
              }
              .pro-img {
                margin-top: 26px;
                height: 92px;
                img {
                  height: 92px;
                }
              }
              .pro-name {
                margin-top: 33px;
                margin-bottom: 8px;
                line-height: 24px;
                color: #000;
              }
              .pro-price {
                color: #ff6600;
                line-height: 24px;
              }
            }
          }
        }
      }
      .header-search {
        .wrapper {
          width: 320px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            box-sizing: border-box;
            height: 50px;
            width: 264px;
            padding-left: 15px;
            font-size: 16px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 19px;
          }
        }
      }
    }
  }
}
</style>
