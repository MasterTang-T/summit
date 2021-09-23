<template>
  <div class="AppForm">
    <Header />
    <div class="form-content">
      <div class="form-item">
        <div class="form-label">
          <i style="color: red; margin-right: 0.1rem">*</i>企业名称:
        </div>
        <div class="form-input">
          <input
            type="text"
            placeholder="请输入企业名称"
            v-model="companyName"
          />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <i style="color: red; margin-right: 0.1rem">*</i>单位性质:
        </div>
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
        <div class="form-label">
          <i style="color: red; margin-right: 0.1rem">*</i>姓名:
        </div>
        <div class="form-input">
          <input type="text" placeholder="请输入姓名" v-model="username" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">职位:</div>
        <div class="form-input">
          <input type="text" placeholder="请输入职位" v-model="position" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <i style="color: red; margin-right: 0.1rem">*</i>联系电话:
        </div>
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
        <div class="form-label">
          <i style="color: red; margin-right: 0.1rem">*</i>参加日程:
        </div>
        <div class="plan-content">
          <div class="plan-item">
            <div class="plan-item-title">10月15日</div>
            <div class="plan-item-body">
              <div class="checkbox-item">
                <van-checkbox
                  name="办公物资采购管理规范》启动会"
                  shape="square"
                  v-model="checked01"
                  checked-color="#C90626"
                  ><span class="checkbox-text"
                    >《办公物资采购管理规范》启动会</span
                  ></van-checkbox
                >
              </div>
              <div class="checkbox-item">
                <van-checkbox
                  v-model="checked02"
                  shape="square"
                  checked-color="#C90626"
                  ><span class="checkbox-text"
                    >《公共采购办公物资年度白皮书》启动会</span
                  ></van-checkbox
                >
              </div>
              <div class="checkbox-item">
                <van-checkbox
                  v-model="checked03"
                  shape="square"
                  checked-color="#C90626"
                  ><span class="checkbox-text"
                    >政企采购供应链品牌年会</span
                  ></van-checkbox
                >
              </div>
            </div>
          </div>
          <div class="plan-item">
            <div class="plan-item-title">10月16日</div>
            <div class="plan-item-body">
              <div class="checkbox-item">
                <van-checkbox
                  v-model="checked04"
                  shape="square"
                  checked-color="#C90626"
                  ><span class="checkbox-text">MRO分论坛</span></van-checkbox
                >
              </div>
              <div class="checkbox-item">
                <van-checkbox
                  v-model="checked05"
                  shape="square"
                  checked-color="#C90626"
                  ><span class="checkbox-text">信创分论坛</span></van-checkbox
                >
              </div>
              <div class="checkbox-item">
                <van-checkbox
                  v-model="checked06"
                  shape="square"
                  checked-color="#C90626"
                  ><span class="checkbox-text"
                    >采购数字化分论坛</span
                  ></van-checkbox
                >
              </div>
            </div>
          </div>
          <div class="plan-item">
            <div class="plan-item-title">10月17日</div>
            <div class="plan-item-body">
              <div class="checkbox-item">
                <van-checkbox
                  v-model="checked07"
                  shape="square"
                  checked-color="#C90626"
                  ><span class="checkbox-text"
                    >国企采购操作规范专题培训会</span
                  ></van-checkbox
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="form-item">
        <div class="form-label">是否参加17培训(必填):</div>
        <div class="form-input form-radio">
          <van-radio-group v-model="isTrain" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
      </div> -->
      <div class="form-item">
        <div class="form-label">
          <i style="color: red; margin-right: 0.1rem">*</i>是否需要住宿:
        </div>
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
import { Dialog } from "vant";

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
    let checked01 = ref(false); // 《办公物资采购管理规范》启动会
    let checked02 = ref(false); // 《公共采购办公物资年度白皮书》启动会
    let checked03 = ref(false); // 政企采购供应链品牌年会
    let checked04 = ref(false); // MRO分论坛
    let checked05 = ref(false); // 信创分论坛
    let checked06 = ref(false); // 采购数字化分论坛
    let checked07 = ref(false); // 国企采购操作规范专题培训会
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
      area.value = "";
      companyNature.value = "";
      checked01.value = false;
      checked02.value = false;
      checked03.value = false;
      checked04.value = false;
      checked05.value = false;
      checked06.value = false;
      checked07.value = false;
    };
    const submitForm = async () => {
      let topicSet = new Set();
      if (checked01.value) {
        topicSet.add("《办公物资采购管理规范》启动会");
      }
      if (checked02.value) {
        topicSet.add("《公共采购办公物资年度白皮书》启动会");
      }
      if (checked03.value) {
        topicSet.add("政企采购供应链品牌年会");
      }
      if (checked04.value) {
        topicSet.add("国有企业MRO数字化采购转型战略与发展趋势论坛");
      }
      if (checked05.value) {
        topicSet.add("信创分论坛");
      }
      if (checked06.value) {
        topicSet.add("采购数字化分论坛");
      }
      if (checked07.value) {
        topicSet.add("国有企业网上商城采购交易操作规范");
      }
      let topicArray = Array.from(topicSet);
      if (topicArray.length <= 0) {
        Notify({ type: "warning", message: "请选择参加日程" });
        return;
      }
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
        topic: topicArray.join(","),
        topicData: topicData.value,
        companyNature: companyNature.value,
        isBestow: isBestow.value,
      });
      if (result.code === 200) {
        const { data = 10 } = result;
        // Notify({ type: "success", message: `已报名人数:${data}人` });
        Dialog({ message: "报名信息提交成功,最终结果以短信/电话为准" }).then(
          () => {
            resetData();
            router.push({
              name: "Home",
            });
          }
        );
      } else {
        Notify({ type: "warning", message: result.message || "报名失败" });
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
      checked01,
      checked02,
      checked03,
      checked04,
      checked05,
      checked06,
      checked07,
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
      .plan-content {
        .plan-item {
          margin-top: 0.5rem;
          &-title {
            font-weight: 500;
            color: #666666;
            font-size: 0.4rem;
            margin-bottom: 0.3rem;
          }
          &-body {
            font-weight: 500;
            color: #666666;
            font-size: 0.35rem;
            font-weight: 500;
            .checkbox-item {
              margin-bottom: 0.4rem;
            }
          }
        }
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