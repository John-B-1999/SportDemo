<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <span style="float: left; padding: 7px;">卡片名称</span>
      <el-button style="float:right;padding-right: 10px;" type="text" icon="el-icon-arrow-right"></el-button>
    </div>
    <div v-for="o in 6" :key="o" class="item">
      <courseCard></courseCard>
    </div>
  </el-card>
</template>

<script>
  import courseCard from '@/components/base/card/courseCard.vue'
  export default{
    name:"showCourse",
    data:function(){
      return{

      }
    },
    methods:{
      myClick:function(){
        console.log("点击");
      }
    },
    components:{
      courseCard
    }
  }
</script>

<style scoped="scoped">
  .el-card >>> .el-card__body{
      width: 100%;
    	overflow-x: scroll;
    	overflow-y: hidden;
    	white-space: nowrap;
      justify-content: space-between;
  }

  .item{
    display:inline-block;
    box-sizing: border-box;
    width:40%;
    margin: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .el-card__header{
    padding: 0px;
    padding-left: 10px;
    padding-top: 3px;
  }

</style>
