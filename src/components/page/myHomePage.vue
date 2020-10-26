<template>
  <div id="myHomePage">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <btnAndText :classVal = "elIconUser"></btnAndText>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <btnAndText :classVal = "elIconPhone" ></btnAndText>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <btnAndText :classVal = "elIconMore" ></btnAndText>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <card></card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <card></card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import card from "@/components/base/Card.vue"
  import btnAndText from '@/components/base/buttonAndText.vue'
  export default{
    name:"myHomePage",
    data:function(){
      return{
        elIconUser : 'el-icon-user',
        elIconPhone : 'el-icon-phone',
        elIconMore : 'el-icon-more',
      }
    },
    components:{
      card,btnAndText
    }
  }
</script>

<style>
</style>
