<template>
  <div class="header">
    <div class="header-left">
      <slot name='left'></slot>
    </div>
     <h1>{{title}}</h1>
    <div class="header-right">
      <slot name='right'></slot>
    </div>
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
        span{
          color: #ffffff;
          display: inline-block;
          position: relative;
          display: flex;
          padding-left:16px;
          &:before{
             content: '';
             position: absolute;
             left:0;
             top:0;
             bottom:0;
             width:16px;
             background: url("../../assets/back.png") no-repeat center 14px;
           }
        }
        height:2rem;
        line-height:2rem;

      }
    .header-right{
        text-align: right;
        -webkit-box-flex: .5;
        -ms-flex: .5;
        flex: .5;
       color: #ffffff;
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
