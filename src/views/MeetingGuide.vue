<template>
  <div class="MeetingGuide">
    <Header />
    <img src="../assets/MeetingGuide.jpg" alt="" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "components/Header.vue";

export default defineComponent({
  name: "MeetingGuide",
  components: {
    Header,
  },
  setup() {},
});
</script>
<style scoped lang='less'>
.MeetingGuide {
  width: 100vw;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
</style>