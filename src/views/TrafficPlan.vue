<template>
  <div class="TrafficPlan">
    <Header />
    <img src="../assets/TrafficPlan.jpg" alt="" />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Header from "components/Header.vue";

export default defineComponent({
  name: "TrafficPlan",
  components: {
    Header,
  },
  setup() {},
});
</script>
<style scoped lang='less'>
.TrafficPlan {
  width: 100vw;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
</style>