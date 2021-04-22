<template>
  <div>
      <div class="header">
        <div class="logo">
            <img src="../../assets/home_logo.png" />
        </div>
        <!-- <nav-bar :userType=this.userType></nav-bar> -->
        <nav-bar></nav-bar>
        <div class="user">
            <div class="ava">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div class="user-btn">
              <el-button type="text" style="padding-bottom:2px;">{{userName}}</el-button>
              <el-button size="mini" style="margin-bottom:2px;padding-top:4px;padding-bottom:4px" round @click="toMobile">{{userInfo}}</el-button>
            </div>
        </div>
      </div>
      <div>
          <img class="img-1" src="../../assets/home_1.png" />
      </div>
      <img class="img-2" src="../../assets/home_bg.png" />
      <div class="bottom">
        <div class="left">
            
            <p class="p1">其他证书</p>
            <p class="p2">公益行业证书</p>
            <p class="p3">技能类证书</p>
            <p class="p4">学历学位证书</p>
            <p class="p3">职业资格证书</p>
            <p class="p2">语言类证书</p>
            <p class="p1" style="margin-top:30px">其他证书</p>
            
        </div>
        <div class="right">
          <p class="p-title">区块链存证方案简述</p>
          <div class="adv">
            <div class="p-adv">
              <p class="circle"></p>
              <p class="text-adv">难篡改</p>
            </div>
            <div class="p-adv">
              <p class="circle"></p>
              <p class="text-adv">可追溯</p>
            </div>
            <div class="p-adv">
              <p class="circle"></p>
              <p class="text-adv">人性化</p>
            </div>
          </div>
          <div class="adv">
            <div class="p-adv">
              <p class="circle"></p>
              <p class="text-adv">去中心化认证管理</p>
            </div>
            <div class="p-adv">
              <p class="circle"></p>
              <p class="text-adv">数据分布式存储</p>
            </div>
            <div class="p-adv">
              <p class="circle"></p>
              <p class="text-adv">哈希加密算法</p>
            </div>
          </div>
            
          <div class="d-detail">
            <p class="p-detail">{{this.detail}}</p>
          </div> 
        </div>
      </div>


  </div>
</template>


<script>
import NavBar from '../../components/NavBar.vue'

export default {
  components: { NavBar },
  data(){
    return{
    userName:'',
    userInfo:'个人信息',  
    
    // userType:this.$route.query.userType,
    detail:"本项目利用基于 Vnt Chain 的去中心化区块链网络、Docker 分布式部署、JWT 身份 安全验证和图像识别技术实现了对学历学位证书真伪性的核验与管理。利用区块链数据 的分布式存储、去中心化、哈希加密、难篡改、可追溯等特性，对学历学位获得过程进 行溯源。同时，本项目提供更加舒适便捷、人性化的证书上传和证书核验方式，旨在解 决传统纸质或电子证书不易保存、验证可靠性低、普遍认可性低等难题，为权威机构和 企业、个人用户创造更加便捷友好的证书发布、证书管理、证书核验平台。",
    navMenuData:[{
        title: '首页',
        path: '/homepage'
      }, {
        title: '证书核验',
        path:'/check'
      }]
    }
    
    
  },
  methods:{
    toMobile(){
      this.$router.push({path:'/mobile'})
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

<style scoped>
.d-detail{
  margin-left: 30px;
  margin-right: 280px;
  margin-top: 25px;
}
.p-detail{
  font-size: 18px;
  color: #222222;
}

.adv{
  display: flex;

}
.p-adv{
  display: flex;
  margin-left: 30px;
}
.text-adv{
  color:#3F51B5;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 0px;
}

.circle{
  background-color: rgba(50, 189, 254, 100);
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-top: 18px;
  margin-bottom: 6px;
}

.p-title{
  color: #222222;
  font-size: 26px;
  margin-top: 55px;
}

.p1{
  margin-top: 60px;
  color: #7D8D95;
  margin-left: 190px;
  font-size: 22px;
  opacity: 0.63;
}

.p2{
  margin-top: 30px;
  color: #7D8D95;
  margin-left: 230px;
  font-size: 22px;
  opacity: 0.63;
}

.p3{
  margin-top: 30px;
  color: #7D8D95;
  margin-left: 270px;
  font-size: 22px;
}

.p4{
  margin-top: 30px;
  color: #36B9FF;
  margin-left: 370px;
  font-size: 26px;
}

.left{
  flex:4;
}

.right{
  flex: 6;
}
.bottom{
  display: flex;

}


/* .el-button{
  border-color: #36B9FF;
  background-color: #36B9FF;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
} */


.login{
  display: flex;

}

.img-1
{
    position: relative;
    width: 100%;
    height: 46%;

}

.img-2{
  position: absolute;
  top: 44.15%;
  width: 100%;
  height: 55%;
  z-index: -1;
  object-fit: cover;
}

.logo
{
  height: 100%;
  display: flex;
  width: 200px;
  justify-content: center;
  align-content: center;
}

.header{
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 60px;
}

.mail{
  display: flex;
  justify-content: center;
  align-content: center;
  padding-left: 30px;
}

.login-btn{
  padding-left: 12px;
  padding-top: 12px;
}
</style>