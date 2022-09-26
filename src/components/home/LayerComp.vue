<template lang="">
  <div id="layer">
    <div class="cards">
      <div class="card">
        <img src="../../assets/icons/quality.png" alt="" /> QUALITY IN EVERY
        DETAILS
      </div>
      <div class="card active-card">
        <img src="../../assets/icons/power.png" alt="" /> HIGH POWER IN OUR
        ENGINES
      </div>
      <div class="card">
        <img src="../../assets/icons/test.png" alt="" /> TEST DRIVE INCLUDED
      </div>
    </div>
    <div class="show">
      <div class="content">
        <div class="heads">
          <h1>WELCOME</h1>
          <h1>TO THE Al Saadani company</h1>
        </div>
        <p>
          Al Saadani is one of the biggest and most well-known providers of
          miscellaneous industrial and commercial-grade
        </p>
        <p>
          Farming equipment and overall, of an agricultural heavy machinery…
          Among the machinery that we offer for a rent out are tele handlers,
          wheel loaders, tractors, harvesters and much.
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
#layer {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: $gold-color;

  @include media(mdsmem) {
    grid-template-columns: 1fr;
  }

  .cards {
    height: 100%;
    background-image: url("../../assets/images/layer.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    gap: 30px;
    flex-wrap: wrap;
    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 20px;
      width: 180px;
      height: 150px;
      color: $white-color;
      background: $dark-color;
      padding: 20px 10px;
      border-radius: 10px;
      font-weight: 700;
      &:hover {
        cursor: pointer;
        background: $white-color;
        color: $dark-color;
        transform: scale(1.1, 1.1);
      }
    }
    .active-card {
      cursor: pointer;
      background: $white-color;
      color: $dark-color;
    }
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
      :nth-child(2) {
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
