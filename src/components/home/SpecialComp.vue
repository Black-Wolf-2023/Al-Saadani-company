<template lang="">
  <div id="special">
    <div class="cards"></div>
    <div class="show">
      <div class="content">
        <div class="heads">
          <h1>SPECIAL OFFER OF THE DAY</h1>
        </div>
        <p>JOHN DEERE COMPACT WHEEL LOADER 204K</p>
        <p>
          Whether you use a 204K Compact Loader for shuttling seed, heaping
          hoppers, transporting bales, or any other agricultural application,
          you can truly count on its full nimble maneuvering and do-it-all
          flexibility.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../sass/main.scss";
#special {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: $dark-color;
  margin: 200px 0;
  @include media(mdsmem) {
    grid-template-columns: 1fr;
  }

  .cards {
    height: 500px;
    background-image: url("../../assets/images/layer-2.jpg");
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: cover;
  }
  .show {
    padding: 10px;
    height: 500px;
    .content {
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 20px;
      gap: 30px;
      color: $white-color;
      h1 {
        color: $gold-color;
      }
      :nth-child(2) {
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
