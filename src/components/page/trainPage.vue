<template>
  <div id="trainPage">
    <run :metre = "metre" :grade = "grade"></run>
  </div>
</template>

<script>
  import run from '@/components/module/train/run.vue'
  export default {
    name: 'trainPage',
    data:function(){
      return{
        metre:'116',
        grade:'R4'
      }
    },
    components:{
      run
    }
  }
</script>

<style scoped="scoped">
  .el-card{
    margin-bottom: 5px;
  }
  .el-col-xs-24{
    padding:1px;
  }
  .el-col-xs-8{
    padding:15px;
  }
</style>
