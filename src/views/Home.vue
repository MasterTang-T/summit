<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="floor-1">
        <div class="floor-1-item">
          <my-options
            v-for="(item, index) in items1"
            :key="index"
            :setting="item"
            @click="toPage(item.routerName || '')"
          >
          </my-options>
        </div>
        <div class="floor-1-item">
          <my-options
            v-for="(item, index) in items2"
            :key="index"
            :setting="item"
            @click="toPage(item.routerName || '')"
          >
          </my-options>
        </div>
      </div>
      <div class="floor-2">
        <div class="floor-2-item">
          <my-options
            v-for="(item, index) in items3"
            :key="index"
            :setting="item"
            @click="toPage(item.routerName || '')"
          >
          </my-options>
        </div>
        <div class="floor-2-item">
          <my-options
            v-for="(item, index) in items4"
            :key="index"
            :setting="item"
            @click="toPage(item.routerName || '')"
          >
          </my-options>
        </div>
      </div>
      <div class="floor-3">
        <div class="floor-3-item">
          <my-options
            v-for="(item, index) in items5"
            :key="index"
            :setting="item"
            @click="toPage(item.routerName || '')"
          >
          </my-options>
        </div>
        <div class="floor-3-item">
          <my-options
            v-for="(item, index) in items6"
            :key="index"
            :setting="item"
            @click="toPage(item.routerName || '')"
          >
          </my-options>
        </div>
        <div class="floor-3-item">
          <my-options
            v-for="(item, index) in items7"
            :key="index"
            :setting="item"
            @click="toPage(item.routerName || '')"
          >
          </my-options>
        </div>
      </div>
    </div>
    <div class="footer">测试中,敬请期待...</div>
  </div>
  <my-alert v-if="visible" @onClose="onClose"></my-alert>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "components/Header.vue";
import MyOptions from "components/MyOptions.vue";
import MyAlert from "components/MyAlert.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    Header,
    MyOptions,
    MyAlert,
  },
  setup() {
    let visible = ref(false);
    const router = useRouter();
    const toPage = (name: string) => {
      console.log(name, "name");
      if (name === "") {
        visible.value = true;
      } else {
        router.push({
          name,
        });
      }
    };
    const onClose = (data: any) => {
      visible.value = data;
    };
    const items1 = [
      {
        title: "峰会直播",
        description: "2021",
        icon: "/src/assets/1-icon.png",
        routerName: "",
        iconTop: "2.1rem",
        iconLeft: "2.7rem",
        titleTop: "0.4rem",
        titleLeft: "0.4rem",
        jumpBtnTop: "0.0rem",
        jumpBtnLeft: "2.7rem",
        background: 'url("/src/assets/item-bg.png") no-repeat',
        width: "3.4rem",
        height: "3.4rem",
      },
    ];

    const items2 = [
      {
        title: "大会简介",
        description: "",
        icon: "/src/assets/2-icon.png",
        iconTop: "",
        iconLeft: "",
        titleTop: "",
        titleLeft: "",
        jumpBtnTop: "",
        jumpBtnLeft: "",
        background: "#232FD0",
        width: "3.48rem",
        height: "0.97rem",
        routerName: "MeetingIntroduction",
      },
      {
        title: "峰会日程",
        description: "",
        icon: "/src/assets/3-icon.png",
        iconTop: "",
        iconLeft: "",
        titleTop: "",
        titleLeft: "",
        jumpBtnTop: "",
        jumpBtnLeft: "",
        background: "#232FD0",
        width: "3.48rem",
        height: "0.97rem",
        routerName: "MeetingSchedule",
      },
      {
        title: "嘉宾简介",
        description: "",
        icon: "/src/assets/4-icon.png",
        iconTop: "",
        iconLeft: "",
        titleTop: "",
        titleLeft: "",
        jumpBtnTop: "",
        jumpBtnLeft: "",
        background: "#232FD0",
        width: "3.48rem",
        height: "0.97rem",
        routerName: "GuestIntroduction",
      },
    ];
    const items3 = [
      {
        title: "文件下载",
        description: "",
        icon: "/src/assets/5-icon.png",
        iconTop: "0.6rem",
        iconLeft: "2.4rem",
        titleTop: "0.4rem",
        titleLeft: "0.4rem",
        jumpBtnTop: "0.6rem",
        jumpBtnLeft: "0.4rem",
        background: "#232FD0",
        width: "3.4rem",
        height: "1.8rem",
        routerName: "",
      },
    ];
    const items4 = [
      {
        title: "我要报名",
        routerName: "AppForm",
        description: "",
        icon: "/src/assets/6-icon.png",
        iconTop: "0.6rem",
        iconLeft: "2.4rem",
        titleTop: "0.4rem",
        titleLeft: "0.4rem",
        jumpBtnTop: "0.6rem",
        jumpBtnLeft: "0.4rem",
        background: "#232FD0",
        width: "3.4rem",
        height: "1.8rem",
      },
    ];
    const items5 = [
      {
        title: "交通安排",
        description: "",
        icon: "/src/assets/7-icon.png",
        iconTop: "-0.1rem",
        iconLeft: "0.8rem",
        titleTop: "1.2rem",
        titleLeft: "0.4rem",
        jumpBtnTop: "1.3rem",
        jumpBtnLeft: "",
        background: "#232FD0",
        width: "2.22rem",
        height: "2.5rem",
        routerName: "TrafficPlan",
      },
    ];
    const items6 = [
      {
        title: "会场指引",
        description: "",
        icon: "/src/assets/8-icon.png",
        iconTop: "-0.1rem",
        iconLeft: "0.8rem",
        titleTop: "1.2rem",
        titleLeft: "0.4rem",
        jumpBtnTop: "1.3rem",
        jumpBtnLeft: "",
        background: "#232FD0",
        width: "2.22rem",
        height: "2.5rem",
        routerName: "MeetingGuide",
      },
    ];
    const items7 = [
      {
        title: "联系我们",
        description: "",
        icon: "/src/assets/9-icon.png",
        iconTop: "-0.1rem",
        iconLeft: "0.8rem",
        titleTop: "1.2rem",
        titleLeft: "0.4rem",
        jumpBtnTop: "1.3rem",
        jumpBtnLeft: "",
        background: "#232FD0",
        width: "2.22rem",
        height: "2.5rem",
        routerName: "ContactUs",
      },
    ];
    return {
      visible,
      toPage,
      onClose,
      items1,
      items2,
      items3,
      items4,
      items5,
      items6,
      items7,
    };
  },
});
</script>
<style lang="less" scoped>
@container_width: 100vw;
@container_height: 100vh;
.container {
  width: @container_width;
  // height: @container_height;
  overflow: hidden;
  position: relative;
  .content {
    padding: 0.39rem 0.12rem;
    margin-bottom: 0.3rem;
    .floor-1 {
      display: flex;
      &-item {
        flex: 1;
      }
    }
    .floor-2 {
      display: flex;
      &-item {
        flex: 1;
      }
    }
    .floor-3 {
      display: flex;
      &-item {
        flex: 1;
      }
    }
  }
  .footer {
    font-size: 0.36rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #666666;
    position: absolute;
    bottom: 0.1rem;
    width: 100%;
    text-align: center;
  }
}
</style>