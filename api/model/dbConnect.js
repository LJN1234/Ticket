var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookadmin', { useNewUrlParser: true });//链接数据库

var db = mongoose.connection;//创建数据库对象

//监听数据库链接
db.on('error',function(){ 
	console.log ("数据库未连接")
});
db.on('open', function() {
  console.log("数据库已连接!")
});
 db.on('disconnected', function () {
     console.log("数据库连接断开");
 });
