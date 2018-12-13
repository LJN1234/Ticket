
import React,{ Component } from 'react'
import { Accordion, List } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';


import '../../style/common.scss'


class Nav extends Component {
    
    constructor(){
        super();
        this.state = {
            artCon:[
                {title:'演唱会',path:'/list'},
                {title:'音乐会/歌剧',path:'/list'},
                {title:'话剧/舞台剧',path:'/list'},
                {title:'音乐剧',path:'/list'},
                {title:'戏曲曲艺',path:'/list'},
                {title:'芭蕾舞/舞蹈',path:'/list'},
                {title:'相声/小品',path:'/list'},
                {title:'马戏/杂技/魔术',path:'/list'},
                {title:'综艺节目',path:'/list'},
                {title:'亲子家庭',path:'/list'}
            ],
            sportCon:[
                {title:'网球',path:'/list'},
                {title:'足球',path:'/list'},
                {title:'高尔夫球',path:'/list'},
                {title:'溜冰',path:'/list'},
                {title:'NBA/CBA/篮球',path:'/list'},
                {title:'赛车',path:'/list'},
                {title:'马术',path:'/list'},
            ],
            otherCon:[
                {title:'电影票',path:'/list'},
                {title:'景点门票',path:'/list'},
                {title:'展览',path:'/list'},
                {title:'运动休闲',path:'/list'},
                {title:'代金券',path:'/list'},
                {title:'会议/论坛',path:'/list'},

            ]
        }
    }
    gotopage = (key) => {
        console.log(key);
    }
     goHome(){
        let {history} = this.props;
        history.push({
            pathname:'/home',
        });
     } 
     goToLogin(){
        let {history} = this.props;
        history.push({
            pathname:'/login',
        });
     }
    render(){
        let artCon = this.state.artCon
        let sportCon = this.state.sportCon
        let otherCon = this.state.otherCon   
        return (
            <div className="nav">
                <div className="navList">
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.gotopage}>
                        <Accordion.Panel header="首页"></Accordion.Panel>
                        <Accordion.Panel header="北京"></Accordion.Panel>
                        <Accordion.Panel header="文艺演出">
                            <List className="my-list">
                                {artCon.map((artCon,ind)=>{
                                    return  <List.Item  onClick={this.goHome.bind(this)} className="every-list">{artCon.title}</List.Item>                                         
                                })}
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="体育赛事">
                            <List className="my-list">
                                {sportCon.map(sportCon=>{
                                    return  <List.Item>{sportCon.title}</List.Item>                                         
                                })}
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="其他">
                            <List className="my-list">
                                {otherCon.map(otherCon=>{
                                    return  <List.Item>{otherCon.title}</List.Item>                                         
                                })}
                            </List>
                        </Accordion.Panel>
                    </Accordion>
                </div>
                <div className="navBtn">
                    <button onClick={this.goToLogin.bind(this)}>登录</button>
                    <p>客服电话：400-880-2880</p>
                </div>
            </div>
        )
    }
}


let mapStateToProps=state=>({shownavStatus:state.commonReducer.shownavStatus});
Nav = connect(mapStateToProps)(Nav);

Nav = withRouter(Nav)
export default Nav;