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
  img {
    width: 100%;
  }
}
</style>