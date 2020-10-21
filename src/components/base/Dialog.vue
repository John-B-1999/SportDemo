<template>
  <el-dialog :visible.sync="dialogFormVisible">
    <div slot="title" class="dialog-footer">
      <span>{{title}}</span>
    </div>
    <slot name="slotOne"></slot>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name:'myDialog',
    data() {
      return {
        dialogFormVisible: false,
        title:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
