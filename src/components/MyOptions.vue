<template>
  <my-options-item :setting="setting" />
</template>
<script lang='ts' >
import { defineComponent, PropType } from "vue";
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
  setup(props) {},
});
</script>
<style scoped>
</style>