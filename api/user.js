const express = require('express');
const Router = express.Router();
const userModel = require('./model/userModel.js');
const util=require('./utils/util.js');
const mail=require('./model/email.js')


 let obj={}
Router.post('/getcode',(req,res)=>{
	var {email}=req.body
	if (!email||email=="") {
		return res.send(util.sendData(-1,'参数错误',null))
	}
    var num=(parseInt((Math.random()*9000)+1000)).toString()
    //生成验证码
	mail.sendmail(email,num)
	.then((resolve)=>{
		obj[email]=num; //保存验证码信息
		setTimeout(function(){obj[email]=null},300000)
		res.send(util.sendData(0,'验证码已发送',null))
	})
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'验证码发送失败',null))
	})
	
})

Router.post('/reg',function(req,res){
	var {userName,userPass,code} = req.body;
	if (obj[userName]!==code) { 
		return res.send(util.sendData(-1,'验证码错误',null))
	}
	userModel.find({userName})
	.then((data)=>{
		if(data.length>=1){
			throw new Error("用户名已存在")
		}
	    return userModel.insertMany({userName,userPass})
	})
	.then((data)=>{
		res.send(util.sendData(0,'注册成功，请前往登录',null))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'注册失败，请重新注册',null))
	})
})

Router.post('/login',(req,res)=>{
	let {userName,userPass}=req.body
	userModel.find({userName,userPass})
	.then((data)=>{
	   if (data.length>=1 && data[0].userPass == req.body.userPass ) { 
	   		return res.send('登录成功')
   		}
	   	res.send("登录失败")
	})
	
})

module.exports=Router;  