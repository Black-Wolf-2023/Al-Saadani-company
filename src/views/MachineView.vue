<template lang="">
  <div id="machine">
    <HeroComp title="Farming Machinery Rentals" />
    <CardComp />
    <FooterComp />
  </div>
</template>
<script>
import HeroComp from "@/components/machine/HeroComp.vue";
import CardComp from "@/components/machine/CardComp.vue";
import FooterComp from "@/components/home/FooterComp.vue";
export default {
  components: {
    HeroComp,
    CardComp,
    FooterComp,
  },
};
</script>
<style lang=""></style>
