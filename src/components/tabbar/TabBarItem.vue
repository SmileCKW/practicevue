<template>
  <div class='tab-bar-item' @click="itemClick">
    <div :style="activeStyle" v-if="!isActive" >
      <slot name='item-text'></slot>
    </div>
    <div :style="activeStyle" v-else="isActive" >
      <slot name='item-text-active'></slot>
    </div>
  </div>
</template>


<script>
  export default{
    name:"TabBarItem",
    props:{ //定义一个参数，当外层需要跳转进来时，需要传递的参数
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive: false
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        console.log("path:"+this.path)
        // this.isActive=!this.isActive
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
  }

  .active{
    color: red;
  }
</style>
