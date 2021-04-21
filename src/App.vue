<template>
  <div id="app">
    <navMenuLeft ref='navMenuLeft'></navMenuLeft>
    <el-container style="height: 100%;" direction="vertical">
      <el-header>
        <el-row :gutter="10">
          <el-col :xs="4" :sm="3" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light myDiv" style="margin: left;">
             <el-button @click="getLocation()" class="myButton">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </el-button>
            </div>
          </el-col>
          <el-col :xs="15" :sm="17" :md="15" :lg="18" :xl="22">
            <div class="grid-content bg-purple-light">
              <div>&nbsp;</div>
            </div>
          </el-col>
          <el-col :xs="5" :sm="4" :md="5" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light">
              <div>{{username}}</div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="height: 60%;">
        <router-view/>
      </el-main>
      <el-footer>
        <bottom></bottom>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import bottom from '@/components/base/Item.vue'
import navMenuLeft from '@/components/base/navMenu/NavMenuLeft.vue'
import navMenu from '@/components/base/navMenu/NavMenu.vue'
export default {
  name: 'App',
  data () {
          return {
            visible: false ,
            resData: null,
            username:'',
          }
        },
  components:{
    bottom,navMenuLeft,navMenu
  },
  created() {
    console.log(this);
    this.username = this.$store.getters.getUserNameValue;
    this.testLogin();
    // this.getLocation();
  },
  methods:{
    testLogin:function(){
      this.$store.commit("setIsLoginValue",false);
      console.log("222",this.$store.getters.getIsLoginValue);
    },
    clickItem:function(path){
        this.$router.push(path);
    },
    showNavMenuLeft:function(){
      this.$refs.navMenuLeft.drawer = true;
    },
    testAxios:function(){
      let tthis = this;
      this.$http({
            method: 'post',
            url: '/api/user/findPage',
            data:{
              pageNum: 1,
              pageSize: 2
            }
         })
         .then(function(response){
           console.log(response);
           tthis.resData = response;
           console.log("resData",tthis.resData);
         })
         .catch(function(error){
           console.log(error)
         })
    },
    getLocation() {
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
                    console.log('定位成功信息：', data);
                }

                function onError(data) {
                    // 定位出错
                    console.log('定位失败错误：', data);
                    // 调用ip定位
                    self.getLngLatLocation();
                }
            })
        },
        getLngLatLocation() {
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
                                    console.log(data)
                                }
                            })
                        })
                    }
                })
            })
        }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100%; */
  /* margin-top: 60px; */
}

html,
  body{
    overflow:hidden;
  }

  .myButton:focus,
  .myButton:active{
    background-color: #B3C0D1;
  }

  .myButton{
    background-color: #B3C0D1;
    border: none;
  }

  .myButton,
  .myDiv{
    padding: 0px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
  }

  html,
  body,
  #app,
  .el-container{
    padding: 0px;
    margin: 0px;
    height: 100%;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: max-content;
    /* line-height: 160px; */
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
