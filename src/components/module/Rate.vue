<template>
  <div class="block">
    <div>评价</div>
    <div>&nbsp;</div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 5, maxRows: 10}"
      placeholder="有什么想说的"
      v-model="textarea2">
    </el-input>
    <div>&nbsp;</div>
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
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        textarea2: ''
      }
    }
  }
</script>
