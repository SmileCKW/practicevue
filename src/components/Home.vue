<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
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
    <!-- <h2>我是首页</h2>
    <p>我是首页哦</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
  import TabBar from './tabbar/TabBar'
  import TabBarItem from './tabbar/TabBarItem'
  export default{
    name:"Home",
    components:{
      TabBar,
      TabBarItem
    },
    created(){
      //document.title='home页'  //document对象
    },
    destoryed(){

    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
  }
</style>
