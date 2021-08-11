const initialState = {
    menu: []
}
const reducer =(state= initialState,action)=>{
    switch(action.type){
        case 'Menu_Page_Loaded':
            return action.itemRecived;
        default:
            return state;
    }
}
export default reducer;
