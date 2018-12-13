import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';


class SearchList extends Component{
    render(){
        console.log(this.props.result)
        return <div className="searchList">
           
        </div>
    }
}

SearchList = withRouter(SearchList)
export default SearchList
