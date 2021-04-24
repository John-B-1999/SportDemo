<template>
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		<el-form-item label="用户名" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>
		<el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input></el-form-item>
		<el-form-item label="确认密码" prop="checkPass"><el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input></el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
			<el-button @click="resetForm('ruleForm')">重置</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	data() {
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				if (this.ruleForm.checkPass !== '') {
					this.$refs.ruleForm.validateField('checkPass');
				}
				callback();
			}
		};

		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm.pass) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};

		return {
			activeName: 'second',
			ruleForm: {
				name: '',
				pass: '',
				checkPass: ''
			},
			rules: {
				name: [{ required: true, message: '请输入您的名称', trigger: 'blur' }, { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }],
				pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
				checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
			}
		};
	},

	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
        let t = this
				if (valid) {
					t.$http({
					      method: 'post',
					      url: '/api/User/insert',
					      data:{
					        id: null,
					        userName:t.ruleForm.name,
					        password:t.ruleForm.pass,
					        pic:null,
					      }
					   })
					   .then(function(response){
						   if(response.data.code == 200){
							 t.$message({
								type: 'success',
								message: '注册成功'
							 });
							 t.$router.push('/login');
						   }else{
							 t.$message({
								type: 'fail',
								message: '注册失败，缺少必要参数'
							 });
						   }
					   })
					   .catch(function(error){
					     console.log(error)
					   })
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},

		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
};
</script>
