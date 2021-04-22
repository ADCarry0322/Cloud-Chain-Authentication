<template>
    <div>
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
            <el-button type="text" style="padding-bottom:2px;">{{userName}}</el-button>
            <el-button size="mini" style="margin-bottom:2px;padding-top:4px;padding-bottom:4px" round>个人用户</el-button>
          </div>
        </div>
      </div>
      <div class="container1">
        <div class="left-nav">
          <el-menu :default-active="path" class="el-menu-vertical-demo" @select="handleSelect" router>
                <template v-for="(item,index) in nav_menu_data">
                  <el-menu-item :index = "item.path" :key = "index" style="border-radius:25px 0px 25px 0px">
                    <i :class="item.logo" > </i>
                    {{item.title}}
                  </el-menu-item>
                </template>

              </el-menu>
        </div>
        <div class="page" style="display:flex; justify-content:center;padding:0px" v-loading="loading"
            element-loading-text="证书加载中">

            <router-view v-show="show"></router-view>

        </div>
        <div class="right1">
          <div class="top">
              <p style="padding-top:6px;padding-right:50px">查询</p>
              <div class="clear-btn">
                <el-button type="text" @click="clear">重置</el-button>
              </div>
                
          </div>
          <el-divider></el-divider>
          <div class="input">
              <el-input v-model="input" placeholder="请输入关键字"></el-input>
              <div class="top" style="padding-top:40px">
                  <el-button type="primary" plain>确认</el-button>
              </div>
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
        input: '',
        path:'/generate/all',
        path1:'',
        userName:this.Common.userName,
        nav_menu_data: [{
          title:'所有证书',
          path:'/generate/all',
          logo:'el-icon-folder-opened'
        },{
          title:'学位学历证书',
          path:'/generate/degree',
          logo:'el-icon-medal-1'
        },{
          title:'技能类证书',
          path:'/generate/skill',
          logo:'el-icon-trophy-1'
        },{
          title:'职业资格证书',
          path:'/generate/job',
          logo:'el-icon-postcard'
        },{
          title:'语言类证书',
          path:'/generate/language',
          logo:'el-icon-chat-dot-round'
        },{
          title:'其他证书',
          path:'/generate/other',
          logo:'el-icon-paperclip'
        }],
        show:false,
        listData:[
          {
            time:'2020-6-28',
            typename:'XX大学学术型硕士学位证书',
            number:'1566'
          },
          {
            time:'2019-03-03',
            typename:'计算机二级证书',
            number:'12576'
          },
          {
            time:'2002-06-18',
            typename:'潜水证书',
            number:'1566'
          },
          {
            time:'2018-07-02',
            typename:'会计从业资格证书',
            number:'1566'
          },
          {
            time:'2020-6-28',
            typename:'大学英语四级证书',
            number:'1566'
          },
          {
            time:'2020-6-28',
            typename:'XXX证书',
            number:'1566'
          },
          {
            time:'2020-6-28',
            typename:'XX大学专业型硕士学位证书',
            number:'1566'
          },
          ],
        loading:false,

      }
    },
    methods:{
      clear(){
        this.input=""
      },
      handleSelect(key, keyPath) {
        this.loading=true;
        this.show=false;
        setTimeout(()=>{
          this.loading=false;
          this.show=true;
        },1000);
        console.log(key, keyPath);

      },
      onRouteChanged () {
      let that = this
      that.path  = that.$route.path
      },
    },
    watch: {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'onRouteChanged'
    },
    created () {
      this.onRouteChanged()
    }

}
</script>

<style>
/* 修改导航栏样式 */
.el-menu-item.is-active {
      background-color: #36B9FF !important;
      color: #fff;
      /* border-bottom: none!important; */
      
}

.el-menu.el-menu--horizontal{
  border: none;
}
.el-menu-vertical-demo.el-menu{

  border: 1px solid rgba(222, 222, 222, 53);
  border-radius: 25px 0px 0px 25px ;
}
.el-menu-item {
  padding: 0 40px;
  font-size: 16px;
}

.el-button--text{
  font-size: 16px;
  color: #36B9FF;
}

.el-button--text:hover,.el-button--primary.is-plain:hover{
  color: #36B9FF;
  opacity: 0.8;
}

.el-button--primary.is-plain
{
  background-color: #36B9FF;
  color: #fff;
  border-color: #36B9FF;
}

.el-button--primary.is-plain:hover{
  background-color: #36B9FF;
  color: #fff;
  border-color: #36B9FF;
  opacity: 0.8;
}

/* .v-modal{
  opacity: 0;
} */
.logo
{
  height: 100%;
  display: flex;
  width: 200px;
  justify-content: center;
  align-content: center;
}
.list{
  display: flex;
  justify-content: space-between;
}

.right1{
  margin-top:40px;

  margin-left:25px;
  height:300px;
  padding:20px;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(165, 164, 164, 0.4);
  border: 1px solid rgba(222, 222, 222, 53);
  border-radius: 25px;
  /* padding:25px */
}

.time-btn{
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  align-items: flex-end;
}

.type{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;

}

.left-nav{
  margin-top: 40px;
  margin-right:10px
}



.input{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding:12px
}


.top{
    display: flex;
    justify-content: center;
    align-content: center;

}

.clear-btn{

  padding-left: 90px;
  padding-top: 12px;
}

</style>