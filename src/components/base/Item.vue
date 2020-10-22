<template>
  <div class="bottom">
    <div class="item" @click="clickItem('/')" :class="{active: $route.path==='/'}">
      <i class="el-icon-collection-tag"></i>
      <!-- <p icon="el-icon-collection-tag"><el-avatar> 首页 </el-avatar></p> -->
    </div>
    <div class="item" @click="clickItem('/plan')" :class="{active: $route.path==='/plan'}">
      <i class="el-icon-date"></i>
      <!-- <p icon="el-icon-date"><el-avatar> 计划 </el-avatar></p> -->
    </div>
    <div class="item" @click="clickItem('/travel')" :class="{active: $route.path==='/travel'}">
      <i class="el-icon-bicycle"></i>
      <!-- <p icon="el-icon-bicycle"><el-avatar> 运动 </el-avatar></p> -->
    </div>
    <div class="item" @click="clickItem('/myhome')" :class="{active: $route.path==='/myhome'}">
      <i class="el-icon-user"></i>
      <!-- <p icon="el-icon-user"><el-avatar> 我的 </el-avatar></p> -->
    </div>
  </div>
</template>

<script>
    export default {
      name: "bottom",
      methods:{
        clickItem:function(path){
            this.$router.push(path);
        }
      }

    }
</script>

<style scoped>
 .bottom{
    /* position: fixed; */
    bottom:0px;
    /* border-top:1px solid #d2d2d2; */
    /* background-color: #f2f2f2; */
    width: 100%;
    height:60px;
  }
  .item{
   margin:-1px 7%;
    float:left;
    width: 11%;
  }
  .item p{
    margin:0;
    font-size: 15px;
  }
  .active{
    color:#108b70;
  }
</style>
