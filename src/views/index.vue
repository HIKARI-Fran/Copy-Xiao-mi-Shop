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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
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
    };
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
  }
}
</style>
