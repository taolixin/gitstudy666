<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm">
           <el-form-item label="手机号" prop="username">
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
           </el-form-item>
           <el-form-item label="密码" prop="yzm">
            <el-input v-model="ruleForm.yzm" type="password" autocomplete="off" />
           </el-form-item>
           <el-form-item>
            <el-button type='primary' @click="handleToLogin($refs.ruleFormRef)">登录
            </el-button>
           </el-form-item>
           
      </el-form>
  </div>
</template>

<script >
  export default{
    name:"LoginView",
    data(){
      return{
        //收集表单数据
        ruleForm:{
          username:'',
          yzm:'',
         
        },
        rules:{
          username: [{ required: true, message: '请输入手机号', trigger: 'blur' },
                     {pattern:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,message:'请输入正确手机号码', trigger: 'blur'}],
          yzm: [{required: true, message: '请设置密码', trigger: 'blur' }],
        
        }
      }
    },
    methods:{
      //在获取数据
      handleToLogin(formEl) {
        if (!formEl) return
        formEl.validate((valid) => {
          if (valid) {
            window.location.href='/'
          } else {
            console.log('error submit!')
            return false
          }
        })
        // if(!this.ruleForm.username){
        //   alert('请输入电话号码')
        // }else if(!this.ruleForm.yzm||!this.ruleForm.confirmYzm){
        //   alert('请输入密码')
        // }
        // else{
        //   alert('两次输入密码不一致'),
        //   this.ruleForm.yzm='',
        //   this.ruleForm.confirmYzm=""

        // }
        
        // window.location.href('/login')这是一个错误写法！！！
        // window.location.href='/login'
      }
    }

  }

</script>

<style lang="scss" scoped>
 .el-form{width: 400px;margin: 20px auto;}
.el-button{margin: 0 auto;width: 100%;}
</style>