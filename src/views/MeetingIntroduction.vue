<template>
  <div class="MeetingIntroduction">
    <Header />
    <img src="../assets/MeetingIntroduction.jpg" alt="" />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Header from "components/Header.vue";

export default defineComponent({
  name: "MeetingIntroduction",
  components: {
    Header,
  },
  setup() {},
});
</script>
<style scoped lang='less'>
.MeetingIntroduction {
  width: 100vw;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
</style>