<template>
  <div>
    <headerComponent title='分类'>
      <span slot='left' onclick="window.history.go(-1)">返回</span>
    </headerComponent>
    <section class="novel-class">
       <h1>男生</h1>
        <div class="novel-grid">
          <div v-for="item in novelClassifyAll.male">
            <h3>{{item.name}}</h3>
            <span>{{item.bookCount}}本</span>
          </div>
        </div>
       <h1>女生</h1>
        <div class="novel-grid">
          <div v-for="item in novelClassifyAll.female">
            <h3>{{item.name}}</h3>
            <span>{{item.bookCount}}本</span>
          </div>
        </div>
      <h1>出版</h1>
      <div class="novel-grid">
        <div v-for="item in novelClassifyAll.press">
          <h3>{{item.name}}</h3>
          <span>{{item.bookCount}}本</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//获取数据
import novel from '@/api/novel.js'

import headerComponent from '@/components/header/index'

export default {
  name: 'index',
  data () {
    return {
      novelClassifyAll:[]
    }
  },
  mounted(){
    novel.getNovelClassifyAll(novelClassifyAll => {
      this.novelClassifyAll = novelClassifyAll;
    })
  },
  components:{
    headerComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../style/mixin";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .novel-class{
    margin-bottom:.5rem;
    h1{
      @include sc(.6rem,#939393);
      padding:.8rem;
      display: block;
    }
    .novel-grid{
      position: relative;
      display:flex;
      flex-wrap:wrap;
      div{
        width:33.33333333333%;
        position: relative;
        text-align: center;
        padding:.5rem 0;
      &:active{
        background: #F5F5F5;;
       }
        h3{
           @include sc(.7rem,#000);
        }
        span{
           @include sc(.6rem,#939393);
          display: block;
        }
        &:nth-child(3n):before{
            display: none;
         }
        &:before{
           @include borderRight();
         }
        &:after{
         @include borderBottom();
         }
      }
      &:before {
        @include borderTop();
       }
    }
  }

</style>
