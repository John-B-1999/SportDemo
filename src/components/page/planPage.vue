<template>
  <div id="planPage">
    <el-row :gutter="10">
      <el-col v-for="classText in classData" :key= "classText.id" v-show="!flag" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard v-on:changeFlag="change" :textOne = "classText.textOne" :textTwo = "classText.textTwo" :textThree = "classText.textThree"></trainCard>
      </el-col>
      <el-col v-show="flag" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <router-view></router-view>
      </el-col>
    </el-row>
    <!-- <el-drawer
      title="我是标题"
      :visible.sync="flag"
      :with-header="false">
      <router-view></router-view>
    </el-drawer> -->
  </div>
</template>

<script>
  import trainCard from '@/components/module/plan/trainCard.vue'
  import videoP from '@/components/module/plan/video.vue'
  export default {
    name: 'planPage',
    components:{
      trainCard,videoP
    },
    data:function(){
      return{
        classData:[
          {id:1,textOne:'哑铃训练',textTwo:'中级',textThree:'官方课'},
          {id:2,textOne:'哑铃训练',textTwo:'初级',textThree:'官方课'},
          {id:3,textOne:'哑铃训练',textTwo:'高级',textThree:'官方课'},
        ],
        flag:false
      }
    },
    methods:{
      change:function(data){
        this.flag = data;
        console.log("222",this.flag);
        console.log(this.$route.path);
        this.$router.push('/plan/video');
        console.log(this.$route.path);
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
