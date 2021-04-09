<template>
  <div class="amap-page-container">
    <el-amap
      :plugin="plugin"
      :amap-manager="amapManager"
      :zoom="zoom"
      :center="center"
      vid="amapDemo"
      ref="reds"
      style="width:90vw;height:20vh"
      :events="events"
    ></el-amap>
  </div>
</template>

<script>
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
var map = amapManager.getMap();
export default {
  data() {
    let _obj = this;
    return {
      amapManager,
      // center: [116.303843, 39.983412],
      center:[113.27324,23.15792],
      plugin: [
        {
          pName: "Scale",
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        }
      ],
      zoom: 16,
      events: {
        init(o) {
          _obj.createMap();
        }
      }
    };
  },
  created() {
    // 配置
  },
  mounted() {},
  methods: {
    createMap() {　　　　
      let o = amapManager.getMap();

      var lineArr = [[116.321354, 39.896439],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861]];

      var icon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(32, 46),
        // 图标的取图地址
        image:
          "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
        // 图标所用图片大小
        imageSize: new AMap.Size(32, 46)
      });
      var labelContent = "<span>1</span>";
      var labelOffset = new AMap.Pixel(8, 7);
      var marker = new AMap.Marker({
        icon: icon,
        position: [116.303843, 39.983412],
        offset: new AMap.Pixel(-10, -46),
        title: 1,
        text: 1,
        label: {
          content: labelContent,
          offset: labelOffset
        }
      });
      marker.setMap(o);
      var labelContent = "<span>2</span>";
      var labelOffset = new AMap.Pixel(8, 7);
      var marker2 = new AMap.Marker({
        icon: icon,
        anchor: "center", //设置锚点
        position: [116.321354, 39.896436],
        offset: new AMap.Pixel(-10, -28),
        title: 2,
        clickable: true,
        bubble: true,
        label: {
          content: labelContent,
          offset: labelOffset
        }
      });
      marker2.setMap(o);

      var marker3 = new AMap.Marker({
          icon: "https://webapi.amap.com/images/car.png",
          anchor: "center", //设置锚点
          position: [116.321354, 39.896439],
          offset: new AMap.Pixel(-10, -28),
          title: 2,
          clickable: true,
          bubble: true,
          label: {
            content: labelContent,
            offset: labelOffset
          }
      });
      marker3.setMap(o);

      // 绘制轨迹
      var polyline = new AMap.Polyline({
          path: lineArr,
          showDir:true,
          strokeColor: "#28F",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 30,      //线宽
          // strokeStyle: "solid"  //线样式
      });
      polyline.setMap(o);

      // var truckDriving = new AMap.TruckDriving({
      //   map: o,
      //   policy: 0, // 规划策略
      //   size: 1, // 车型大小
      //   width: 2.5, // 宽度
      //   height: 2, // 高度
      //   load: 1, // 载重
      //   weight: 12, // 自重
      //   axlesNum: 2, // 轴数
      //   province: "京", // 车辆牌照省份
      //   isOutline: true,
      //   outlineColor: "#ffeeee",
      //   hideMarkers: true
      // });

      // var path = [];
      // path.push({ lnglat: [116.303843, 39.983412] }); //起点
      // path.push({ lnglat: [116.321354, 39.896436] }); //途径
      // path.push({ lnglat: [116.407012, 39.992093] }); //终点

      // truckDriving.search(path, function(status, result) {
      //   if (status === "complete") {
      //     console.log("获取货车规划数据成功");
      //   } else {
      //     console.log("获取货车规划数据失败：" + result);
      //   }
      //   // searchResult即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
      // });
      // AMap.event.addListener(marker, "click", function(e) {
      //   debugger;
      //   //得到的数据
      // });
      // AMap.event.addListener(marker2, "click", function(e) {
      //   debugger;
      //   //得到的数据
      // });
    }
  }
};
</script>
<style>
.amap-marker-label {
  border: 0px;
  background: rgba(255, 255, 255, 0);
  color: #fff;
  font-size: 17px;
  font-weight: 550;
  text-align: center;
}
</style>
