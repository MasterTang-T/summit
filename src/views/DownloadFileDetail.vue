<template>
  <div class="DownloadFileDetail">
    <div class="title">{{ item.filename }}</div>
    <div class="content">
      <img :src="getSrc(el)" alt="" v-for="el in item.detailImg" :key="el" />
      <div class="tips">下载查看完整内容...</div>
    </div>
    <div class="footer" @click="downloadFile(item)">
      文件下载
      <img src="../assets/download-icon.png" alt="" />
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    let item: any = {
      filename: "",
      detailImg: [],
    };
    item = route.query;
    const getSrc = (name: any) => {
      const modules = import.meta.globEager("/src/assets/**/*.jpg");
      return modules[name].default;
    };
    const downloadFile = (item: any) => {
      // 创建a标签
      const link = document.createElement("a");
      // download属性
      link.setAttribute("download", item.fileOrgName);
      // href链接
      link.setAttribute("href", item.fileurl);
      // 自执行点击事件
      link.click();
      document.body.removeChild(link);
    };
    return {
      item,
      getSrc,
      downloadFile,
    };
  },
});
</script>
<style scoped lang='less'>
.DownloadFileDetail {
  width: 100vw;
  position: relative;
  margin-top: 0.5rem;
  .title {
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    font-size: 0.4rem;
    font-weight: bold;
    color: #333333;
  }
  .content {
    padding-bottom: 1.2rem;
    img {
      width: 100%;
    }
    .tips {
      font-size: 0.2rem;
      font-weight: 400;
      color: #999999;
      width: 100%;
      text-align: center;
    }
  }
  // 两个文件的线上地址
  // 关键数据的展示
  .footer {
    background: #ffffff;
    box-shadow: 0px -2px 8px 0px rgba(153, 153, 153, 0.2);
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    font-size: 0.4rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-left: 0.3rem;
      width: 0.5rem;
      height: 0.5rem;
      object-fit: contain;
    }
  }
}
</style>