<template>
  <div>
    我是Profile组件
    <span>接受到到参数为{{$route.query.name}}</span>
    <span>{{$route.query.age}}</span>
    <span>{{$route.query.height}}</span>
  </div>
</template>

<script>
  export default{
    name : 'Profile',
  }

</script>

<style scoped>

</style>
