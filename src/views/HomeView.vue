<template>
  <div id="home">
    <HeroComp />
    <LayerComp />
    <BgLayerComp />
    <ProductsComp />
    <SpecialComp />
    <ShowComp />
    <FooterComp/>
  </div>
</template>

<script>
import HeroComp from "@/components/home/HeroComp.vue";
import LayerComp from "@/components/home/LayerComp.vue";
import BgLayerComp from "../components/home/BgLayerComp.vue";
import ProductsComp from "../components/home/ProductsComp.vue";
import SpecialComp from "../components/home/SpecialComp.vue";
import ShowComp from "../components/home/ShowComp.vue";
import FooterComp from "../components/home/FooterComp.vue";
export default {
  name: "HomeView",
  components: {
    HeroComp,
    LayerComp,
    BgLayerComp,
    ProductsComp,
    SpecialComp,
    ShowComp,
    FooterComp
},
};
</script>
