let initState = {
    resultState:[],
    resultPage:1
}

let searchReducer = (state=initState,action)=>{
    switch(action.type){
        case 'SHOW_SECRCH_RESULT':
            return {
                ...state,
                resultState:action.payload
            }
        case 'CHANGE_RESULT_PAGES':
            return {
                ...state,
                resultPage:action.payload
            }
        default:
            return state;
    }
}

export default searchReducer