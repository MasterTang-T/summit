<template>
  <div class="ContactUs">
    <Header />
    <img src="../assets/ContactUs.jpg" alt="" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "components/Header.vue";

export default defineComponent({
  name: "ContactUs",
  components: {
    Header,
  },
  setup() {},
});
</script>
<style scoped lang='less'>
.ContactUs {
  width: 100vw;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
</style>