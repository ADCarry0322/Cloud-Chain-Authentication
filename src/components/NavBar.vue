<template>
  <div>
      
    <el-menu router :default-active="$route.path" class="el-menu-demo first" mode="horizontal" @select="handleSelect1" active-text-color="#fff">

      <template v-for="(item,index1) in nav_menu_data">
        <el-menu-item :index = "item.path1" :key = "index1">
          {{item.title}}
        </el-menu-item>
      </template>

    </el-menu>
  </div>
</template>

<script>

export default {
    name:'NavBar',
    data(){
    return{
      path1: '/homepage',
      
      nav_menu_data: [{
        title:String,
        path1:String
      }]
        
      }
    },
    props:{
      userType:Number
    },

    methods: {
      handleSelect1(key, keyPath) {

        console.log(key, keyPath);
      },
      onRouteChanged () {
      let that = this
      that.path1  = that.$route.path1
      },

    },
    watch: {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'onRouteChanged'
      },
    created () {
      //this.onRouteChanged()
      if(this.Common.userType == 0)
      {
        this.nav_menu_data = [{
        title: '首页',
        path1: '/homepage'
      }, {
        title: '生成证书',
        path1: '/generate/all'
      }, {
        title: '证书核验',
        path1:'/check'
      }]
      }
      else{
        this.nav_menu_data = [{
        title: '首页',
        path1: '/homepage'
      }, {
        title: '证书上链',
        path1: '/update'
      }, {
        title: '证书核验',
        path1:'/check'
      }]
      }
    }
}
</script>

<style scoped>
/* .el-menu-item {
  padding: 0 40px;
  font-size: 16px;
} */
.el-menu--horizontal>.el-menu-item.is-active{
 border-bottom-color:#36B9FF
}

</style>