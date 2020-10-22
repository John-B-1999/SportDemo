<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="root">
    <el-tab-pane label="用户管理" name="first"
    style="height:500px;overflow-y:auto;overflow-x:hidden;"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled">
      <slot name="slotOne"></slot>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
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
        count:30,
        loading:false,
        activeName: 'first'
      };
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      },
      handleClick(tab, event) {
              console.log(tab, event);
      }
    }
  };
</script>

<style>

    ::-webkit-scrollbar {   
      display: none; /* Chrome Safari 隐藏滚动条*/
    }

    .root{
      height: 100%;
      overflow:hidden;
    }

    .el-tabs__nav-scroll {
        width: 100%;
        overflow-x: auto;
    }
   .root >>> .el-tabs__content{
      flex-grow: 1;
      overflow-y: scroll;
      /* height: 500px; */
    }
</style>
