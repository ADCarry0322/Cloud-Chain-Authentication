<template>
        <div class="login-box">
            <div class="login-logo">
                <img style="width:200px" src="../../assets/login_logo.png" />
            </div>
            <div class="title" style="margin-top:25px">
                <el-tabs v-model="activeName" @tab-click="handleClick" >
                    <el-tab-pane label="用户/企业" name="first"></el-tab-pane>
                    <el-tab-pane label="权威机构" name="second"></el-tab-pane>
                </el-tabs>

            </div>
            <div class="input-box">
                <!-- id -->
                <div class="username" >  
                    <el-input v-model="id" :prefix-icon=icon  :placeholder=placeHolder ></el-input>
                </div>

                <!-- 密码 -->
                <div class="password"> 
                    <el-input v-model="psd" prefix-icon="el-icon-unlock" placeholder=密码 show-password></el-input>
                </div>
            
                <!-- 记住密码 -->
                <div class="op">
                    <input type="checkbox" >记住密码
                    <el-button type="text" class="forget-psd" style="font-size:14px;color:#32BDFE; margin-left:80px">忘记密码?</el-button>                    
                </div>
                
            </div>
                <!-- 登录按钮 -->
                <div class="btn" style="margin-top:20px">
                    <el-button style="background-color:#32BDFE;color:white;width:80%"  @click="login" round>登录</el-button>
                </div>
                <div class="register" v-show="isShow">
                    <p>还没有账号?</p>
                    <!-- <p class="register1" @click="register">立即注册</p> -->
                    <el-button type="text" class="forget-psd" style="font-size:14px;color:#32BDFE;" @click="register">立即注册</el-button>
                </div>
    </div>


    
</template>

<script>
export default {
  data() {
    return {
      id:'',
      psd:'',
      isShow:'true',
      activeName: 'first',
      placeHolder: '居民身份证号/手机号',
      icon:'el-icon-user',
    }
  },
  methods:{
      register(){
          this.$router.push('/index/register')
      },
      login(){
         this.$axios({
                url:'/user/login',
                method:'post',
                data:{    //这里是发送给后台的数据

                    pwd:this.psd,
                    phone:this.id,

                    //   token:this.token,
                }
                
            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response);
                let error_code = response.data.error_code;
                
                if(error_code== 0)
                {
                    console.log(error_code);
                    this.$message({
                        // duration:0,
                        message: '登录成功！',
                        type: 'success',
                        showClose:true,
                    });
                    this.Common.token=response.data.data.token;
                    // console.log(response.data.data.token);
                    // console.log(this.Common.token);
                    window.sessionStorage.setItem("token", response.data.data.token);
                    this.$router.push({path:'/homepage'})

                }
                else
                {
                    let msg=response.data.msg;
                    this.$message.error(msg);
                    console.log(msg);
                }   
            

            }).catch((error) =>{
                console.log(error)       //请求失败返回的数据
            }) 
        
      },
       handleClick(tab, event) {
        console.log(tab, event);

        if(tab.name == 'first')
        {
            this.placeHolder = '居民身份证号/手机号',
            this.icon = 'el-icon-user',
            this.isShow = true
            // this.userType = 0
            
            this.Common.userType = 0
            // console.log(this.Common.userType)
        }
        else
        {
            this.placeHolder = '账号',
            this.icon = 'el-icon-arrow-down',
            this.isShow = false
            // this.userType = 1;
            this.Common.userType = 1
            // console.log(this.Common.userType)
        }
      },
      forgetPsd(){

      }
  }
  
}
</script>


<style>

.div{
    background-color: white;
}

.el-tabs__active-bar.is-top{
    background-color: #32BDFE;
}

.el-tabs__item.is-active{
    color: #32BDFE !important;
    font-size: 26px !important;
}

.el-button--default:hover{
    opacity: 0.8;
}

.el-tabs__item{
font-size:20px !important;
}

.fir /deep/ .el-input__inner{
    border-radius: 50px !important;
}

.input-box
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.forget-psd{
    color: #32BDFE;
}

.login-box{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 120%;
}

.el-message{
    margin-top: 40px;


}

.register{
    display: flex;
    justify-content: center;
    align-items: center;
}

.register1{
    color: #32BDFE;
}

.btn{
    display: flex;
    justify-content: center;
}



.username,.password{
    display: flex;
    width: 80%;
    margin-top:15px;
    margin-bottom: 12px;
    justify-content: center;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
    border-radius: 4px;
} 


.op{
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    /* justify-content: flex-end; */
    margin-bottom: 18px;

    
}


.login-logo {
    display: flex;
    justify-content: center;
    height: 60px;

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
