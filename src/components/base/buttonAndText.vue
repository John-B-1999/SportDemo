<template>
  <div class="outer" @click="myClick()">
  	<div class="inner">
      <i :class="classVal"></i>
  		<p>{{classVal}}</p>
  	</div>
  </div>
</template>

<script>
  export default{
    name:"btnAndText",
    props: {
        classVal: {
            // type: String, //指定传入的类型
            //type 也可以是一个自定义构造器函数，使用 instanceof 检测。
        }
    },
    data(){
      return{
        className:"el-icon-user"
      }
    },
    methods:{
      myClick:function(){
        console.log("点击事件");
      }
    }
  }
</script>

<style>
  .outer {
  	display: table;
  }
  .inner {
  	display: table-cell;
  	vertical-align: middle;
  	text-align: center;
  }
</style>
