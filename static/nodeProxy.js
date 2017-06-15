/**
 * Created by admin on 2017/6/15.
 */
const express = require('express');
const request = require('request');
const app = express();

const proxyServer = 'http://api.zhuishushenqi.com';

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type, x-access-token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

//获取分类
app.get('/getClassify', (req, res, next) => {
  const url = proxyServer + '/cats/lv2/statistics';
  req.pipe(request(url)).pipe(res);
});
//获取排行榜类型
app.get('/getRanking', (req, res, next) => {
  const url = proxyServer + '/ranking/gender';
  req.pipe(request(url)).pipe(res);
});
//按id获取数据
app.get('/getRankById', (req, res, next) => {
  const url = proxyServer + '/ranking/'+ req.query.id;
  console.log(req.query.id);
  req.pipe(request(url)).pipe(res);
});

app.use('/', (req, res) => {
  const url = proxyServer + req.url;
  console.log(url);
  req.pipe(request(url)).pipe(res);
});

app.listen(3000, function () {
  console.log('proxy server started at: localhsot:3000');
});
