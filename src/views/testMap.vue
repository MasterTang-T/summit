<template>
  <div class="login">
    <div id="container"></div>
    <div class="item" @click="chooseAddress(1)">
      <span class="title">请选择出发地</span>
    </div>
    <div class="item">
      <span class="color">{{ address0.name }}</span>
    </div>
    <div class="item" @click="chooseAddress(2)">
      <span class="title">请选择目的地</span>
    </div>
    <div class="item">
      <span class="color">{{ address1.name }}</span>
    </div>
    <div class="item">
      <span class="color" v-if="routes.distance"
        >{{ routes.distance / 1000 }}千米，</span
      >
      <span class="color" v-if="routes.policy == '速度最快'"
        >出行模式：驾车，</span
      >
      <span class="color" v-if="routes.time"
        >大约需要{{ routes.time / 60 }}分钟。</span
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      address0: {}, //起点信息
      address1: {}, //终点信息
      star: [], //起点经纬度
      end: [], //终点经纬度
      markers: [], //点标记
      routes: {}, //路线距离时间信息记录
    };
  },
  mounted() {
    this.$nextTick(() => {
      let _this = this;
      _this.map = new AMap.Map("container", {
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
        _this.map.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {
          if (status == "complete") {
            //这个地方的result，可能会出现报错：获得地理定位时间。得到ipLocation成功。获取地址失败，请检查您的密钥或网络。
            //可能是密匙申请错了，重新申请密匙，生成maps.js文件。
            console.log(result);
            let res = {
              name: result.formattedAddress,
              latitude: result.position.lat,
              longitude: result.position.lng,
            };
            let marker0 = new AMap.Marker({
              map: _this.map,
              position: [res.longitude, res.latitude], //位置
              icon: "../assets/close.png", // 添加 Icon 图标 URL
              offset: new AMap.Pixel(-15, -42), //偏移量
            });
            _this.markers[0] = marker0; //添加 起点 标记

            _this.address0 = res; //起点数据
            _this.star = [res.longitude, res.latitude]; //起点经纬度
          } else {
            console.log(result);
          }
        });
      });
    });
  },
  methods: {
    //选择地址
    chooseAddress(type) {
      let res = {
        longitude: 29.54287,
        latitude: 106.5176,
      };
      if (type == 1) {
        this.markers[0].setMap(null); //删除 起点 标记
        let marker0 = new AMap.Marker({
          map: this.map,
          position: [res.longitude, res.latitude], //位置
          icon: "/static/star.png", // 添加 Icon 图标 URL
          offset: new AMap.Pixel(-15, -42), //偏移量
        });
        this.markers[0] = marker0; //覆盖 起点 标记

        this.star = [res.longitude, res.latitude]; //起点经纬度
        this.address0 = res; //起点数据
        if (this.markers.length == 2) {
          this.map.clearMap(); //先清除地图覆盖物
          this.add_Driving(); //重新规划路线
        } else {
          this.map.setFitView(); //自动缩放地图
        }
      } else {
        let marker1 = new AMap.Marker({
          map: this.map,
          position: [107.5176, 31.54287], //位置
          icon: "/static/end.png", // 添加 Icon 图标 URL
          offset: new AMap.Pixel(-15, -42), //偏移量
        });
        // this.address1 = res; //终点数据
        this.end = [107.5176, 31.54287]; //终点经纬度
        // this.map.clearMap(); //先清除地图覆盖物
        this.markers[1] = marker1; //添加 终点 标记
        this.add_Driving(); //规划路线
      }
    },
    //规划路线
    add_Driving() {
      let _this = this;
      this.map.plugin("AMap.Driving", () => {
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          map: this.map,
          policy: AMap.DrivingPolicy.LEAST_TIME,
        });
        console.log(this.star, "star");
        console.log(this.end, "end");
        driving.search(this.star, this.end, function (status, result) {
          console.log(result);
          _this.routes = result.routes[0];
          _this.markers[0].setMap(null);
          _this.markers[1].setMap(null);
        });
      });
    },
  },
};
</script>
<style>
#container {
  width: 100%;
  height: 100px;
}
.item {
  font-size: 28px;
  padding: 20px;
  height: 50px;
}
.title {
  margin-right: 40px;
}
.color {
  color: red;
}
</style>

