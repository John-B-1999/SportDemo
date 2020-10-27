<template>
  <planCard></planCard>
</template>

<script>
  import planCard from '@/components/base/card/planCard.vue'
  export default{
    name:"showPlan",
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
    },
    components:{
      planCard
    }
  }
</script>

<style scoped="scoped">
  .el-card >>> .el-card__body{
    padding: 0px;
    margin: 0px;
  }
</style>
