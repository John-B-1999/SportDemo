<template>
  <div id="mainPage" class="mainBox">
    <!-- <navMenu></navMenu> -->
    <navMenuTop>
      <carousel slot="slotOne"></carousel>
     <carousel slot="slotOne"></carousel>
      <carousel slot="slotOne"></carousel>
      <router-link to="/rrrr" slot="slotOne"><h3>路由1</h3></router-link>
      <router-link to="/hhhh" slot="slotOne"><h3>路由2</h3></router-link>
      <router-view slot="slotOne"></router-view>
      <rate slot="slotTwo"></rate>
      <login slot="slotThree"></login>
      <register slot="slotFour"></register>
    </navMenuTop>
  </div>
</template>

<script>
import bottom from '@/components/base/Item.vue'
import login from '@/components/module/Login.vue'
import register from '@/components/module/Register.vue'
import rate from '@/components/module/Rate.vue'
import myDialog from '@/components/base/Dialog.vue'
import carousel from '@/components/base/Carousel.vue'
import navMenuLeft from '@/components/base/NavMenuLeft.vue'
import navMenuTop from '@/components/base/NavMenuTop.vue'
import navMenu from '@/components/base/NavMenu.vue'
export default {
  name: 'mainPage',
  data: function() {
          return {
            visible: false ,
          }
        },
  components:{
    bottom,login,register,rate,myDialog,carousel,navMenuLeft,navMenuTop,navMenu
  },
  methods:{
    clickItem:function(path){
        this.$router.push(path);
    },
    showNavMenuLeft:function(){
      this.$refs.navMenuLeft.drawer = true;
    },
    testAxios:function(){
      this.$http({
            method: 'get',
            url: '/api/user/findAll',
         })
         .then(function(response){
           console.log(response);
         })
         .catch(function(error){
           console.log(error)
         })
      // this.$http({
      //       method: 'post',
      //       url: '/user',
      //       data: {
      //         name: 'xiaoming',
      //         info: '12'
      //       }
      //    })
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
