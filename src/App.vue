<template>
<!-- <div> -->
<!-- 点击首页跳转，最终会被渲染成a标签 -->
<!-- <router-link to="/home" >首页</router-link> -->

<!-- tag可以让此节点渲染成任意一个DOM节点 -->
<!-- replace可以让页面不可以有返回 -->
<!-- active-class 可以定义当被点击时的active的class -->
<!-- <router-link tag='button' to="/about" replace>关于</router-link>
    <router-link tag='button' @click="handleProfileClick" replace>档案</router-link>
    <router-link :to="'/user/'+userID" replace>用户</router-link> -->
<!-- 通过方法进行跳转 -->
<!-- <button @click='homeClick'>首页2</button>
    <button @click='aboutClick'>关于2</button> -->
<!-- <button @click='userClick'>用户点击</button> -->
<!-- exclude可以排除某个组件，多个组件之间使用逗号隔开，include则是包含 -->
<!-- <keep-alive exclude="Profile,User"> -->
<!-- 占位符，使用子组件的<template>节点填充 -->
<!-- <router-view/>
    </keep-alive> -->
<!-- </div> -->
<div>
  <router-view></router-view>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <div slot="item-text">首页</div>
      <div slot="item-text-active">首页1</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="item-text">分类</div>
      <div slot="item-text-active">分类1</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="item-text">购物车</div>
      <div slot="item-text-active">购物车1</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="item-text">我的</div>
      <div slot="item-text-active">我的1</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: "app",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      userID: 'zhansan',
    }
  },
  methods: {
    homeClick() {
      // history.pushState(''); //绕过rout-link进行页面跳转
      //通过内置路由进行页面上的跳转 push=>pushState ，意味 着点击完后，可以返回
      this.$router.replace("/home") //使用replace更好
      // this.$router.push('/home')//可以使用backup返回
    },
    aboutClick() {
      this.$router.replace("/about")
      // this.$router.push('/about')
    },
    userClick() {
      this.$router.replace("'/user/'+userID")
    },
    handleProfileClick() {
      this.$router.replace("/profile", {
        path: '/profile',
        query: {
          name: 'why',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>
<style scoped>
/* 在style中引入样式，需要使用@import，而js中直接可以使用import引入 */
@import "./assets/css/base.css"

.active {
  color: red;
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>
