<template>
  <div class="FileDownloadForm">
    <Header />
    <div class="form-content">
      <div class="form-item">
        <div class="form-label">姓名(必填):</div>
        <div class="form-input">
          <input type="text" placeholder="请输入姓名" v-model="username" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">公司名称(必填):</div>
        <div class="form-input">
          <input
            type="text"
            placeholder="请输入公司名称"
            v-model="companyName"
          />
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
        <div class="form-label">邮箱(必填):</div>
        <div class="form-input">
          <input type="text" placeholder="请输入邮箱" v-model="email" />
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">部门(必填):</div>
        <div class="form-input">
          <input
            type="text"
            placeholder="请选择部门"
            v-model="depot"
            readonly
            @click="showPicker"
          />
          <div class="form-pick" v-show="pickerShow">
            <van-picker
              title="部门"
              :columns="depots"
              @confirm="onConfirm"
              @cancel="onCancel"
            />
          </div>
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
import { IResponseType } from "../types/responseType";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FileDownloadForm",
  components: {
    Header,
  },
  setup() {
    let router = useRouter();
    let username: Ref<string> = ref(""); // 客户名称
    let companyName = ref(""); // 企业名称
    let position = ref(""); // 职位
    let telephone = ref(""); //电话号码
    const depots = ref([
      "审计管理",
      "税务管理",
      "工程设计/研发",
      "财务管理",
      "财务会计",
      "IT/IS/信息管理",
      "法务",
      "电子商务",
      "运营",
      "管理层",
      "采购寻源",
      "销售/市场",
      "供应链管理",
      "安全/风险管理",
      "共享服务",
      "差旅管理",
      "其他",
    ]);
    let depot = ref(""); // 关注议题
    let email = ref("");
    let pickerShow = ref(false);
    const showPicker = () => {
      pickerShow.value = true;
    };

    const resetData = () => {
      username.value = "";
      companyName.value = "";
      position.value = "";
      telephone.value = "";
      depot.value = "";
      email.value = "";
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
      if (!telephone.value) {
        Notify({ type: "warning", message: "请输入联系方式" });
        return;
      }
      if (!depot.value) {
        Notify({ type: "warning", message: "请选择部门" });
        return;
      }
      if (!email.value) {
        Notify({ type: "warning", message: "请输入邮箱" });
        return;
      }
      if (!position.value) {
        Notify({ type: "warning", message: "请输入职位" });
        return;
      }

      const result: IResponseType = await service.post(
        "/open/apply/download/addItem",
        {
          username: username.value,
          companyName: companyName.value,
          position: position.value,
          telephone: telephone.value,
          email: email.value,
          depot: depot.value,
        }
      );
      if (result.code === 200) {
        Notify({ type: "success", message: `提交信息成功` });
        resetData();
        setTimeout(() => {
          router.push({
            name: "Home",
          });
        }, 500);
      } else {
        Notify({ type: "warning", message: "提交信息失败" });
      }
    };

    const onConfirm = (value: string, index: number) => {
      depot.value = value;
      pickerShow.value = false;
    };
    const onCancel = () => {
      pickerShow.value = false;
    };

    return {
      depots,
      depot,
      email,
      username,
      companyName,
      position,
      telephone,
      pickerShow,
      showPicker,
      onConfirm,
      onCancel,
      submitForm,
    };
  },
});
</script>
<style scoped lang='less'>
.FileDownloadForm {
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