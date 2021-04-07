<template>
  <div id="run">
	  <el-row>
		  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
			  <el-button style="float: left;" type="text">累计跑步距离</el-button>
		  </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div style="display: flex;
                    align-items: flex-end;">
          <span class="font-family" style="font-size: 20px; float: left; height: 26px;">&nbsp;&nbsp;{{metre}}公里</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div style="display: flex;
                    align-items: flex-end;height: 26px;">
          <span class="font-family" style="font-size: 12px; float: right; heigth:26px;width: 100%;text-align: right;">等级{{grade}}</span>
        </div>
      </el-col>
		  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
		  	  <greenProgress style="width: 103%;"></greenProgress>
		  </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      	  <div class="item mybackground"
          :style="{backgroundImage:'url('+require('@/assets/map.jpg')+')'}">
          <div style="display: table-cell;
          　　                  text-align: center;
          　　                  vertical-align: middle;">
          <el-button style="" type="text">目标</el-button>
          <el-button type="primary">开始</el-button>
          <el-button style="" type="text">更多</el-button>
          </div>
          </div>
      </el-col>
	  </el-row>
  </div>
</template>

<script>
  import greenProgress from '@/components/base/progress/greenProgress.vue'
  export default{
    name:"run",
    data:function(){
      return{
        metre:"111",
        grade:"R4"
      }
    },
    components:{
      greenProgress
    }
  }
</script>

<style scoped="scoped">
  .item{
    display:inline-block;
    box-sizing: border-box;
    width:40%;
    margin: 10px;
  }

  .mybackground{
    display: table; width: 325px; height: 200px;
    background-repeat:no-repeat; background-size:100% 100%;
    -moz-background-size:100% 100%;
  }


</style>
