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
        <div class="form-label">
          <i style="color: red; margin-right: 0.1rem">*</i>性别:
        </div>
        <div class="form-input form-radio">
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
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
          <van-checkbox-group v-model="topicArr">
            <div class="plan-item">
              <div class="plan-item-title">10月15日</div>
              <div class="plan-item-body">
                <div class="checkbox-item">
                  <van-checkbox
                    name="《办公物资采购2021白皮书》启动会"
                    shape="square"
                    checked-color="#C90626"
                    ><span class="checkbox-text"
                      >《办公物资采购2021白皮书》启动会</span
                    ></van-checkbox
                  >
                </div>
                <div class="checkbox-item">
                  <van-checkbox
                    name="《国有企业办公物资网上采购操作指南》团体标准编制工作启动会"
                    shape="square"
                    checked-color="#C90626"
                    ><span class="checkbox-text"
                      >《国有企业办公物资网上采购操作指南》团体标准编制工作启动会</span
                    ></van-checkbox
                  >
                </div>
                <div class="checkbox-item">
                  <van-checkbox
                    name="政企采购供应链品牌年会"
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
                    shape="square"
                    name="国有企业MRO数字化采购转型战略与发展趋势论坛"
                    checked-color="#C90626"
                    ><span class="checkbox-text"
                      >国有企业MRO数字化采购转型战略与发展趋势论坛</span
                    ></van-checkbox
                  >
                </div>
                <div class="checkbox-item">
                  <van-checkbox
                    shape="square"
                    name="信创供应链生态布局暨供应链集群响应能力分析研讨会"
                    checked-color="#C90626"
                    ><span class="checkbox-text"
                      >信创供应链生态布局暨供应链集群响应能力分析研讨会</span
                    ></van-checkbox
                  >
                </div>
                <div class="checkbox-item">
                  <van-checkbox
                    name="数字化采购与供应链生态论坛"
                    shape="square"
                    checked-color="#C90626"
                    ><span class="checkbox-text"
                      >数字化采购与供应链生态论坛</span
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
                    name="《国有企业网上商城采购交易操作规范》专题培训会"
                    shape="square"
                    checked-color="#C90626"
                    ><span class="checkbox-text"
                      >《国有企业网上商城采购交易操作规范》专题培训会</span
                    ></van-checkbox
                  >
                </div>
              </div>
            </div>
          </van-checkbox-group>
        </div>
      </div>
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
import { Notify } from "vant";
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
    let area = ref(""); //所属区域
    let topicData = ref(1); // 关注议题ppt课题
    let sex = ref("男");
    let isBestow = ref("0");
    let areaShow = ref(false);
    let topicArr = ref([]); // 参会日程
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
      topicArr.value = [];
    };
    const submitForm = async () => {
      if (topicArr.value.length <= 0) {
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
        topic: topicArr.value.join(","),
        topicData: topicData.value,
        companyNature: companyNature.value,
        isBestow: isBestow.value,
        sex: sex.value,
      });
      if (result.code === 200) {
        const { data = 10 } = result;
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
      area,
      topicData,
      username,
      companyName,
      position,
      telephone,
      areaList,
      areaShow,
      showArea,
      onConfirmArea,
      onCancelArea,
      companyNature,
      showCompanyNature,
      companyNatureShow,
      companyNatureArr,
      onConfirmCompanyNature,
      onCancelCompanyNature,
      sex,
      isBestow,
      topicArr,
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
      .checkbox-text {
        font-size: 0.32rem;
        display: inline-block;
        width: 6rem;
      }
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