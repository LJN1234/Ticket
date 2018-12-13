import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import Axios from '../node_modules/axios';
import Home from './components/pages/Home/Home.js';
import Detail from './components/pages/Detail/Detail.js';
import Search from './components/pages/Search/Search';
import Login from './components/commons/Login';
import Register from './components/commons/Register';
import './style/common.scss'

Axios.defaults.baseURL = 'http://localhost:6006'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/search" component={Search}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Redirect from="/" to="/home" exact/> 
      </Switch>
      </div>
    );
  }
}

export default App;
