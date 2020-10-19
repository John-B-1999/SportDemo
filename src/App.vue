<template>
  <div id="app">
    <h1>111111</h1>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <el-button @click="showDialog()">Button</el-button>
          <myDialog ref='myDialog'>
            <slot id="slotOne">
              <h1>登录</h1>
              <login></login>
            </slot>
          </myDialog>
        </el-header>
        <el-main>
          <carousel></carousel>
          <img src="./assets/logo.png">
          <h1>注册</h1>
          <register></register>
          <h1>评分</h1>
          <rate></rate>
        </el-main>
        <el-footer>
          <bottom></bottom>
        </el-footer>
      </el-container>
    </el-container>
    <router-view/>
  </div>
</template>

<script>
import bottom from '@/components/Item.vue'
import login from '@/components/Login.vue'
import register from '@/components/Register.vue'
import rate from '@/components/Rate.vue'
import myDialog from '@/components/Dialog.vue'
import carousel from '@/components/Carousel.vue'
export default {
  name: 'App',
  data: function() {
          return { visible: false }
        },
  components:{
    bottom,login,register,rate,myDialog,carousel
  },
  methods:{
    clickItem:function(path){
        this.$router.push(path);
    },
    showDialog:function(){
      this.$refs.myDialog.dialogFormVisible = true;
      this.$refs.myDialog.title = '这是个标题';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
