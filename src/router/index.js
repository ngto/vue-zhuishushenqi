import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Classify from '@/page/classify/index'
import Ranking from '@/page/ranking/index'
import Book from '@/page/book/index'
import BookContent from '@/page/bookContent/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  } ,
    {
      path: '/book/:bookId',
      name: 'book',
      component: Book
    },
    {
      path: '/bookContent/:bookId',
      name: 'bookContent',
      component: BookContent
    }
  ]
})
