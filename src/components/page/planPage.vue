<template>
  <div id="planPage">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard textOne = '哑铃训练' textTwo = '中级'></trainCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard textOne = '哑铃训练' textTwo = '初级'></trainCard>
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
  import trainCard from '@/components/base/card/trainCard.vue'
  export default {
    name: 'planPage',
    components:{
      trainCard
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
