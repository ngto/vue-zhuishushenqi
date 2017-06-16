<template>
  <div>
    <headerComponent :title='bookInfo.title'>
      <span slot='left' onclick="window.history.go(-1)">返回</span>
    </headerComponent>
    <section class="book-class">
        <div class="bookInfo">
              <img v-if="bookInfo" :src="bookInfo.cover.indexOf('http') === -1 ? staticPath + bookInfo.cover : bookInfo.cover.slice(bookInfo.cover.indexOf('http')).trim()" onerror="javascript:this.src='http://img.zcool.cn/community/01cbd85562cff30000009c5063f324.jpg'">
             <h3>{{bookInfo.title}}</h3>
             <p class="text-b">{{bookInfo.author}}</p>
             <p><span  class="border">{{bookInfo.cat}}</span><span class="border">{{bookInfo.updated | ago}}</span><span class="border">{{wordCount}}万字</span></p>
             <p><span :class="bookInfo.allowMonthly ? 'bg book-yn ' : 'book-yn'">{{ !bookInfo.allowMonthly ? "不支持包月" : " 支持包月"}}</span><span :class="bookInfo.allowVoucher ? 'bg book-yn ' : 'book-yn'">卷</span><span :class="bookInfo.allowBeanVoucher ? 'bg book-yn' : 'book-yn'">豆</span></p>
        </div>
      <div class="book-operation">
        <mt-button type="default" :class="bookFlag ? 'noOrYue' : ''" @click="bookChange">{{ !bookFlag ? "不追了" : " 加追书"}}</mt-button>
        <mt-button type="danger">开始阅读</mt-button>
      </div>
      <div class="book-des">
         <div>
           <p>追书人气</p>
           <p>{{bookInfo.latelyFollower}}</p>
         </div>
        <div>
          <p>读者留存率</p>
          <p>{{bookInfo.retentionRatio}}%</p>
        </div>
        <div>
          <p>更新字数/天</p>
          <p>{{bookInfo.serializeWordCount}}</p>
        </div>
      </div>
      <div class="book-tags">
        <span v-for="(tag, index) in bookInfo.tags" :key="index" class="tag">{{tag}}</span>
      </div>
      <div class="book-longIntro">
        <p>{{bookInfo.longIntro}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import novel from '@/api/novel.js'
import headerComponent from '@/components/header/index'
import moment from 'moment'

export default {
  name: 'index',
  data () {
    return {
        bookInfo:'',
        staticPath: 'http://statics.zhuishushenqi.com/',
        bookFlag:true,
    }
  },
  mounted(){
    this.getBookById(this.$route.query.bookId);
  },
  methods:{
    getBookById(bookId){
      console.log(bookId);
      novel.getBookById(bookId,book => {
        this.bookInfo = book.data;
        console.log(book.data);
      })
    },
    bookChange(){
       this.bookFlag = !this.bookFlag;
    }
  },
  computed:{
    wordCount() {
      return parseInt(this.bookInfo.wordCount / 10000, 10);;
    }
  },
  filters: {
    ago(time) {
      //设置显示中文
      moment.lang('zh-cn');
      return moment(time).fromNow().trim();
    }
  },
  components:{
    headerComponent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../style/mixin";
  .book-class{
   background-color: #e5e5e5;
  }
  .bookInfo{
    padding:.5rem .8rem;
    background-color: #ffffff;
    img{
      width:3rem;
      height:4rem;
      float: left;
      margin-right:.8rem;
       box-shadow:1px 1px 2px #7f7f7f;
    }
    h3{
      @include sc(.9rem,#000);
    }
    h3,p{
      margin-bottom:.15rem;
    }
    p.text-b{
      @include sc(.6rem,$baseBg);
    }
    p{
      font-weight: 500;
      line-height:.6rem;
      span{
         position: relative;
         @include sc(.6rem,#7f7f7f);
        &.border{
           padding:0 .3rem;
         }
         &.border:before{
          @include borderLeft($top:.2rem,$bottom:.1rem,$color:#7f7f7f);
         }
         &:first-child{
           padding-left:0;
          margin-left:0;
            &:before{
            display: none;
            }
         }
      }
    }
  }
  p>span{
    @include sc(.6rem,#7f7f7f);
    &.book-y,&.book-yn{
         display: inline-block;
         @include sc(.5rem,#7f7f7f);
         box-sizing: border-box;
         padding:.1rem !important;
         border-radius: .15rem;
         border:1px solid #e5e5e5;
         margin:0 .2rem;
       }
      &.book-y{
         margin-left:0;
         position: relative;
     }
    &.book-y:before{
     @include borderLeft($top:.2rem,$bottom:.1rem,$color:#7f7f7f);
     }
    &.book-yn{
       background-color: #e5e5e5;
       color: #ffffff;
       border-color: #e5e5e5;
     }
  }
  .mint-button--danger {
    color: #fff;
    background-color: $baseBg;
  }
  .book-operation{
    display: flex;
    margin-bottom:.5rem;
    padding:0 .8rem;
    background-color: #ffffff;
    button{
      flex:1;
      font-size:.7rem;
      margin:1rem 0;
      &:first-child{
        margin-right:.5rem;
       }
    }
  .mint-button--default.noOrYue{
      border:1px solid $baseBg;
      color: $baseBg;
      background-color: #ffffff;
    }
  }
.book-des{
  display: flex;
  padding:.5rem .8rem;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  &:before{
      @include borderBottom($left:.8rem);
   }
  div{
    text-align: center;
    line-height:1rem;
    @include sc(.6rem,#000)
    flex:1;
  }
}
  .book-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: .6rem 0 0;
    padding:.5rem .8rem;
    position: relative;
    background-color: #ffffff;
    &:before{
     @include borderBottom($left:.8rem);
     }
  }
  .tag {
    padding: .2rem .4rem;
    color: #fff;
    border-radius: .1rem;
    margin-bottom: .4rem;
    @include sc(.6rem,#fff)
    margin-left: .4rem;
  }

  .tag:nth-child(1n) {
    background: burlywood;
  }

  .tag:nth-child(2n) {
    background: cadetblue;
  }

  .tag:nth-child(3n) {
    background: coral;
  }

  .tag:nth-child(4n) {
    background: cornflowerblue;
    }
    .book-longIntro{
      padding:.5rem .8rem;
      position: relative;
      @include sc(.6rem,#000)
      background-color: #ffffff;
      margin-bottom: .5rem;
      p{
        /*overflow:hidden;*/
        /*text-overflow:ellipsis;*/
        /*display:-webkit-box;*/
        /*-webkit-box-orient:vertical;*/
        /*-webkit-line-clamp:3;*/
      }
    }
  .bg{
    background-color: $baseBg !important;
    border-color: $baseBg !important;
  }
</style>
