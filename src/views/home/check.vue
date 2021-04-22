<template>
  <div >
    <div class="header" style="justify-content: space-around;">
      <div class="logo">
        <img src="../../assets/home_logo.png" />
      </div>
      <nav-bar></nav-bar>
      <div class="user">
        <div class="ava">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="user-btn">
          <el-button type="text" style="padding-bottom:2px;">{{this.userName}}</el-button>
          <el-button size="mini" style="margin-bottom:2px;padding-top:4px;padding-bottom:4px" round>{{this.userInfo}}</el-button>
        </div>
      </div>
    </div>
        <div class="container1">
        <div class="page" v-loading="loading"
            element-loading-text="核验中">
            <div class="title">
              <p>核验证书</p>
            </div>
            <div class="check">
                <el-input placeholder="请输入证书查询序列号" v-model="input" clearable></el-input>
              <div>
                <el-button slot="append" @click="check" icon="el-icon-search" style="background-color:#36B9FF; color:white"> </el-button>
              </div>
            </div>
            <div class="result"   v-show="isShow">
                <div class="title1">
                  <p>核验结果</p>
                </div>
                  <div class="detail" v-bind="detail">
                    <p>证书持有者:{{this.detail.name}}</p>
                    <p>证书存储区块号:{{this.detail.id}}</p>
                    <p>证书类型:{{this.detail.type}}</p>
                    <p>申请时间:{{this.detail.time}}</p>
                  </div>

                <el-button type="text" style="padding-left:30px;padding-top:0px">点击查看原文件</el-button>
                <template>
                  <p class="p-valid" v-if='isValid == true'>此验证码有效!</p>
                  <p class="p-valid" v-else >此验证码无效!</p>
                </template>
                
            </div>


        </div>
        </div>
  </div>
  
</template>

<script>
import NavBar from '../../components/NavBar.vue'
export default {
  components: { NavBar },
  data() {
      return {
        input:'',
        detail:{
          name:"王小明",
          id:"12wfw33rgrev",
          type:"学历学位证书",
          time:"2021/05/19 16:07:13"
        },
        userName:'',
        isShow:false,
        
        loading: false,
        isValid:true,
        userInfo:'个人信息'

      };
    },
    methods: {
      check(){
        this.isShow=false;
        this.loading=true;

        setTimeout(()=>{
          this.loading=false;
          this.isShow=true;
        },1000);

      
      }
    },
    created(){
    this.userName=this.Common.userName
    if(this.Common.userType == 0)
    {
      this.userInfo = '个人信息'
    }
    else
    {
      this.userInfo = '权威机构'
    }
  }
}
</script>

<style>
.p-valid{
  color:#F86767;
  font-size: 28px;
  text-align: right;
}
.logo
{
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 200px;
}



.container1
{
  display: flex;
  justify-content: center;
  align-content: center;
  height: 1600px;
  background-color: #F7F9FB;
}
.header{
  display: flex;
  height: 60px;
  justify-content: center;
  align-content: center;
  box-shadow: 0px 3px 3px 0px rgba(86, 186, 240, 1);
  border: 1px solid rgba(255, 255, 255, 100);
}

.detail{
  padding:30px;
  padding-top: 0;
}

/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
} */

.detail p{
  color: rgba(102, 102, 102, 100);
  font-size: 16px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}

.title p{
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 24px;
  margin-top: 50px;
}

.title1 p{
  margin-left: 30px;
  margin-top: 20px;
  font-size: 20px;
}

.page{
  width: 60%;
  margin-top: 40px;
  border: 1px solid rgba(222, 222, 222, 53);
  box-shadow: 0px 1px 1px 0px rgba(86, 186, 240, 5);
  background-color: white;
}

.result{
  width: 60%;
  margin-left: 20%;
  margin-top: 60px;
  border-radius: 25px;
  box-shadow: 0px 4px 22px 1px rgba(221, 237, 237, 100);
  border: 1px solid rgba(255, 255, 255, 100);
}

.check{
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60%;
  margin-left: 20%;
}

</style>