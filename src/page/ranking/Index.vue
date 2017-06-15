<template>
  <div>
    <section class="ranking-class">
      <headerComponent title='排行榜'>
        <!--<span slot='left' class="head_logo">ZSSQ</span>-->
      </headerComponent>
        <div class="tabs">
            <div class="tab-item" :class="topActive == 1 ? 'active':''" @click="topTagger(1)">男生</div>
            <div class="tab-item" :class="topActive == 2 ? 'active':''" @click="topTagger(2)">女生</div>
        </div>
      <div class="plan">
        <div class="left">
          <ul>
            <transition-group name="move" tag="p">
              <li v-for="(item,index) in ranking" :key="item" :class="index == leftActive ? 'active' : ''" @click="tagger(item._id,index)">
                  {{item.shortTitle}}
              </li>
            </transition-group>
          </ul>
        </div>
        <div class="right" id="rankRight">
          <ul>
            <transition-group name="list" tag="p">
                <li v-for="(item,index) in rankBooks" :key="item">
                <div class="list-item">
                  <!--<div class="left-img">
                    <img :src="clacImg(item.cover)" >
                  </div>-->
                  <div class="right-item">
                    <h4>{{item.title}}</h4>
                    <p><span>{{item.author}}</span><span>{{item.cat}}</span></p>
                    <p class="des">{{item.shortIntro}}</p>
                    <p><span><label>{{calcNum(item.latelyFollower)}}</label>万人气</span><span><label>{{item.retentionRatio}}%</label>读者留存</span></p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
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
        ranking:[],
        allRank:[],
        rankBooks:[],
        leftActive:0,
        topActive:1
    }
  },
  methods:{
    topTagger(index){
      this.topActive = index;
      this.ranking = index == 1 ? this.allRank.male:this.allRank.female;
      this.tagger(this.ranking[0]._id,0);
    },
    tagger(id,index){
      this.leftActive = index;
      novel.getRankById(id,rankbooks=>{
         this.rankBooks=rankbooks.ranking.books;
      });
      //滚动条回到顶部
      document.getElementById('rankRight').scrollTop =0;
    },
    calcNum(num){
      return num>10000 ? parseFloat(num /10000).toFixed(1) : num;
    },
    clacImg(imgUrl){
      return imgUrl.replace('/agent/','');
      //     return '';
    }
  },
  mounted(){
    novel.getRanking(ranking =>{
      this.allRank = ranking;
      this.ranking = this.allRank.male;
      this.tagger(ranking.male[0]._id,0);
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
  .ranking-class{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
  }
  .tabs{
    display: flex;
    position: relative;
    background-color:#f9f9f9;
    .tab-item{
      flex:1;
      display: flex;
      align-items: center;
      justify-content: center;
      @include sc(.6rem,#000);
      padding:.5rem 0;
      color: #969696;
      cursor: pointer;
      position: relative;
      &:nth-child(1):before{
           @include  borderRight($top:.4rem,$bottom:.4rem,$color:#e6e6e6);
       }
       &.active:after{
         height:2px;
         @include borderBottom($bw:2px,$color:#a80a0b);
       }
    }
    &:before{
      @include borderBottom($color:#e6e6e6);
     }
  }
  .plan{
     height:100%;
     display: flex;
    .left{
      flex:1;
      background-color: #f1f1f1;
      text-align: center;
      overflow-y: scroll;
      ul li{
        padding:.8rem 0;
        @include sc(.7rem,#7f7f7f);
        &.active{
            background-color: #ffffff;
           color: #a80a0b;
         }
      }
    }
    .right{
      flex:3;
      background-color: #ffffff;
      padding-left:.5rem;
      overflow-y: scroll;
    }
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  .move-enter-active, .move-leave-active{
    transition:all 1s;
  }
  .move-leave-active, .move-enter{
    transform:translateX(180px) rotate(180deg);
  }
  .list-item{
    display: flex;
    position: relative;
    padding:.5rem 0;
    .left-img{
      width:60px;
      height:80px;
      img{
        width:100%;
        height:100%;
      }
    }
    .right-item{
      flex:1;
      padding:0 .5rem;
      overflow:hidden;
      h4{
        font-size:.7rem;
        margin-bottom:.1rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
      }
      p,span{
          @include sc(.5rem,#bcbcbc);
          margin-bottom:.1rem;
      }
      p.des{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
      }
      p>span{
        padding:0 .5rem;
        position: relative;
        label{
         color: $baseBg;
          margin-right: .2rem;
        }
        &:nth-child(1){
         padding-left:0;
            &:before{
            @include borderRight($top:.1rem,$bottom:.08rem,$color:#a1a1a1);
            }
         }
      }
    }
    &:before{
     @include borderBottom();
     }
  }
</style>
