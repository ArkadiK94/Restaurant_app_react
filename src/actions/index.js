const menuLoaded = (newMenu)=>{
    return{
        type:'Menu_Loaded',
        payload : newMenu
    };
};
const menuRequest = ()=>{
    return{
        type:'Menu_Request'
    };
};
const menuError = ()=>{
    return{
        type:'Menu_Error',
    };
};
const addToCart = (id)=>{
    return{
        type:'Add_To_Cart',
        payload: id
    };
};
const lowerFromCart = (id)=>{
    return{
        type:'Lower_From_Cart',
        payload: id
    };
};
const removeFromCart = (id)=>{
    return{
        type:'Remove_From_Cart',
        payload: id
    };
};

export {
    menuLoaded,
    menuRequest,
    menuError,
    addToCart,
    removeFromCart,
    lowerFromCart
}