<template>
  <div class="header">
    <div class="header-left">
      <slot name='left'></slot>
    </div>
     <h1>{{title}}</h1>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  props: ['title'],
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../style/mixin.scss";
    .header{
      align-items: center;
      background-color:$baseBg;
      box-sizing: border-box;
      color: #fff;
      display: flex;
      font-size: 14px;
      height: 2rem;
      line-height: 1;
      padding: 0 10px;
      position: relative;
      text-align: center;
      white-space: nowrap;
      .header-left{
        text-align: left;
        -webkit-box-flex: .5;
        -ms-flex: .5;
        flex: .5;
      }
    .header-right{
        text-align: right;
        -webkit-box-flex: .5;
        -ms-flex: .5;
        flex: .5;
    }
    h1{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: inherit;
      font-weight: 400;
      flex: 1;
      @include sc(.8rem,#fff);
    }
   }
</style>
