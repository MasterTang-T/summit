<template>
  <div class="my-alert" v-if="isVisible">
    <img src="../assets/close.png" alt="" class="close" @click="closeAlert" />
    <div class="my-alert-content">
      <img src="../assets/info.png" alt="" />
    </div>
    <div class="my-alert-text">敬请期待</div>
    <!-- <div class="my-alert-description">功能还在开发中...</div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
export default defineComponent({
  name: "MyAlert",
  setup(props, { emit }) {
    let isVisible = ref(true);
    const closeAlert = () => {
      isVisible.value = false;
      emit("onClose", isVisible.value);
    };
    return {
      closeAlert,
      isVisible,
    };
  },
});
</script>
<style scoped lang='less'>
.my-alert {
  position: fixed;
  left: 13%;
  top: 33%;
  width: 5.4rem;
  height: 5.5rem;
  background: #f8f8f8;
  border-radius: 0.44rem;
  .close {
    position: absolute;
    right: 0.41rem;
    top: 0.41rem;
    width: 5%;
  }
  &-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 0.9rem;
    img {
      width: 2.6rem;
    }
  }
  &-text {
    width: 100%;
    font-size: 0.56rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #4764ff;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 0.2rem;
    margin-top: 0.5rem;
  }
  &-description {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 0.3rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #4764ff;
  }
}
</style>