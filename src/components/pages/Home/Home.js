import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../commons/Header';
import Nav from '../../commons/Nav';
import Banner from './Banner';
import TacketList from './TacketList';


class Home extends Component {
  render() { 
    return (
      <div className="home">
      <Nav></Nav>
        <div className="content" style={{left:this.props.showStatus?'73.9%':'0'}}>
          <Header></Header>
          <Banner></Banner>
          <TacketList></TacketList>
        </div>
        
      </div>
    );
  }
}



let mapStateToProps=state=>({showStatus:state.commonReducer.shownavStatus});
Home = connect(mapStateToProps)(Home);


export default Home;
