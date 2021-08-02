<template>
  <div class="MeetingSchedule">
    <Header />
    <img src="../assets/MeetingSchedule.jpg" alt="" />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Header from "components/Header.vue";

export default defineComponent({
  name: "MeetingSchedule",
  components: {
    Header,
  },
  setup() {},
});
</script>
<style scoped lang='less'>
.MeetingSchedule {
  width: 100vw;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
</style>