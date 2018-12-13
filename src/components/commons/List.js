
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {changePage} from '../../actions';

import '../../style/common.scss'

class List extends Component {
    constructor() { 
        super(); 
        this.state = {
            result:[],
            page:1
        }
    }
    handlerGotoDetails(tickets){
        //获取history
        // console.log(this.props);
        let {history} = this.props;
        history.push({
            pathname:'/detail/'+tickets.pid,
        });
    }
    goToMore(){
        let res1 = this.props.resultState;
        let res2 = this.state.result;
        if(this.state.result.length==0){
            this.setState({
                result:res1
            })
        }
        let nexePage = this.state.page+1;
        this.setState({
            page:nexePage
        },()=>{
            axios.get('/myapi/wapapi/searchshows.do',{
                params:{
                    cityid:1,
                    kw:"音乐",
                    page:nexePage,
                    sign:'1ef59d37454f6ea3ab',
                    time:1544148448
                }
            }).then(res=>{
                let data = res.data.datas;
                console.log(data)  
                this.setState({
                    result:this.state.result.concat(data)
                });
            }); 
        })    
    }
   
    render() { 
        var tickets;
        if(this.state.result.length==0){
            tickets = this.props.resultState;
        }else{
            tickets = this.state.result
        }
        // console.log(tickets) 
        return (        
            <div className="resultList">
                    <div className="resultMsg">
                        <ul>
                        {tickets.map(tickets=>{
                            return <li onClick={this.handlerGotoDetails.bind(this,tickets)}>
                                <img src={tickets.thumbsrc} className="fl" />
                                <div className="info fl">
                                    <h2>{tickets.subject}</h2>
                                    <p>{tickets.datetime}</p>
                                    <p><span>{tickets.cityname}</span><span className="price">{tickets.fare}</span></p>
                                </div>
                            </li>
                            })}
                        </ul>
                    </div>
                    <div className="toMore"  onClick={this.goToMore.bind(this)}>下一页</div>
            </div>
        );
    }
}

let mapStateToProps=state=>(
    {resultState:state.searchReducer.resultState,
        resultPage:state.searchReducer.resultPage});
// let mapStateToProps=state=>();
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeShowNav方法映射到props
        changeResultPage(pages){
            dispatch(changePage(pages));
        }
    }
}
List = connect(mapStateToProps,mapDispatchToProps)(List);

List = withRouter(List);
export default List;
