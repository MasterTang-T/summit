<template>
  <div
    class="MyOptionsItem"
    :style="{
      background: setting.background,
      width: setting.width,
      height: setting.height,
    }"
  >
    <div
      class="MyOptionsItem-icon"
      :style="{ top: setting.iconTop, left: setting.iconLeft }"
    >
      <img :src="getSrc(setting.icon)" alt="" />
    </div>
    <div
      class="MyOptionsItem-text"
      :style="{ top: setting.titleTop, left: setting.titleLeft }"
    >
      {{ setting.title }}
      <div class="MyOptionsItem-text-description" v-if="setting.description">
        {{ setting.description }}
      </div>
    </div>
    <div
      class="MyOptionsItem-jump"
      :style="{ top: setting.jumpBtnTop, left: setting.jumpBtnLeft }"
    >
      <img src="../assets/jump.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISettings } from "../types/settingType";

export default defineComponent({
  props: {
    setting: {
      required: true,
      type: Object as PropType<ISettings>,
    },
  },
  setup(props) {
    const getSrc = (name: any) => {
      const modules = import.meta.globEager("/src/assets/*.png");
      return modules[name].default;
    };
    return {
      getSrc,
    };
  },
});
</script>
<style scoped lang='less'>
.MyOptionsItem {
  width: 181px;
  height: 51.7px;
  background: #232fd0;
  background-size: 100% 100% !important;
  position: relative;
  box-shadow: 5px 3px 6px 0px rgba(5, 12, 28, 0.4);
  border-radius: 0.24rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  &-icon {
    width: 0.72rem;
    height: 0.72rem;
    position: absolute;
    top: -0.25rem;
    left: 7%;
    img {
      width: 60%;
    }
  }
  &-text {
    font-size: 0.36rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    position: absolute;
    top: 33%;
    left: 30%;
    &-description {
      margin-top: 0.2rem;
      font-size: 0.28rem;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #ffffff;
    }
  }
  &-jump {
    position: absolute;
    right: 4%;
    top: -0.3rem;
    width: 0.5rem;
    height: 0.5rem;
    img {
      width: 60%;
    }
  }
}
</style>