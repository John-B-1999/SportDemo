<template>
  <div>
    <el-progress :percentage="progress"></el-progress>
  </div>
</template>

<script>
  export default {
    name:"greenProgress",
    data:function(){
      return{
        
      }
    },
    props:["progress"],
      methods: {
        format(percentage) {
          return percentage === 100 ? '满' : `${percentage}%`;
        }
      }
    };
</script>

<style>
</style>
