<template>
  <div>
    <section class="novel-class">
      <transition name="fade-in">
          <div class="header"  v-if="operation">
            <div class="header-left">
              <span slot='left' onclick="window.history.go(-1)">返回</span>
            </div>
            <h1>大主宰</h1>
            <div class="header-right">
            </div>
          </div>
      </transition>
      <v-touch class="content" @tap="operationAction($event)">
        <article>大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰大主宰</article>
      </v-touch>
      <transition name="fade-in">
      <footer  v-if="operation">
        <div class="item-1">
          目录
        </div>
        <div class="item-1">
          目录
        </div>
        <div class="item-1">
          目录
        </div>
      </footer>
      </transition>
    </section>
    <div class="mask" v-show="loadingFlag">
      <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
  </div>
</template>

<script>
import novel from '@/api/novel.js'
import headerComponent from '@/components/header/index'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'index',
  data () {
    return {
      bookChapter:[],
      //默认从第一章开始
      currentChapter:1,
      //缓存前五十章
      loadedChapters:[],
      bookChaptersContent:'',
      //显示操作界面
      operation:true,
      loadingFlag:true
    }
  },
  mounted(){
    novel.getBookContent(this.$route.params.bookId,bookContent => {
      this.bookChapter = bookContent.data.mixToc;
      this.loadedChapters = this.bookChapter.chapters.slice(0, 50);
      this.getBookChapterContent();
      this.loadingFlag = false;
    });
  },
  methods:{
    operationAction(){
        this.operation = !this.operation;
      console.log(1);
    },
    getBookChapterContent(){
//      novel.getBookChapterContent(this.loadedChapters[this.currentChapter].link).then(response => {
//        this.bookChaptersContent = response.data.chapter;
//        console.log(response.data.chapter);
//      }).catch(err => {
//        this.$Message.error('获取章节失败！');
//        console.log(err);
//      })
    }
  },
  components:{
    headerComponent,
    PulseLoader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../style/mixin";
  .header,footer{
    background: #000 !important;
    position: fixed;
    z-index: 1;
    height:2rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: height linear .5s;
  }
  .header{
     top: 0;
     left: 0;
     right:0;
   }
  footer{
    bottom: 0;
    left: 0;
    right:0;
    text-align: center;
    color: #ffffff;
  }
  article{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    padding:0 .5rem;
    font-size:.8rem;
    background: #a49d8d;
    color: #312114;
  }
  .fade-in-enter-active, .fade-in-leave-active {
      height:2rem;

  }
  .fade-in-enter, .fade-in-leave-active {
      height:0;
  }
  .header{
    align-items: center;
    background-color:$baseBg;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    font-size: 14px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
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
     background: url("../../assets/back.png") no-repeat center 15px;
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
  .item-1{
    flex:1;
    @include sc(.8rem,#fff)
  }
</style>
