<template lang="">
  <div id="Team">
    <HeroComp title="Meet the Team. Who We Are ?" />
    <TeamComp />
    <FooterComp />
  </div>
</template>
<script>
import HeroComp from "@/components/machine/HeroComp.vue";
import TeamComp from "@/components/team/TeamComp.vue";
import FooterComp from "@/components/home/FooterComp.vue";
export default {
  components: {
    HeroComp,
    TeamComp,
    FooterComp,
  },
};
</script>
<style lang=""></style>
