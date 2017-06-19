<template>
  <div>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
   @import "style/common.scss";
   .mask{
     position:fixed;
     top:0;
     bottom:0;
     left:0;
     right:0;
     z-index:9999;
     background-color: #ffffff;
     display: flex;
     align-items: center;
     justify-content: center;
   }
  .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .4s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
