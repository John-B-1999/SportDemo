<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <slot name="slotOne"></slot>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <slot name="slotTwo"></slot>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <slot name="slotThree"></slot>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
      <slot name="slotFour"></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    name:"navMenuTop",
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
</style>