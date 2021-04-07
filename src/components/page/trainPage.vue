<template>
  <div id="trainPage">
    <!-- <el-row :gutter="10">
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
    </el-row> -->
    <mapA></mapA>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <el-card class="box-card">
      <running></running>
    </el-card>
  </div>
</template>

<script>
  import trainCard from '@/components/base/card/trainCard.vue'
  // import login from '@/components/module/Login.vue'
  import bodyForm from '@/components/base/bodyForm.vue'
  import rate from '@/components/module/Rate.vue'
  import videoPlayer from '@/components/base/video.vue'
  import run from '@/components/module/main/run.vue'
  import running from '@/components/module/main/running.vue'
  import mapA from '@/components/base/map.vue'
  export default {
    name: 'trainPage',
    components:{
      trainCard,bodyForm,rate,videoPlayer,run,running,mapA
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
