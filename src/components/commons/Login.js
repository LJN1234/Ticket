import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import MineHeader from './MineHeader'
import '../../style/mine.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowLeft)
// import { faQq,faWeibo,faAlipay } from '@fortawesome/free-solid-svg-icons'
// library.add(faQq,faWeibo,faAlipay)


class Login extends Component{
    goToReg(){
        let {history} = this.props;
        history.push({
            pathname:'/register',
        });
    }
    render(){
        return (
            <div>
                <MineHeader></MineHeader>
                <div className="login">
                    <div className="myLogin">
                        <div className="loginCon">
                            <input type="text" placeholder="请输入手机/邮箱" />
                            <input type="text" placeholder="请输入密码" />
                            <p>忘记密码?</p>
                        </div>
                        <div className="loginBtn">
                            <input type="button" className="active" value="登录" />
                            <input type="button"  onClick={this.goToReg.bind(this)} value="注册" />
                        </div>
                    </div>
                    <div className="otherLogin">
                        <h4>第三方登录</h4>
                        <p>
                            <span><FontAwesomeIcon icon="arrow-left" /></span>
                            <span><FontAwesomeIcon icon="arrow-left" /></span>
                            <span><FontAwesomeIcon icon="arrow-left" /></span>
                            {/* <span><FontAwesomeIcon icon="qq" /></span>
                            <span><FontAwesomeIcon icon="weibo" /></span>
                            <span><FontAwesomeIcon icon="alipay" /></span> */}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

Login = withRouter(Login);
export default Login