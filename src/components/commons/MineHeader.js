
import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../../style/mine.scss'

library.add(faArrowLeft)

class MineHeader extends Component {
    getId(val){
        console.log(val);
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="mineHeader">
                <div className="leftIcon"  onClick={this.getId.bind(this)}>
                    <FontAwesomeIcon icon="arrow-left" />
                </div>
                <div className="headerTitle"><h3>登录</h3></div>
            </div>
        );

    }
  }


MineHeader = withRouter(MineHeader);
export default MineHeader
