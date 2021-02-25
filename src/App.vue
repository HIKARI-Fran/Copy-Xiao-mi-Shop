<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getUser();
    this.getCartNum();
  },
  methods: {
    async getUser() {
      let res = await this.$axios.get("/user");
      this.$store.dispatch("saveUserName", res.username);
    },
    async getCartNum() {
      let res = await this.$axios.get("/carts/products/sum");
      this.$store.dispatch("saveCartNum", res);
    },
  },
};
</script>
<style>
@import "./assets/scss/reset.scss";
</style>
