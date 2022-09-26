<template lang="">
  <div id="hero">
    <div class="hero">
      <div class="content">
        <h1>TRACTORS</h1>
        <p>
          We’ve got more than 30 tractors <br />
          models available for renting!
        </p>
        <button class="button-outer" @click="go">See More</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
export default {
  methods: {
    go() {
      router.push({ path: "/machine" });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../sass/main.scss";
.hero {
  height: 100vh;
  background-image: url("../../assets/images/hero.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  h1 {
    font-size: 5rem;
    color: $white-color;
    @include media(em) {
      font-size: 4rem;
    }
  }
  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: $white-color;
  }
  button {
    padding: 10px 50px;
  }
}
</style>
