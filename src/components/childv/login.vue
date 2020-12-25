<template >
    <div >
         <mhead></mhead>
          <navv></navv> 
          <!-- <div class='logshow'>
            <el-button type='success' @cilck='login'>登录</el-button>
            <el-button type='success' @click="logon" >注册</el-button>


          </div> -->
          <div class="logshow">
                  <el-button> 登录</el-button><el-button> 注册</el-button>

      <el-form  ref="form" :model="form" label-width="80px">
           <el-form-item label="姓名" prop='name'  :rules="[
                       { required: true, message: '姓名不能为空'},
                     ]">
            <el-col :span="11">
            <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="邮箱" prop='email' :rules="[
                       { required: true, message: '邮箱不能为空'},
                     ]">
            <el-col :span="11" >
            <el-input v-model="form.email"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="密码" prop='password' :rules="[
                { required: true, message: '密码不能为空'},
              ]">
            <el-col :span="11" >
            <el-input show-password v-model="form.password"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label='性别'>
          <el-select style='float: left' v-model="form.sex" placeholder="请选择">
             <el-option label="男" value=0></el-option>
             <el-option label="女" value=1></el-option>
            </el-select>
         </el-form-item>

          <el-form-item label="出生日期">
           <el-col :span="11">
           <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;">
           </el-date-picker>
           </el-col>
         </el-form-item>

        <!-- <el-form-item label="即时配送">
         <el-switch v-model="form.delivery"></el-switch>
         </el-form-item> -->
        <el-form-item label="爱好">
          <el-checkbox-group v-model="form.hob">
              <el-checkbox label="打篮球" name="hob"></el-checkbox>
              <el-checkbox label="打代码" name="hob"></el-checkbox>
              <el-checkbox label="打游戏" name="hob"></el-checkbox>
              <el-checkbox label="打豆豆" name="hob"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

          <el-form-item label="jolin美不美">
            <el-radio-group v-model="form.resource">
              <el-radio label="倾国倾城"></el-radio>
              <el-radio label="闭月羞花"></el-radio>
            </el-radio-group>
          </el-form-item>

         <el-form-item label="自我介绍">
           <el-input type="textarea" v-model="form.desc"></el-input>
         </el-form-item>

         <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
            <el-button @click="resetForm('form')">重置</el-button>         
         </el-form-item>
      </el-form>
            
          
       </div>
      
            
      <fd></fd>
    </div>
</template>
<script>
import mhead from '@/components/mhead'
import fd from '@/components/fd' 
import navv from '@/components/navv'


export default {
     components: { mhead ,fd,navv },
     name:'lofin',
      data:function(){
      return{
        form: {
          name: '',
          email:'',
          password:'',
          sex:'',
          date:'',
          hob:'[]',
         resource: '',
          desc: ''
        }
      }
    },
    
      methods: {
        submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
         });
        },
        resetForm(form) {
        this.$refs[form].resetFields();
      }
    }
    
    
}
</script>
<style scoped>
.logshow{
  border: 1px solid red;
  height: 600px;
  width: 50%;
  text-align: center;
  margin: auto;
  color: black;
  
}
</style>
    
