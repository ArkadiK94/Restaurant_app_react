const initialState = {
    menu: [],
    loading: true,
    error: false
}
const reducer =(state= initialState, action)=>{
    switch(action.type){
        case 'Menu_Loaded':
            return {
                menu: action.payload,
                loading: false,
                error: false
            };

        case 'Menu_Request':
            return {
                menu: state.menu,
                loading: true,
                error: false

            };

        case 'Menu_Error':
            return {
                menu: state.menu,
                loading: false,
                error: true

            };
        default:
            return state;
    }
}
export default reducer;
