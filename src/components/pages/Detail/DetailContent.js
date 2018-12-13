
import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios'
import '../../../style/detail.scss'

class DetailContent extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            //演唱会信息
            info:[],
        }  
    } 
    componentWillMount(){
        // var id = this.props.location.pathname
        var cid =this.props.location.pathname.split('/')[3]
        // console.log(cid);
        var pid =this.props.location.pathname.split('/')[2]
        // console.log(pid);
        // https://wap.chinaticket.com/wapapi/item.do?cityid=1&id=13612&sign=fd0a85188e34f4f8be&time=1543898417
        axios.get('/myapi/wapapi/item.do',{
			params:{
                cityid:1,
                id:pid,
				sign:'bb4284fa771000e8c0',
				time:1543729843
			}
		}).then(res=>{
            let data = res.data;
            // console.log(data)  
			this.setState({
				info:data,
            });
        });
    }
    render() {
        let info = this.state.info
        console.log(info) 
        return (
            <div className="detailCon">
                <div className="list">
                    <img src={info.thumbsrc} />
                    <div className="msg">
                        <h3>{info.subject}</h3>
                        <p>时间：{info.datetime}</p>
                        <p>城市：{info.cityname}</p>
                        <p>场馆：{info.venuename}</p>
                        <p className="fare">价格：{info.fare}</p>
                    </div>
                </div>
                <div className="info">
                    <h2>项目介绍</h2>
                    <div className="infoCon" dangerouslySetInnerHTML = {{ __html:info.description }}></div>
                    <div className="callUs">
                        <p>400-880-2880</p>
                        <p>拨打购票热线电话</p>
                    </div>
                </div>
            </div>
        );
    }
  }


DetailContent = withRouter(DetailContent);
export default DetailContent
