<template lang="">
  <div id="product">
    <div class="content">
      <div class="img">
        <img src="../../assets/images/project_1.jpg" alt="" />
      </div>
      <div class="info active-info">
        <h2>GH33 FRONT-END LOADER</h2>
        <p>
          Whether you use a 504K Compact Loader for shuttling seed, heaping
          hoppers, transporting bales, or any other agricultural application,…
        </p>
      </div>
      <div class="img">
        <img src="../../assets/images/project_2.jpg" alt="" />
      </div>
      <div class="info">
        <h2>6M ROW-CROP TRACTOR - 140 TO 195 HP</h2>
        <p>
          Whether you use a 204K Compact Loader for shuttling seed, heaping
          hoppers, transporting bales, or any other agricultural application,…
        </p>
      </div>
      <div class="img">
        <img src="../../assets/images/project_3.jpg" alt="" />
      </div>
      <div class="info">
        <h2>5075GN-5075GV - 75 HP (55 KW) TRACTOR</h2>
        <p>
          Whether you use a 104K Compact Loader for shuttling seed, heaping
          hoppers, transporting bales, or any other agricultural application,…
        </p>
      </div>
      <div class="img">
        <img src="../../assets/images/project_4.jpg" alt="" />
      </div>
      <div class="info active-info">
        <h2>9370R - 370 ENGINE BIG TRACTOR 205 HP</h2>
        <p>
          Whether you use a 404K Compact Loader for shuttling seed, heaping
          hoppers, transporting bales, or any other agricultural application,…
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
#product {
  .content {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    .img {
      img {
        width: 300px;
      }
    }
    .info {
      background-color: $gray-color;
      padding: 20px;
      border-radius: 10px;
      cursor: pointer;
      p {
        margin-top: 10px;
        color: $dark-color;
      }
    }
    .active-info {
      background: $gold-color;
    }
    @include media(mdsmem) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
