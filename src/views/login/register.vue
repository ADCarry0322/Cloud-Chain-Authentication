<template>
    
        <div class="register-box">
            <div class="logo1" >
                <img src="../../assets/register_logo.png" />
            </div>

                <!-- 姓名-->
            <div class="input-box">
                <div class="name" >  
                    <el-input v-model="name" prefix-icon="el-icon-user" class="first" placeholder="姓名"></el-input>
                </div>

                <!-- 身份证号 -->
                <div class="id"> 
                    <el-input v-model="id" prefix-icon="el-icon-postcard" class="first" placeholder="居民身份证号" ></el-input>
                </div>
            
                <!-- 手机号 -->
                <div class="phone"> 
                    <el-input v-model="phone" prefix-icon="el-icon-mobile-phone" class="first" placeholder="手机号" ></el-input>
                </div>
                <!-- 验证码 -->
                <div class="send-code">
                    <div class="code"> 
                        <el-input v-model="code" prefix-icon="el-icon-chat-dot-square" class="first" placeholder="请输入验证码"></el-input>
                    </div>
                    <!-- 验证码按钮 -->
                   <div class="get-code">
                    <div class="btn1">
                        <el-button type="primary" round>获取验证码</el-button>
                    </div>
                   </div>
                    
                </div>
                <!-- 设置密码 -->
                <div class="psd"> 
                    <el-input v-model="pwd" prefix-icon="el-icon-lock" class="first" placeholder="请设置登录密码" show-password></el-input>
                </div>

                <!-- 确认密码 -->
                <div class="cfmpsd"> 
                    <el-input prefix-icon="el-icon-check" class="first" placeholder="确认密码" show-password></el-input>
                </div>

            </div>
                <!-- 完成注册，立即登录 -->
                <div class="btn">
                    <el-button type="primary" @click="login" round>完成注册，立即登录</el-button>
                </div>
                
    </div>

</template>

<script>
export default {
  data() {
    return {
      name: '',
      id:'',
      phone:'',
      code:'',
      token:'',
      pwd:'',
    }
  },
  methods:{
      login(){
        this.$axios({
                url:'/user/register',
                method:'post',
                data:{    //这里是发送给后台的数据
                    phone:this.phone,
                    pwd:this.pwd,
                    id:this.id,
                    name:this.name,
                    //   token:this.token,
                }
            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response);
                let error_code = response.data.error_code;
                
                if(error_code== 0)
                {
                    console.log(error_code);
                    this.$message({
                        message: '注册成功！',
                        type: 'success'
                    });
                    this.$router.push('/index/login') 
                }
                else
                {
                    let msg=response.data.msg;
                    console.log(msg);
                    this.$message.error(msg);
                }   

            }).catch((error) =>{
                console.log(error)       //请求失败返回的数据
            }) 
        
      },

  }
  
}
</script>


<style scoped>

.register-box{

    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    left: 10%;
    top: -20%;
    

    height: 140%;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    text-align: center;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border: 1px solid rgba(255, 255, 255, 100);
}

.input-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.send-code{
    display: flex;
    width: 100%;
    justify-content: center;

}
.first /deep/ .el-input__inner{

    border: transparent;
    width: 80%;
    padding: 0;
}
.register{
    display: flex;
    justify-content: center;
    align-items: center;
}

.get-code{
    display: flex;
    width: 25%;
    justify-content: center;
    
    padding-top: 5px;
    margin-left: 5px;
}

.register1{
    color: #32BDFE;
}

.btn{
    display: flex;
    justify-content: center;
    outline: none;
    margin-top: 40px;
}
.btn1{
    
    width: 100%;
    justify-content: center;
}

.el-button--primary{
    display: flex;
    background-color: #32BDFE;
    border-color: #32BDFE;
    justify-content: center;
    width: 80%;
}

.el-button.is-round:hover {
    background-color: #32BDFE !important;
    opacity: 0.8;

}

.name,.id,.phone,.psd,.cfmpsd{
    display: flex;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 12px;
    justify-content: center;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border-radius: 50px;
    border: 3px solid rgba(255, 255, 255, 100);
}
.code{
    display: flex;
    width: 55%;
    /* margin-right: 20px; */
    margin-bottom: 12px;
    justify-content: center;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border-radius: 50px;
    border: 3px solid rgba(255, 255, 255, 100);
}
.op{
    display: flex;
    width: 80%;
    /* justify-content: flex-end; */
    margin-bottom: 24px;
    
}

/* .op input{
    justify-content: flex-start;
} */
.op div{
    display: flex;
    margin-left: auto;
}

.logo1 {
    display: flex;
    justify-content: center;
    height: 60px;
    padding-bottom: 12px;
}



.logo div{
    line-height: 60px;
    padding-left: 12px;
}

.title{
    display: flex;
    align-items: center;
    justify-content: center;
}

.title .p1,.p2{
    width: 40%;  
}


</style>