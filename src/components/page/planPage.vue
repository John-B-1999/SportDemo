<template>
  <div id="planPage">
    <el-row :gutter="10">
      <el-col v-for="classText in courseData" :key= "classText.courseId" v-show="!flag" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <trainCard  v-on:changeFlag="change" :textOne = "classText.courseName" :textTwo = "classText.courseId" :textThree = "classText.coachName"></trainCard>
      </el-col>
      <el-col v-show="flag" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <router-view></router-view>
      </el-col>
    </el-row>
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
    watch: {
       $route: {
         handler:  function (val, oldVal){
           if(val.path == "/plan"){
             this.flag = false;
           }
         },
         // 深度观察监听
         deep:  true
       }
    },
    created() {
      let t = this;
      console.log("route",this.$route);
      this.$http({
            method: 'post',
            url: '/api/Course/findPageCourseList',
          data:{
            pageNum:1,
            pageSize:3
          }
         })
         .then(function(response){
           t.courseData = response.data.content;
         })
         .catch(function(error){
           console.log(error)
         })
    },
    data:function(){
      return{
        classData:[
          {id:1,textOne:'哑铃训练',textTwo:'中级',textThree:'官方课'},
          {id:2,textOne:'哑铃训练',textTwo:'初级',textThree:'官方课'},
          {id:3,textOne:'哑铃训练',textTwo:'高级',textThree:'官方课'},
        ],
        courseData:[],
        //courseData格式如下：coachName: (...)
        // courseId: (...)
        // courseName: (...)
        // thumbnailPic: (...)
        courseId: 0,
        //course为点击课程的详细信息
        course:[],
        flag:false
      }
    },
    methods:{
      change:function(data){
        var t = this;
        this.flag = data.f;
        this.courseId = data.courseId;
        this.$http({
              method: 'get',
              url: '/api/Course/load?id='+this.courseId,
           })
           .then(function(response){
             t.course = response.data.entity;
             console.log("course",t.course);
             t.$router.push({path:'/plan/video',query:{title:t.course.courseName,mainText:t.course.courseAccount,courseId:t.courseId}});
           })
           .catch(function(error){
             console.log(error)
           })
        // this.$router.push({path:'/plan/video',query:{title:t.course.courseName,mainText:t.course.courseAccount}});
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
