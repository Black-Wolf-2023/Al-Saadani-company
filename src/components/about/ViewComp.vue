<template lang="">
  <div id="view">
    <div class="text">
      <h1>ABOUT US</h1>
      <p>
        Originally founded by two brothers in the state of Maine, the Rentallo
        company outlived one of them (a proud death in a combat while on an Iraq
        war 2nd tour) and since then our farming vehicles rental venture moved
        to Dallas, TX…
      </p>
      <p>
        The core values that our company always thrives to live by include
        integrity, hunger for constant gradual improvement and the affordability
        of our prices. Altogether, these 3 principles allowed us to become one
        of the most popular farming machinery rental outlet in the whole county
        of Dallas-Fort Worth… More to that, we always keep track of the state of
        our vehicles, making sure that our monthly repair checkups and the
        bi-yearly maintenance and replacements plans are keeping all of our
        farming vehicles intact and in good working condition! In our company’s
        development, we constantly move forward, leaving all our competitors
        behind, 5th gear on
      </p>
    </div>
    <div class="img">
      <img src="../../assets/images/about.jpg" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../sass/main.scss";
#view {
  display: flex;
  gap: 30px;
  padding: 50px;
  @include media(mdsmem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    h1 {
      font-size: 3rem;
      color: $dark-color;
    }
    :nth-child(2) {
      margin: 30px 0;
    }
  }
}
</style>
