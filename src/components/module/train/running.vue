<template>
  <div>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <mapA v-show = "flag"></mapA>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div style="
          display: flex;
          justify-content:center;
          align-items:center;">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="float: left;">
                    <span class="font-family" style="font-size: 50px;">{{metre}}</span>
                    <span class="font-family" style="font-size: 30px;">公里</span>
                  </el-col>
                </div>
    </el-col>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
      <div style="
          display: flex;
          justify-content:center;
          align-items:center;">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <span class="font-family" style="font-size: 35px;color:black;float: left;">{{speed}}<!-- 07`02`` --></span>
                    <span class="font-family" style="font-size: 20px;">配速</span>
                  </el-col>
                </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div style="
          display: flex;
          justify-content:center;
          align-items:center;">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <span class="font-family" style="font-size: 35px;color:black;float: right;">{{usedTime}}<!-- 00:13:18 --></span>
                    <span class="font-family" style="font-size: 20px;">用时</span>
                  </el-col>
                </div>
    </el-col>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <el-button type="success" v-show="!flag">暂停</el-button>
      <el-button type="success" v-show="!flag" @click = "endClick()">结束</el-button>
    </el-col>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
  </div>
</template>

<script>
  import mapA from '@/components/module/train/map.vue'
  export default {
    name: 'running',
    data:function(){
      return{
        metre: 3,
        speed:'00`00``',
        usedTime:'00:00:00',
        startTime:'',
        currentTime:'',
        currentLat:10,
        currentLng:100,
        lat:0,
        lng:0,
        timerOne: null, //在data函数里面进行定义定时器名称：
        timerTwo: null,
        flag:false,
      }
    },
    components:{
      mapA
    },
    watch: {
       $route: {
         handler:  function (val, oldVal){
           if(val.path == "/travel/running"){
             this.initTime();
             this.startRunning();
             this.countDistance();
           }
         },
         // 深度观察监听
         deep:  true
       }
    },
    created() {
      // this.getLocation();
    },
    mounted() {

    },
    beforeDestroy() {
      clearInterval(this.timerOne);
      this.timerOne = null;
      clearInterval(this.timerTwo);
      this.timerTwo = null;
    },
    methods:{
      endClick:function(){
        var t = this;
        this.flag = true;
        clearInterval(this.timerOne);
        clearInterval(this.timerTwo);
        t.$http({
              method: 'post',
              url: '/api/SportHistory/insert',
              data:{
                courseId: 50,
                distance: 1,
                endTime: t.currentTime,
                // energy: 111,
                sportHour: 1,
                sportMinute: 1,
                sportSecond: 1,
                startTime: t.startTime,
                userId: t.$store.getters.getUidValue,
              }
           })
           .then(function(response){
        	   if(response.data.code == 200){
        		 t.$message({
        			type: 'success',
        			message: '保存成功'
        		 });
        	   }else{
        		 t.$message({
        			type: 'fail',
        			message: '保存失败，请检查网络连接'
        		 });
        	   }
           })
           .catch(function(error){
             console.log(error)
           })
      },
      initTime:function(){
        this.startTime = new Date();
        console.log("startTime",this.startTime);
      },
      startRunning:function(){
        this.initTime();
        // this.timer = setInterval(this.running(), 1000);
        this.timerOne = setInterval(() => {  //创建定时器
        	this.currentTime = new Date();
        	var lefttime = this.currentTime.getTime() - this.startTime.getTime(),
        	// leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        	lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        	leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
          // speedLeftm = (leftm/this.metre)%1,
        	lefts = Math.floor(lefttime/1000%60); //计算秒数
          // speedLefts = (lefts/this.metre)%1;
        	this.usedTime = lefth + ":" + leftm + ":" + lefts;
          // this.speed =  speedLeftm + "`" + speedLefts + "``";
        	console.log("currentTime",this.currentTime);
        	console.log("usedTime",this.usedTime);
        }, 1000);
      },
      countDistance:function(){
        const self = this;
        this.timerTwo = setInterval(()=>{

          AMap.plugin('AMap.Geolocation', function () {
              var geolocation = new AMap.Geolocation({
                  enableHighAccuracy: true,
                  timeout: 10000,
              })

              geolocation.getCurrentPosition()
              AMap.event.addListener(geolocation, 'complete', onComplete);
              AMap.event.addListener(geolocation, 'error', onError);

              function onComplete(data) {
                  // data是具体的定位信息
                  self.lat = self.currentLat;
                  self.lng = self.currentLng;
                  // console.log("t.lat",self.lat);
                  // console.log("t.lng",self.lng);

                  self.currentLat = data.position.lat;
                  self.currentLng = data.position.lng;
                  // console.log('定位成功信息：', data);

                  // console.log("t.currentLat",self.currentLat);
                  // console.log("t.currentLng",self.currentLng);
                  var dis = self.GetDistance(self.currentLat,self.currentLng,self.lat,self.lng);
                  self.metre = self.metre+dis;
                  // console.log("距离",dis);
              }

              function onError(data) {
                  // 定位出错
                  console.log('定位失败错误：', data);
                  // 调用ip定位
                  self.getLngLatLocation();
              }
          })

        },10000);
      },
      getLocation:function() {
        const self = this
        AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
            })

            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete);
            AMap.event.addListener(geolocation, 'error', onError);

            function onComplete(data) {
                // data是具体的定位信息
                self.currentLat = data.position.lat;
                self.currentLng = data.position.lng;
                console.log('定位成功信息：', data);
                console.log("纬度",data.position.lat);
                console.log("经度",data.position.lng);
            }

            function onError(data) {
                // 定位出错
                console.log('定位失败错误：', data);
                // 调用ip定位
                self.getLngLatLocation();
            }
        })
      },
      getLngLatLocation:function() {
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch();
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    console.log('通过ip获取当前城市：', result)
                    //逆向地理编码
                    AMap.plugin('AMap.Geocoder', function () {
                        var geocoder = new AMap.Geocoder({
                            // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                            city: result.adcode
                        })

                        var lnglat = result.rectangle.split(';')[0].split(',');
                        geocoder.getAddress(lnglat, function (status, data) {
                            if (status === 'complete' && data.info === 'OK') {
                                // result为对应的地理位置详细信息
                                self.currentLat = data.position.lat;
                                self.currentLng = data.position.lng;
                                console.log('定位成功信息：', data);
                                console.log("纬度",data.position.lat);
                                console.log("经度",data.position.lng);
                                console.log(data)
                            }
                        })
                    })
                }
            })
        })
      },
      Rad:function(d){
        return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
      },
      //计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
      GetDistance:function(lat1,lng1,lat2,lng2){
        var radLat1 = this.Rad(lat1);
        var radLat2 = this.Rad(lat2);
        var a = radLat1 - radLat2;
        var  b = this.Rad(lng1) - this.Rad(lng2);
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
        Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
        s = s *6378.137 ;// EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000; //输出为公里
        //s=s.toFixed(4);
        return s;
      }
    }
  }
</script>

<style>
</style>
