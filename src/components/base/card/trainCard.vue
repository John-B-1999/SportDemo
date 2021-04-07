<template>
  <el-card shadow="always">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div @click="myClick()" style="display: table; width: 100%; height: 300px;
        background-repeat:no-repeat; background-size:100% 100%;
        -moz-background-size:100% 100%;"
        :style="{backgroundImage:'url('+img+')'}">
          <div style="display: table-cell;
　　                  text-align: center;
　　                  vertical-align: middle;">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <span class="font-family" style="font-size: 18px; float: left;color:#3A8EE6">{{textOne}}</span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <span class="font-family" style="font-size: 12px; float: left;color:#3A8EE6">{{textTwo}}</span>
            </el-col>
          </div>
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
        img:require('@/assets/one.jpg'),
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        o:["1","2","3","4"]
      }
    },
	props:["textOne","textTwo"],
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
    margin: 0px;
  }
</style>
