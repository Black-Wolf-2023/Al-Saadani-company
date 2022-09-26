<template lang="">
  <div id="card">
    <div class="img">
      <img src="../../assets/images/machine-1.jpg" alt="" />
      <p>Harvesters</p>
      <p>
        Whether you use a 34K Compact Loader for shuttling seed, heaping
        hoppers, transporting bales, or any other agricultural application, you
        can truly count on its…
      </p>
    </div>
    <div class="img">
      <img src="../../assets/images/machine-2.jpg" alt="" />
      <p>Healthcare</p>
      <p>
        Whether you use a 204K Compact Loader for shuttling seed, heaping
        hoppers, transporting bales, or any other agricultural application, you
        can truly count on its…
      </p>
    </div>
    <div class="img">
      <img src="../../assets/images/machine-3.jpg" alt="" />
      <p>Loaders</p>
      <p>
        Whether you use a 104K Compact Loader for shuttling seed, heaping
        hoppers, transporting bales, or any other agricultural application, you
        can truly count on its…
      </p>
    </div>
    <div class="img">
      <img src="../../assets/images/machine-4.jpg" alt="" />
      <p>Machinery Parts</p>
      <p>
        Whether you use a 320K Compact Loader for shuttling seed, heaping
        hoppers, transporting bales, or any other agricultural application, you
        can truly count on its…
      </p>
    </div>
    <div class="img">
      <img src="../../assets/images/machine-5.jpg" alt="" />
      <p>Tractors</p>
      <p>
        Whether you use a 534K Compact Loader for shuttling seed, heaping
        hoppers, transporting bales, or any other agricultural application, you
        can truly count on its…
      </p>
    </div>
    <div class="img">
      <img src="../../assets/images/machine-6.jpg" alt="" />
      <p>Plows</p>
      <p>
        Whether you use a 432K Compact Loader for shuttling seed, heaping
        hoppers, transporting bales, or any other agricultural application, you
        can truly count on its…
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../sass/main.scss";
#card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px;
  gap: 30px;
  @include media(mdsmem) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
  .img {
    :nth-child(2) {
      color: $dark-color;
      font-size: 2rem;
    }
    img {
      &:hover {
        transform: scale(0.9, 0.9);
      }
      border-radius: 10px;
      cursor: pointer;
      @include media(em) {
        width: 300px;
      }
    }
  }
}
</style>
