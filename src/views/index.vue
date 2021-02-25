<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-box">
          <div class="menu-wrap">
            <div class="menu-item">
              <ul>
                <li>
                  <a href="">手机 电话卡</a>
                  <div class="item-list">
                    <ul v-for="(item, i) in itemList" :key="i">
                      <li v-for="(subItem, j) in item" :key="j">
                        <a href="javascript:;">
                          <img
                            :src="
                              subItem.img ? subItem.img : '/imgs/item-box-1.png'
                            "
                            alt=""
                          />
                          {{ subItem.name ? subItem.name : "小米酒" }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">电视 盒子</a>
                  <div class="item-list"></div>
                </li>
                <li>
                  <a href="">笔记本 平板</a>
                  <div class="item-list"></div>
                </li>
                <li>
                  <a href="">家电 插线板</a>
                  <div class="item-list"></div>
                </li>
                <li>
                  <a href="">出行 穿戴</a>
                  <div class="item-list"></div>
                </li>
                <li>
                  <a href="">耳机 音箱</a>
                  <div class="item-list"></div>
                </li>
                <li>
                  <a href="">电源 配件</a>
                  <div class="item-list"></div>
                </li>
                <li>
                  <a href="">生活 箱包</a>
                  <div class="item-list"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <a href="javascript:;"><img :src="item.path" alt="" /></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a href="javascript:;" v-for="(item, index) in adsList" :key="index">
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="javascript:;">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="javascript:;">
              <img
                v-lazy="
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb1bd61ad71c45a4f67f09b075463944.jpeg?thumb=1&w=234&h=614&f=webp&q=90'
                "
                alt=""
              />
            </a>
          </div>
          <div class="banner-right">
            <div class="list-right" v-for="(arr, i) in phoneList" :key="i">
              <div class="list-item" v-for="(item, j) in arr" :key="j">
                <span :class="{ new: j % 2 == 0, kill: j % 2 == 1 }">{{
                  j % 2 == 0 ? "新品" : "秒杀"
                }}</span>
                <div class="product-img">
                  <a href="javascript:;">
                    <img v-lazy="item.mainImage" alt="" />
                  </a>
                </div>
                <h3>{{ item.name }}</h3>
                <p class="product-info">{{ item.subtitle }}</p>
                <p class="price">{{ item.price }}元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/serviceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        effect: "fade",
        speed: 300,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperList: [
        { id: "41", path: "https://wallpaperaccess.com/full/2505746.jpg" },
        { id: "42", path: "https://images6.alphacoders.com/812/812881.jpg" },
        { id: "43", path: "https://wallpapercave.com/wp/wp7486872.jpg" },
        { id: "44", path: "https://images7.alphacoders.com/110/1107308.jpg" },
      ],
      itemList: [
        [
          { id: 30, name: "小米9", img: "/imgs/item-box-1.png" },
          { id: 30, name: "小米9", img: "/imgs/item-box-1.png" },
          { id: 30, name: "小米9", img: "/imgs/item-box-1.png" },
          { id: 30, name: "小米9", img: "/imgs/item-box-1.png" },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
    };
  },

  mounted() {
    this.getPhoneList();
  },
  methods: {
    async getPhoneList() {
      let res = await this.$axios.get("/products", {
        params: { categoryId: 100012, pageSize: 8 },
      });
      // console.log(res);
      this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.index {
  .container {
    .swiper-box {
      .nav-box {
        .menu-wrap {
          position: absolute;
          box-sizing: border-box;
          width: 264px;
          height: 451px;
          background-color: rgba(105, 101, 101, 0.6);

          z-index: 16;
          padding: 26px 0;
          .menu-item {
            li {
              height: 50px;
              line-height: 50px;
              a {
                display: block;
                position: relative;
                color: #fff;
                font-size: 16px;
                padding-left: 30px;
                &:after {
                  content: " ";
                  position: absolute;
                  right: 30px;
                  top: 17.5px;
                  @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
                }
              }
              &:hover {
                background-color: #ff6600;
                .item-list {
                  display: block;
                }
              }
              .item-list {
                display: none;
                position: absolute;
                top: 0;
                left: 264px;
                width: 964px;
                height: 450px;
                border: 1px solid #e5e5e5;

                ul {
                  display: flex;
                  justify-content: space-between;
                  padding-left: 23px;
                  background-color: #fff;
                  height: 75px;

                  li {
                    flex: 1;
                    z-index: 30;
                    a {
                      color: #000;

                      &:after {
                        display: none;
                      }
                      &:hover {
                        background-color: #fff;
                        color: #ff6600;
                      }
                      img {
                        width: 35px;
                        height: 42px;
                        vertical-align: middle;
                        margin-right: 15px;
                      }
                    }
                  }
                  &:first-child {
                    padding-top: 14px;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        img {
          width: 100%;
        }
        .swiper-button-prev {
          left: 264px;
          padding: 14px 12px;
          &:hover {
            background-color: rgba(105, 101, 101, 0.8);
          }
        }
        .swiper-button-next {
          right: 0;
          padding: 14px 12px;
          &:hover {
            background-color: rgba(105, 101, 101, 0.8);
          }
        }
        .swiper-pagination {
          position: absolute;
          left: auto;
          right: 30px;
          bottom: 20px;
          width: 200px;
        }
      }
    }
    .ads-box {
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
      margin-bottom: 31px;
      img {
        width: 296px;
        height: 167px;
      }
    }
    .banner {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .product-box {
    background-color: #f5f5f5;
    padding: 30px 0 50px;
    .container {
      h2 {
        font-size: 22px;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        .banner-left {
          width: 224px;
          height: 619px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .banner-right {
          margin-left: 16px;
          width: 986px;
          .list-right {
            display: flex;
            justify-content: space-between;
            height: 302px;
            margin-bottom: 14px;
            .list-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: #fff;
              width: 236px;
              height: 302px;
              span {
                display: inline-block;
                height: 24px;
                width: 67px;
                line-height: 24px;
                font-size: 14px;
                text-align: center;
                color: #fff;
                margin-bottom: 20px;
                &.new {
                  background-color: #7ecf68;
                }
                &.kill {
                  background-color: #e82626;
                }
              }
              .product-img {
                margin-bottom: 5px;
                a {
                  display: inline-block;
                  img {
                    height: 150px;
                  }
                }
              }
              h3 {
                font-size: 14px;
              }
              .product-info {
                color: #999999;
                font-size: 12px;
                margin: 6px 0 13px;
              }
              .price {
                font-size: 16px;
                color: #f20a0a;
                font-weight: bold;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>
