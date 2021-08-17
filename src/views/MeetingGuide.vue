<template>
  <div class="MeetingGuide">
    <Header />
    <van-loading size="24px" vertical v-if="isLoading"
      >地图加载中...</van-loading
    >
    <div class="MeetingGuide-item" @click="add_Driving(map1, end1)">
      <div class="MeetingGuide-item-title">北京望京凯越酒店</div>
      <span class="MeetingGuide-item-des">（峰会主会场酒店）</span>
      <div
        class="MeetingGuide-item-content"
        id="map1"
        v-show="!isLoading"
      ></div>
      <van-skeleton title :row="7" v-if="isLoading" />
    </div>
    <div class="MeetingGuide-item" @click="add_Driving(map2, end2)">
      <div class="MeetingGuide-item-title">民航国际会议中心</div>
      <span class="MeetingGuide-item-des">（附近推荐入驻酒店）</span>
      <div
        class="MeetingGuide-item-content"
        id="map2"
        v-show="!isLoading"
      ></div>
      <van-skeleton title :row="7" v-if="isLoading" />
    </div>
    <div class="MeetingGuide-item" @click="add_Driving(map3, end3)">
      <div class="MeetingGuide-item-title">北京方恒假日酒店</div>
      <span class="MeetingGuide-item-des">（附近推荐入驻酒店）</span>
      <div
        class="MeetingGuide-item-content"
        id="map3"
        v-show="!isLoading"
      ></div>
      <van-skeleton title :row="7" v-if="isLoading" />
    </div>
  </div>
</template>
<script>
import Header from "components/Header.vue";
export default {
  name: "MeetingGuide",
  components: {
    Header,
  },
  data() {
    return {
      map1: null,
      map2: null,
      map3: null,
      star: [], //起点经纬度
      end1: [116.482868, 39.997331], //终点经纬度
      end2: [116.485649, 39.989496], //终点经纬度
      end3: [116.487493, 39.995927], //终点经纬度
      isLoading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      let _this = this;
      _this.map1 = new AMap.Map("map1", {
        zoom: 15, //缩放级别
        resizeEnable: true, //自动定位
      });
      _this.map2 = new AMap.Map("map2", {
        zoom: 15, //缩放级别
        resizeEnable: true, //自动定位
      });
      _this.map3 = new AMap.Map("map3", {
        zoom: 15, //缩放级别
        resizeEnable: true, //自动定位
      });
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          buttonPosition: "RB", //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
        });
        _this.map1.addControl(geolocation);
        _this.map2.addControl(geolocation);
        _this.map3.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {
          _this.isLoading = false;
          if (status == "complete") {
            //这个地方的result，可能会出现报错：获得地理定位时间。得到ipLocation成功。获取地址失败，请检查您的密钥或网络。
            //可能是密匙申请错了，重新申请密匙，生成maps.js文件。
            console.log(result);
            let res = {
              name: result.formattedAddress,
              latitude: result.position.lat,
              longitude: result.position.lng,
            };
            _this.star = [res.longitude, res.latitude]; //起点经纬度
            // _this.add_Driving(_this.map1, _this.end1);
            // _this.add_Driving(_this.map2, _this.end2);
            // _this.add_Driving(_this.map3, _this.end3);
          } else {
            console.log(result);
          }
        });
      });
    });
  },
  methods: {
    //规划路线
    add_Driving(mapDom, endArr) {
      this.map1.plugin("AMap.Driving", () => {
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          map: mapDom,
          policy: AMap.DrivingPolicy.LEAST_TIME,
        });
        driving.search(this.star, endArr, function (status, result) {
          console.log(result, "res");
        });
      });
    },
  },
};
</script>
<style scoped lang='less'>
.MeetingGuide {
  width: 100vw;
  overflow: hidden;
  position: relative;
  &-item {
    width: 100%;
    height: 6rem;
    &-title {
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #666666;
      background: linear-gradient(
        0deg,
        #e40216 0.2685546875%,
        #262186 98.974609375%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      height: 1rem;
      display: inline-flex;
      align-items: center;
      padding-left: 0.3rem;
    }
    &-des {
      font-size: 0.3rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #999999;
      background: none;
    }
    &-content {
      height: 5rem;
    }
  }
}
</style>