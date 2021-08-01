<template>
  <div class="MeetingIntroduction">
    <img src="../assets/MeetingIntroduction.jpg" alt="" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MeetingIntroduction",
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