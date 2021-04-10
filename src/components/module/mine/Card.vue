<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="float: left; padding: 7px;">{{message}}</span>
      <el-button style="float:right;padding-right: 10px;" type="text" icon="el-icon-arrow-right"></el-button>
    </div>
    <!-- <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div> -->
    <div class="text item" style="font-size: 20px;">
      {{textOne}}
    </div>
    <div class="text item" style="font-size: 14px;">
      {{textTwo}}
    </div>
    <div class="text item" style="font-size: 10px;">
      {{textThree}}
    </div>
  </el-card>
</template>

<script>
  export default{
    name:"card",
    data:function(){
      return{
        text: 'text内容',
        o:["1","2","3","4"]
      }
    },
    props:["message","textOne","textTwo","textThree"]
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    text-align: left;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    /* width: 480px; */
  }
  .el-card__header{
    padding: 0px;
    padding-left: 10px;
    padding-top: 3px;
  }

</style>
