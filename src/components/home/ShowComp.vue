<template lang="">
  <div id="show">
    <div class="img"><img src="../../assets/images/man.png" alt="" /></div>
    <div class="content">
      <h1>CALL US NOW</h1>
      <h2>FOR A PRICING QUOTE!</h2>
      <h3>0453323401</h3>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../sass/main.scss";
#show {
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/images/bg-big.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;
  position: relative;
  overflow: hidden;
  .img {
    position: absolute;
    bottom: -1%;
    left: 10%;
    @include media(mdsmem) {
      img {
        width: 300px;
      }
    }
  }
  .content {
    position: absolute;
    top: 30%;
    right: 10%;
    background: $dark-color;
    padding: 40px;
    border-radius: 10px;
    color: $white-color;
    @include media(mdsmem) {
      font-size: 1rem;
      top: 6%;
      right: 10%;
    }
    h1 {
      font-size: 4rem;
      color: $gold-color;
      @include media(em) {
        font-size: 2rem;
      }
    }
  }
}
</style>
