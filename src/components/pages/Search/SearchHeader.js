
import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faShareSquare,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../../../style/search.scss'

library.add(faBars,faShareSquare,faArrowLeft)

class DetailHeader extends Component {
    getId(val){
        console.log(val);
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="searchHeader">
                <div className="leftIcon">
                    <div className="iconLeft" onClick={this.getId.bind(this)}> <FontAwesomeIcon icon="arrow-left" /></div>
                    <div className="iconNav"> <FontAwesomeIcon icon="bars" /></div>
                </div>
                <div className="headerTitle"><h3>搜索</h3></div>
            </div>
        );

    }
  }


  DetailHeader = withRouter(DetailHeader);
export default DetailHeader
