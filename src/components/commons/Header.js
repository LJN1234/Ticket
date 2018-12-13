
import React,{Component} from 'react';
import '../../style/home.scss'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {shownav} from '../../actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faBars,faSearch)

class Header extends Component {
    
    showNav(){
       this.props.changeShowNav(!this.props.showStatus)
    }
    handlerGotoList(){
        //获取history
        // console.log(this.props);
        let {history} = this.props;
        console.log(history);
        // console.log(pid)
        history.push({
            pathname:'/search',
        });
    }
    render(){
        return (
            <div className="header">
                <div className="nav-icon" onClick={this.showNav.bind(this)}> <FontAwesomeIcon icon="bars" /></div>
                <div className="header-title"><h3>中票在线<span>北京</span></h3></div>
                <div className="search-icon" onClick={this.handlerGotoList.bind(this)}><FontAwesomeIcon icon="search" /></div>
            </div>
        )
    }
}

let mapStateToProps=state=>({showStatus:state.commonReducer.shownavStatus});
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeShowNav方法映射到props
        changeShowNav(status){
            dispatch(shownav(status));
        }
    }
}
Header = connect(mapStateToProps,mapDispatchToProps)(Header);
Header = withRouter(Header);
export default Header

