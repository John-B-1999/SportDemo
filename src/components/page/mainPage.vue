<template>
  <div id="mainPage" class="mainBox">
    <navMenuTop>
      <showPlan slot="slotOne"></showPlan>
      <router-link to="/rrrr" slot="slotOne"><h3>路由1</h3></router-link>
      <router-link to="/hhhh" slot="slotOne"><h3>路由2</h3></router-link>
      <router-view slot="slotOne"></router-view>
      <videoPlayer slot="slotTwo"></videoPlayer>
      <run slot="slotThree"></run>
      <mapA slot="slotFour"></mapA>
    </navMenuTop>
  </div>
</template>

<script>
import navMenuTop from '@/components/base/navMenu/NavMenuTop.vue'
import showPlan from '@/components/module/main/showPlan.vue'
import showCourse from '@/components/module/main/showCourse.vue'
import run from '@/components/module/main/run.vue'
import mapA from '@/components/base/map.vue'
import videoPlayer from '@/components/base/video.vue'
export default {
  name: 'mainPage',
  data: function() {
          return {
            visible: false ,
          }
        },
  components:{
    navMenuTop,showPlan,showCourse,run,mapA,videoPlayer
  },
  methods:{
    clickItem:function(path){
        this.$router.push(path);
    }
  }
}
</script>

<style>


  html,
  body{
    overflow:hidden;
  }

  html,
  body,
  #app,
  .el-container,
  .mainBox{
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
