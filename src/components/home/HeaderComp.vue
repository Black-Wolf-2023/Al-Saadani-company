<template>
  <header :class="{ 'active-nav': status }">
    <div class="container">
      <nav>
        <div class="logo"><img src="../../assets/logo.png" alt="" /></div>
        <ul class="list" :style="{ left: left + '%' }">
          <router-link to="/" @click="toggle_list"><li>Home</li></router-link>
          <router-link to="/machine" class="link" @click="toggle_list"
            ><li>MACHINERY RENTALS</li></router-link
          >
          <router-link to="/team" class="link" @click="toggle_list"
            ><li>OUR TEAM</li></router-link
          >
          <router-link to="/about" class="link" @click="toggle_list"
            ><li>ABOUT</li></router-link
          >
          <div class="contact">
            <li class="details">
              <img src="../../assets/icons/phone.svg" alt="" /><span
                >01280898895</span
              >
            </li>
            <span v-if="state">|</span>
            <li class="details">
              <img src="../../assets/icons/email.svg" alt="" /><span
                ><a href="elsaadany202@gmail.com"
                  >elsaadany202@gmail.com</a
                ></span
              >
            </li>
          </div>
        </ul>
        <div class="toggle" v-if="instate" @click="toggle_list">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { onUnmounted, onMounted, ref } from "vue";
const status = ref(false);
const state = ref(true);
const instate = ref(false);
const left = ref(-100);

const toggle_list = () =>
  left.value == -100 ? (left.value = 0) : (left.value = -100);

onMounted(() => {
  if (window.innerWidth < 1119) state.value = false;
  if (window.innerWidth < 1119) instate.value = true;
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? (status.value = true) : (status.value = false);
  });
});
onUnmounted(() => {
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? (status.value = true) : (status.value = false);
  });
});
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";
body {
  height: 3000px;
}
%flex {
  display: flex;
  align-items: center;
}
header {
  background-color: $dark-color;
  padding: 0 10px;
  nav {
    @extend %flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    .logo {
      flex-grow: 1;
      height: 100%;
      @extend %flex;
    }
    .toggle {
      cursor: pointer;
      span {
        width: 30px;
        height: 1px;
        display: block;
        margin: 5px 0;
        background: $gold-color;
      }
      :nth-child(2) {
        width: 20px;
      }
    }
    .list {
      height: 100%;
      @extend %flex;
      justify-content: flex-end;
      flex-grow: 1;
      gap: 40px;
      font-weight: 700;
      cursor: pointer;
      li {
        color: $white-color;
      }
      .contact {
        @extend %flex;
        font-size: 13px;
        gap: 20px;
        color: $white-color;
        .details {
          @extend %flex;
          font-size: 13px;
          gap: 5px;
          img {
            width: 15px;
          }
          span {
            a {
              color: $white-color;
            }
          }
        }
      }
      @include media(sm) {
        width: 40%;
      }
      @include media(mdsmem) {
        position: fixed;
        left: 0;
        top: 0;
        background: $dark-color;
        height: 100%;
        padding: 40px 10px;
        padding-top: 60px;
        flex-direction: column;
        align-items: flex-start;
        .link {
          width: 100%;
        }
        li {
          width: 100%;
          border-radius: 5px;
          padding: 5px 10px;
        }
        .contact {
          flex-grow: 1;
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          flex-direction: column;
        }
      }
    }
  }
}
.active-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  animation: nav-animate 0.5s ease;
}
@keyframes nav-animate {
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
}
</style>
