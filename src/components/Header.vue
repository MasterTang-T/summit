<template>
  <div class="header">
    <div class="swiper-content">
      <js-seamless-scroll
        :datas="datas"
        v-model="scroll"
        class="scroll"
        singleHeight="60"
        singleWaitTime="2000"
      >
        <div class="item" v-for="(item, index) in datas" :key="index">
          <div class="name-item">
            <span class="name" v-if="item.username">{{
              formatName(item.username)
            }}</span>
            <span class="companyName" v-if="item.username">{{
              formatName(item.companyName)
            }}</span>
            <span v-if="item.username">报名成功</span>
          </div>
        </div>
      </js-seamless-scroll>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import { jsSeamlessScroll } from "vue3-seamless-scroll";
import service from "../utils/service";
export default {
  name: "Header",
  components: {
    jsSeamlessScroll,
  },
  setup() {
    const scroll = ref(true);
    function formatName(name) {
      let newStr = "";
      if (name) {
        if (name.length === 2) {
          newStr = name.substr(0, 1) + "*";
        } else if (name.length > 2) {
          let char = "";
          for (let i = 0, len = name.length - 2; i < len; i++) {
            char += "*";
          }
          newStr = name.substr(0, 1) + char + name.substr(-1, 1);
        } else {
          newStr = name;
        }
      }
      return newStr;
    }
    const list = reactive({
      datas: [
        {
          username: "",
          companyName: "",
        },
      ],
    });
    function getDataList() {
      service
        .get("/open/apply")
        .then((res) => {
          if (res.code === 200) {
            let list1 = res.data || [];
            list.datas = [];
            list1.forEach((item) => {
              list.datas.push(item);
            });
          }
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }
    onMounted(() => {
      getDataList();
      setInterval(() => {
        getDataList();
      }, 1000 * 60 * 3);
    });
    return { ...toRefs(list), formatName, scroll };
  },
};
</script>
<style scoped lang='less'>
.header {
  width: 100%;
  height: 4.3rem;
  position: relative;
  background: url("../assets/banner.png") no-repeat;
  background-size: 100% 100%;
  .swiper-content {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    height: 1.8rem;
    width: 5rem;
    overflow: hidden;
    font-size: 0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    color: #ffffff;
  }
  .name-item {
    margin: 0.2rem 0;
  }
  .name,
  .companyName {
    width: 0.8rem;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .companyName {
    width: 1.2rem;
  }
}
</style>