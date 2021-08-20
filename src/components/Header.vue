<template>
  <div class="header">
    <img src="../assets/banner.png" alt="" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  setup() {},
});
</script>
<style scoped lang='less'>
.header {
  width: 100%;
  height: 4.3rem;
  img {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
  }
}
</style>