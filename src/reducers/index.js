import { combineReducers } from "redux";

import commonReducer from './commonReducer';
import searchReducer from './searchReducer';

let rootReducer = combineReducers({
    commonReducer,
    searchReducer
});

export default rootReducer;