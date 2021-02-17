<template >
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7setting"></span>7天无理由退货</li>
        <li><span class="icon-15setting"></span>15天免费换货</li>
        <li><span class="icon-150setting"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "service-bar",
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.service {
  padding: 30px 0;
  font-size: 16px;
  color: #666666;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: inline-block;
      flex: 1;
      text-align: center;
      border-right: 1px solid #e5e5e5;
      &:last-child {
        border-right: none;
      }
      span {
        vertical-align: middle;
        margin-right: 7px;
      }
      .icon-setting {
        @include bgImg(20px, 20px, "/imgs/icon-setting.png");
      }
      .icon-7setting {
        @include bgImg(20px, 20px, "/imgs/icon-7day.png");
      }
      .icon-15setting {
        @include bgImg(20px, 20px, "/imgs/icon-15day.png");
      }
      .icon-150setting {
        @include bgImg(20px, 20px, "/imgs/icon-post.png");
      }
    }
  }
}
</style>