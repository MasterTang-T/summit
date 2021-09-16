<template>
  <div class="PosterForm">
    <Header />
    <div class="form-content">
      <div class="form-item">
        <div class="form-label">姓名(必填):</div>
        <div class="form-input">
          <input type="text" placeholder="请输入姓名" v-model="username" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">联系电话(必填):</div>
        <div class="form-input">
          <input type="text" placeholder="请输入联系电话" v-model="telephone" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-button" @click="submitForm">生成海报</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import Header from "components/Header.vue";
import service from "../utils/service";
import { Notify } from "vant";
import { IResponseType } from "../types/responseType";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "PosterForm",
  components: {
    Header,
  },
  setup() {
    let router = useRouter();
    let route = useRoute();
    let item: any = {
      filename: "",
      detailImg: [],
    };
    item = route.query;
    let username: Ref<string> = ref(""); // 客户名称
    let telephone = ref(""); //电话号码

    const resetData = () => {
      username.value = "";
      telephone.value = "";
    };
    const submitForm = async () => {
      if (!username.value) {
        Notify({ type: "warning", message: "请输入姓名" });
        return;
      }

      if (!telephone.value) {
        Notify({ type: "warning", message: "请输入联系电话" });
        return;
      }
      const result: IResponseType = await service.post("/open/share", {
        username: username.value,
        telephone: telephone.value,
      });
      if (result.code === 200) {
        Notify({ type: "success", message: `提交信息成功` });
        resetData();
        setTimeout(() => {
          router.push({
            path: "/geos/DownloadPoster",
            query: result as any,
          });
        }, 500);
      } else {
        Notify({
          type: "warning",
          message: result.message ? result.message : "提交信息失败",
        });
      }
    };
    return {
      username,
      telephone,
      submitForm,
    };
  },
});
</script>
<style scoped lang='less'>
.PosterForm {
  width: 100vw;
  overflow: hidden;
  background: #f8f8f8;
  .form-content {
    margin-top: 0.4rem;
    background: #ffffff;
    .form-item {
      width: 100%;
      padding: 0.56rem;
      border-bottom: 1px solid #fbfbfb;
      .form-label {
        font-size: 0.3rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #666666;
      }
      .form-input {
        .form-pick {
          width: 85%;
        }
      }
      .form-input input {
        border: none;
        outline: none;
        font-size: 0.46rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #333333;
      }

      .form-input input::placeholder {
        color: #dddddd;
      }
    }
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
    .form-radio {
      font-size: 0.32rem;
      margin-top: 0.4rem;
    }
  }
}
</style>