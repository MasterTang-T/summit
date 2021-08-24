<template>
  <div class="header">
    <!-- <img src="../assets/banner.png" alt="" /> -->
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="getSrc(image)" class="swipe-image" />
      </van-swipe-item>
      <!-- 隐藏轮播图的指示器 -->
      <template #indicator> </template>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  setup() {
    const images = [
      "/src/assets/banner.png",
      "/src/assets/banner.png",
      "/src/assets/banner.png",
    ];
    const getSrc = (name: any) => {
      const modules = import.meta.globEager("/src/assets/*.png");
      return modules[name].default;
    };
    return { images, getSrc };
  },
});
</script>
<style scoped lang='less'>
.header {
  width: 100%;
  height: 4.3rem;
  .my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
  }
  .swipe-image {
    width: 100%;
  }
}
</style>