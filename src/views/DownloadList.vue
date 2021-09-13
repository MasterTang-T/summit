<template>
  <div class="DownloadList">
    <!-- <Header /> -->
    <div class="DownloadList-content">
      <div class="DownloadList-content-title">文件下载</div>
      <div
        class="DownloadList-content-item"
        v-for="(item, index) in files"
        :key="index"
      >
        <div class="img-box" @click="toDetail(item)">
          <img :src="getSrc(item.wcUrl)" alt="" />
        </div>
        <div class="info-box" @click="toDetail(item)">
          <div class="info-box-icon">
            <img src="../assets/pdf-icon.png" alt="" />
          </div>
          <div class="info-box-info">
            <div class="info-box-name">{{ item.filename }}</div>
            <div class="info-box-size">{{ item.filesize }}</div>
          </div>
          <div class="info-box-download">
            <img src="../assets/download-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, Ref, ref } from "vue";
import Header from "components/Header.vue";
import { useRouter } from "vue-router";
import { Files } from "../types/downloadFIles";
export default defineComponent({
  name: "DownloadList",
  components: {
    Header,
  },
  setup() {
    const router = useRouter();

    const files: Ref<Files> = ref([
      {
        fileurl:
          "http://geos.officemate.cn/public/%E6%AC%A7%E8%8F%B2%E6%96%AF%E5%8F%91%E5%B8%83%E4%BC%9A%E5%BB%B6%E6%9C%9F%E9%80%9A%E7%9F%A5%EF%BC%88%E7%9B%96%E7%AB%A0%E7%89%88%EF%BC%89.pdf",
        wcUrl: "/src/assets/file2/wc.png",
        filename: "欧菲斯发布会延期通知",
        fileOrgName: "欧菲斯发布会延期通知.pdf",
        filesize: "558KB",
        detailImg: ["/src/assets/file2/1.jpg"],
      },
      {
        fileurl:
          "http://geos.officemate.cn/2021%E6%95%B0%E5%AD%97%E5%8C%96%E9%87%87%E8%B4%AD%E5%8F%91%E5%B1%95%E6%8A%A5%E5%91%8A.pdf",
        wcUrl: "/src/assets/file1/wc.png",
        filename: "2021数字化采购发展报告",
        fileOrgName: "2021数字化采购发展报告.pdf",
        filesize: "5.8M",
        detailImg: [
          "/src/assets/file1/1.jpg",
          "/src/assets/file1/2.jpg",
          "/src/assets/file1/3.jpg",
          "/src/assets/file1/4.jpg",
          "/src/assets/file1/5.jpg",
          "/src/assets/file1/6.jpg",
        ],
      },
    ]);
    const getSrc = (name: any) => {
      const modules = import.meta.globEager("/src/assets/**/*.png");
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
    const toDetail = (item: any) => {
      router.push({
        path: "/geos/FileDownloadForm",
        query: item,
      });
    };
    return {
      files,
      getSrc,
      downloadFile,
      toDetail,
    };
  },
});
</script>
<style scoped lang='less'>
.DownloadList {
  width: 100vw;
  overflow: hidden;
  position: relative;
  &-content {
    padding: 0 0.3rem;
    &-title {
      padding: 0.3rem 0 0.3rem 0.3rem;
      font-size: 0.4rem;
      font-weight: bold;
      color: #333333;
    }
    &-item {
      width: 100%;
      height: 5rem;
      margin-bottom: 0.8rem;
      .img-box {
        height: 4rem;
        img {
          width: 100%;
        }
      }
      .info-box {
        height: 1rem;
        position: relative;
        &-icon {
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        &-info {
          display: inline-block;
          vertical-align: top;
          .info-box-name {
            font-size: 0.35rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #333333;
            margin-bottom: 0.1rem;
          }
          .info-box-size {
            font-size: 0.3rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
          }
        }
        &-download {
          display: inline-block;
          width: 0.3rem;
          height: 0.3rem;
          position: absolute;
          right: 0.1rem;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>