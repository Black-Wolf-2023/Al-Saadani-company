<template lang="">
  <div id="team">
    <h2>Executive managers</h2>
    <div class="card">
      <div class="img">
        <img src="../../assets/images/man_team.png" alt="" />
        <p>Ashaat Ali</p>
        <p>Quality manager and foreign purchases</p>
      </div>
      <div class="img active-team">
        <img src="../../assets/images/man_team.png" alt="" />
        <p>Engineer Ashraf Fahmy</p>
        <p>Farm manager</p>
      </div>
      <div class="img">
        <img src="../../assets/images/man_team.png" alt="" />
        <p>Islam Abdullah</p>
        <p>Director general</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../sass/main.scss";

#team {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  h2 {
    font-size: 3rem;
    color: $dark-color;
    @include media(em) {
      font-size: 2rem;
    }
  }
  .card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 200px 0;
    gap: 100px;
    text-align: center;
    @include media(mdsmem) {
      grid-template-columns: repeat(1, 1fr);
    }
    .img {
      color: $dark-color;
      background: $gray-color;
      padding: 20px;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
      }
      :nth-child(2) {
        font-weight: 700;
      }
      img {
        width: 200px;
      }
    }
    .active-team {
      background: $gold-color;
    }
  }
}
</style>
