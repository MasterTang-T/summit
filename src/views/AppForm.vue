<template>
  <div class="AppForm">
    <Header />
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <button @click="submitForm">我要报名</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "components/Header.vue";
import service from "../utils/service";
export default defineComponent({
  name: "AppForm",
  components: {
    Header,
  },
  setup() {
    const submitForm = async () => {
      const result = await service.post("/open/apply/addItem", {
        username: 11111,
        companyName: 1111,
        position: 1111,
        telephone: 23423,
        area: 32423423,
        topic: 3423423,
        topicData: 1,
      });
      console.log(result, "result");
    };
    return {
      submitForm,
    };
  },
});
</script>
<style scoped lang='less'>
.AppForm {
  width: 100vw;
}
</style>