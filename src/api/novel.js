
import axios from 'axios'

//本地服务器地址
//const proxyServer = 'http://192.168.1.156:3000';
const proxyServer = 'http://35.189.165.140:3000';
export default {
  /*getNovelClassifyAll (callback) {
    axios.get(proxyServer + '/getClassify').then(res => {
      callback(res.data);
    })
  },
  getRanking(callback){
     axios.get(proxyServer + '/getRanking').then( res =>{
       callback(res.data);
     })
  },
  getRankById(id,callback){
    axios.get(proxyServer + '/getRankById?id='+id).then( res => {
      callback(res.data);
    })
  }*/
  //获取全部分类
  getNovelClassifyAll (callback) {
    axios.get(proxyServer + '/cats/lv2/statistics').then(res => {
      callback(res.data);
    })
  },
  //获取排行榜
  getRanking(callback){
    axios.get(proxyServer + '/ranking/gender').then( res =>{
      callback(res.data);
    })
  },
  //获取分类小说
  getRankById(id,callback){
    axios.get(proxyServer + '/ranking/'+id).then( res => {
      callback(res.data);
    })
  },
  getBookById(id,callback){
      axios.get(proxyServer + '/book/'+id).then( res =>{
        callback(res)
      })
  }

}
