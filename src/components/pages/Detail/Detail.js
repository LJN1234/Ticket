import React, { Component } from 'react';

import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import DetailFooter from './DetailFooter';
import '../../../style/detail.scss'

class Detail extends Component {
  componentWillMount(){
    
  }
  render() {
    return (
      <div className="detail">
        <DetailHeader></DetailHeader>
        <DetailContent></DetailContent>
        <DetailFooter></DetailFooter>
      </div>
    );
  }
}

export default Detail;
