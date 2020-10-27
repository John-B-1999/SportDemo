<template>
  <el-card shadow="always">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div @click="myClick()" style="background-image: url(../../assets/logo.png);">
          <!-- <img src="@/assets/muscle.jpg" width="100%" height="200px"/> -->
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default{
    name:"trainCard",
    data:function(){
      return{
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        o:["1","2","3","4"]
      }
    },
    methods:{
      myClick:function(){
        console.log("点击");
      }
    }
  }
</script>

<style scoped="scoped">
  .el-card >>> .el-card__body{
    padding: 0px;
  }
</style>
