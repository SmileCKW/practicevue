<template>
  <h2>首页</h2>

</template>

<script>
  import TabBar from '../../components/tabbar/TabBar'
  import TabBarItem from '../../components/tabbar/TabBarItem'
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
