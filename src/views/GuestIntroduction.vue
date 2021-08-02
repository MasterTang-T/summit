<template>
  <div class="GuestIntroduction">
    <Header />
    <img src="../assets/GuestIntroduction.jpg" alt="" />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Header from "components/Header.vue";

export default defineComponent({
  name: "GuestIntroduction",
  components: {
    Header,
  },
  setup() {},
});
</script>
<style scoped lang='less'>
.GuestIntroduction {
  width: 100vw;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
</style>