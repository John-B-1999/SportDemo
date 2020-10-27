<template>
  <div id="trainPage">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard></trainCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard></trainCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard></trainCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard></trainCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard></trainCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard></trainCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import trainCard from '@/components/base/trainCard.vue'
  export default {
    name: 'trainPage',
    components:{
      trainCard
    }
  }
</script>

<style scoped="scoped">
  .el-card{
    margin-bottom: 15px;
  }
  .el-col-xs-24{
    padding:30px;
  }
  .el-col-xs-8{
    padding:15px;
  }
</style>
