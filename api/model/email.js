
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'qq',//邮箱的服务商
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "1173326187@qq.com", // 默认邮箱
        pass: 'armkluoubtdmjbfa' // //smtp 授权码
    }
});

function sendmail(email,msg){
    return new Promise((resolve,reject)=>{
        // 发送邮件相关信息
        var mailOptions = {
        from: '1173326187@qq.com',
        to: email, 
        subject: '图书管理系统邮箱验证', // 主题
        text:'您的验证码是:'+msg    // 内容
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {reject(error)}
            resolve('ok')
        })
    })
}

//sendmail('1173326187@qq.com','123')
module.exports={sendmail};