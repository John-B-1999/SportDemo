<template>
  <div id="trainPage">
    <run :metre = "metre" :grade = "grade" v-on:running = "change" v-show = "!flag"></run>
    <running v-show="flag"></running>
  </div>
</template>

<script>
  import run from '@/components/module/train/run.vue'
  import running from '@/components/module/train/running.vue'
  import test from '@/components/module/train/test.vue'
  export default {
    name: 'trainPage',
    data:function(){
      return{
        metre: "116",
        grade:'R4',
        flag : false,
      }
    },
    watch: {
       $route: {
         handler:  function (val, oldVal){
           if(val.path == "/travel"){
             this.flag = false;
           }
         },
         // 深度观察监听
         deep:  true
       }
    },
    components:{
      run,running,test
    },
    methods:{
      change:function(data){
        var t = this;
        this.flag = data.f;
        // this.$refs.running[0].startRunning();
        t.$router.push('/travel/running');
      }
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
