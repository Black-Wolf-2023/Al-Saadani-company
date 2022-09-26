<template>
  <div class="app">
    <HeaderComp />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from "./components/home/HeaderComp.vue";
export default {
  component: {
    HeaderComp,
  },
  components: { HeaderComp },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  overflow-x: hidden;
}
</style>
