const initialState = {
    menu: [],
    loading: false,
    error: false,
    items:[]
}
const reducer =(state= initialState, action)=>{
    let newItem,newId,index;
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
            newItem = state.menu.find(item=>item.id===action.payload);
            newId =  newItem.id;
            index = state.items.findIndex(item=>item.id===newId);
            if(index >-1){
                newItem["count"] = state.items[index]["count"] +1;
                newItem["totalPrice"] = newItem["count"]*newItem.price;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0,index),
                        newItem,
                        ...state.items.slice(index+1)
                    ]
                };
            } else{
                newItem["count"] = 1;
                newItem["totalPrice"] = newItem.price;
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ]
                };
            }
        case "Lower_From_Cart":
            newItem = state.menu.find(item=>item.id===action.payload);
            newId =  newItem.id;
            index = state.items.findIndex(item=>item.id===newId);
            newItem["count"] = state.items[index]["count"] - 1;
            if(newItem["count"] < 1){
                newItem["count"] = 1;
            }
            newItem["totalPrice"] = newItem["count"]*newItem.price;
            return {
                ...state,
                items: [
                    ...state.items.slice(0,index),
                    newItem,
                    ...state.items.slice(index+1)
                ]
            };
            
        case 'Remove_From_Cart':
            index = state.items.findIndex(item=>item.id===action.payload);
            return {
                ...state,
                items:[
                    ...state.items.slice(0,index),
                    ...state.items.slice(index+1)
                ]
            };
        default:
            return state;
    }
}
export default reducer;
