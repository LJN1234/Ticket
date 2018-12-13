
import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';
import axios from 'axios';
import '../../../style/home.scss'


class Banner extends Component {
    constructor(){
        super();
        this.state = {
            //轮播图商品
            ad:[],
        }
    }
    componentWillMount(){
		axios.get('/myapi/wapapi/hdpic.do',{
			params:{
                cityid:1,
				sign:'bb4284fa771000e8c0',
				time:1543729843
			}
		}).then(res=>{
            let data = res.data;
			this.setState({
				ad:data,
			});
        });
    }
    render() {
      return (
       <div className="banner">
            <Carousel
            autoplay={true}
            infinite
            >
                {this.state.ad.map(bans => (
                    <a
                    key={bans.id}
                    >
                        <img
                            src={bans.thumbsrc}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    </a>
                ))}
            </Carousel>
       </div>
      );
    }
  }

export default Banner;
