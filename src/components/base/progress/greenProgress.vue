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
        progress:60
      }
    },
      methods: {
        format(percentage) {
          return percentage === 100 ? '满' : `${percentage}%`;
        }
      }
    };
</script>

<style>
</style>
