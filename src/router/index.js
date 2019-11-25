//配置路由相关信息

import VueRouter from 'vue-router' //从安装的路由中导入
import Vue from 'vue'
//非懒加载
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//懒加载
const Home = () => import('../views/home/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../views/profile/Profile')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')

//1、通过Vue.use（插件），安装插件
Vue.use(VueRouter)

//2、创建路由对象
const routes = [
  {
    path:'',  //缺省值，即一进入就是此url,通常设置主页
    redirect:'/home' //重定向到home页面
  },
  {
    path:"/home",
    component:Home,
    meta:{
      title:'首页'
    }
    // children:[
    //   {
    //     path:"news",//不需要在前面加 /
    //     component:HomeNews
    //   },
    //   {
    //     path:"message",//不需要在前面加 /
    //     component:HomeMessage
    //   }
    // ]
  },{
    path:"/about",
    component:About,
    meta:{
      title:'关于页'
    },
    beforeEnter:(to,from,next)=>{
      next()
    }
  },{
    path:'/user/:userID',//可以定义url为 /user/userID --动态路由
    component:User,
    meta:{
      title:'用户页'
    },
  },{
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案页'
    },
  },{
    path:'/cart',
    component:Cart,
    meta:{
      title:'购物车'
    },
  },{
    path:'/category',
    component:Category,
    meta:{
      title:'分类'
    },
  }

]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',  //html5的history模式，默认是哈希模式
  linkActiveClass:'active'
})

//前置守卫
router.beforeEach((to, from, next) => {
    //从from到to
    document.title=to.matched[0].meta.title
    next()
})

//后置钩子
router.afterEach((to, from) => {

})

//3、在router对象传入到Vue实例中
export default router //先导出来
