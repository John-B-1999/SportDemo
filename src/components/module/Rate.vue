<template>
  <div class="block">
    <el-rate
      v-model="value"
      :colors="colors">
    </el-rate>
  </div>
</template>

<script>
  export default {
    name:'rate',
    data() {
      return {
        value: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
