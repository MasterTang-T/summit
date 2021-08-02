<template>
  <div class="container">
    <span>404</span>
    <div class="desc">您访问的页面走丢了...</div>
    <div class="desc backHome" @click="toHome">返回首页</div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const toHome = () => {
      router.push({
        name: "Home",
      });
    };
    return {
      toHome,
    };
  },
});
</script>
<style scoped lang='less'>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  background-image: linear-gradient(90deg, #e40216, #262186);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  .desc {
    font-size: 0.5rem;
    margin-top: 1rem;
  }
  .backHome {
    cursor: pointer;
  }
}
</style>