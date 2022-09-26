<template lang="">
  <div id="footer">
    <div class="logo inf"><img src="../../assets/logo.png" alt="" /></div>
    <div class="address inf">
      <img src="../../assets/icons/location.svg" alt="" />
      Address Buhaira Damanhour 9 El-Gaish St
    </div>
    <div class="phone inf">
      <img src="../../assets/icons/phone.svg" alt="" />
      01280898895
    </div>
    <div class="email inf">
      <img src="../../assets/icons/email.svg" alt="" />
      elsaadany202@gmail.com
    </div>
    <div class="copyright inf">
      <strong> Al Saadani company</strong>2008 ~ 2022 © All rights reserved
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../sass/main.scss";
#footer {
  background: $dark-color;
  display: grid;
  padding: 40px 10px;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  gap: 10px;
  height: 300px;
  @include media(mdsmem) {
    grid-template-columns: repeat(1, 1fr);
  }
  .inf {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 14px;
    color: $white-color;
    @include media(mdsmem) {
      justify-content: flex-start;
    }
  }
  .copyright {
    text-align: center;
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 1%;
    text-align: center;
    strong {
      color: $gold-color;
    }
  }
}
</style>
