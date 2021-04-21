<template>
  <div id="myHomePage">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <mainCard :name = "username"></mainCard>
      </el-col>

      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <card message = '运动数据' textOne = '总运动' :textTwo = "sport.time+'分钟'"  :textThree = "'本周运动'+sport.thisWeekTime+'分钟'"></card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <card message = '健康数据' textOne = '体重' :textTwo = "sport.weight+'kg'" :textThree = "'上次记录'+sport.lastDate+'天'"></card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-button type="primary" @click = "dialog = true">填写身体数据<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button type="primary" @click = "userDialog = true">更改用户信息<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-col>
    </el-row>

    <el-drawer
      :before-close="handleClose"
      v-model="dialog"
      direction="btt"
      size ='70%'
      :visible.sync = "dialog"
      custom-class="demo-drawer"
      ref="drawer"
      >
        <div>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="身高">
              <el-input v-model="formLabelAlign.height"></el-input>
            </el-form-item>
            <el-form-item label="体重">
              <el-input v-model="formLabelAlign.weight"></el-input>
            </el-form-item>
            <el-form-item label="胸围">
              <el-input v-model="formLabelAlign.bust"></el-input>
            </el-form-item>
            <el-form-item label="腰围">
              <el-input v-model="formLabelAlign.waistline"></el-input>
            </el-form-item>
            <el-form-item label="臀围">
              <el-input v-model="formLabelAlign.hipline"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="demo-drawer__footer">
              <el-button @click="cancelForm">取 消</el-button>
              <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
            </div>
    </el-drawer>

    <el-drawer
      :before-close="handleClose"
      v-model="userDialog"
      direction="btt"
      size ='70%'
      :visible.sync = "userDialog"
      custom-class="demo-drawer"
      ref="drawer"
      >
        <div>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="身高">
              <el-input v-model="formLabelAlign.height"></el-input>
            </el-form-item>
            
          </el-form>
        </div>
        <div class="demo-drawer__footer">
              <el-button @click="cancelForm">取 消</el-button>
              <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
            </div>
    </el-drawer>
  </div>
</template>

<script>
  import card from "@/components/module/mine/Card.vue"
  import btnAndText from '@/components/base/buttonAndText.vue'
  import mainCard from '@/components/module/mine/mainCard.vue'
  export default{
    name:"myHomePage",
    created() {
      this.username = this.$store.getters.getUserNameValue;
      this.uid = this.$store.getters.getUidValue;
    },
    data:function(){
      return{
        labelPosition: 'right',
        elIconUser : 'el-icon-user',
        elIconPhone : 'el-icon-phone',
        elIconMore : 'el-icon-more',
        uid:'',
        username:'',
        sport:{time:'1526',weight:'79',thisWeekTime:'30',lastDate:'3'},
        //time总运动时间 weight用户体重 thisWeekTime本周运动时间 lastDate距离上次记录身体数据时间
        dialog: false,
        userDialog: false,
        loading: false,
        formLabelWidth: '80px',
        timer: null,
        formLabelAlign: {
          height: '',
          weight: '',
          bust: '',
          waistline: '',
          hipline: ''
        }
      }
    },
    components:{
      card,btnAndText,mainCard
    },
    methods: {
    submitForm(){
      console.log("myhome");
      var t = this;
      t.$http({
            method: 'post',
            url: '/api/UserBodyData/update',
            data:{
              bust: t.formLabelAlign.bust,
              height: t.formLabelAlign.height,
              hipline: t.formLabelAlign.hipline,
              userId: 789,
              waist: t.formLabelAlign.waistline,
              weight: t.formLabelAlign.weight,
            }
         })
         .then(function(response){
           console.log(response);
           if(response.data.code == 200){
             t.$message({
             	type: 'success',
             	message: '修改成功',
             });
           }else{
             t.$message({
             	type: 'fail',
             	message: '修改失败'
             });
           }
         })
         .catch(function(error){
           console.log(error)
         })
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.$options.methods.submitForm.bind(this)();
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 100);
          }, 200);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
</script>

<style scoped="scoped">
  .el-col-xs-24{
    padding:30px;
  }
  .el-col-xs-8{
    padding:15px;
  }
</style>
