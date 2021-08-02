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
import {
  items1,
  items2,
  items3,
  items4,
  items5,
  items6,
  items7,
} from "../utils/pageData";
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