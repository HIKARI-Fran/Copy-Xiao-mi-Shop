<template>
  <div class="product">
    <product-params></product-params>
    <div class="content">
      <div class="bg1">
        <h2>小米8</h2>
        <p>8周年旗舰版</p>
        <div class="item-detail">
          <span>全球首款双频 GP</span><span>|</span> <span>骁龙845</span
          ><span>|</span> <span>AI 变焦双摄</span><span>|</span>
          <span>红外人脸识别</span>
        </div>
        <div class="item-price">
          <span>￥2599</span>
          <span>￥2999</span>
        </div>
      </div>
      <div class="bg2-wrap">
        <div class="bg2"></div>
      </div>
      <div class="bg3"></div>
      <div class="swiper-box">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide
            ><a href="javascript:;"
              ><img src="/imgs/product/gallery-2.png" alt="" /></a
            ><a href="javascript:;"
              ><img src="/imgs/product/gallery-3.png" alt="" /></a
            ><a href="javascript:;"
              ><img src="/imgs/product/gallery-4.png" alt="" /></a
          ></swiper-slide>
          <swiper-slide
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/771647025.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/2239012624.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/1293725522.jpg"
                alt="" /></a
          ></swiper-slide>
          <swiper-slide
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/101637580.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/1929372345.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/3268267089.jpg"
                alt="" /></a
          ></swiper-slide>
          <swiper-slide
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/3899530885.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/1972292440.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/2860023092.jpg"
                alt="" /></a
          ></swiper-slide>
          <swiper-slide
            ><a href="javascript:;"
              ><img
                src="https://qqdie.com/wp-content/uploads/2016/05/2907609367.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="https://shop.r10s.jp/jeijei/cabinet/image1/epo7738979004_1.jpg"
                alt="" /></a
            ><a href="javascript:;"
              ><img
                src="http://jigsaw.jp/img/goods/S/epo7738906504.jpg"
                alt="" /></a
          ></swiper-slide>

          <!-- 如果需要导航按钮 -->
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="item-title">小米8 AI变焦双摄拍摄</div>
      <div class="item-box">
        <h2>60帧超慢动作摄影 <br />慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />
          更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="img-wrap" @click="showVideoBox">
          <a href="javascript:;">
            <img src="/imgs/product/gallery-1.png" alt="" />
          </a>
        </div>
        <div class="video-box" v-if="showVideoFlag">
          <span class="icon-close" @click="closeVideoBox"></span>
          <video src="/imgs/product/video.mp4" controls autoplay></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParams from "./../components/ProductParams";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "product",
  components: {
    ProductParams,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showVideoFlag: false,
      swiperOptions: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          // dynamicBullets: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 如果需要滚动条
      },
    };
  },
  methods: {
    showVideoBox() {
      this.showVideoFlag = !this.showVideoFlag;
    },
    closeVideoBox() {
      this.showVideoFlag = !this.showVideoFlag;
    },
  },
};
</script>
<style lang="scss" >
.product {
  .content {
    .bg1 {
      width: 1901px;
      height: 718px;
      background: url("/imgs/product/product-bg-1.png") center no-repeat;
      // background-size: contain;
      border: 1px dashed #ccc;
      text-align: center;

      h2 {
        font-size: 80px;
        margin-top: 55px;
        margin-bottom: 10px;
      }
      p {
        font-size: 24px;
        color: #333;
        letter-spacing: 13px;
      }
      .item-detail {
        margin: 21px 0 17px;
        span {
          margin: 0 7.5px;
          color: #333;
          font-size: 16px;
        }
      }
      .item-price {
        font-size: 38px;
        color: #333;
        span:last-child {
          text-decoration: line-through;
          font-size: 26px;
          margin-left: 11px;
        }
      }
    }
    .bg2-wrap {
      display: flex;
      justify-content: center;
      margin: 38px 0 45px;
      .bg2 {
        background: url("/imgs/product/product-bg-2.png") center no-repeat;
        background-size: contain;
        width: 1226px;
        height: 397px;
        border: 1px dashed #ccc;
      }
    }
    .bg3 {
      width: 1901px;
      height: 638px;
      background: url("/imgs/product/product-bg-3.png") center no-repeat;
      background-size: cover;
      border: 1px dashed #ccc;
    }
    .swiper-box {
      position: relative;
      margin-top: 35px;
      height: 356px;
      .swiper-container {
        // overflow: visible;
        height: 356px;
        .swiper-slide {
          display: flex;
          justify-content: space-between;
          width: 1903px !important;
          height: 356px;
          // margin-right: 20px;
          img {
            width: 625px;
            height: 100%;
          }
        }
      }
      .swiper-pagination {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: -33px;
        .swiper-pagination-bullet {
          display: inline-block;
          width: 30px;
          height: 3px;
          border-radius: 0;
          margin: 0 5px;
          outline: none;
        }
      }
    }

    .item-title {
      margin: 57px 0 52px;
      text-align: center;
      font-size: 18px;
    }
    .item-box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #000;
      height: 1044px;
      h2 {
        font-size: 60px;
        color: #fff;
        margin: 82px 0 47px;
        text-align: center;
      }
      p {
        font-size: 24px;
        color: #fff;
        text-align: center;

        line-height: 36px;
        margin-bottom: 58px;
      }
      .img-wrap {
        width: 1226px;
        height: 540px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .video-box {
        position: absolute;
        z-index: 15;
        width: 1226px;
        height: 540px;
        top: 65.8%;
        left: 50%;
        transform: translate(-50%, -50%);
        span {
          display: inline-block;
          background: url("/imgs/icon-close.png") center no-repeat;
          background-size: cover;
          width: 20px;
          height: 20px;
          position: absolute;
          right: 20px;
          top: 20px;
          cursor: pointer;
          z-index: 17;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
      }
    }
  }
}
</style>
