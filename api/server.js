'use strict'
const express = require('express');
const proxy = require('http-proxy-middleware');
var db = require('./model/dbConnect.js');
var bodyParser=require('body-parser');
var path=require('path');

let app = express();
//post参数解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.use(express './static')

// 设置跨域请求头信息
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});


// 服务器代理
app.use('/myapi',proxy({
    "target": "https://wap.chinaticket.com",   //目标地址
    "changeOrigin": true,    //是否允许跨域
    "pathRewrite": {        //重写请求地址
      "^/myapi" : "/"
    }
}))

app.use('/api/user',require('./user.js')); 

app.listen(6006,function(){
    console.log('Server start 6006')
})