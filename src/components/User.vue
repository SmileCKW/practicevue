<template>
  <div>
    <h2>我是用户界面</h2>

    <!-- 从方法中获取 -->
    <p>我是用户{{userID}}哦</p>

    <!-- 可以直接从route中获取 -->
    <p>我是用户{{$route.params.userID}}哦</p>
  </div>
</template>

<script>
  export default{
    name : 'User',
    computed : {
      userID(){
        return this.$route.params.userID;
      }
    }
  }

</script>

<style scoped>

</style>
