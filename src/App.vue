<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
// 載入 bootstrap 方法一
//@import "~bootstrap/scss/bootstrap";

// 載入 bootstrap 方法二
@import "./assets/all";
</style>
