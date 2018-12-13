let initState = {
    // 是否显示侧边的导航栏菜单
    shownavStatus:false   //默认隐藏
}
let commonReducer = (state=initState,action)=>{
    switch(action.type){
        case 'CHANGE_SHOWNAV_STATUS':
            return {
                ...state,   //先把原来的数据复制出来
                shownavStatus:action.payload   //把传过来的值覆盖掉原本的值
            }

        default:
            return state;   //若什么都不做，则为默认值
    }
}

export default commonReducer;