import Vue from 'vue'
import App from './App.vue'

import HelloWorld from './components/HelloWorld'//引入组件

import VueRouter from 'vue-router'
import Index from './views/login/index'
import Login from './views/login/login'
import Homepage from './views/home/homepage'
import Register from './views/login/register'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Update from './views/home/update'
import Check from './views/home/check'

import Generate from './views/home/generate'
import All from './views/home/type/all'
import Degree from './views/home/type/degree'
import Job from './views/home/type/job'
import Language from './views/home/type/language'
import Other from './views/home/type/other'
import Skill from './views/home/type/skill'
import Mobile from './views/mobile'

import Common from './components/Common'
Vue.prototype.Common = Common;

import axios from 'axios'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios

axios.defaults.baseURL = 'http://59.77.134.155:8080'
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.use(VueRouter)


const  router =new VueRouter({//定义一个常量来配置路由
  routes:[
      {path:"/",redirect:"/index/login"},
      {path:"/mobile",component:Mobile},
      {path:"/index",component:Index,
        children: [
          {path:"login",component:Login},
          {path:"register",component:Register},
        ]},
      {path:"/update",component:Update},
      {path:"/check",component:Check},
      {path:"/generate",component:Generate,
        children: [
          {path:"all",component:All},
          {path:"degree",component:Degree},
          {path:"job",component:Job},
          {path:"language",component:Language},
          {path:"other",component:Other},
          {path:"skill",component:Skill}
        ]},
      {path:"/homepage",component:Homepage},//配置路径与对应组件名
      {path:"/HelloWorld",component:HelloWorld},//配置路径与对应组件名
  ],
   
  mode:"hash"//建议设置该属性，否则地址栏将出现“#”号，会影响后续编码
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/index/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next('/index/login')
  next()
})
axios.interceptors.request.use(config => {
  //为请求头对象，添加token验证的Authorization字段
  config.headers.token = window.sessionStorage.getItem("token");
  return config
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
