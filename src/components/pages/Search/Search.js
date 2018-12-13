
import React,{Component} from 'react'

import SearchHeader from './SearchHeader';
import SearchPage from './SearchPage';
import List from '../../commons/List';

import '../../../style/search.scss'
import '../../../style/detail.scss'


class Search extends Component{
    render(){
        return (
            <div className="search">
                <SearchHeader></SearchHeader>
                <SearchPage></SearchPage>
                <List></List>
            </div>
        )
    }
}

export default Search