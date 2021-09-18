<template>
  <div class="DownloadList">
    <Header />
    <div class="DownloadList-content">
      <div class="DownloadList-content-title">文件下载</div>
      <div
        class="DownloadList-content-item"
        v-for="(item, index) in files"
        :key="index"
      >
        <!-- <div class="img-box" @click="toDetail(item)">
          <img :src="getSrc(item.wcUrl)" alt="" />
        </div> -->
        <div class="info-box" @click="toDetail(item)">
          <div class="info-box-icon" v-if="item.isIcon">
            <img src="../assets/pdf-icon.png" alt="" />
          </div>
          <div class="info-box-info">
            <div class="info-box-name" :title="item.filename">
              {{ item.filename }}
            </div>
            <div class="info-box-size">{{ item.filesize }}</div>
          </div>
          <div class="info-box-download" v-if="item.isIcon">
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
        fileurl: "",
        wcUrl: "/src/assets/poster/wc.png",
        filename: "电子邀请函",
        fileOrgName: "电子邀请函.png",
        filesize: "1M",
        detailImg: [],
        type: "poster",
        isIcon: true,
      },
      {
        fileurl:
          "http://geos.officemate.cn/2021%E4%B8%AD%E5%9B%BD%E6%94%BF%E4%BC%81%E9%87%87%E8%B4%AD%E4%BE%9B%E5%BA%94%E9%93%BE%E7%94%9F%E6%80%81%E5%B3%B0%E4%BC%9A20210908.pdf",
        wcUrl: "/src/assets/file2/wc.png",
        filename: "关于召开2021中国政企采购供应链生态（中国.北京）峰会的通知",
        fileOrgName:
          "关于召开2021中国政企采购供应链生态（中国.北京）峰会的通知.pdf",
        filesize: "558KB",
        detailImg: ["/src/assets/file2/1.jpg"],
        type: "filedownloadNoForm",
        isIcon: true,
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
        type: "filedownload",
        isIcon: true,
      },
      {
        fileurl:
          "http://geos.officemate.cn/2021%E4%B8%AD%E5%9B%BD%E6%94%BF%E4%BC%81%E9%87%87%E8%B4%AD%E4%BE%9B%E5%BA%94%E9%93%BE%E7%94%9F%E6%80%81%E5%B3%B0%E4%BC%9A.docx",
        wcUrl: "",
        filename: "参会回执",
        fileOrgName: "参会回执.docx",
        filesize: "15KB",
        detailImg: ["/src/assets/file4/1.jpg"],
        type: "filedownload",
        isIcon: true,
      },
    ]);
    const getSrc = (name: any) => {
      const modules = import.meta.globEager("/src/assets/**/*.png");
      return modules[name].default;
    };
    const toDetail = (item: any) => {
      let { type = "filedownload" } = item;
      if (type === "poster") {
        router.push({
          path: "/geos/PosterForm",
          query: item,
        });
      }
      if (type === "filedownload") {
        router.push({
          path: "/geos/FileDownloadForm",
          query: item,
        });
      }
      if (type === "filedownloadNoForm") {
        router.push({
          path: "/geos/DownloadFileDetail",
          query: item,
        });
      }
    };
    return {
      files,
      getSrc,
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
    &-title {
      padding: 0.3rem 0 0.3rem 0.3rem;
      font-size: 0.4rem;
      font-weight: bold;
      color: #333333;
    }
    &-item {
      width: 100%;
      border-bottom: 1px solid #eee;
      // height: 5rem;
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
        padding: 0 0 0.1rem 0.3rem;
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
          margin-left: 0.2rem;

          .info-box-name {
            font-size: 0.35rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #333333;
            margin-bottom: 0.1rem;
            width: 5rem;
            overflow: hidden; /*超出部分隐藏*/
            white-space: nowrap; /*禁止换行*/
            text-overflow: ellipsis; /*省略号*/
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
          right: 0.3rem;
          top: -0.3rem;
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