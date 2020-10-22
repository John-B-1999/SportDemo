<template>
  <div class="bottom">
    <div class="item" @click="clickItem('/')" :class="{active: $route.path==='/'}">
      <i class="iconfont icon-shouye1"></i>
      <p>首页</p>
    </div>
    <div class="item" @click="clickItem('/plan')" :class="{active: $route.path==='/plan'}">
      <i class="iconfont icon-shouye1"></i>
      <p>计划</p>
    </div>
    <div class="item" @click="clickItem('/travel')" :class="{active: $route.path==='/travel'}">
      <i class="iconfont icon-shouye1"></i>
      <p>运动</p>
    </div>
    <div class="item" @click="clickItem('/myhome')" :class="{active: $route.path==='/myhome'}">
      <i class="iconfont icon-wode"></i>
      <p>我的</p>
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
   margin:5px 7%;
    float:left;
  }
  .item p{
    margin:0;
    font-size: 15px;
  }
  .active{
    color:#108b70;
  }
</style>
