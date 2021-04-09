<template>
  <el-card shadow="always">
    <el-row>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
        <div @click="clickToClass()" style="display: table; width: 100%; height: 150px;
        background-repeat:no-repeat; background-size:100% 100%;
        -moz-background-size:100% 100%;"
        :style="{backgroundImage:'url('+img+')'}">
        </div>
      </el-col>
      <div style="display: table-cell;
      　　                  text-align: center;
      　　                  vertical-align: middle;">
                  <div>&nbsp;</div>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <span class="font-family" style="font-size: 20px; float: left;">&nbsp;{{textOne}}</span>
                  </el-col>
                  <div>&nbsp;</div>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <span class="font-family" style="font-size: 12px; float: left;">&nbsp;{{textTwo}}</span>
                  </el-col>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <span class="font-family" style="font-size: 8px; float: left;color: gray;">&nbsp;{{textThree}}</span>
                  </el-col>
                </div>
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
        flag : true
      }
    },
	props:["textOne","textTwo","textThree"],
    methods:{
      myClick:function(){
        console.log("点击");
      },
      clickToClass:function(){
        console.log("111");
        this.$emit('changeFlag',true);
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
