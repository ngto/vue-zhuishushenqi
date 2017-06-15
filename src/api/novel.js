
import axios from 'axios'

//本地服务器地址
const proxyServer = 'http://192.168.1.156:3000';

export default {
  getNovelClassifyAll (callback) {
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
  }
}
