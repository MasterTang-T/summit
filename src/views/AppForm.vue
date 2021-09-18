<template>
  <div class="AppForm">
    <Header />
    <div class="form-content">
      <div class="form-item">
        <div class="form-label">企业名称（必填）:</div>
        <div class="form-input">
          <input
            type="text"
            placeholder="请输入企业名称"
            v-model="companyName"
          />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">单位性质(必填):</div>
        <div class="form-input">
          <input
            type="text"
            placeholder="请选择单位性质"
            v-model="companyNature"
            readonly
            @click="showCompanyNature"
          />
          <div class="form-pick" v-show="companyNatureShow">
            <van-picker
              title="单位性质"
              :columns="companyNatureArr"
              @confirm="onConfirmCompanyNature"
              @cancel="onCancelCompanyNature"
            />
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">姓名（必填）:</div>
        <div class="form-input">
          <input type="text" placeholder="请输入姓名" v-model="username" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">职位（选填）:</div>
        <div class="form-input">
          <input type="text" placeholder="请输入职位" v-model="position" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">联系电话(必填):</div>
        <div class="form-input">
          <input type="text" placeholder="请输入联系电话" v-model="telephone" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">所属区域(必填):</div>
        <div class="form-input">
          <input
            type="text"
            placeholder="请选择所属区域"
            v-model="area"
            readonly
            @click="showArea"
          />
          <div class="form-pick" v-show="areaShow">
            <van-area
              title="所属区域"
              :area-list="areaList"
              :show-toolbar="false"
              @confirm="onConfirmArea"
              @cancel="onCancelArea"
            />
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">关注议题(必填):</div>
        <div class="form-input">
          <input
            type="text"
            placeholder="请选择关注议题"
            v-model="topic"
            readonly
            @click="showPicker"
          />
          <div class="form-pick" v-show="pickerShow">
            <van-picker
              title="关注议题"
              :columns="topics"
              @confirm="onConfirm"
              @cancel="onCancel"
            />
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">是否参加17培训(必填):</div>
        <div class="form-input form-radio">
          <van-radio-group v-model="isTrain" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">是否需要住宿(必填):</div>
        <div class="form-input form-radio">
          <van-radio-group v-model="isBestow" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
      </div>
      <!-- <div class="form-item">
        <div class="form-label">是否需要关注议题PPT课件(选填):</div>
        <div class="form-input form-radio">
          <van-radio-group v-model="topicData" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="2">否</van-radio>
          </van-radio-group>
        </div>
      </div> -->
      <div class="form-item">
        <div class="form-button" @click="submitForm">确认提交</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import Header from "components/Header.vue";
import service from "../utils/service";
import { Notify, Area } from "vant";
import { areaList } from "@vant/area-data";
import { IResponseType } from "../types/responseType";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppForm",
  components: {
    Header,
  },
  setup() {
    let router = useRouter();
    let username: Ref<string> = ref(""); // 客户名称
    let companyName = ref(""); // 企业名称
    let companyNature = ref(""); // 单位性质
    let companyNatureShow = ref(false);
    const showCompanyNature = () => {
      companyNatureShow.value = true;
    };

    const companyNatureArr = ref([
      "央企",
      "国企",
      "投资机构",
      "媒体",
      "友商",
      "供应商",
      "品牌商",
      "合作商",
      "合作伙伴",
      "其他",
    ]);
    const onConfirmCompanyNature = (value: string, index: number) => {
      companyNature.value = value;
      companyNatureShow.value = false;
    };
    const onCancelCompanyNature = () => {
      companyNatureShow.value = false;
    };
    let position = ref(""); // 职位
    let telephone = ref(""); //电话号码
    const topics = ref([
      "央企负责人数字化采购案例分享",
      "产业链供应链专家分享",
      "欧菲斯数字化采购服务平台",
      "数字化采购发展报告",
      "信创专场主题分享",
      "其他",
    ]);
    let topic = ref(""); // 关注议题
    let area = ref(""); //所属区域
    let topicData = ref(1); // 关注议题ppt课题
    let isTrain = ref("0");
    let isBestow = ref("0");
    let pickerShow = ref(false);
    let areaShow = ref(false);
    const showPicker = () => {
      pickerShow.value = true;
    };
    const showArea = () => {
      areaShow.value = true;
    };
    const resetData = () => {
      username.value = "";
      companyName.value = "";
      position.value = "";
      telephone.value = "";
      topic.value = "";
      area.value = "";
      companyNature.value = "";
    };
    const submitForm = async () => {
      if (!username.value) {
        Notify({ type: "warning", message: "请输入姓名" });
        return;
      }
      if (!companyName.value) {
        Notify({ type: "warning", message: "请输入企业名称" });
        return;
      }
      if (!companyNature.value) {
        Notify({ type: "warning", message: "请选择单位性质" });
        return;
      }
      if (!telephone.value) {
        Notify({ type: "warning", message: "请输入联系方式" });
        return;
      }
      if (!topic.value) {
        Notify({ type: "warning", message: "请选择关注议题" });
        return;
      }
      if (!area.value) {
        Notify({ type: "warning", message: "请选择所属区域" });
        return;
      }

      const result: IResponseType = await service.post("/open/apply/addItem", {
        username: username.value,
        companyName: companyName.value,
        position: position.value,
        telephone: telephone.value,
        area: area.value,
        topic: topic.value,
        topicData: topicData.value,
        companyNature: companyNature.value,
        isTrain: isTrain.value,
        isBestow: isBestow.value,
      });
      if (result.code === 200) {
        const { data = 10 } = result;
        Notify({ type: "success", message: `已报名人数:${data}人` });
        resetData();
        setTimeout(() => {
          router.push({
            name: "Home",
          });
        }, 500);
      } else {
        Notify({ type: "warning", message: "报名失败" });
      }
    };

    const onConfirm = (value: string, index: number) => {
      topic.value = value;
      pickerShow.value = false;
    };
    const onCancel = () => {
      pickerShow.value = false;
    };
    const onConfirmArea = (value: any, index: number) => {
      area.value = "";
      let valueArr: [] = value;
      valueArr.forEach((item: any) => {
        area.value += item.name;
      });
      areaShow.value = false;
    };
    const onCancelArea = () => {
      areaShow.value = false;
    };
    return {
      submitForm,
      topics,
      topic,
      area,
      topicData,
      username,
      companyName,
      position,
      telephone,
      areaList,
      pickerShow,
      areaShow,
      showPicker,
      showArea,
      onConfirm,
      onCancel,
      onConfirmArea,
      onCancelArea,
      companyNature,
      showCompanyNature,
      companyNatureShow,
      companyNatureArr,
      onConfirmCompanyNature,
      onCancelCompanyNature,
      isTrain,
      isBestow,
    };
  },
});
</script>
<style scoped lang='less'>
.AppForm {
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