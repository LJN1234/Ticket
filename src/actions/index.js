
export function shownav(status){
    return {
        type:'CHANGE_SHOWNAV_STATUS',
        payload:status
    }
}

export function getResult(result){
    return {
        type:'SHOW_SECRCH_RESULT',
        payload:result
    }
}

export function changePage(pages){
    return {
        type:'CHANGE_RESULT_PAGES',
        payload:pages
    }
}

