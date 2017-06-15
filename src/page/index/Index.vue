<template>
  <div>
    <headerComponent title='首页'>
       <!--<span slot='left' class="head_logo">ZSSQ</span>-->
    </headerComponent>
    <section class="novel-class">
      <div class="grid">
        <div class="grid-item">
          <router-link to="/classify">分类</router-link>
        </div>
        <div class="grid-item">
          <router-link to="/ranking">排行榜</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import headerComponent from '@/components/header/index'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted(){

  },
  components:{
    headerComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../style/mixin";
  .grid{
    position: relative;
    display: flex;
    flex-wrap:wrap;
    .grid-item{
      width:25%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding:1rem .5rem;
      position: relative;
      font-size:.8rem;
      &:before{
         content: '';
         position: absolute;
         right:0;
         top:0;
         bottom:0;
         border-right: 1px solid #f7f7f7;
       }
      &:after{
         content: '';
         position: absolute;
         left:0;
         right:0;
         bottom:0;
         border-bottom: 1px solid #f7f7f7;
       }
    }
    &:before {
       content: '';
       position: absolute;
       left: 0;
       right: 0;
       top: 0;
       border-top: 1px solid #f7f7f7;
     }
  }
</style>
