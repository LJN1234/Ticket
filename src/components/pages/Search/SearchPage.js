import React,{Component} from 'react'
// import {withRouter} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux';
import {getResult} from '../../../actions';
import List from '../../commons/List';

class SearchPage extends Component{
    constructor(){
        super()
        this.state = {
            result:[],
            // page:0
        }
    }
    
    goToResult(){
        let kw = this.input.value;
        let page = this.props.resultPage;
        axios.get('/myapi/wapapi/searchshows.do',{
			params:{
                cityid:1,
                kw:kw,
                page:page,
				sign:'1ef59d37454f6ea3ab',
				time:1544148448
			}
		}).then(res=>{
            let data = res.data.datas;
            // console.log(data)  
			this.setState({
				result:data,
            },()=>{
                this.props.getSearchResult(this.state.result)
            });
        });
    }

    handleEnterKey = (e) => {
        if(e.nativeEvent.keyCode === 13){
             this.goToResult()
        }
    }
    render(){
        return <div className="searchPage">
            <input type="text" ref={input => this.input = input} onKeyPress={this.handleEnterKey.bind(this)} placeholder="请输入演出名称"/>
            <button onClick={this.goToResult.bind(this)}>搜索</button>
        </div>
    }
}

let mapStateToProps=state=>(
    {resultState:state.searchReducer.resultState,
        resultPage:state.searchReducer.resultPage}
);
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeShowNav方法映射到props
        getSearchResult(result){
            dispatch(getResult(result));
        }
    }
}
SearchPage = connect(mapStateToProps,mapDispatchToProps)(SearchPage);
// SearchPage = withRouter(SearchPage);
export default SearchPage