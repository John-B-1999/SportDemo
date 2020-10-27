<template>
  <courseCard></courseCard>
</template>

<script>
  import courseCard from '@/components/base/card/courseCard.vue'
  export default{
    name:"showCourse",
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
      courseCard
    }
  }
</script>

<style scoped="scoped">
  .el-card >>> .el-card__body{
    padding: 0px;
    margin: 0px;
  }
</style>
