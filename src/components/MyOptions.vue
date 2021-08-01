<template>
  <my-options-item :setting="setting" />
</template>
<script lang='ts' >
import { defineComponent, PropType, ref } from "vue";
import MyOptionsItem from "components/MyOptionsItem.vue";
import { ISettings } from "../types/settingType";

export default defineComponent({
  props: {
    setting: {
      required: true,
      type: Object as PropType<ISettings>,
    },
  },
  components: {
    MyOptionsItem,
  },
  setup(props) {
    return {};
  },
});
</script>
<style scoped>
</style>