<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    this.$http.get(api).then((response) => {
      console.log(response.data)
    })
  }
}
</script>

<style lang="scss">
// 載入 bootstrap 方法一
//@import "~bootstrap/scss/bootstrap";

// 載入 bootstrap 方法二
@import "./assets/all";
</style>
