<template>
  <div id="app">
<!--    <mainPage></mainPage> -->
    <router-view/>
  </div>
</template>

<script>
  import mainPage from "@/components/page/mainPage.vue"
export default {
  name: 'App',
  data: function() {
          return {
            visible: false ,
          }
        },
  components:{
    mainPage
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
</style>
