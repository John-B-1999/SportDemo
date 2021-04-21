<template>
  <div class="amap-page-container">
    <el-amap
      :plugin="plugin"
      :amap-manager="amapManager"
      :zoom="zoom"
      :center="center"
      vid="amapDemo"
      ref="reds"
      style="width:90vw;height:70vh"
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
      lineArr:[],
      events: {
        init(o) {
          _obj.createMap();
        }
      }
    };
  },
  created() {
    // 配置
    this.lineArr =[[116.321354, 39.896439],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861]];

  },
  mounted() {},
  methods: {
    createMap() {　　　　
      const self = this;
      let o = amapManager.getMap();

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

      // 绘制轨迹
      var polyline = new AMap.Polyline({
          path: self.lineArr,
          showDir:true,
          strokeColor: "#28F",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 30,      //线宽
          // strokeStyle: "solid"  //线样式
      });
      polyline.setMap(o);
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
