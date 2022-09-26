<template lang="">
  <div id="hero">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
<style lang="scss" scoped>
@import "../../sass/main.scss";
#hero {
  height: 100vh;
  width: 100%;
  background: url("../../assets/images/team.jpg");
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  h1 {
    font-size: 4rem;
    color: $white-color;
  }
}
</style>
