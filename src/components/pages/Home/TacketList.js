
import React, { Component } from 'react';
import '../../../style/home.scss'
import axios from 'axios'
import {withRouter} from 'react-router-dom';


class TacketList extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            //热门门票
            hotTicket:[],
        }
    }
    componentWillMount(){
		axios.get('/myapi/wapapi/hbztj.do',{
			params:{
                cityid:1,
				sign:'bb4284fa771000e8c0',
				time:1543729843
			}
		}).then(res=>{
            let data = res.data;
            // console.log(data)  
			this.setState({
				hotTicket:data,
            });
        });
    }
    handlerGotoDetails(hotTicket){
        //获取history
        // console.log(this.props);
        let {history} = this.props;
        // console.log(history);
        // console.log(hotTicket.urllink)
        var pid = hotTicket.urllink.split('/')[5]
        pid = pid.split('.')[0]
        // console.log(pid)
        history.push({
            pathname:'/detail/'+pid+'/'+hotTicket.cid,
        });
    } 
  render() {
    let tickets = this.state.hotTicket
    // console.log(tickets)
    return (         
        <div className="tacketList">
            <div className="listTitle">
                <i></i>
                <h3>热门</h3>
            </div>
            <div className="list">
                {tickets.map(tickets=>{
                    return <div className="listInfo" onClick={this.handlerGotoDetails.bind(this,tickets)}>
                        <ul>
                            <li >
                                <img src={tickets.thumbsrc} className="fl" />
                                <div className="info fl">
                                    <h4>{tickets.title}</h4>
                                    <p>{tickets.city}</p>
                                    <p>{tickets.price}</p>
                                    <span className="disc">售票中</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                })}
            </div>
        </div>
    );
  }
}

TacketList = withRouter(TacketList);
export default TacketList;
