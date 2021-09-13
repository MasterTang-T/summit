<template>
  <div class="LiveForm">
    <Header>
      <template #liveBtn="{ liveBtn }">
        <div class="liveBtn">
          <img src="../assets/play-icon.png" />
          <span>{{ liveBtn }}</span>
        </div>
      </template>
    </Header>
    <div class="LiveForm-title">大会简介</div>
    <div class="video-box">
      <video controls poster="../assets/video-poster.jpg">
        <source src="http://geos.officemate.cn/public/summit.m4v" />
        您的浏览器不支持 video 播放。
      </video>
    </div>
    <div class="btn-box">
      <div class="form-button">预约直播</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Header from "components/Header.vue";

export default defineComponent({
  name: "LiveForm",
  components: {
    Header,
  },
  setup() {},
});
</script>
<style scoped lang='less'>
.LiveForm {
  &-title {
    padding: 0.3rem 0 0.3rem 0.3rem;
    font-size: 0.4rem;
    font-weight: bold;
    color: #333333;
  }
  .video-box {
    width: 100%;
    height: 5rem;
    video {
      width: 100%;
      height: 100%;
    }
  }
  // liveBtn
  .liveBtn {
    width: 2.6rem;
    height: 0.7rem;
    background: #c51420;
    border-radius: 4px;
    font-size: 0.3rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    left: 0.3rem;
    cursor: pointer;
    img {
      width: 0.2rem;
      margin-right: 0.2rem;
    }
  }
  .btn-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px -2px 8px 0px rgba(153, 153, 153, 0.2);
    .form-button {
      width: 85%;
      height: 1.1rem;
      background: linear-gradient(90deg, #e40216, #262186);
      border-radius: 0.12rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>