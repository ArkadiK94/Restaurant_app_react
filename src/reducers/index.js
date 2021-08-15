const initialState = {
    menu: [],
    loading: false,
    error: false,
    items:[],
    count:0
}
const reducer =(state= initialState, action)=>{
    switch(action.type){
        case 'Menu_Loaded':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };

        case 'Menu_Request':
            return {
                ...state,
                loading: true,
                error: false
            };

        case 'Menu_Error':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'Add_To_Cart':
            const newItem = state.menu.find(item=>item.id===action.payload);
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                count: state.count+1
            };
        case 'Remove_From_Cart':
            const index = state.items.findIndex(item=>item.id===action.payload);
            return {
                ...state,
                items:[
                    ...state.items.slice(0,index),
                    ...state.items.slice(index+1)
                ],
                count: state.count-1
            };
        default:
            return state;
    }
}
export default reducer;
